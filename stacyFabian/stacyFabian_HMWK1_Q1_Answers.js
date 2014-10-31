// Homework 1, question 3 Answers
// Stacy Fabian

// a)

var width = r - l;
var height = t - b;
var area = width * height;

// b)

var width = r - l;
var height = t - b;

if (width<height)
	console.log(true);
else
	console.log(false);

// c)

var width = r - l;
var height = t - b;

var midCtr_left = (l + (width/3));
var midCtr_right = (r - (width/3));
var midCtr_top = (t - (heigth/3));
var midCtr_bottom = (b + (height/3));

