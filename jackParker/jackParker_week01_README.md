##Section 1
---

**Format:** `Prediction - Result`

a) `true - true`

b) `false - false`

c) `false - false`

d) `false - false`

e) `false - false`

f) `true - true`

g) `false - false`

h) `true - false`

i) `false - false`

j) `false - false`

k) `false - true`

l) `false - false`

m) `false - true`

n) `false - false`

o) `true - true`

p) `true - true`

q) `true - true`

r) `true - true`

s) `error - "00-2"`

<br/>
<br/>

## Section 2
---

a) `var mean = (x + y + z) / 3;`

b) 

`var x = x / 2;`

`var y = y / 2;`
   
`var z = z / 2;`
   
`var halfwayTowardMean = (x + y + z) / 3;`

<br/>
<br/>

## Section 3
---

a)
	
	var width,
		height,
		area;
	
	width = (l > r) ? l - r : r - l;
	height = (t > b) ? t - b : b - t;
	
	area = width * height;
	
<br/>
b)
	
	var width,
		height,
		area,
		result;
	
	width = (l > r) ? l - r : r - l;
	height = (t > b) ? t - b : b - t;
	result = (height > width) ? true : false;
	
	
	

<br/>
c)
	
	var middleTopLeft,
		middleTopRight,
		middleBottomLeft,
		mdidleBottomRight;
<br/>
<br/>
## Section 4
---
	var n = 20,
		d = 6;
	
	
	var wholeNumber = n / d;
	wholeNumber = Math.floor(wholeNumber);
	
	var remainder = n % d;
	
	var result = wholeNumber + ' ' + remainder + '/' + d;