var express=require('express');
var app=express();
var morgan = require('morgan');
var mongoos=require('mongoose')
app.use(morgan('dev'));
var path=require('path');
var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/rbk3-mvp'));
app.use(express.static(__dirname + '/'));

//api file for comminucating with mongoDB
// var api=require('route/api')
// app.use('/api',api)

var Port=process.env.Port||5301;

// mongoose.connect(db.database,function(err){
// 	if(err){
// 		console.log(err)
// 	}
// 	console.log('connecting with database')
// })

app.get('/',function(req,res){
	res.sendFile(__dirname+'/homePage.html');
});
app.get('/todos',function(req,res){
	res.sendFile(__dirname+'/todos.html');
})


console.log('Server is listening in Port: ',Port)


app.listen(Port);