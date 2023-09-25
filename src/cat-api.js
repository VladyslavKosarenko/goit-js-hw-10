export function fetchBreeds() {
  const url = 'https://api.thecatapi.com/v1/breeds';
  const apiKey = "live_LK29Yyc5d6HpqrbOdMOoKlvDw6B1nloufHgqastPSHYeMSNxPI5Cb6DASn28UB4b";

  return fetch(`${url}?api_key=${apiKey}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(result => {
      console.log(result);
      return result;
    })
    .catch(error => {
      console.error("Помилка отримання порід:", error);
      throw error;
    });
}