const express = require("express")
const https = require("https")

const app = express()

app.get("/", (req, res) =>{
	const url = "https://api.openweathermap.org/data/2.5/weather?appid=62c9718ee0614597f0692e741080504c&q=toronto&units=metric"
	https.get(url, (response) => {
		console.log(response.statusCode);
		response.on('data', (data) => {
			const weatherData = JSON.parse(data)
			const temp = weatherData.main.temp
			const description = weatherData.weather[0].description
			const icon = weatherData.weather[0].icon
			const imageUrl = "http://openweathermap.org/img/wn/" + icon  + "10d@2x.png"
			const cityName = weatherData.name
			const countryName = weatherData.sys.country
			res.write(`<h1>The temprature in ${cityName} is ${temp} degree celcius.</h1>`)	
			res.write(`<h2>Current status is ${description}.</h2>`)
			res.write("<img src=' + imageUrl +'>")
			res.send()
		})
	})

})







app.listen(3000, () => {
	console.log('server running on port 3000.');
})