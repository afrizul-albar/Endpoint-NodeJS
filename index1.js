const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.listen(3000, () => {
    console.log("Server run on port 3000")
})

//Endpoint 1
app.post("/balok", (req,res) => {
    
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)

    let volume = panjang * lebar * tinggi
    let luasPermukaan = 2 * (panjang*lebar + panjang*tinggi + tinggi*lebar)

    let response= {
        nama: "Balok",
        volume: volume,
        luasPermukaan: luasPermukaan
    }

    res.json(response)
})

//Endpoint 2
app.post("/kubus", (req,res) => {
    
    let rusuk = Number(req.body.rusuk)
    
    let volume = rusuk**3
    let luasPermukaan = 6 * (rusuk**2)

    let response = {
        nama: "Kubus",
        volume: volume,
        luasPermukaan: luasPermukaan
    }

    res.json(response)
})

//Endpoint 3
app.post("/bola", (req,res) => {
    
    let jarijari =  Number(req.body.jarijari)

    let volume = 4/3 * 3.14 * jarijari**3
    let luasPermukaan = 4 * 3.14 * jarijari**2

    let response = {
        nama: "Bola",
        volume: volume,
        luasPermukaan: luasPermukaan,
    }

    res.json(response)
})

//Endpoint 4
app.post("/tabung", (req,res) => {

    let jarijari =  Number(req.body.jarijari)
    let tinggi = Number(req.body.tinggi)

    let volume = 3.14 * (jarijari**2) * tinggi
    let luasPermukaan = 2 * 3.14 * jarijari * (tinggi + jarijari)

    let response = {
        nama: "Tabung",
        volume: volume,
        luasPermukaan: luasPermukaan,
    }

    res.json(response)
})