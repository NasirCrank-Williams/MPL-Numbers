"""
Find e to the Nth Digit - Enter a number and
have the program generate e up to that many decimal
places. Keep a limit to how far the program will go.
"""

# first 10,000 digits of euler's number 
with open('euler.txt', 'r') as e:
  euler = e.read().replace(' ', '')

def nthOfE(num):
  """
  returns euler(string) with *num* number of decimals
  """
  num = int(num)
  if num <= 0:
    return euler[0]
  if num >= 10000:
    return euler
  
  return euler[0:num + 2]

def main():
  while True:
    num = input("Enter an integer from 1 to 10000 \n")
    print(nthOfE(num) + "\n")

    answer = input("Would you like to go again? y/n \n")
    if answer == "n":
      break
    print()
  return

main()