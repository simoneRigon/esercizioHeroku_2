//express lib
var express = require('express');
//general lib
var app = express();

app.set('port', (process.env.PORT || 5000));

var body_parser = require('body-parser');
app.use(body_parser.urlencoded({extended: false}));

app.use('/init', function(request, response) 
{
	
	response.writeHead(200, {'Content-Type': 'text/html'});
    
    var text = '';
    
    if(typeof request.body !== 'undefined' && request.body){
        var name;
        var lastName;
        if(typeof request.body.name !== 'undefined' && request.body.name){
            name = request.body.name;
        }else{
            name = 'none';
        }
        if(typeof request.body.lastname !== 'undefined' && request.body.lastname){
            lastName = request.body.lastname;
        }else{
            lastName = 'none';
        }
        text = 'I recive: Name: ' + name + ', lastname: ' + lastName;
    }else{
        text = 'body undefined';
    }
    
    response.end(text);
  	
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});