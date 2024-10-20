const express = require("express")
require("dotenv").config()

const mailRoutes = require("./routes/mailRoutes")

const app = express()
const port = 3000

app.use("/api/mail", mailRoutes)

app.listen(port, () => {
  console.log(`Server is running in port: ${port}`)
})
