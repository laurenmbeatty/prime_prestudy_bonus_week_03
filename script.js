var num = 2;

// first function

function plusTwo(num) {
	return num+2;
}

//second function

function modulo(num) {
	return num%2;
}

//third function

function timesTen(num) {
	return num*10;
}

console.log(plusTwo(modulo(timesTen(num))));

//Should return 2, which it does.  I also tried
//having the first function double the number
//which should return 0, and that works, too!