// import axios from "axios";

// axios.defaults.headers.common["x-api-key"] = "live_LK29Yyc5d6HpqrbOdMOoKlvDw6B1nloufHgqastPSHYeMSNxPI5Cb6DASn28UB4b";
import { fetchBreeds } from "./cat-api";
import {fetchCatByBreed} from "./cat-api";

const refs = {
    select: document.querySelector('.breed-select'),
  div: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
}
hideElement(refs.error);
hideElement(refs.loader)
function showElement(element) {
  element.style.display = 'block';
}

function hideElement(element) {
  element.style.display = 'none';
}
fetchBreeds()
  .then(result => {
    
    const markup = result.map(({ id, name }) => {
      return `<option value = "${id}">${name}</option>}`;
    }).join('');

    refs.select.innerHTML = markup;
  })
  

refs.select.addEventListener("change", () => {
  const selectedBreedId = refs.select.value;
    hideElement(refs.div); 
    showElement(refs.loader);
    hideElement(refs.error)
    fetchCatByBreed(selectedBreedId)
      .then(catData => {
        const catImage = catData[0].url;
        const catName = catData[0].breeds[0].name;
        const catDescription = catData[0].breeds[0].description;
        const catTemperament = catData[0].breeds[0].temperament;
        
        const catInfoHTML = `
          <img src="${catImage}" width='700' height='550' alt="${catName}">
          <h2>${catName}</h2>
          <p>${catDescription}</p>
          <p>Temperament: ${catTemperament}</p>`;
        refs.div.innerHTML = catInfoHTML;
        hideElement(refs.loader); 
        showElement(refs.div); 
      })
      .catch(error => {
        console.log(error);
        showElement(refs.error);
        hideElement(refs.loader);
      });
      
});
