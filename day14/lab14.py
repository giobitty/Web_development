# Giorgia beavers
print("\n ############### EXAMPLE 1 ###############")



print("\n ############### EXAMPLE 2 ###############")

msg = "hello world"
lenghtmsg = len(msg)
print(f"the message has {lenghtmsg} character")

# ex 3

print("\n ############### EXAMPLE 3 ###############")
# check age
age = 23
if age > 21:
    print("You are an adult")
else:
    print("You are underage")

print("\n ############### EXAMPLE 4 ###############")
grade1 = float(input("enter grade 1:"))
grade2 = float(input("enter grade 2:"))
average = (grade1 +grade2)/2

# condition statements 

if average>=90 and average <= 100:
    gpa = "A"
elif average >= 80 and average <= 89.99:
    gpa = "B"
elif average >= 70 and average <= 79.99:
    gpa = "C"
elif average >= 60 and average <= 69.99:
    gpa = "D"
elif average > 100:
    gpa = "Undefined"
else:
    gpa = "F"

print(f"the average grade is {average} with a gpa of {gpa}")

# LOOPS
print("\n ############### EXAMPLE 5 ###############")
# for loop
for x in range(0,5):
    print('hello world' , x)

print("\n ############### EXAMPLE 6 ###############")

for m in range(-3,4):
    print('hello' , m)

print("\n ############### EXAMPLE 7 decrement counter ###############")
for n in range(9,0,-2):
    print(n)

print("\n ############### EXAMPLE 8 loop in list ###############")

animals = ["fish", "cat", "eagle"]
for animal in animals:
    print('hello' , animal)

print("\n ############### EXAMPLE 9 while loop ###############")
n = 1
while n<=5:
    print(n)
    # if n==3:
    #     break
    n = n+1
else:
    print("program ended")