/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
	var i = digits.length - 1;
	while(i >= 0){
		if(digits[i] < 9){
			digits[i]++;
			return digits;
		}else{
			digits[i] = 0;
		}
		i--;
	}
	digits.unshift(1);
	return digits;
};	

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));