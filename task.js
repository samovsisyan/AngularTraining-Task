let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arr;

function filterNumber() {
	if(numbers.length){
		arr = numbers[Math.floor(Math.random()*numbers.length)];
	    numbers = numbers.filter(item => item !== arr)
	    console.log(arr,numbers)
	}else{
		document.getElementById('id01').style.display='block'
	}
}

function retry(){
	numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	document.getElementById('id01').style.display='none'
}