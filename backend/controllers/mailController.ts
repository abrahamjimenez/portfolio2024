import {Request, Response} from "express";
import type {Options} from "nodemailer/lib/mailer";
import type {SentMessageInfo} from "nodemailer/lib/smtp-transport";

const asyncHandler = require("express-async-handler")
const nodemailer = require("nodemailer")

const sendMail = asyncHandler(async (req: Request, res: Response) => {
  const {email, message} = req.body

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 456,
    secure: true,
    auth: {
      user: process.env.GMAIL,
      pass: process.env.GOOGLE_PASSWORD,
    },
  });

  const mailOptions: Options = {
    from: process.env.GMAIL,
    to: "abraham.jimenez.romo@proton.me",
    subject: email,
    text: message
  }

  transporter.sendMail(mailOptions, (error: Error | null, info: SentMessageInfo) => {
    if (error) {
      console.error("Error sending email: ", error)
      res.status(500).json({message: "Error sending email"})
    } else {
      console.log("Email sent: ", info.response)
      res.status(200).json({message: "Email sent successfully"})
    }
  })
})

module.exports = {
  sendMail
}
