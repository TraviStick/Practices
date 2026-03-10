package Practices;
import java.util.*;
import java.io.*;

public class Test_run {
    static int count = 0;
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        int choice;
        
        do { 
            displayMenu();
            System.out.print("Enter your choice: ");
            choice = scan.nextInt();
            scan.nextLine();
            switch (choice) {
            case 1:count++;
                addStudent(scan);
                break;
            case 2:
                viewStudents();
                break;
            case 3:
                System.out.println("Exiting program...");
                break;
        
            default:
                 System.out.println("Invalid choice. Please try again.");
                break;
        }
        } while (choice != 3);
        
        
    }

   
    public static void displayMenu() {
        System.out.println("=== Student Record Management System ===\n");
        System.out.println("1. Add Student\n2. View All Students\n3. Exit\n");
        
    }

    
    public static void addStudent(Scanner scan) {
        System.out.print("\nEnter Student ID: ");
        String id = scan.nextLine();
        System.out.print("Enter Full Name: ");
        String name = scan.nextLine();
        System.out.print("Enter Course: ");
        String course = scan.nextLine();
        System.out.print("Enter Year Level: ");
        String year = scan.nextLine();
        System.out.print("Enter Status (Regular/Irregular): ");
        String status = scan.nextLine();
        System.out.println();
        
        
        try(FileWriter fw = new FileWriter("students.txt", true)){
           
            fw.write(count+". "+"ID: "+id+" | Name: "+name+" | Course: "+course+" | Year: "+year+" | Status: "+status+"\n");
            
        }catch (Exception e){
            System.out.println("Error writing to file: " + e.getMessage());
        }
        
    }

    
    public static void viewStudents() {
        try (BufferedReader fr = new BufferedReader(new FileReader("students.txt"))){
            String line; 
            while ((line = fr.readLine()) != null )  {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
    }

    
  
}
