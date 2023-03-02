const fetchButton = document.querySelector('#fetch-button');
const swContainer = document.querySelector('#sw-container');

fetchButton.addEventListener('click', () => {
  const randomCharId = Math.floor(Math.random() * 83) + 1; // There are 83 characters in SWAPI
  const apiUrl = `https://swapi.dev/api/people/${randomCharId}/`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const charName = data.name;
      const charGender = data.gender;
      const charBirthYear = data.birth_year;

      const charInfo = `
        <h2>${charName}</h2>
        <p>Gender: ${charGender}</p>
        <p>Birth year: ${charBirthYear}</p>
      `;

      swContainer.innerHTML = charInfo;
    })
    .catch(error => console.log(error));
});