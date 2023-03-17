document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        displayRandomCompany(data.businesses);
      })
      .catch((error) => console.error("Error fetching data:", error));
  
    function displayRandomCompany(companies) {
      const randomCompany = companies[Math.floor(Math.random() * companies.length)];
  
      const spotlight1 = document.querySelector(".spotlight1");
      const spotlight2 = document.querySelector(".spotlight2");
      const spotlight3 = document.querySelector(".spotlight3");
  
      const companyTemplate = (company) => {
        return `
          <div class="company">
            <h2>${company.name}</h2>
            <p>${company.address}</p>
            <p>${company.phone}</p>
            <p><a href="${company.url}">${company.url}</a></p>
            <img src="${company.imageurl}" alt="${company.name}">
          </div>
        `;
      };
  
      spotlight1.innerHTML = companyTemplate(randomCompany);
      spotlight2.innerHTML = companyTemplate(randomCompany);
      spotlight3.innerHTML = companyTemplate(randomCompany);
    }
  });
  