const path = require('path')
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASS
    }
});

const handlebarOptions = {
  viewEngine: {
    extName: ".handlebars",
    partialsDir: path.resolve('./views'),
    defaultLayout: false,
  },
  viewPath: path.resolve('./views'),
  extName: ".handlebars",
}

transporter.use('compile', hbs(handlebarOptions));

const welcomeMail = (name, email) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Welcome to Gratitude!',
        template: 'email',
        context: {
          name: name,
        }
    };
      
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = welcomeMail;