# asks for your phone number in digits, outputs in alphabet combintations
# comment 2

humanInput = input("What's your phone number?")

digit = 0
v = 0
v1 = 0
v2 = 0
v3 = 0
v4 = 0
v5 = 0
v6 = 0
v7 = 0
a = 0
b = 0
c = 0
d = 0
e = 0
f = 0
g = 0
i = 0

# for each of 7 digitis
for i in range(0, 7):
  digit = humanInput[i]
  digit = int(digit)
  if digit == 1 or digit == 0:
    v=0
  elif digit == 7 or digit == 9:
    v = 3
  else:
    v = 2
  

  if i == 0: 
    v1 = v
  elif i == 1:
    v2 = v
  elif i == 2:
    v3 = v
  elif i == 3:
    v4 = v
  elif i == 4:
    v5 = v
  elif i == 5:
    v6 = v
  else: 
    v7 = v

  ray = ["x","x","x","x","x",]

  if digit == 1:
    ray = ["1","1","1"]
  elif digit == 2:
    ray = ["A","B","C"]
  elif digit == 3:
    ray = ["D","E","F"]
  elif digit == 4:
    ray = ["G","H","I"]
  elif digit == 5:
    ray = ["J","K","L"]
  elif digit == 6:
    ray = ["M","N","O"]
  elif digit == 7:
    ray = ["P","Q","R","S"]
  elif digit == 8:
    ray = ["T","U","V"]
  elif digit == 9:
    ray = ["W","X","Y","Z"]
  else:
    ray = ["0","0","0"]


  if i == 0:
    ray1=ray
  elif i == 1:
    ray2=ray
  elif i == 2:
    ray3=ray
  elif i == 3:
    ray4=ray
  elif i == 4:
    ray5=ray
  elif i == 5:
    ray6=ray
  else:
    ray7=ray
 
# end for loop of input


# output test data before for loops
print("here are your results: ")
for a in range(0, v1 + 1): 
  for b in range(0, v2 + 1): 
    for c in range(0, v3 + 1): 
      for d in range(0, v4 + 1): 
        for e in range(0, v5 + 1): 
          for f in range(0, v6 + 1): 
            for g in range(0, v7 + 1): 
              myString = ray1[a] + ray2[b] + ray3[c] + ray4[d] + ray5[e] + ray6[f] + ray7[g]
              print(myString)
