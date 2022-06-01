const nodemailer = require('nodemailer');
const transporterConfig = require('../config/nodemailer');

const sendEmail = (values) => new Promise((resolve, reject) => {
  const transporter = nodemailer.createTransport(transporterConfig);
  const mailOptions = {
    from: process.env.NODEMAILER_AUTH_USER,
    to: process.env.NODEMAILER_TO_USER,
    subject: 'Calcs',
    text: `Nome: ${values.name} - Sugestão: ${values.sugestion}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(`Error: ${error}`);
      reject(false);
    } else {
      console.log(`Success: ${info.response}`);
      resolve(true);
    }
  });
});

module.exports = {
  sendEmail,
}; 