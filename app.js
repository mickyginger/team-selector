const express = require('express');
const app = express();

const morgan = require('morgan');
const ejsLayouts = require('express-ejs-layouts');
const moment = require('moment');
const teams = require('./lib/teams');

const port = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(morgan('dev'));

app.use(ejsLayouts);
app.use(express.static('public'));

let currentTeams = [];
let lastShuffleWeek = 0;

app.get("*", (req, res) => {
  let now = moment();
  if(currentTeams.length === 0 || lastShuffleWeek < now.week()) {
    currentTeams = teams.generate();
    lastShuffleWeek = now.week();
  }
  return res.render('index', { teams: currentTeams });
});

app.listen(port, () => { console.log("Express is listening on port " + port); });
