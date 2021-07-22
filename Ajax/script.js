

    let endpoint = "https://api.teleport.org/api/urban_areas/";
	
		let cities = [];
		fetch(endpoint)
			.then((response) => response.json())
			.then((data) => {
				cities=[...data._links["ua:item"]]
			
        console.log(cities)
			});
     

      const searchInput = document.querySelector(".search");
			const suggestions = document.querySelector(".suggestions");

      // searchInput.addEventListener("change", displayMatches);
      suggestions.addEventListener("click", displayCityInfo)
      searchInput.addEventListener("input", displayMatches); //The input event works on keyboard devices and with touchscreen devices. Input event will not be triggered by all keys (CTRL, ALT & co. will not fire the event

      function findMatches(wordToMatch, cities) {
				return cities.filter((city) => {
					const regex = new RegExp(wordToMatch, "gi");
					return city.name.match(regex) ;
				});
			}

      function displayMatches() {
				const matchArray = findMatches(this.value, cities);
        console.log(matchArray);
				const html = matchArray.map((city) => {
						const regex = new RegExp(this.value, "gi");
						const cityName = city.name.replace(
							regex,
							`<span class="hl">${this.value}</span>`
						);
						
						return `
      <li>
        <span class="name">${cityName}</span>
      
      </li>
    `;
					})
					.join("");
				suggestions.innerHTML = html;
			}

      function displayCityInfo() {
        let city = document.querySelector(".name");
        console.log(city)
        suggestions.innerHTML = "";
// fetch(this.)
// 	.then((response) => response.json())
// 	.then((data) => {
// 		cities = [...data._links["ua:item"]];

// 		console.log(cities);
// 	});
      }