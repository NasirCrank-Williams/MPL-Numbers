import java.lang.Math;

public class Mortgage {
  private int years;
  private double amount;
  private double interest;

  public Mortgage(int years, double amount, double interest) {
    this.years = years;
    this.amount = amount;
    this.interest = interest;
  }

  public int getYears() {
    return this.years;
  }

  public void setYears(int years) {
    this.years = years;
  }

  public double getAmount() {
    return this.amount;
  }

  public void setAmount(double amount) {
    this.amount = amount;
  }

  public double getInterest() {
    return this.interest;
  }

  public void setInterest(double interest) {
    this.interest = interest;
  }

  public double monthlyPay() {
    double payments = this.amount;
    /* convert interest to decimal */
    double rate = this.interest / 100;
    /* monthly interest rate */
    double monthlyRate = rate / 12;
    /* length of term in months */
    int termInMonths = this.years * 12;
    /* calculate monthly payments */
    payments = (this.amount*monthlyRate) / (1-Math.pow(1+monthlyRate, -termInMonths));

    return payments;
  }
}