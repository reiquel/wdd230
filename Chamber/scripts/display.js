// fetchData.js
async function fetchCompanies() {
    try {
      const response = await fetch('data.json');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data.businesses;
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  function getRandomCompany(companies) {
    return companies[Math.floor(Math.random() * companies.length)];
  }
  
  async function displayCompanies() {
    const companies = await fetchCompanies();
  
    const spotlight1 = getRandomCompany(companies);
    let spotlight2;
    do {
      spotlight2 = getRandomCompany(companies);
    } while (spotlight1.name === spotlight2.name);
  
    const spotlight3 = getRandomCompany(companies);
  
    document.querySelector('.spotlight1 b').textContent = spotlight1.name;
    document.querySelector('.spotlight1 p').innerHTML = `
      ${spotlight1.address}<br>
      ${spotlight1.phone}<br>
      <a href="${spotlight1.url}">${spotlight1.url}</a>
    `;
  
    document.querySelector('.spotlight2 b').textContent = spotlight2.name;
    document.querySelector('.spotlight2 p').innerHTML = `
      ${spotlight2.address}<br>
      ${spotlight2.phone}<br>
      <a href="${spotlight2.url}">${spotlight2.url}</a>
    `;
  
    document.querySelector('.spotlight3 b').textContent = spotlight3.name;
    document.querySelector('.spotlight3 p').innerHTML = `
      ${spotlight3.address}<br>
      ${spotlight3.phone}<br>
      <a href="${spotlight3.url}">${spotlight3.url}</a>
    `;
  }
  
  displayCompanies();
  