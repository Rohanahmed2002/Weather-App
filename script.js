const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '46462efbd8msh2689f6b131b3494p138930jsn74c2b602e28f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather = (city) =>{
cityName.innerHTML = city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) =>{ console.log(response)
	
	// cloud_pct.innerHTML = response.cloud_pct
	temp.innerHTML = response.temp
	temp2.innerHTML = response.temp
	feels_like.innerHTML =response.feels_like
	humidity.innerHTML = response.humidity
	humidity2.innerHTML = response.humidity
	max_temp.innerHTML = response.max_temp
	min_temp.innerHTML = response.min_temp
	sunrise.innerHTML = response.sunrise
	sunset.innerHTML = response.sunset
	wind_speed.innerHTML = response.wind_speed
	wind_speed2.innerHTML = response.wind_speed
	wind_degrees.innerHTML = response.wind_degrees
	})
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
	e.preventDefault(); //prevents reloading of page
	getweather(city.value)
})
getweather("Karachi")

const getweather2 = (city2) =>{
	newyork.innerHTML = city2;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city2, options)
		.then(response => response.json())
		.then((response) =>{ console.log(response)
		
		// cloud_pct.innerHTML = response.cloud_pct
		temp3.innerHTML = response.temp
		max_temp3.innerHTML = response.max_temp
		min_temp3.innerHTML = response.min_temp
		// temp2.innerHTML = response.temp
		feels_like3.innerHTML =response.feels_like
		humidity3.innerHTML = response.humidity
		// humidity2.innerHTML = response.humidity
		wind_speed3.innerHTML = response.wind_speed
		// wind_speed2.innerHTML = response.wind_speed
		wind_degrees3.innerHTML = response.wind_degrees
		sunrise3.innerHTML = response.sunrise
		sunset3.innerHTML = response.sunset
		
		})
		.catch(err => console.error(err));
	}
	
	submit.addEventListener("click", (e)=>{
		e.preventDefault(); //prevents reloading of page
		getweather2(city2.value)
	})
	getweather2("New York")

	const getweather3 = (city3) =>{
		toronto.innerHTML = city3;
		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city3, options)
			.then(response => response.json())
			.then((response) =>{ console.log(response)
			
			// cloud_pct.innerHTML = response.cloud_pct
			temp4.innerHTML = response.temp
			max_temp4.innerHTML = response.max_temp
			min_temp4.innerHTML = response.min_temp
			// temp2.innerHTML = response.temp
			feels_like4.innerHTML =response.feels_like
			humidity4.innerHTML = response.humidity
			// humidity2.innerHTML = response.humidity
			wind_speed4.innerHTML = response.wind_speed
			// wind_speed2.innerHTML = response.wind_speed
			wind_degrees4.innerHTML = response.wind_degrees
			sunrise4.innerHTML = response.sunrise
			sunset4.innerHTML = response.sunset
			
			})
			.catch(err => console.error(err));
		}
		
		submit.addEventListener("click", (e)=>{
			e.preventDefault(); //prevents reloading of page
			getweather3(city3.value)
		})
		getweather3("Toronto")



		const getweather4 = (city4) =>{
			sydney.innerHTML = city4;
			fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city4, options)
				.then(response => response.json())
				.then((response) =>{ console.log(response)
				
				// cloud_pct.innerHTML = response.cloud_pct
				temp5.innerHTML = response.temp
				max_temp5.innerHTML = response.max_temp
				min_temp5.innerHTML = response.min_temp
				// temp2.innerHTML = response.temp
				feels_like5.innerHTML =response.feels_like
				humidity5.innerHTML = response.humidity
				// humidity2.innerHTML = response.humidity
				wind_speed5.innerHTML = response.wind_speed
				// wind_speed2.innerHTML = response.wind_speed
				wind_degrees5.innerHTML = response.wind_degrees
				sunrise5.innerHTML = response.sunrise
				sunset5.innerHTML = response.sunset
				
				})
				.catch(err => console.error(err));
			}
			
			submit.addEventListener("click", (e)=>{
				e.preventDefault(); //prevents reloading of page
				getweather4(city4.value)
			})
			getweather4("Sydney")


			const getweather5 = (city5) =>{
				london.innerHTML = city5;
				fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city5, options)
					.then(response => response.json())
					.then((response) =>{ console.log(response)
					
					// cloud_pct.innerHTML = response.cloud_pct
					temp6.innerHTML = response.temp
					max_temp6.innerHTML = response.max_temp
					min_temp6.innerHTML = response.min_temp
					// temp2.innerHTML = response.temp
					feels_like6.innerHTML =response.feels_like
					humidity6.innerHTML = response.humidity
					// humidity2.innerHTML = response.humidity
					wind_speed6.innerHTML = response.wind_speed
					// wind_speed2.innerHTML = response.wind_speed
					wind_degrees6.innerHTML = response.wind_degrees
					sunrise6.innerHTML = response.sunrise
					sunset6.innerHTML = response.sunset
					
					})
					.catch(err => console.error(err));
				}
				
				submit.addEventListener("click", (e)=>{
					e.preventDefault(); //prevents reloading of page
					getweather5(city5.value)
				})
				getweather5("London")