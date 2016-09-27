const Teams = require('../models/teams');
const moment = require('moment');

const students = [
  "Oli Moore",
  "Michael Grandison",
  "Gisel Armando",
  "Natalie Pateman",
  "Lee Cash",
  "Thea Carter",
  "Kiwayne Campbell",
  "Curtis Osano",
  "Eduardo Fasano",
  "Luke Reynolds",
  "Ervis Priftis",
  "Chris Norman",
  "Edward Davies",
  "Sarah Penney",
  "William Hilton",
  "Oliver  Fennelly",
  "Marco  Servidio",
  "Dan  Krijgsman",
  "Aaron Hall",
  "Filipp  Korentsvit",
  "Jane  Maguire",
  "Laurie  Platt-McWall",
  "Luke  Hammond",
  "Peter  Williams",
  "Caroline  Wilson",
  "William  Whitmey",
  "Jamie  Simpson",
  "Elliot  Mountford-Brock",
  "Dara  De Casa",
  "John  Evans"
];

function shuffle(arr) {
  let len = arr.length;
  while(len) {
    let i = Math.floor(Math.random()*len--);
    let temp = arr[len];
    arr[len] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

function shuffleStudents() {
  let _students = students.slice();
  for(let i=0;i<10;i++) {
    _students = shuffle(_students);
  }

  return _students;
}

function generateTeams(next) {

  let now = moment();

  Teams.collection.drop();

  let students = shuffleStudents();
  let teams = [];
  // split the students into teams of 3
  while(students.length > 0) {
    teams.push(students.splice(0,3));
  }

  // handle remainders
  if(teams[teams.length-1].length < 3) {
    let lastElem = teams.splice(-1)[0];

    if(lastElem.length < 3) {
      let i = 0;
      while(lastElem.length > 0) {
        teams[i].push(lastElem.splice(0,1)[0]);
        i += Math.floor(teams.length/2);
      }
    }
  }

  Teams.create({
    teams: teams,
    lastUpdated: now.week()
  }, next);
}

function get(next) {
  let now = moment();

  Teams.findOne({ lastUpdated: now.week() }, function(err, teams) {
    if(err) return next(err);
    if(!teams) return generateTeams(next);
    return next(err, teams);
  });
}

module.exports = {
  get: get
};
