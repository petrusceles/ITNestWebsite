require('dotenv').config()
import Validator from 'fastest-validator'
import nodemailer from 'nodemailer'
const {
    EMAIL,PASSWORD,EMAIL_TO
} = process.env
const v = new Validator();
export default function handler(req,res) {
    if (req.method === 'POST') {
        const data = req.body
        const emailContent = `from : ${data.email}\nname : ${data.name}\nmessage : ${data.message}`;
    
        const schema = {
            email: { type: "email"},
            name: { type: "string"},
            message: { type: "string", min: 3}
        };
    
        const check = v.compile(schema);
        const validationResult = check(data)
        if (validationResult != true) {
            return res.status(400).json({
                data:validationResult
            })
        }
    
        let mailTransporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
                user: EMAIL,
                pass: PASSWORD
            }
        })
    
        let mailDetails = {
            from: EMAIL,
            to:EMAIL_TO,
            subject:'BUSINESS',
            text:emailContent
        }
        mailTransporter.sendMail(mailDetails, (err,data) => {
            if (err) {
                res.status(500).json({
                    data:err
                })
            }
        })


        return res.status(200).json({
            data:'email sent'
        })
    }
}