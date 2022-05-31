
const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "d38cfbffd8f9ff", // generated ethereal user
      pass: "5283e41503f045", // generated ethereal password
    },
  });
