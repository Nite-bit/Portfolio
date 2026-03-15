const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/contact", async (req, res) => {

const { name, email, subject, message } = req.body;

try {

const transporter = nodemailer.createTransport({
service: "gmail",
auth: {
user: process.env.EMAIL,
pass: process.env.PASSWORD
}
});

const mailOptions = {
from: email,
to: process.env.EMAIL,
subject: subject,
text: `
Name: ${name}
Email: ${email}
Message: ${message}
`
};

await transporter.sendMail(mailOptions);

res.json({ success: true, message: "Email Sent Successfully" });

} catch (error) {

console.log(error);
res.json({ success: false });

}

});

app.listen(5000, () => {
console.log("Server running on port 5000");
});