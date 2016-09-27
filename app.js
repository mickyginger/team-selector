const express = require('express');
const app = express();

const morgan = require('morgan');
const ejsLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

const teams = require('./lib/teams');

const dbUri = require('./config/database').uri;
const port = process.env.PORT || 8000;

mongoose.connect(dbUri);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(morgan('dev'));

app.use(ejsLayouts);
app.use(express.static('public'));

app.get("/", (req, res) => {

  return teams.get(function(err, teams){
    if(err) return res.status(500).end();
    return res.render('index', { teams: teams.teams });
  });

});

app.get("*", (req, res) => {
  res.redirect('/');
});

app.listen(port, () => { console.log("Express is listening on port " + port); });
