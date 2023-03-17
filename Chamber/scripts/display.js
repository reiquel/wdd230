const getRandomCompany = (businesses) => {
    const randomIndex = Math.floor(Math.random() * businesses.length);
    return businesses[randomIndex];
  };
  
     const displayCompanyInfo = (company) => {
        const spotlights = ['spotlight1', 'spotlight2', 'spotlight3'];
      
        spotlights.forEach((spotlight) => {
          const spotlightDiv = document.querySelector(`.${spotlight}`);
          spotlightDiv.innerHTML = `
            <h3>${company.name}</h3>
            <p>${company.address}</p>
            <p>${company.phone}</p>
            <a href="${company.url}">Visit Website</a>
            <img src="${company.imageurl}" alt="${company.name}" />
          `;
        });
      };
      
      fetch('data.json')
        .then((response) => response.json())
        .then((data) => {
          const randomCompany = getRandomCompany(data.businesses);
          displayCompanyInfo(randomCompany);
        })
        .catch((error) => console.error('Error fetching data:', error));
    
  