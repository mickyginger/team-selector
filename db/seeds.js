const mongoose = require('mongoose');
const dbUri = require('../config/database').uri;
const Teams = require('../models/teams');

mongoose.connect(dbUri);

Teams.collection.drop();

Teams.create({
  teams: [
    [
      "Elliot  Mountford-Brock",
      "Marco  Servidio",
      "Ervis Priftis"
    ],
    [
      "Luke  Hammond",
      "Laurie  Platt-McWall",
      "Thea Carter"
    ],
    [
      "Jamie  Simpson",
      "Natalie Pateman",
      "Kiwayne Campbell"
    ],
    [
      "William  Whitmey",
      "Filipp  Korentsvit",
      "Caroline  Wilson"
    ],
    [
      "Aaron Hall",
      "Jane  Maguire",
      "Curtis Osano"
    ],
    [
      "Chris Norman",
      "John  Evans",
      "Luke Reynolds"
    ],
    [
      "Gisel Armando",
      "Oliver  Fennelly",
      "Sarah Penney"
    ],
    [
      "Eduardo Fasano",
      "Dara  De Casa",
      "Peter  Williams"
    ],
    [
      "Edward Davies",
      "Dan  Krijgsman",
      "Lee Cash"
    ],
    [
      "Oli Moore",
      "Michael Grandison",
      "William Hilton"
    ]
  ],
  lastUpdated: 40
}, function(err, teams) {
  if(err) console.log("Something went wrong. :(", err);
  console.log("Teams updated", teams);
  mongoose.connection.close();
});
