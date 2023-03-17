// randomCompany.js

async function fetchCompanies() {
    try {
        const response = await fetch("data.json");
        if (!response.ok) {
            throw new Error("Failed to fetch companies data");
        }
        const data = await response.json();
        return data.businesses;
    } catch (error) {
        console.error("Error:", error);
    }
}

function getRandomCompany(companies) {
    const randomIndex = Math.floor(Math.random() * companies.length);
    return companies[randomIndex];
}

function displayCompany(company, spotlightElement) {
    const nameElement = spotlightElement.querySelector("b");
    const addressElement = spotlightElement.querySelector("p");

    nameElement.textContent = company.name;
    addressElement.textContent = company.address;
}

async function displayRandomCompanies() {
    const companies = await fetchCompanies();

    const spotlight1 = document.querySelector(".spotlight1");
    const spotlight2 = document.querySelector(".spotlight2");
    const spotlight3 = document.querySelector(".spotlight3");

    displayCompany(getRandomCompany(companies), spotlight1);
    displayCompany(getRandomCompany(companies), spotlight2);
    displayCompany(getRandomCompany(companies), spotlight3);
}

document.addEventListener("DOMContentLoaded", displayRandomCompanies);

  
