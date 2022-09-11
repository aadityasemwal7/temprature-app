const express = require("express")
const https = require("https")

const app = express()

app.get("/", (req, res) =>{
	const url = "https://api.openweathermap.org/data/2.5/weather?appid=62c9718ee0614597f0692e741080504c&q=delhi&units=metric"
	https.get(url, (response) => {
		console.log(response.statusCode);
	})

	res.send("server is up and running")
})







app.listen(3000, () => {
	console.log('server running on port 3000.');
})