import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.io.*;
import java.util.*;
import java.util.List;

public class ExpenseTracker extends JFrame {

  private JTextField receiptField, storeField, costField;
  private JLabel taxLabel, finalAmountLabel;
  private static final String FILE_NAME = "data.txt";
  private static final double TAX_RATE = 0.12;

  public ExpenseTracker() {
    setTitle("Expense Tracker");
    setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    setSize(480, 400);
    setLocationRelativeTo(null);
    setResizable(false);

    // ── Main panel 
    JPanel mainPanel = new JPanel(new BorderLayout(10, 10));
    mainPanel.setBorder(BorderFactory.createEmptyBorder(20, 25, 20, 25));
    mainPanel.setBackground(new Color(245, 247, 250));

    // ── Title ────────────────────────────────────────────────────────
    JLabel title = new JLabel("Expense Tracker", SwingConstants.CENTER);
    title.setFont(new Font("Segoe UI", Font.BOLD, 22));
    title.setForeground(new Color(33, 37, 41));
    title.setBorder(BorderFactory.createEmptyBorder(0, 0, 10, 0));
    mainPanel.add(title, BorderLayout.NORTH);

    // ── Form panel ───────────────────────────────────────────────────
    JPanel formPanel = new JPanel(new GridBagLayout());
    formPanel.setBackground(new Color(245, 247, 250));
    GridBagConstraints gbc = new GridBagConstraints();
    gbc.insets = new Insets(6, 5, 6, 5);
    gbc.fill = GridBagConstraints.HORIZONTAL;

    Font labelFont = new Font("Segoe UI", Font.PLAIN, 13);
    Font fieldFont = new Font("Segoe UI", Font.PLAIN, 13);

    // Receipt Number
    gbc.gridx = 0; gbc.gridy = 0; gbc.weightx = 0.35;
    formPanel.add(makeLabel("Receipt Number:", labelFont), gbc);
    gbc.gridx = 1; gbc.weightx = 0.65;
    receiptField = makeTextField(fieldFont);
    formPanel.add(receiptField, gbc);

    // Store Name
    gbc.gridx = 0; gbc.gridy = 1; gbc.weightx = 0.35;
    formPanel.add(makeLabel("Store Name:", labelFont), gbc);
    gbc.gridx = 1; gbc.weightx = 0.65;
    storeField = makeTextField(fieldFont);
    formPanel.add(storeField, gbc);

    // Total Cost
    gbc.gridx = 0; gbc.gridy = 2; gbc.weightx = 0.35;
    formPanel.add(makeLabel("Total Cost (₱):", labelFont), gbc);
    gbc.gridx = 1; gbc.weightx = 0.65;
    costField = makeTextField(fieldFont);
    formPanel.add(costField, gbc);

    // Tax (computed)
    gbc.gridx = 0; gbc.gridy = 3; gbc.weightx = 0.35;
    formPanel.add(makeLabel("Tax (12%):", labelFont), gbc);
    gbc.gridx = 1; gbc.weightx = 0.65;
    taxLabel = makeResultLabel("—", fieldFont);
    formPanel.add(taxLabel, gbc);

    // Final Amount (computed)
    gbc.gridx = 0; gbc.gridy = 4; gbc.weightx = 0.35;
    formPanel.add(makeLabel("Final Amount:", labelFont), gbc);
    gbc.gridx = 1; gbc.weightx = 0.65;
    finalAmountLabel = makeResultLabel("—", new Font("Segoe UI", Font.BOLD, 13));
    formPanel.add(finalAmountLabel, gbc);

    mainPanel.add(formPanel, BorderLayout.CENTER);

    // ── Button panel ─────────────────────────────────────────────────
    JPanel btnPanel = new JPanel(new GridLayout(1, 4, 10, 0));
    btnPanel.setBackground(new Color(245, 247, 250));
    btnPanel.setBorder(BorderFactory.createEmptyBorder(10, 0, 0, 0));

    JButton recordBtn  = makeButton("Record",      new Color(40, 167, 69));
    JButton viewBtn   = makeButton("View All",     new Color(0, 123, 255));
    JButton totalBtn  = makeButton("Total Expenses",  new Color(255, 193, 7));
    JButton deleteBtn  = makeButton("Delete All",    new Color(220, 53, 69));

    totalBtn.setForeground(Color.DARK_GRAY);

    btnPanel.add(recordBtn);
    btnPanel.add(viewBtn);
    btnPanel.add(totalBtn);
    btnPanel.add(deleteBtn);
    mainPanel.add(btnPanel, BorderLayout.SOUTH);

    add(mainPanel);

    // ── Listeners ────────────────────────────────────────────────────
    recordBtn.addActionListener(e -> recordExpense());
    viewBtn.addActionListener(e -> viewAll());
    totalBtn.addActionListener(e -> calculateTotal());
    deleteBtn.addActionListener(e -> deleteAll());

    setVisible(true);
  }

  // ── Actions ─────────────────────────────────────────────────────────

  private void recordExpense() {
    String receipt = receiptField.getText().trim();
    String store  = storeField.getText().trim();
    String costStr = costField.getText().trim();

    if (receipt.isEmpty() || store.isEmpty() || costStr.isEmpty()) {
      showError("Please fill in all fields.");
      return;
    }

    double cost;
    try {
      cost = Double.parseDouble(costStr);
      if (cost < 0) throw new NumberFormatException();
    } catch (NumberFormatException ex) {
      showError("Total Cost must be a valid non-negative number.");
      return;
    }

    double tax     = cost * TAX_RATE;
    double finalAmount = cost + tax;

    taxLabel.setText(String.format("₱ %.2f", tax));
    finalAmountLabel.setText(String.format("₱ %.2f", finalAmount));

    try (PrintWriter pw = new PrintWriter(new FileWriter(FILE_NAME, true))) {
      pw.printf("%s|%s|%.2f|%.2f|%.2f%n", receipt, store, cost, tax, finalAmount);
      JOptionPane.showMessageDialog(this,
        "Record saved successfully!\n\n" +
        "Receipt #: " + receipt + "\n" +
        "Store  : " + store  + "\n" +
        String.format("Cost   : ₱ %.2f%n", cost) +
        String.format("Tax   : ₱ %.2f%n", tax) +
        String.format("Final  : ₱ %.2f",  finalAmount),
        "Record Saved", JOptionPane.INFORMATION_MESSAGE);
      clearFields();
    } catch (IOException ex) {
      showError("Could not write to file: " + ex.getMessage());
    }
  }

  private void viewAll() {
    List<String[]> records = readRecords();
    if (records.isEmpty()) {
      JOptionPane.showMessageDialog(this, "No records found.", "View All", JOptionPane.INFORMATION_MESSAGE);
      return;
    }

    StringBuilder sb = new StringBuilder();
    sb.append(String.format("%-12s %-20s %12s %10s %14s%n",
        "Receipt #", "Store Name", "Total Cost", "Tax (12%)", "Final Amount"));
    sb.append("─".repeat(72)).append("\n");

    for (String[] r : records) {
      sb.append(String.format("%-12s %-20s %12s %10s %14s%n",
          r[0], r[1],
          "₱ " + r[2], "₱ " + r[3], "₱ " + r[4]));
    }

    JTextArea ta = new JTextArea(sb.toString());
    ta.setFont(new Font("Monospaced", Font.PLAIN, 12));
    ta.setEditable(false);
    JScrollPane sp = new JScrollPane(ta);
    sp.setPreferredSize(new Dimension(640, 300));

    JOptionPane.showMessageDialog(this, sp, "All Expense Records", JOptionPane.PLAIN_MESSAGE);
  }

  private void calculateTotal() {
    List<String[]> records = readRecords();
    if (records.isEmpty()) {
      JOptionPane.showMessageDialog(this, "No records found.", "Total Expenses", JOptionPane.INFORMATION_MESSAGE);
      return;
    }

    double total = 0;
    for (String[] r : records) {
      try { total += Double.parseDouble(r[4]); } catch (NumberFormatException ignored) {}
    }

    JOptionPane.showMessageDialog(this,
      String.format("Total number of records : %d%nTotal Expenses (Final) : ₱ %.2f", records.size(), total),
      "Total Expenses", JOptionPane.INFORMATION_MESSAGE);
  }

  private void deleteAll() {
    int confirm = JOptionPane.showConfirmDialog(this,
      "Are you sure you want to delete ALL records?\nThis cannot be undone.",
      "Confirm Delete", JOptionPane.YES_NO_OPTION, JOptionPane.WARNING_MESSAGE);

    if (confirm == JOptionPane.YES_OPTION) {
      try (PrintWriter pw = new PrintWriter(new FileWriter(FILE_NAME, false))) {
        // overwrite with empty content
      } catch (IOException ex) {
        showError("Could not clear file: " + ex.getMessage());
        return;
      }
      JOptionPane.showMessageDialog(this, "All records have been deleted.", "Delete All", JOptionPane.INFORMATION_MESSAGE);
      clearFields();
    }
  }

  // ── Helpers ──────────────────────────────────────────────────────────

  private List<String[]> readRecords() {
    List<String[]> list = new ArrayList<>();
    File f = new File(FILE_NAME);
    if (!f.exists()) return list;
    try (BufferedReader br = new BufferedReader(new FileReader(f))) {
      String line;
      while ((line = br.readLine()) != null) {
        line = line.trim();
        if (!line.isEmpty()) {
          String[] parts = line.split("\\|");
          if (parts.length == 5) list.add(parts);
        }
      }
    } catch (IOException ex) {
      showError("Could not read file: " + ex.getMessage());
    }
    return list;
  }

  private void clearFields() {
    receiptField.setText("");
    storeField.setText("");
    costField.setText("");
    taxLabel.setText("—");
    finalAmountLabel.setText("—");
  }

  private void showError(String msg) {
    JOptionPane.showMessageDialog(this, msg, "Error", JOptionPane.ERROR_MESSAGE);
  }

  private JLabel makeLabel(String text, Font f) {
    JLabel l = new JLabel(text);
    l.setFont(f);
    return l;
  }

  private JTextField makeTextField(Font f) {
    JTextField tf = new JTextField();
    tf.setFont(f);
    tf.setBorder(BorderFactory.createCompoundBorder(
      BorderFactory.createLineBorder(new Color(206, 212, 218)),
      BorderFactory.createEmptyBorder(4, 6, 4, 6)));
    return tf;
  }

  private JLabel makeResultLabel(String text, Font f) {
    JLabel l = new JLabel(text);
    l.setFont(f);
    l.setForeground(new Color(40, 167, 69));
    l.setBorder(BorderFactory.createCompoundBorder(
      BorderFactory.createLineBorder(new Color(206, 212, 218)),
      BorderFactory.createEmptyBorder(4, 6, 4, 6)));
    l.setOpaque(true);
    l.setBackground(new Color(233, 236, 239));
    return l;
  }

  private JButton makeButton(String text, Color bg) {
    JButton b = new JButton(text);
    b.setFont(new Font("Segoe UI", Font.BOLD, 12));
    b.setBackground(bg);
    b.setForeground(Color.WHITE);
    b.setFocusPainted(false);
    b.setBorder(BorderFactory.createEmptyBorder(8, 10, 8, 10));
    b.setCursor(Cursor.getPredefinedCursor(Cursor.HAND_CURSOR));
    return b;
  }

  public static void main(String[] args) {
    SwingUtilities.invokeLater(ExpenseTracker::new);
  }
}