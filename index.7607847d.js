!function(){var e={select:document.querySelector(".breed-select"),div:document.querySelector(".cat-info"),loader:document.querySelector(".loader"),error:document.querySelector(".error")};function n(e){e.style.display="block"}function o(e){e.style.display="none"}o(e.error),o(e.loader),fetch("".concat("https://api.thecatapi.com/v1/breeds","?api_key=").concat("live_LK29Yyc5d6HpqrbOdMOoKlvDw6B1nloufHgqastPSHYeMSNxPI5Cb6DASn28UB4b")).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(e){return e})).catch((function(e){throw console.error("Помилка отримання порід:",e),e})).then((function(n){var o=n.map((function(e){var n=e.id,o=e.name;return'<option value = "'.concat(n,'">').concat(o,"</option>}")})).join("");e.select.innerHTML=o})),e.select.addEventListener("change",(function(){var t,r,c=e.select.value;o(e.div),n(e.loader),o(e.error),(t=c,r="https://api.thecatapi.com/v1/images/search?breed_ids=".concat(t),fetch(r,{method:"GET",headers:{"x-api-key":"live_LK29Yyc5d6HpqrbOdMOoKlvDw6B1nloufHgqastPSHYeMSNxPI5Cb6DASn28UB4b"}}).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).catch((function(e){throw console.error("Помилка отримання даних про котів:",e),e}))).then((function(t){var r=t[0].url,c=t[0].breeds[0].name,a=t[0].breeds[0].description,i=t[0].breeds[0].temperament,s='\n          <img src="'.concat(r,"\" width='700' height='550' alt=\"").concat(c,'">\n          <h2>').concat(c,"</h2>\n          <p>").concat(a,"</p>\n          <p>Temperament: ").concat(i,"</p>");e.div.innerHTML=s,o(e.loader),n(e.div)})).catch((function(t){console.log(t),n(e.error),o(e.loader)}))}))}();
//# sourceMappingURL=index.7607847d.js.map