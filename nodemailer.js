var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'username.com',
    pass: 'password'
  }
});

var mailOptions = {
  from: 'john.arikkat001@gmail.com',
  to: 'john.arikkat001@gmail.com',
  subject: 'Node JS',
  text: 'Hi john, you are already making great progress in studyind this node js shit!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});