/* Enter a number and have the program generate the Fibonacci sequence 
to that number or to the Nth number. */

import java.util.*;

class Main {
  /* returns fibonacci sequence in list format */
  public static List<Integer> fibonacci(int num) {
    List<Integer> list = new ArrayList<>();
    list.add(1); list.add(1);
    /* check if num < 1 */
    if (num <= 1) {
      return list.subList(0, 1);
    }
    /* add sequence to list */
    for (int i = 2; i < num; i++) {
      int prev = list.get(i - 2);
      int next = list.get(i - 1);
      list.add(next + prev);
    }
    /* return list */
    return list;
  }

  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    while (true) {
      /* ask for integer */
      System.out.println("Enter an integer greater than 1");
      int num = scan.nextInt();
      List<Integer> fib = fibonacci(num);
      for (int i = 0; i < fib.size(); i++) {
        System.out.print(fib.get(i) + " ");
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