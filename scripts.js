// Store all cats div in variable for easy access
const cats = document.querySelector('#allCats');

// Create constructor function to create cat objects
function Cat(name, picture){
	this.name = name;
	this.picture = picture;
	this.clickCount = 0;
};

// Create both cat objects
const cat1 = new Cat('Fluffy', 'cat1');
const cat2 = new Cat('Baby', 'cat2');

// Function to create cats on the page
const createCat = function(catNum){
	cats.innerHTML +=
		`<div class="container">
	  		<div class="${catNum.picture}Counter counter">${catNum.clickCount}</div>
	  		<h3>${catNum.name}</h3>
			<img class="cat ${catNum.picture}" src="images/${catNum.picture}.jpg">
		</div>`
}

// Create both cats on the page
createCat(cat1);
createCat(cat2);

// When either cat is clicked increase the counter
// Add an event listener on the all cats div
cats.addEventListener('click', function(e){
	// When the allcats div is clicked, check to see if it is one of the cats or if it has been clicked somewhere else
	if(e.target.classList.contains('cat')) {
		const target = e.target.classList[1];

		// If cat1 is clicked, increase cat1s counter and display on the page
		if(target === 'cat1'){
			cat1.clickCount++;
			document.querySelector('.cat1Counter').innerText = cat1.clickCount;
			console.log(cat1.clickCount);
		}

		// Otherwise, increase cat2s counter and display on the page
		else {
			cat2.clickCount++;
			document.querySelector('.cat2Counter').innerText = cat2.clickCount;
		}
	};

});
