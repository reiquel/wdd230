function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  async function fetchCompanies() {
    const response = await fetch('data.json');
    const data = await response.json();
    return data.businesses;
  }
  
  function displayCompany(company, selector) {
    const element = document.querySelector(selector);
    element.innerHTML = `
      <h3>${company.name}</h3>
      <p>${company.address}</p>
      <p>${company.phone}</p>
      <p><a href="${company.url}" target="_blank">Visit Website</a></p>
      <img src="${company.imageurl}" alt="${company.name}" />
    `;
  }
  
  async function getRandomCompanies() {
    const companies = await fetchCompanies();
    let indices = [];
  
    for (let i = 0; i < 3; i++) {
      let index;
      do {
        index = getRandomInt(companies.length);
      } while (indices.includes(index));
      indices.push(index);
    }
  
    displayCompany(companies[indices[0]], '.spotlight1');
    displayCompany(companies[indices[1]], '.spotlight2');
    displayCompany(companies[indices[2]], '.spotlight3');
  }
  
  getRandomCompanies();
  
  displayCompanies();
  