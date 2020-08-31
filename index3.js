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

//Desimal
app.post("/convert/desimal", (req,res) => {
    let d = Number(req.body.d) 

    let b = parseInt(d, 10).toString(2)
    let o = parseInt(d, 10).toString(8)
    let h = parseInt(d, 10).toString(16)

    let response = {
        Desimal: d,
        Biner: b,
        Oktal: o,
        HexaDsimal: h
    }

    res.json(response)
})

//Biner
app.post("/convert/biner", (req,res) => {
    let b = Number(req.body.b) 

    let d = parseInt(b, 2).toString(10)
    let o = parseInt(b, 2).toString(8)
    let h = parseInt(b, 2).toString(16)

    let response = {
        Biner: b,
        Desimal: d,
        Oktal: o,
        HexaDsimal: h
    }

    res.json(response)
})

//Oktal
app.post("/convert/oktal", (req,res) => {
    let o = Number(req.body.o) 

    let b = parseInt(o, 8).toString(2)
    let d = parseInt(o, 8).toString(10)
    let h = parseInt(o, 8).toString(16)

    let response = {
        Oktal: o,
        Biner: b,
        Desimal: d,
        HexaDsimal: h
    }

    res.json(response)
})

//Hexadesimal
app.post("/convert/hexa", (req,res) => {
    let h = req.body.h

    let b = parseInt(h, 16).toString(2)
    let o = parseInt(h, 16).toString(8)
    let d = parseInt(h, 16).toString(10)

    let response = {
        HexaDsimal: h,
        Biner: b,
        Desimal: d,
        Oktal: o
    }

    res.json(response)
})