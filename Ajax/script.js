let URI = "https://api.teleport.org/api/urban_areas/";

let cities = [];

  fetch(URI)
    .then((response) => response.json())
    .then((data) => {
      cities = [...data._links["ua:item"]];
    });

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");
let image = document.querySelector("img");
let cityTitle = document.querySelector(".city-title");

// searchInput.addEventListener("change", displayMatches);
suggestions.addEventListener("click", displayCityInfo);
searchInput.addEventListener("input", displayMatches); //The input event works on keyboard devices and with touchscreen devices. Input event will not be triggered by all keys (CTRL, ALT & co. will not fire the event

function findMatches(wordToMatch, cities) {
	return cities.filter((city) => {
		const regex = new RegExp(wordToMatch, "gi");
		return city.name.match(regex);
	});
}

function displayMatches() {
	cityTitle.innerHTML = "";
	image.setAttribute("src", "");
	image.setAttribute("alt", "");

	const matchArray = findMatches(this.value, cities);
	const html = matchArray
		.map((city) => {
			const regex = new RegExp(this.value, "gi");
			const cityName = city.name.replace(
				regex,
				`<span class="hl">${this.value.toLowerCase()}</span>`
			);

			return `
      <li>
        <span class="name" data-city="${city.name}">${cityName}</span>
      
      </li>
    `;
		})
		.join("");
	suggestions.innerHTML = html;
}

function displayCityInfo(event) {
	suggestions.innerHTML = "";
	const clickedElement = event.target.closest("li");
	let cityName = clickedElement
		.querySelector(".name")
		.getAttribute("data-city")

		.toLowerCase()
		.replace(/\./g, "") //replace all dots
		.split(/[\s,]+/)
		.join("-");
	getCityLocation(cityName);
	getCityImage(cityName);
}

async function getCityLocation(cityName) {
  try {
    await fetch(`${URI}slug:${cityName}/`)
      .then((response) => response.json())
      .then((data) => {
        cityTitle.innerHTML = `${data.full_name}`;
      });
  } catch(error){
    console.log(error);
    cityTitle.innerText = `Could not load location`;
  }
}

async function getCityImage(cityName) {
  try{
    await fetch(`${URI}slug:${cityName}/images/`)
      .then((response) => response.json())
      .then((data) => {
        image.setAttribute("src", data.photos[0].image.mobile);
        image.setAttribute("alt", `${cityName}`);
      });
  } catch(error){
    console.log(error);
    err = document.querySelector(".error");
    err.innerText = "Could not load image"
  }
  }
