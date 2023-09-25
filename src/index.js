// import axios from "axios";

// axios.defaults.headers.common["x-api-key"] = "live_LK29Yyc5d6HpqrbOdMOoKlvDw6B1nloufHgqastPSHYeMSNxPI5Cb6DASn28UB4b";
import { fetchBreeds } from "./cat-api";

const refs = {
    select: document.querySelector('.breed-select'),
    div: document.querySelector('.cat-info'),
}


fetchBreeds()
  .then(result => {
    const markup = result.map(({ id, name }) => {
      return `<option value = "${id}">${name}</option>}`;
    }).join('');

    refs.select.innerHTML = markup;
  })
  .catch(error => {
    console.error("Помилка обробки даних:", error);
  });