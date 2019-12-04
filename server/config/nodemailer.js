import nodemailer from "nodemailer";
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'community.gotogether@gmail.com',
        pass: 'SAIF saif 366'
    }
})
export {
    transporter
}