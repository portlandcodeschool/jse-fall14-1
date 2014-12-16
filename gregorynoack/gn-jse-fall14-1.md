
### Homework #1
(Due Monday 9/8)

You need to turn in this homework by cloning this repo, making a new branch with your solutions, pushing to github, and issuing a pull request.
For details, follow the instructions [here](http://portlandcodeschool.github.io/jse/2014/05/12/command-line-and-git-slides/#/14).

---

**1)** (_Difficulty: mixed_)
Before testing these expressions in the console, predict what their output will be.  If the output depends on x, identify the conditions when the expression will output true.  Assume the cases are independent, and x is reset to an unknown value before each.

Some of these are tricky!  Don't trust your first instinct.  


**a)** `"1" == 1`

* first try: true 
* console test: true

**b)** `"1" === 1`

* first try: false - although I am still unclear why == returns true more often than === I know this is false because of treehouse
* console test: false

**c)** `x == 'x'`

* first try: true - I am assuming x will read as a string 
* console test: true if I set x to a value of one 

**d)** `x == (x+'')`

* first try: true - if x is equal to a number the extra "blank" space will read as whitespace
* console test: true 


**e)** `'' == ' '`

* first try: false - I am guessing JS will count the full space as a string
* console test: false

**f)** `x = true`

* first try: false - I believe true needs to be equated
* console test: true for 1 = true

**g)** `var x; x == 'undefined'`

* first try: true x is undefined
* console test: false x == to something but not because 'undefined' it is a string?

**h)** `'9'<'10'`

* first try: false - two different strings
* console test: false

**i)** `typeof x + 1 === "number"`

* first try: true - thought true then tested and realize typeof is equating the first chunk then adding 1 to the end
* console test: false

**j)** `typeof x % 2 === "number"`

* first try: true - guess
* console test:false no parentheses 

**k)** `typeof (x % 2) === "number"`

* first try: true 
* console test: true - cause of parens

**l)** `x++ == ++x`

* first try: false 
* console test: false

**m)** `++x == x++`

* first try: false 
* console test: true

**n)** `"1"+x == 1+x`

* first try: false concat vs add
* console test: false

**o)** `"0"+1 == 1`

* first try: true 
* console test: true

**p)** `(typeof (x+1))===(typeof x)`	

* first try: true 
* console test: true

**q)** `(x*1 == x) || ((typeof x) != "number")`

* first try: true 
* console test: true

**r)** `(x=(typeof (x+(typeof x))))==x`

* first try: true
* console test: true

**s)** `x=-1,0,-x---1+'0'+x`

* first try: no clue
* console test: if x = 1 > "00-2"

---

All of the following can be solved with ordinary expressions and global variables with primitive values.  You don't need functions, loops, conditionals, or other topics beyond our first class.

 **2)** (_Difficulty: easy_)

Assume variables x, y, and z are numbers.


**a)**
Write an expression for the mean (i.e. average) of x, y, and z.

* (x + y + z) / 3

**b)**
Write a series of expressions to adjust each of x, y, and z
halfway toward their mean.

* ((x / 2) + (y / 2) + (z/ 2)) / 3

---

**3)** (_Difficulty: easyish_)

Suppose you're encoding geometric shapes in a Cartesian coordinate system, and you represent a rectangle with four numeric variables:

- _l_ : horizontal position of left edge;
- _r_ : horizontal position of right edge;
- _t_ : vertical position of top edge;
- _b_ : vertical position of bottom edge.

**a)**
Write an expression for the rectangle's area.

(l * t)

**b)**
Write an expression which is true if the rectangle is taller than it is wide, and false otherwise.


	if(l + r > t + b){
		console.log(true);
	}else{
		console.log(false);
	}

**c)**
Imagine subdividing your rectangle into 3 equal rows and 3 equal columns, which would create 9 smaller rectangles, identical in shape but varying by position.
Define four new variables describing the centermost small rectangle.
(Hint: one of the many solutions is very similar to the solution of **2b** above.)

	
	var t = 30,
		b = 30,
		r = 60,
		l = 60,
		
		row1 = l / 3,
		row2 = row1 + row1,

		col1 = t / 3,
		col2 = col1 + col1;

	if(col2 == 20 && row2 == 40){
		console.log("this is the middle");
	}else{
		console.log("this is not the middle");
	}

---

**4)** (_Difficulty: moderate_)

Suppose you represent a fraction (_n/d_) with 2 integer variables: _n_ for the numerator and _d_ for the denominator.
If _n_ is greater than _d_, the fraction is "improper", but it can be rewritten as a proper fraction.  For example, "7/4" is improper, but it can be rewritten "1 3/4", which is proper.

Write an expression for a string expressing the proper form of an improper fraction _n/d_.  When _n==7_ and _d==4_, your resulting string should be "1 3/4".  You may assume both _n_ and _d_ are positive integers and _n_ > _d_.

(_Hint: you'll need the modulo operator _%_, and you'll probably want to create a couple of extra variables._)

	// not sure if this is the correct expression
	var remain = x/n % 1;
	var fraction = "1 " + (remain * 100) % (4) + "/" +"4"
