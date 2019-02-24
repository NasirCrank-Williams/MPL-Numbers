/* Have the program find prime numbers until the user
chooses to stop asking for the next one.*/

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

  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    ArrayList<Integer> primes = new ArrayList<>();
    primes.add(2);
    System.out.print("Find Next Prime: press 'enter' to continue" + " ");
    System.out.println("or 'n' to stop");
    while (true) {
      String input = scan.nextLine();
      if (input.equals("")) {
        /* print list of primes */
        for (int i = 0; i < primes.size(); i++) {
          int prime = primes.get(i);
          System.out.print(prime + " ");
        }
        /* add next prime number to list */
        int num = primes.get(primes.size() - 1);
        for (int i = num + 2; i == i; i += 2) {
          if (isPrime(i)) {
            primes.add(i);
            break;
          }
          if (i == 4) {
            primes.add(3);
            break;
          }
        }
      } else if (input.equals("n")) {
        return;
      }    
    }
  }
}