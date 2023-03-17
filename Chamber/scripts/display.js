// JSON object with the businesses
const companiesJSON = 'data.json';

// Parse the JSON object
const companiesObj = JSON.parse(companiesJSON);

// Function to get a random company
function getRandomCompany() {
    const companies = companiesObj.businesses;
    const randomIndex = Math.floor(Math.random() * companies.length);
    return companies[randomIndex];
}

// Function to display the company information
function displayCompany() {
    const company = getRandomCompany();
    const spotlight3 = document.querySelector(".spotlight3");

    // Create elements to display company information
    const companyName = document.createElement("h3");
    companyName.textContent = company.name;

    const companyAddress = document.createElement("p");
    companyAddress.textContent = company.address;

    const companyPhone = document.createElement("p");
    companyPhone.textContent = company.phone;

    const companyURL = document.createElement("a");
    companyURL.href = company.url;
    companyURL.textContent = "Visit website";
    companyURL.target = "_blank";

    const companyImage = document.createElement("img");
    companyImage.src = company.imageurl;
    companyImage.alt = company.name;

    // Append elements to the spotlight3 div
    spotlight3.appendChild(companyName);
    spotlight3.appendChild(companyAddress);
    spotlight3.appendChild(companyPhone);
    spotlight3.appendChild(companyURL);
    spotlight3.appendChild(companyImage);
}

// Call the displayCompany function when the DOM is loaded
document.addEventListener("DOMContentLoaded", displayCompany);
