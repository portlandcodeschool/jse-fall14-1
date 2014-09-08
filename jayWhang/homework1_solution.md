Question 1

a) "1" == 1
prediction: true
actual: true 

b) "1" === 1
prediction: false. This expression will output true if both of the values are string or both of the values are numbers.
actual: false 

c) x == 'x'
prediction: true
actual: false. This expression outputed true when both of the values are either string or both ofthe values are numbers. 

d) x == (x+'')
prediction: false
actual:true. This is little confusing since question c was false. 

e) '' == ' '
prediction: true
actual: false outputs true when amount of space between singles quotes are equal. 

f) x = true
prediction: true
actual: true 

g) var x; x == 'undefined'
prediction: true
actual: false. Outputs true when value on the right side of x == is number and not a string. 

h) '9'<'10'
prediction: false. Outputs true when values are numbers. 
actual: false 


i) typeof x + 1 === "number"
prediction: false. Outputs true when x + 1 is inside of ( ). 
actual: false


j) typeof x % 2 === "number"
prediction: false. Outputs true when x%2 is inside of ( ). 
actual: false

k) typeof (x % 2) === "number"
prediction: true. 
actual: true 

l) x++ == ++x
prediction: false. 
actual: false

m) ++x == x++
prediction: false
actual: true. I do not understand how output to the question l is false while this one is true. 


n) "1"+x == 1+x
prediction: true
actual: false. I dont understant why this is not a true!!!!!

o) "0"+1 == 1
prediction: true
actual: true 


p) (typeof (x+1)) === (typeof x)
prediction: true
actual: true 


q) (x*1 == x) || ((typeof x) != "number")
prediction: true
actual: true

r) (x = (typeof (x+(typeof x)))) == x
prediction: true
actual: true

s) x=-1,0,-x---1+'0'+x
prediction: "-1 0 +-1"
actual: "00-2"	

Question 2

a)

var x = 4;
var y = 5;
var z = 9;

var mean = (x + y + z)/3;
console.log(mean);

b)

var half2MeanX = x + ((mean-x)/2);
var half2MeanY = y +((mean-y)/2);
var half2MeanZ = z - ((z-mean)/2);

console.log(half2MeanX, half2MeanY, half2MeanZ);

Question 3

a)

var width = r - l;
var height = t - b;

var area = width * height;
console.log(area);

b)

var l = 0;
var r = 2;
var t = 4;
var b = 0;
var width = r - l;
var height = t - b;

if (width < height) {
	console.log("true");
} else {
	console.log("false");
}

or 

width > height; 

c)

var l = 0;
var r = 12;
var t = 12;
var b = 0;

var widthMean = (r-l)/2;
var heightMean = (t-b)/2;

var cl = widthMean - (widthMean -l)/3;
var cr = (r-widthMean)/3 + widthMean;
var ct = (t-heightMean)/3 + heightMean;
var cb = heightMean -(heightMean-b)/3;

console.log (cl,cr,ct,cb);


Question 4

var n = 10;
var d = 3;

var result = ((n - (n % d))/d) + " " + (n %d ) + "/" + (d % n);

console.log(result);

