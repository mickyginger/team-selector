let students = [
  "Oli Moore",
  "Michael Grandison",
  "Gisel Armando",
  "Nicholas Martiny Roberts",
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
  "Assanbek  Okayev",
  "William  Whitmey",
  "Jamie  Simpson",
  "Elliot  Mountford-Brock",
  "Dara  De Casa",
  "John  Evans"
];

let teams = [];

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

for(let i=0;i<10;i++) {
  students = shuffle(students);
}

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
      i++;
    }
  }
}
