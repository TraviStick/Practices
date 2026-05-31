package Practices;
import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.awt.event.*;
import java.io.*;

public class Mahinay_564182 extends JFrame implements ActionListener {

    JLabel lblTitle, lblName, lblEmail, lblContact, lblGrade;
    JTextField txtName, txtEmail, txtContact, txtGrade;
    JButton btnAdd, btnUpdate, btnDelete, btnClear;

    // table
    JTable table;
    DefaultTableModel tableModel;
    JScrollPane scrollPane;

    // file name
    String fileName = "students.txt";

    // constructor
    public Mahinay_564182() {

        // set up the window
        setTitle("Student Enrollment System");
        setSize(600, 500);
        setLayout(null);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setResizable(false);

        // title label
        lblTitle = new JLabel("Student Enrollment System");
        lblTitle.setBounds(170, 10, 300, 30);
        add(lblTitle);

        // full name
        lblName = new JLabel("Full Name:");
        lblName.setBounds(20, 55, 100, 25);
        add(lblName);

        txtName = new JTextField();
        txtName.setBounds(120, 55, 200, 25);
        add(txtName);

        // email
        lblEmail = new JLabel("Email:");
        lblEmail.setBounds(20, 90, 100, 25);
        add(lblEmail);

        txtEmail = new JTextField();
        txtEmail.setBounds(120, 90, 200, 25);
        add(txtEmail);

        // contact number
        lblContact = new JLabel("Contact No:");
        lblContact.setBounds(20, 125, 100, 25);
        add(lblContact);

        txtContact = new JTextField();
        txtContact.setBounds(120, 125, 200, 25);
        add(txtContact);

        // final grade
        lblGrade = new JLabel("Final Grade:");
        lblGrade.setBounds(20, 160, 100, 25);
        add(lblGrade);

        txtGrade = new JTextField();
        txtGrade.setBounds(120, 160, 200, 25);
        add(txtGrade);

        // buttons
        btnAdd = new JButton("Add");
        btnAdd.setBounds(20, 205, 80, 28);
        btnAdd.addActionListener(this);
        add(btnAdd);

        btnUpdate = new JButton("Update");
        btnUpdate.setBounds(110, 205, 80, 28);
        btnUpdate.addActionListener(this);
        add(btnUpdate);

        btnDelete = new JButton("Delete");
        btnDelete.setBounds(200, 205, 80, 28);
        btnDelete.addActionListener(this);
        add(btnDelete);

        btnClear = new JButton("Clear");
        btnClear.setBounds(290, 205, 80, 28);
        btnClear.addActionListener(this);
        add(btnClear);

        // table
        String[] columns = {"No.", "Full Name", "Email", "Contact No.", "Final Grade"};
        tableModel = new DefaultTableModel(columns, 0);
        table = new JTable(tableModel);
        table.setSelectionMode(ListSelectionModel.SINGLE_SELECTION);

        // load selected row into fields when clicked
        table.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                int row = table.getSelectedRow();
                txtName.setText(tableModel.getValueAt(row, 1).toString());
                txtEmail.setText(tableModel.getValueAt(row, 2).toString());
                txtContact.setText(tableModel.getValueAt(row, 3).toString());
                txtGrade.setText(tableModel.getValueAt(row, 4).toString());
            }
        });

        scrollPane = new JScrollPane(table);
        scrollPane.setBounds(20, 248, 550, 200);
        add(scrollPane);

        // load saved data when program starts
        loadData();

        setVisible(true);
    }

    // handle button clicks
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == btnAdd) {
            addStudent();
        } else if (e.getSource() == btnUpdate) {
            updateStudent();
        } else if (e.getSource() == btnDelete) {
            deleteStudent();
        } else if (e.getSource() == btnClear) {
            clearFields();
        }
    }

    // add student
    void addStudent() {
        String name    = txtName.getText();
        String email   = txtEmail.getText();
        String contact = txtContact.getText();
        String grade   = txtGrade.getText();

        // check if fields are empty
        if (name.equals("") || email.equals("") || contact.equals("") || grade.equals("")) {
            JOptionPane.showMessageDialog(this, "Please fill in all fields.");
            return;
        }

        // check if grade is a number
        try {
            double g = Double.parseDouble(grade);
            if (g < 0 || g > 100) {
                JOptionPane.showMessageDialog(this, "Grade must be between 0 and 100.");
                return;
            }
        } catch (NumberFormatException ex) {
            JOptionPane.showMessageDialog(this, "Grade must be a number.");
            return;
        }

        // add row to table
        int rowNumber = tableModel.getRowCount() + 1;
        tableModel.addRow(new Object[]{rowNumber, name, email, contact, grade});

        // save to file
        saveData();

        // clear fields after adding
        clearFields();

        JOptionPane.showMessageDialog(this, "Student added successfully!");
    }

    // update student
    void updateStudent() {
        int row = table.getSelectedRow();

        if (row == -1) {
            JOptionPane.showMessageDialog(this, "Please select a student to update.");
            return;
        }

        String name    = txtName.getText();
        String email   = txtEmail.getText();
        String contact = txtContact.getText();
        String grade   = txtGrade.getText();

        if (name.equals("") || email.equals("") || contact.equals("") || grade.equals("")) {
            JOptionPane.showMessageDialog(this, "Please fill in all fields.");
            return;
        }

        tableModel.setValueAt(name,    row, 1);
        tableModel.setValueAt(email,   row, 2);
        tableModel.setValueAt(contact, row, 3);
        tableModel.setValueAt(grade,   row, 4);

        saveData();
        clearFields();

        JOptionPane.showMessageDialog(this, "Student updated successfully!");
    }

    // delete student
    void deleteStudent() {
        int row = table.getSelectedRow();

        if (row == -1) {
            JOptionPane.showMessageDialog(this, "Please select a student to delete.");
            return;
        }

        int confirm = JOptionPane.showConfirmDialog(this, "Are you sure you want to delete this student?");

        if (confirm == JOptionPane.YES_OPTION) {
            tableModel.removeRow(row);

            // re-number the rows after deleting
            for (int i = 0; i < tableModel.getRowCount(); i++) {
                tableModel.setValueAt(i + 1, i, 0);
            }

            saveData();
            clearFields();

            JOptionPane.showMessageDialog(this, "Student deleted.");
        }
    }

    // clear text fields
    void clearFields() {
        txtName.setText("");
        txtEmail.setText("");
        txtContact.setText("");
        txtGrade.setText("");
        table.clearSelection();
    }

    // save all table data to file
    void saveData() {
        try {
            FileWriter fw = new FileWriter(fileName);

            for (int i = 0; i < tableModel.getRowCount(); i++) {
                String line = tableModel.getValueAt(i, 1) + "," +
                              tableModel.getValueAt(i, 2) + "," +
                              tableModel.getValueAt(i, 3) + "," +
                              tableModel.getValueAt(i, 4);
                fw.write(line + "\n");
            }

            fw.close();

        } catch (IOException ex) {
            JOptionPane.showMessageDialog(this, "Error saving file: " + ex.getMessage());
        }
    }

    // load data from file when program starts
    void loadData() {
        try {
            File file = new File(fileName);

            // if file does not exist yet, just skip
            if (!file.exists()) {
                return;
            }

            BufferedReader br = new BufferedReader(new FileReader(file));
            String line;
            int rowNumber = 1;

            while ((line = br.readLine()) != null) {
                if (!line.equals("")) {
                    String[] parts = line.split(",");
                    if (parts.length == 4) {
                        tableModel.addRow(new Object[]{rowNumber, parts[0], parts[1], parts[2], parts[3]});
                        rowNumber++;
                    }
                }
            }

            br.close();

        } catch (IOException ex) {
            JOptionPane.showMessageDialog(this, "Error loading file: " + ex.getMessage());
        }
    }

    // main method
    public static void main(String[] args) {
        new Mahinay_564182();
    }
}
