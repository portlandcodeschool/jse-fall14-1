
### Homework #1
(Due Monday 9/8)

You need to turn in this homework by cloning this repo, making a new branch with your solutions, pushing to github, and issuing a pull request.
For details, follow the instructions [here](http://portlandcodeschool.github.io/jse/2014/05/12/command-line-and-git-slides/#/14).

---

**1)** (_Difficulty: mixed_)
Before testing these expressions in the console, predict what their output will be.  If the output depends on x, identify the conditions when the expression will output true.  Assume the cases are independent, and x is reset to an unknown value before each.

Some of these are tricky!  Don't trust your first instinct.  


**a)** `"1" == 1`
> true

**b)** `"1" === 1`
> false

**c)** `x == 'x'`
> false UNLESS x is literally string 'x'

**d)** `x == (x+'')`
> true UNLESS x is NaN, true, or false

**e)** `'' == ' '`
> false

**f)** `x = true`
> true

**g)** `var x; x == 'undefined'`
> true UNLESS x was declared earlier with a value

**h)** `'9'<'10'`
> false

**i)** `typeof x + 1 === "number"`
> false

**j)** `typeof x % 2 === "number"`
> false

**k)** `typeof (x % 2) === "number"`
> true

**l)** `x++ == ++x`
> false

**m)** `++x == x++`
> true UNLESS x is non-numeric string

**n)** `"1"+x == 1+x`
> true when x is any string

**o)** `"0"+1 == 1`
> true

**p)** `(typeof (x+1))===(typeof x)`	
> true if x is number or string

**q)** `(x*1 == x) || ((typeof x) != "number")`
> true UNLESS x is NaN

**r)** `(x=(typeof (x+(typeof x))))==x`
> true

**s)** `x=-1,0,-x---1+'0'+x`
> "00-2"

<pre>
This one needs some explanation.
We can parse gigantic expressions like this in two phases: 1) parentheses replacement, then 2) evaluation.

Phase 1: Place implicit parentheses to decide evaluation order!

First consider the ugly `-x---1`.
At first it might seem like a multiple negation: `-x -(-(-1)))`.
But predecrement and postdecrement operators (--) have stronger precedence, so look for those first.
Predecrement (--1) doesn't make sense, but postdecrement (x--) does, so start there:
x=-1,0,-(x--)-1+'0'+x

The next strongest operator is unary minus, in two places:
x=(-1),0,(-(x--))-1+'0'+x

Then left-to-right subtraction and addition/concatenation:
x=(-1),0,((-(x--))-1)+'0'+x
x=(-1),0,(((-(x--))-1)+'0')+x
x=(-1),0,((((-(x--))-1)+'0')+x)

Then assignment:
(x=(-1)),0,((((-(x--))-1)+'0')+x)

And finally, left-to-right commas:
((x=(-1)),0),((((-(x--))-1)+'0')+x)
That's the expression which gets evaluated!

Phase 2: Now evaluate nested expressions as they close, from left to right:

((x=(-1)),0),((((-(x--))-1)+'0')+x)
 ^^^^^^^^  x becomes -1, substitute -1

(   -1   ,0),((((-(x--))-1)+'0')+x)
^^^^^^^^^^^^ comma op discards -1

0,((((-(x--))-1)+'0')+x)
       ^^^^^ x becomes -2, substitute -1

0,((((-(-1) )-1)+'0')+x) with x now -2
      ^^^^^ double negative substitutes 1

0,((((  1   )-1)+'0')+x)
     ^^^^^^^^^^ (1)-1 substitutes 0

0,(((     0    )+'0')+x)
    ^^^^^^^^^^^^^^^^ (0)+'0' substitutes '00'

0,((      '00'      )+x)
   ^^^^^^^^^^^^^^^^^^^^ ('00')+x substitutes '00-2'

0,(        '00-2'      )
^^  comma op discards 0

'00-2'
</pre>


---

All of the following can be solved with ordinary expressions and global variables with primitive values.  You don't need functions, loops, conditionals, or other topics beyond our first class.

 **2)** (_Difficulty: easy_)

Assume variables x, y, and z are numbers.

**a)**
Write an expression for the mean (i.e. average) of x, y, and z.
```
(x+y+z)/3
```

**b)**
Write a series of expressions to adjust each of x, y, and z
halfway toward their mean.
```
var mean  = (x+y+z/3);
x = (x+mean)/2;
y = (y+mean)/2;
z = (z+mean)/2;
```
or
```
x+= (mean-x)/2;
y+= (mean-y)/2;
z+= (mean-z)/2;
```

---

**3)** (_Difficulty: easyish_)

Suppose you're encoding geometric shapes in a Cartesian coordinate system, and you represent a rectangle with four numeric variables:

- _l_ : horizontal position of left edge;
- _r_ : horizontal position of right edge;
- _t_ : vertical position of top edge;
- _b_ : vertical position of bottom edge.

**a)**
Write an expression for the rectangle's area.
```
(r-l)*(t-b)
```

**b)**
Write an expression which is true if the rectangle is taller than it is wide, and false otherwise.
```
(t-b)>(r-l)
```

**c)**
Imagine subdividing your rectangle into 3 equal rows and 3 equal columns, which would create 9 smaller rectangles, identical in shape but varying by position.
Define four new variables describing the centermost small rectangle.
(Hint: one of the many solutions is very similar to the solution of **2b** above.)

Solution using weighted means:
```
var lc = (2*l + r)/3;
var rc = (2*r + l)/3;
var tc = (2*t + b)/3;
var bc = (2*b + t)/3;
```
Solution using widths:
```
var miniWidth = (r-l)/3;
var miniHeight = (t-b)/3;
var lc = l + miniWidth; // == 3*l/3 + (r-l)/3 == (3*l+r-l)/3 == (2*l+r)/3
var rc = r - miniWidth;
var bc = b + miniHeight;
var tc = t - miniHeight;
```
---

**4)** (_Difficulty: moderate_)

Suppose you represent a fraction (_n/d_) with 2 integer variables: _n_ for the numerator and _d_ for the denominator.
If _n_ is greater than _d_, the fraction is "improper", but it can be rewritten as a proper fraction.  For example, "7/4" is improper, but it can be rewritten "1 3/4", which is proper.

Write an expression for a string expressing the proper form of an improper fraction _n/d_.  When _n==7_ and _d==4_, your resulting string should be "1 3/4".  You may assume both _n_ and _d_ are positive integers and _n_ > _d_.

(_Hint: you'll need the modulo operator _%_, and you'll probably want to create a couple of extra variables._)
```
var remainder = n % d;
var evenlyDivisible = n - remainder;
var wholes = evenlyDivisible / d;
var result = wholes + ' ' + remainder + '/' + d;
```
