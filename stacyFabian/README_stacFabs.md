 
### Homework #1
(Due Monday 9/8)

You need to turn in this homework by cloning this repo, making a new branch with your solutions, pushing to github, and issuing a pull request.
For details, follow the instructions [here](http://portlandcodeschool.github.io/jse/2014/05/12/command-line-and-git-slides/#/14).

---

**1)** (_Difficulty: mixed_)
Before testing these expressions in the console, predict what their output will be.  If the output depends on x, identify the conditions when the expression will output true.  Assume the cases are independent, and x is reset to an unknown value before each.

Some of these are tricky!  Don't trust your first instinct.  


**a)** `"1" == 1`

Predicted Answer: false
   (Correct Output: true  . Because JS does the bit of 'automatic converstion' between numbers and strings == reslts in true.)

**b)** `"1" === 1`

Predicted Answer: false , because you're asking does a string equal a number which it does not.
Actual Output:  

**c)** `x == 'x'`

Predicted Answer: true , but only if x has been defined as a variable of something before.
Actual Output: Only true if the variable x has been defined as the string 'x' already.)

**d)** `x == (x+'')`

Predicted Answer: true , only if x has been defined as a number already.
Actual Output: true

**e)** `'' == ' '`

Predicted Answer: true , because '' is actualy a string of a space character.

**f)** `x = true`

Predicted Answer: true
Actual Output: true

**g)** `var x; x == 'undefined'`

Predicted Answer: undefined
Actual Output: undefined

Here you are saying "I've got a variable of x; now define that variable as the string 'undefined'. Basically the same as saying var x = 'undefined'. Then you're typing x and getting the variable results back.

**h)** `'9'<'10'`

Predicted Answer: false
Actual Output: false
In JS, when numbers are included in a string, the are evaluated as a string in dictionary form so '9' is a 9 and '10' is a '1' then a '0', thus 9 is more than 1.

**i)** `typeof x + 1 === "number"`

Predicted Answer: 'true' only if x has been defined as a number already.
Actual Output: Always return false. Because the 'typeof x' part will come back as a string and then adding a number to it and asking if that will equal "number" is basically asking "typeof 'string' === 'number'" which will be false everytime.

**j)** `typeof x % 2 === "number"`

Predicted Answer: 'true' only if x has been defined as a number already.
Actual Output: Always return false. See above.

**k)** `typeof (x % 2) === "number"`

Predicted Answer: 'true' , only if x has already been defined as a number...including anything that would result in 0 becuase 0 is considered a 'number' type.
Actual Ouput: It will always be true because a string % a number results in 'NaN' and technically 'NaN' in a number.

**l)** `x++ == ++x`

Predicted Answer: false , no matter what x is set to, it won't ever equal because you're adding a numerical 1 to x with each ++ and thus they'll never equal each other since 1 is added after it's stated but before the comparison and then added again after the comparison but before the statement.
Actual Output: false

**m)** `++x == x++`

Predicted Answer: true, only if x has been set to a number value first. 
Actual Output: true when x is a number value and not a string value.

**n)** `"1"+x == 1+x`

Predicted Answer: true , only if x has been set to a string. If x is a number the second half will use true addition but the first half will just be 1 and x concatenated. Since addition adds only if both are numbers and a string containing a number won't change to a number unless subtraction is involved, it will default to concatenation
Actual Answer: [confirm if in an addition operation the number string will or won't automatically change to a number.]

**o)** `"0"+1 == 1`

Predicted Answer: false , the "0" won't change to a numerical 0 in addition, only in subtraction. Basically the same reason as above.
Actual Answer: [confirm this]

**p)** `(typeof (x+1))===(typeof x)`	

Predicted Answer: true , always true. A number would obviously be the same as the number plus 1. Since JS automatically changes a number to a string if necessary to combine two values, then if x were a string, the 1 would be converted to a string of '1' and added to x value thus making their types still the same.
Actual Answer: true with both a number and a string

**q)** `(x*1 == x) || ((typeof x) != "number")`
        number: true      number: false
        string: false     string: true

Predicted Answer: false , because regardless of they type of value for x one side will always be false. (see above)
Actual Answer: true. Simply, I forgot that || will produce 'true' if EITHER side is true, not both. 

**r)** `(x=(typeof (x+(typeof x))))==x`

Predicted Answer: true if x holds a value of "string"
Actual Answer: always true. Since the most outlying command is x = typeof, it's basically setting x to a string of whatever the typeof is. So x will == itself. (x will also be reset to "string")

**s)** `x=-1,0,-x---1+'0'+x`

Predicted Answer: 
Actual Answer: 

---

All of the following can be solved with ordinary expressions and global variables with primitive values.  You don't need functions, loops, conditionals, or other topics beyond our first class.

 **2)** (_Difficulty: easy_)

Assume variables x, y, and z are numbers.

**a)**
Write an expression for the mean (i.e. average) of x, y, and z.

var sum = (x+y+x);
var mean = sum/3;

**b)**
Write a series of expressions to adjust each of x, y, and z
halfway toward their mean.

var halfSum = (x/2) + (y/2) + (z/2);
var halfwayToMean = halfSum / 3;

---

**3)** (_Difficulty: easyish_)

Suppose you're encoding geometric shapes in a Cartesian coordinate system, and you represent a rectangle with four numeric variables:

- _l_ : horizontal position of left edge;
- _r_ : horizontal position of right edge;
- _t_ : vertical position of top edge;
- _b_ : vertical position of bottom edge.

**a)**
Write an expression for the rectangle's area.

var width = r - l;
var height = t - b;
var area = width * height;

**b)**
Write an expression which is true if the rectangle is taller than it is wide, and false otherwise.

var width = r - l;
var height = t - b;

if (width<height)
	console.log(true);
else
	console.log(false);

**c)**
Imagine subdividing your rectangle into 3 equal rows and 3 equal columns, which would create 9 smaller rectangles, identical in shape but varying by position.
Define four new variables describing the centermost small rectangle.
(Hint: one of the many solutions is very similar to the solution of **2b** above.)

var width = r - l;
var height = t - b;

var midCtr_left = (l + (width/3));
var midCtr_right = (r - (width/3));
var midCtr_top = (t - (heigth/3));
var midCtr_bottom = (b + (height/3));


---

**4)** (_Difficulty: moderate_)

Suppose you represent a fraction (_n/d_) with 2 integer variables: _n_ for the numerator and _d_ for the denominator.
If _n_ is greater than _d_, the fraction is "improper", but it can be rewritten as a proper fraction.  For example, "7/4" is improper, but it can be rewritten "1 3/4", which is proper.

Write an expression for a string expressing the proper form of an improper fraction _n/d_.  When _n==7_ and _d==4_, your resulting string should be "1 3/4".  You may assume both _n_ and _d_ are positive integers and _n_ > _d_.

(_Hint: you'll need the modulo operator _%_, and you'll probably want to create a couple of extra variables._)
