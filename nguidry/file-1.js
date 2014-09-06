// Exercise 1 - See index.html file

// Exercise 2
// a) Write an expression for the mean (i.e. average) of x, y, and z.

var x = 3,
	y = 5,
	z = 8;

var mean = (x + y + z)/3;

console.log(mean);

// b) Write a series of expressions to adjust each of x, y, and z halfway toward their mean.

x = x + ((mean-x)/2);

y = y + ((mean-y)/2);

z = z + ((z-mean)/2);

// Exercise 3
/* 
Suppose you're encoding geometric shapes in a Cartesian coordinate system, and you represent 
a rectangle with four numeric variables:

	l : horizontal position of left edge;
	r : horizontal position of right edge;
	t : vertical position of top edge;
	b : vertical position of bottom edge.

a) Write an expression for the rectangle's area.*/

var l,
	r,
	t,
	b;

var area = (l+r)*(t+b);

/*b) Write an expression which is true if the rectangle is taller than it is wide, and 
false otherwise.*/

(t+b) > (l+r);

/*c) Imagine subdividing your rectangle into 3 equal rows and 3 equal columns, which would create 
9 smaller rectangles, identical in shape but varying by position. Define four new variables 
describing the centermost small rectangle. (Hint: one of the many solutions is very similar to 
the solution of 2b above.)*/

var cl = l-((l+r)/3),
	cr = r-((l+r)/3),
	ct = t-((t+b)/3),
	cb = b-((t+b)/3);

// Exercise 4

/* Suppose you represent a fraction (n/d) with 2 integer variables: n for the numerator and d 
for the denominator. If n is greater than d, the fraction is "improper", but it can be rewritten 
as a proper fraction. For example, "7/4" is improper, but it can be rewritten "1 3/4", which is proper.

Write an expression for a string expressing the proper form of an improper fraction n/d. 
When n==7 and d==4, your resulting string should be "1 3/4". You may assume both n and d are positive 
integers and n > d.

(Hint: you'll need the modulo operator _%, and you'll probably want to create a couple of extra variables._) */

var n = 7,
	d = 4;

var x = Math.floor(n/d);

x.toString() + " " + (n%d).toString() + "/" + d.toString();