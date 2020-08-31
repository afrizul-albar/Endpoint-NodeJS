const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.listen(3000, () => {
    console.log("Server run on port 3000");
})

//Endpoint 1
app.get("/convert/celcius/:nilai", (req,res) => {
    //number utk memberi nilai int, params utk mengikuti parameter nilai
    let nilai = Number(req.params.nilai);

    let reamur = 4/5 * nilai;
    let fahrenheit = (9/5 * nilai) + 32;
    let kelvin = nilai + 273;

    let response = {
        celcius: nilai,
        result: {
            reamur: reamur,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        }
    }

    res.json(response)

})

//Endpoint 2
app.get("/convert/reamur/:nilai", (req,res) => {
    //number utk memberi nilai int, params utk mengikuti parameter nilai
    let nilai = Number(req.params.nilai);

    let celcius = 5/4 * nilai;
    let fahrenheit = (9/4 * nilai) + 32;
    let kelvin = 5/4 * nilai + 273;

    let response = {
        reamur: nilai,
        result: {
            celcius: celcius,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        }
    }

    res.json(response)

})

//Endpoint 3
app.get("/convert/kelvin/:nilai", (req,res) => {
    //number utk memberi nilai int, params utk mengikuti parameter nilai
    let nilai = Number(req.params.nilai);

    let celcius = nilai - 273;
    let fahrenheit = (nilai - 273) *    9 / 5 + 32;
    let reamur = 4/5 * (nilai - 273);

    let response = {
        kelvin: nilai,
        result: {
            celcius: celcius,
            fahrenheit: fahrenheit,
            reamur: reamur
        }
    }

    res.json(response)

})

//Endpoint 4
app.get("/convert/fahrenheit/:nilai", (req,res) => {
    //number utk memberi nilai int, params utk mengikuti parameter nilai
    let nilai = Number(req.params.nilai);

    let celcius = 5/9 * (nilai - 32);
    let reamur = 4/9 * (nilai - 32);
    let kelvin = ((nilai - 32) * 5 / 9) + 273;

    let response = {
        fahrenheit: nilai,
        result: {
            celcius: celcius,
            reamur: reamur,
            kelvin: kelvin
        }
    }

    res.json(response)

})