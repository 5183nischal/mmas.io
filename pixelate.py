import matplotlib.pyplot as plt
import numpy as np
import math

inp2 = '4,5,6,15,16,17|3,4,7,14,17,18|4,5,8,13,16,17|5,6,9,12,15,16|7,8,9,10,11,12,13,14|1,2,3,4,5,6,7,8,9,12,13,14,15,16,17,18,19,20|1,2,3,4,5,6,7,8,9,12,13,14,15,16,17,18,19,20|1,2,3,4,5,6,7,8,9,12,13,14,15,16,17,18,19,20||2,3,4,5,6,7,8,9,12,13,14,15,16,17,18,19|2,3,4,5,6,7,8,9,12,13,14,15,16,17,18,19|2,3,4,5,6,7,8,9,12,13,14,15,16,17,18,19|2,3,4,5,6,7,8,9,12,13,14,15,16,17,18,19|2,3,4,5,6,7,8,9,12,13,14,15,16,17,18,19|2,3,4,5,6,7,8,9,12,13,14,15,16,17,18,19|2,3,4,5,6,7,8,9,12,13,14,15,16,17,18,19|2,3,4,5,6,7,8,9,12,13,14,15,16,17,18,19|2,3,4,5,6,7,8,9,12,13,14,15,16,17,18,19|2,3,4,5,6,7,8,9,12,13,14,15,16,17,18,19'
inp1 = '0||4,5,10,11,16,17|3,4,5,6,9,10,11,12,15,16,17,18|3,4,5,6,9,10,11,12,15,16,17,18|4,5,10,11,16,17|||4,5,10,11,16,17|3,4,5,6,9,10,11,12,15,16,17,18|3,4,5,6,9,10,11,12,15,16,17,18|4,5,10,11,16,17|||4,5,10,11,16,17|3,4,5,6,9,10,11,12,15,16,17,18|3,4,5,6,9,10,11,12,15,16,17,18|4,5,10,11,16,17'

def strat():
	out = '0|||'
	for i in range(2,19,4):
		temp = ''
		start = math.ceil(10.5-i/2)
		for j in range(i):
			temp += str(start)+','
			start+=1
		temp = temp[:-1]
		temp += '|'
		out += temp*2
		out += '|'
	#out += "|||"
	return out[:-2]

stratif = strat()

brain = '0|||6,7,8,9,10,11,12,13,14|5,6,7,9,12,14,15|4,5,7,9,10,11,12,13,15,16,17|3,4,5,7,8,12,14,16,17,18|3,4,5,8,9,10,11,12,14,15,18,19|3,4,6,7,9,13,16,18,19|3,4,5,6,10,11,12,13,14,15,16,17,18,19|4,5,6,7,8,9,10,11,18,19|6,7,8,9,12,13,14,15,16,17,18,19|8,9,10,11,12,13,17,18|11,12,13,14,15,16,17|12,13,14|12,13,14|12,13' 


inp = brain.split(',')



# print(x)

def map(x):
	y_cord=0
	vals = []
	for i in x:
		if '|' in i:
			temp = i.count('|')
			temp_x = i.split('|'*temp)
			vals.append([int(temp_x[0]),y_cord])
			y_cord += temp
			vals.append([int(temp_x[1]),y_cord])
		else:
			vals.append([int(i),y_cord])
	return vals
# print("*******")
# print(map(x))

img = map(inp)

x = np.zeros((20, 20))

for i in img:
	x[i[1]][i[0]-1]=1

plt.spy(x, markersize=11)
plt.show()




	
