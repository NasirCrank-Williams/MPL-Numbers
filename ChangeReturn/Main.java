/* The user enters a cost and then the amount of money given.
The program will figure out the change and the number of
quarters, dimes, nickels, pennies needed for the change. */

import java.util.*;

class Main {
  public static LinkedHashMap<Double,Integer> change(double cost, double amount) {
    LinkedHashMap<Double,Integer> map = new LinkedHashMap<>();
    map.put(0.25, 0);
    map.put(0.10, 0);
    map.put(0.05, 0);
    map.put(0.01, 0);
    double leftOver = cost - amount;
    if (leftOver <= 0) {
      return map;
    }
    double total = 0;
    for (double key : map.keySet()) {
      if (total + key <= leftOver) {
        while (total + key <= leftOver) {
          total += key;
          map.put(key, map.get(key) + 1);
        }
      }
    }
    return map;
  }

  public static void main(String[] args) {
    System.out.println("Change Return");
    System.out.println("=============\n");
    Scanner scan = new Scanner(System.in);
    while (true) {
      System.out.print("Cost: ");
      double cost = scan.nextDouble();
      System.out.print("\nAmount Given: ");
      double amount = scan.nextDouble();

      LinkedHashMap<Double,Integer> map = change(cost, amount);

      System.out.println("\n------------>\n");
      System.out.println("Quarters: " + map.get(0.25) + "\n");
      System.out.println("Dimes: " + map.get(0.10) + "\n");
      System.out.println("Nickels: " + map.get(0.05) + "\n");
      System.out.println("Pennies: " + map.get(0.01) + "\n");
      System.out.print("Continue: 'y/n' ");
      String answer = scan.next();
      if (answer.equals("y")) {
        System.out.println("\n=============\n");
      } else {
        break;
      }
    }
  }
}