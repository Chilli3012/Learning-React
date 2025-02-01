with open("practice1.txt",'w+') as f:
    f.write("Hi everyone\nwe are learning file I/O\nusing python\nI like programming in python")
with open("practice1.txt",'r') as f:
    data=f.read()
    print(f.read())

new_data=data.replace("python","C++")
    # print(f.read())
with open("practice1.txt",'w') as f:
    f.write(new_data)

print("learning" in new_data)