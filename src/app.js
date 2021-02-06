const express = require("express")
const morgan = require("morgan")
const helmet = require("helmet")
const cors = require("cors")


require("dotenv").config()

const {handler} = require("./lambda")

const app = express()

app.use(morgan("dev"))
app.use(helmet())
app.use(cors())
app.use(express.json())

app.use(express.static(`${__dirname}/assets`))

app.get("/", (req, res) => {
	res.json({
		message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄"
	})
})

app.all('/', async (req, res) => {
    const response = await handler({body: JSON.stringify(req.body)})
    return res.set(response.headers).send(response.body)
})

module.exports = app