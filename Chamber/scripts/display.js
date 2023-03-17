// Fetch and parse the JSON data
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const businesses = data.businesses;
    const randomBusiness = getRandomBusiness(businesses);

    displayBusinessInfo(randomBusiness);
  })
  .catch((error) => console.error("Error fetching data: ", error));

function getRandomBusiness(businesses) {
  const randomIndex = Math.floor(Math.random() * businesses.length);
  return businesses[randomIndex];
}

function displayBusinessInfo(business) {
  const spotlight1 = document.querySelector(".spotlight1");

  const name = document.createElement("h3");
  name.textContent = business.name;

  const address = document.createElement("p");
  address.textContent = business.address;

  const phone = document.createElement("p");
  phone.textContent = business.phone;

  const url = document.createElement("a");
  url.href = business.url;
  url.textContent = "Visit Website";

  const image = document.createElement("img");
  image.src = business.imageurl;
  image.alt = `${business.name} logo`;

  spotlight1.appendChild(name);
  spotlight1.appendChild(address);
  spotlight1.appendChild(phone);
  spotlight1.appendChild(url);
  spotlight1.appendChild(image);

}


function displayBusinessInfo(business) {
    const spotlight2 = document.querySelector(".spotlight2");
  
    const name = document.createElement("h3");
    name.textContent = business.name;
  
    const address = document.createElement("p");
    address.textContent = business.address;
  
    const phone = document.createElement("p");
    phone.textContent = business.phone;
  
    const url = document.createElement("a");
    url.href = business.url;
    url.textContent = "Visit Website";
  
    const image = document.createElement("img");
    image.src = business.imageurl;
    image.alt = `${business.name} logo`;
  
  
    spotlight2.appendChild(name);
    spotlight2.appendChild(address);
    spotlight2.appendChild(phone);
    spotlight2.appendChild(url);
    spotlight2.appendChild(image);

  }

  
function displayBusinessInfo(business) {
    const spotlight3 = document.querySelector(".spotlight3");
  
    const name = document.createElement("h3");
    name.textContent = business.name;
  
    const address = document.createElement("p");
    address.textContent = business.address;
  
    const phone = document.createElement("p");
    phone.textContent = business.phone;
  
    const url = document.createElement("a");
    url.href = business.url;
    url.textContent = "Visit Website";
  
    const image = document.createElement("img");
    image.src = business.imageurl;
    image.alt = `${business.name} logo`;


    spotlight3.appendChild(name);
    spotlight3.appendChild(address);
    spotlight3.appendChild(phone);
    spotlight3.appendChild(url);
    spotlight3.appendChild(image);
  }