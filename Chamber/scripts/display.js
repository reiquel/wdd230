// Fetch JSON data
async function fetchCompanies() {
    const response = await fetch("data.json");
    const data = await response.json();
    return data.businesses;
  }
  
  // Get a random company
  function getRandomCompany(companies) {
    const randomIndex = Math.floor(Math.random() * companies.length);
    return companies[randomIndex];
  }
  
  // Display company information in the divs
  function displayCompany(company) {
    const spotlight1 = document.querySelector(".spotlight1");
    const spotlight2 = document.querySelector(".spotlight2");
    const spotlight3 = document.querySelector(".spotlight3");
  
    spotlight1.querySelector("b").innerText = company.name;
    spotlight1.querySelector("p").innerText = company.address;
  
    spotlight2.querySelector("b").innerText = company.phone;
    spotlight2.querySelector("p").innerText = company.url;
  
    spotlight3.querySelector("b").innerText = "Visit Website";
    spotlight3.querySelector("p").innerHTML = `<a href="${company.url}" target="_blank">${company.url}</a>`;
  }
  
  // Main function
  async function main() {
    const companies = await fetchCompanies();
    const randomCompany = getRandomCompany(companies);
    displayCompany(randomCompany);
  }
  
  // Call the main function
  main();
  
