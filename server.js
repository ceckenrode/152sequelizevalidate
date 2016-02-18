var express = require('express');
var expressHandlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');

var PORT = process.env.NODE_ENV || 8080;

var sequelize = new Sequelize('hashdb', 'root');

var register = sequelize.define('Register', {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isAlpha: true
    }
  },
  password: {
    type: Sequelize.STRING,
    validate: {
      len: [2]
    }
  }
});

var app = express();

app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', function(req, res){
  res.render('index');
})

app.post('/', function(req, res){
var pass = req.body.password;
if (pass.length() > 7){
  bcrypt.hash()
  res.redirect('/');
}
})

app.listen(PORT, function(){
  console.log("listening!");
});
