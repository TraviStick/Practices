package DepartPrac3;

import java.util.*;
import java.io.*;
public class Test {                      // DEPARTMENTAL PRACTICE V3: Electricity Consumption and Billing Report
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.print("How many households? ");
        int house = scan.nextInt(); scan.nextLine();
        String[] householdNames = new String[house];
        double[] consumption = new double[house];
        double[] billAmount = new double[house];
        for(int i = 0; i<house; i++){
            System.out.print("Enter household name: ");
            householdNames[i] = scan.nextLine();
            System.out.print("Enter monthly consumption (in kWh): ");
            consumption[i] = scan.nextDouble(); scan.nextLine(); System.out.println(); System.out.println();
        }

        try (FileWriter fw = new FileWriter("ElectricityBillingReport.txt",false)){
            for (int i = 0; i < house; i++) {
                billAmount[i] = computeBill(consumption[i]);
                fw.write("Household: " + householdNames[i] + "\n");
                fw.write(String.format("Household: %s%nConsumption: %.0f kWh%nCategory: %s%nOriginal Bill: ₱%.2f%nDiscounted Bill: ₱%.2f%n----------------------------------%n", householdNames[i], consumption[i], getUsageCategory(consumption[i]), billAmount[i], applyDiscount(billAmount[i], getUsageCategory(consumption[i]))));

            }
            
        } catch (Exception e) {
            System.out.println("The error is "+e.getMessage());
        }

        try (BufferedReader fw = new BufferedReader(new FileReader("ElectricityBillingReport.txt"))){
            String line;
            while ((line  = fw.readLine()) != null) {
                System.out.println(line);
            }
        } catch (Exception e) {
            System.out.println("The error is "+e.getMessage());
        }

    }

 public static String getUsageCategory(double consumption){
    if (consumption >= 500) {
        return "High Usage";
    } else if(consumption >= 200 && consumption <=499){
        return "Average Usage";
    } else{
        return "Low Usage";
    }   

 }

 public static double computeBill(double consumption){
    
    if (consumption >= 500) {
         consumption*=12.00;
    } else if(consumption >= 200 && consumption <=499){
         consumption*=10.00;
    } else {
         consumption*=8.00;
    }   return consumption;

 }

 public static double applyDiscount(double bill, String category){
    if (category.equals("Low Usage")) {
       return bill * 0.90;
    } else { return bill ;}

 }


 
}
