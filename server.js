// import nodemailer from "nodemailer"
// import {google} from "googleapis"
// import config from "./config";

const nodemailer = require('nodemailer')
const {google} = require('googleapis')
const config = require('./config.js')




const OAuth2 = google.auth.OAuth2;




const OAuth2_Client = new OAuth2(config.clientId,config.clientSecret)

OAuth2_Client.setCredentials({ refresh_token : config.refreshToken })




function send_mail(name,recipient) {

    const accessToken = OAuth2_Client.getAccessToken()

    const transport = nodemailer.createTransport({
        service:'gmail',
        auth:{
            type:'OAuth2',
            user:config.user,
            clientId:config.clientId,
            clientSecret:config.clientSecret,
            refreshToken:config.refreshToken,
            accessToken:accessToken
        }

    })


    const mail_options = {
        from :config.user,
        to: recipient,
        subject:"This is to test",
        html:'<h1>Hii this is the body of text</h1>'
    }



    transport.sendMail(mail_options,function(error,result){
        if(error){
            console.log( 'Error', error)
        }else{
            console.log( 'Success', result)
        }

        transport.close()
    })






    
}




send_mail('Suraj','surajsinghsultan222@gmail.com')