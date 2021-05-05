import nodemailer from "nodemailer";

let testAccount = await nodemailer.createTestAccount();

const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
    },
});

async function sendEmail(emailBody) {
    // send mail with defined transport object
    let info = await email.transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "samalaaravind02@gmail.com, aravind.reddy@certifyglobal.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: emailBody, // plain text body
        html: "<b>Hello world?</b>", // html body
    });


    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...


}

export { sendEmail }