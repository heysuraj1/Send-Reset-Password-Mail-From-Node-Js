// var nodemailer = require('nodemailer');
import nodemailer from "nodemailer";

var val = Math.floor(10000 + Math.random() * 90000);
// console.log(val);

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kumarniteshoffice786@gmail.com",
    pass: "Nitesh@786",
  },
});

var mailOptions = {
  from: "kumarniteshoffice786@gmail.com",
  to: "surajsinghsultan222@gmail.com",
  subject: "Sending Email using Node.js",
  html: `

    <h1>  Hii This Is Your Code Please Keep It Private   </h1>
    <p>  hey buddy your secret code is <span style="font-weight: bold;" >${val}</span>   </p>
    
    
    
    
    
    
    `,
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
