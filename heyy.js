function emailsend(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "muhammedijas793@gmail.com",
        Password : "3C749EE84B21A7E0A723C23156BFA49E9327",
        To : 'mijas3521@gmail.com',
        From : "muhammedijas793@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );

}