async function fetchData() {
    const response = await fetch('data.json');
    const data = await response.json();
    return data;
  }
  
  function generateRandomIndex(max) {
    return Math.floor(Math.random() * max);
  }
  
  function displayCompanyInformation(company, spotlight) {
    const companyName = document.createElement('h3');
    const companyAddress = document.createElement('p');
    const companyPhone = document.createElement('p');
    const companyUrl = document.createElement('a');
    const companyImage = document.createElement('img');
  
    companyName.textContent = company.name;
    companyAddress.textContent = company.address;
    companyPhone.textContent = company.phone;
    companyUrl.href = company.url;
    companyUrl.textContent = company.url;
    companyImage.src = company.imageurl;
    companyImage.alt = `${company.name} logo`;
  
    spotlight.appendChild(companyName);
    spotlight.appendChild(companyAddress);
    spotlight.appendChild(companyPhone);
    spotlight.appendChild(companyUrl);
    spotlight.appendChild(companyImage);
  }
  
  async function displayRandomCompany() {
    const data = await fetchData();
    const businesses = data.businesses;
    const randomIndex = generateRandomIndex(businesses.length);
  
    const spotlights = [
      document.querySelector('.spotlight1'),
      document.querySelector('.spotlight2'),
      document.querySelector('.spotlight3')
    ];
  
    for (let i = 0; i < spotlights.length; i++) {
      const randomCompany = businesses.splice(randomIndex, 1)[0];
      displayCompanyInformation(randomCompany, spotlights[i]);
    }
  }
  
  document.addEventListener('DOMContentLoaded', displayRandomCompany);
  