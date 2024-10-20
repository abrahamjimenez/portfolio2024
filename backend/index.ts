const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
require("dotenv").config()

const mailRoutes = require("./routes/mailRoutes")

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

app.use("/api/mail", mailRoutes)

app.listen(port, () => {
  console.log(`Server is running in port: ${port}`)
})
