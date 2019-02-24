/* Have the user enter a number and find all Prime Factors 
(if there are any) and display them. */

import java.util.*;

class Main {
  /* determines if input num is prime */
  public static boolean isPrime(int num) {
    for (int i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
  /* returns list of prime factors of a number
  excluding 1 and itself */
  public static ArrayList<Integer> primeFactors(int num) {
    ArrayList<Integer> list = new ArrayList<>();
    for (int i = 2; i < num / 2; i++) {
      if (num % i == 0 && isPrime(i)) {
        list.add(i);
        num /= i;
        i--;
      }
    }
    list.add(num);
    return list;
  }

  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    while (true) {
      /* ask for integer */
      System.out.println("Enter an integer");
      int num = scan.nextInt();
      ArrayList<Integer> primes = primeFactors(num);
      for (int i = 0; i < primes.size(); i++) {
        int prime = primes.get(i);
        System.out.print(prime + " ");
      }
      System.out.println("\n");
      /* ask to go again */
      System.out.println("Would you like to go again? y/n");
      String answer = scan.next();
      if (answer.equals("n")) {
        break;
      }
      System.out.println();
    }
  }
}