/* Develop a converter to convert a decimal number to binary
or a binary number to its decimal equivalent. */

import java.util.*;
import java.lang.Math;

class Main {
  /* convert binary to decimal */
  public static int binaryToDecimal(String bin) {
    double total = 0, power = bin.length() - 1;
    for (int i = 0; i < bin.length(); i++) {
      char num = bin.charAt(i);
      if (num == '1') {
        total += Math.pow(2, power);
      }
      power--;
    }
    return (int) total;
  }
  /* convert decimal to binary */
  public static String decimalToBinary(int dec) {
    ArrayList<Double> powsOf2 = new ArrayList<>();
    /* add powers of 2 to list up to decimal in reverse order */
    /* EXAMPLE: Input = 75 ; ArrList = (64, 32, 16, 8, 4, 2, 1) */
    double index = 0;
    while (Math.pow(2, index) <= (double) dec) {
      powsOf2.add(0, Math.pow(2, index));
      index++;
    }
    /* use mathematical method to convert decimal to binary */
    StringBuilder build = new StringBuilder();
    double nextNum = (double) dec;
    for (int i = 0; i < powsOf2.size(); i++) {
      double pow = powsOf2.get(i);
      if (pow <= nextNum) {
        build.append('1');
        nextNum -= pow;
      } else {
        build.append('0');
      }
    }
    return build.toString();
  }
  /* returns the string found in the parenthesis */
  public static String parseAnswer(String answer) {
    return answer.substring(answer.indexOf('(') + 1, answer.indexOf(')'));
  }

  public static void main(String[] args) {
    System.out.println("Binary To Decimal And Back Converter");
    System.out.println("====================================\n");
    Scanner scan = new Scanner(System.in);
    while (true) {
      System.out.println("Binary To Decimal: 'binary(yourBinaryNumber)'\nOR");
      System.out.println("Decimal To Binary: 'decimal(yourDecimalNumber)'\n");
      String answer = scan.next();
      int choiceBin = answer.indexOf("binary");
      int choiceDec = answer.indexOf("decimal");
      if (choiceBin == -1 && choiceDec == -1) {
        System.out.println("'binary' and neither 'decimal' were found in your answer\n");
        continue;
      } else if (choiceBin > -1) {
        int decimal = binaryToDecimal(parseAnswer(answer));
        System.out.println("\nDecimal: " + decimal + "\n");
      } else {
        int decimal = Integer.parseInt(parseAnswer(answer));
        String binary = decimalToBinary(decimal);
        System.out.println("\nBinary: " + binary + "\n");
      }
      System.out.println("Continue: 'y/n'\n");
      String decision = scan.next();
      if (decision.equals("n")) {
        break;
      }
      System.out.println("------------------------------------\n");
    }
  }
}