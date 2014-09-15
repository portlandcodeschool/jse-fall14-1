
// Predictions for answers precede answers recieved in console. Console answers led with C (Console) for clarification.

**a)** `"1" == 1` 
	//True. C:True.

**b)** `"1" === 1`
	//True. C:False.
**c)** `x == 'x'`
	 //True if x = 1. C:false.
**d)** `x == (x+'')`
	//False if x = 1. C: True.
**e)** `'' == ' '`
	//False. C:false.
**f)** `x = true`
	//True. C:true.
**g)** `var x; x == 'undefined'`
	//True if x = undefined. C:false.
**h)** `'9'<'10'`
	//True. C:false, crazy enough.
**i)** `typeof x + 1 === "number"`
	//True if x = 1. Not quite sure what conditions will make it true. C:false.
**j)** `typeof x % 2 === "number"`
	//False if x = 1. Not quite sure what conditions will make it true. C:false.
**k)** `typeof (x % 2) === "number"`
	//False if x = 1. C: True.
**l)** `x++ == ++x`
	//True if x = 1. Not quite sure what conditions will make it true. C: False.
**m)** `++x == x++`
	//False if x = 1. C: True.
**n)** `"1"+x == 1+x`
	//False if x = 1. String, not number. C: False.
**o)** `"0"+1 == 1`
	//False. C:True.
**p)** `(typeof (x+1))===(typeof x)`	
	//False. C: True
**q)** `(x*1 == x) || ((typeof x) != "number")`
	//True if x = 1. C:True.
**r)** `(x=(typeof (x+(typeof x))))==x`
	//True if x = 1 because all numbers. C:True.
**s)** `x=-1,0,-x---1+'0'+x`
	//no true or false. This is an equation. x = 1. C:00-2
---

/*All of the following can be solved with ordinary expressions and global variables with primitive values.  You don't need functions, loops, conditionals, or other topics beyond our first class.*/

 2) (_Difficulty: easy_)

Assume variables x, y, and z are numbers.

a)
Write an expression for the mean (i.e. average) of x, y, and z.
// var x=1;
// var y=2;
// var z=3;
// var ttl;
// var avg;

// ttl = x + y + z;
// avg = ttl / 3;
// console.log(avg);
// average = 2
**b)**
Write a series of expressions to adjust each of x, y, and z
halfway toward their mean.
//y - x;
//z - y;	
---

**3)** (_Difficulty: easyish_)

Suppose you're encoding geometric shapes in a Cartesian coordinate system, and you represent a rectangle with four numeric variables:

- _l_ : horizontal position of left edge;
- _r_ : horizontal position of right edge;
- _t_ : vertical position of top edge;
- _b_ : vertical position of bottom edge.

**a)**
Write an expression for the rectangle's area.
	//(L-R) * (B-T)=A Where is A = Area;
**b)**
Write an expression which is true if the rectangle is taller than it is wide, and false otherwise.
// (T-R) * (B-T) == A. Where L = -4, R = 5, B = -3, T = 6, A = 64. C:True;
//L-R * B-T == A. C:False;

**c)**
Imagine subdividing your rectangle into 3 equal rows and 3 equal columns, which would create 9 smaller rectangles, identical in shape but varying by position.
Define four new variables describing the centermost small rectangle.
(Hint: one of the many solutions is very similar to the solution of **2b** above.)
// (Lower Left) LL = -1, (Lower Right) LR = 2, (Lower Bottom) LB = 0, (Lower Top) LT = 3. (-1,3), (2,3), (2,0), (-1,0);
---

**4)** (_Difficulty: moderate_)

Suppose you represent a fraction (_n/d_) with 2 integer variables: _n_ for the numerator and _d_ for the denominator.
If _n_ is greater than _d_, the fraction is "improper", but it can be rewritten as a proper fraction.  For example, "7/4" is improper, but it can be rewritten "1 3/4", which is proper.

Write an expression for a string expressing the proper form of an improper fraction _n/d_.  When _n==7_ and _d==4_, your resulting string should be "1 3/4".  You may assume both _n_ and _d_ are positive integers and _n_ > _d_.

(_Hint: you'll need the modulo operator _%_, and you'll probably want to create a couple of extra variables._)

// var number = n/d;
// if(n > d){
//   var x = (n%d);
//   var y = Math.floor(number);
//   console.log(" " + y + " " + x + '/' + d)
// }

//BOOMSHOCKALAKA