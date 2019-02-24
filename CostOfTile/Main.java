/* Calculate the total cost of tile it would take to
cover a floor plan of width and height, using a cost
entered by the user. */

import java.util.Scanner;

class Main {
  /* calculate total cost of tile */
  public static int costOfTile(int width, int height, int cost) {
    return width * height * cost;
  }

  public static void main(String[] args) {
    System.out.println("Total Cost Of Tile\n");
    System.out.println("Enter width, height, and cost-per-square-feet.");
    Scanner scan = new Scanner(System.in);
    int width = scan.nextInt();
    int height = scan.nextInt();
    int cost = scan.nextInt();
    scan.close();
    int total = costOfTile(width, height, cost);
    System.out.println("Total cost is $" + total + ".");
  }
}