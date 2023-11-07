//jshint eversion:6

const express = require('express');


const app = express();


const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
            res.sendFile( __dirname + "/index.html");
});


app.post("/", function (request, response) {

    // response.send("thanks for posting that")

    
function scrambleFunction () {

    var textToScramble = request.body.texttoscramble
    var text = request.body.text

    result = text.includes(textToScramble)
    
   if (result === true) {
    resultNow = text.replace(textToScramble, '****')
    // textToScramble = '****'
   }

    return(resultNow);
}


// let text = "Visit Microsoft!";
// let result = text.replace("Microsoft", "W3Schools");

scrambleFunction();


    // var textToScramble = "****"
    response.send(scrambleFunction());
})

app.listen(3800, function(){
    console.log("Server started on port 3800");
});