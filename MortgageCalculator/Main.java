/* Calculate the monthly payments of a fixed term mortgage 
over given Nth terms at a given interest rate. */

import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    System.out.println("Mortgage Monthly Payments");
    System.out.println("-------------------------\n");
    while (true) {
      System.out.println("Get Monthly Payments? 'y/n'");
      String answer = scan.next();
      if (answer.equals("y")) {
        System.out.print("\nMortgage Amount: ");
        double amount = scan.nextDouble(); 
        System.out.print("\nInterest Rate: ");
        double interest = scan.nextDouble();
        System.out.print("\nMortgage Period: ");
        int years = scan.nextInt();

        Mortgage mortgage = new Mortgage(years, amount, interest);

        System.out.println("\nMonthly Payments: " + mortgage.monthlyPay() + "\n");
        System.out.println("-------------------------\n");
      } else if (answer.equals("n")) {
        break;
      }
    }
  }
}