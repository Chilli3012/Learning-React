f=open("prac.txt","a+")
data=f.write("Rightnow i am learning Python")
# print(f.read())
p=open("prac.txt",'r')
print(p.read())
f.close()
p.close