// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");


// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
// show todays date.



//get the date of the user's first visit
let firstVisit = new Date();

//store the date of the user's first visit
sessionStorage.setItem('firstVisit', firstVisit);

//get the date of the user's second visit
let secondVisit = new Date();

//calculate the difference between the two dates in milliseconds
let msDifference = secondVisit.getTime() - firstVisit.getTime();

//convert the difference from milliseconds to days
let daysDifference = Math.floor(msDifference / (1000 * 60 * 60 * 24));

//display the number of days between visits


todayDisplay.textContent = daysDifference