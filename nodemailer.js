const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASS
    }
});

const welcomeMail = (name, email) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Welcome to Gratitude!',
        text: `Hey ${name}!\nCongratulations on starting your journey towards gratitude and an overall happier life!
        \nResearch has show that just by listing 3 things you are grateful each day and journaling about something that went well, you will be a lot happier.
        \nIt teaches your brain to think about the things you have instead of everything you don't have.
        \nTry and stick with these two easy activities for 21 days to form a strong habbit.
        \nEnjoy your day!
        \nWarm regards,\n\nGratitude Team`
    }
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = welcomeMail;