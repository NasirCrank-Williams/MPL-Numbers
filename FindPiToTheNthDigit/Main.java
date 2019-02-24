/* Find PI to the Nth Digit - Enter a number and have the program generate PI up to that many decimal places. Keep a limit to how far the program will go. */

import java.util.Scanner;

class Main {

  /* first 100 digits of pi */
  public static String pi = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";

  /* returns pi with *num* number of decimals */
  public static String nthOfPi(int num) {
    if (num <= 0) {
      return "3";
    } 
    if (num >= 100) {
      return pi;
    }
    return pi.substring(0, num + 2);
  }

  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    while(true) {
      System.out.println("Enter an integer from 1 to 100");
      int num = scan.nextInt();
      System.out.println(nthOfPi(num) + "\n");

      System.out.println("Would you like to go again? y/n");
      String answer = scan.next();
      if (answer.equals("n")) {
        break;
      }
      System.out.println();
    }
  }
}