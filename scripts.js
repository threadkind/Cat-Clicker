const cat = document.querySelector('#cat');
const counter = document.querySelector('#counter');

let count = 0;

cat.addEventListener('click', function(){
	count++;
	counter.innerText = count;
});