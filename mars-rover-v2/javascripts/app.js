
let rover= {
  direction: "N",
  position: {x: 0, y:0},
  travelLog: [],
}

let stone= {
  direction: "E",
  position: {x: 5, y:5},
}

let tree= {
  direction: "w",
  position: {x: 4, y:0},
}

let secondRover= {
  direction: "S",
  position: {x: 3, y:4},
}

function turnLeft(rover){
  switch(rover.direction) {
    case "N":
    rover.direction= "W";
    break;
    case "W":
    rover.direction= "S";
    case "S":
    rover.direction= "W";
    break;
    case "E":
    rover.direction= "N";
    break;
  } 
}

function turnRight(rover){
  switch(rover.direction) {
    case "N":
     rover.direction= "E";
      break;
    case "E":
      rover.direction= "S";
      break;
    case "S":
      rover.direction= "W";
      break;
    case "W":
      rover.direction= "N";
  }  
}

function limit(boundary) {
  if (boundary < 0) {
    return 0;
  } else if(boundary > 9) {
    return 9;
  } else {
    return boundary;
  }
}

function moveForward(rover){
  rover.travelLog.push([rover.position.x, rover.position.y]);
  switch(rover.direction) {
    case "W":
      rover.position.x = limit(rover.position.x - 1);
      break;
    case "N":
      rover.position.y = limit(rover.position.y- 1);
      break;
    case "S":
      rover.position.y = limit(rover.position.y + 1);
      break;
    case "E":
    rover.position.x = limit(rover.position.x + 1);    
  }
} 

function moveBackward(rover,obstacle1, obstacle2){
  rover.travelLog.push([rover.position.x, rover.position.y]);
  switch(rover.direction) {
    case "W":
      rover.position.x= limit(rover.position.x + 1);
      break;
    case "N":
      rover.position.y = limit(rover.position.y + 1);
      break;
    case "S":
      rover.position.y = limit(rover.position.y - 1);
      break;
    case "E":
    rover.position.x = limit(rover.position.y - 1);    
  }
} 

function execute(list,rover) {
  for(var i=0 ; i < list.length; i++) {
    switch (list[i]) {
      case "f":
        moveForward(rover);
        break;
       case "r":
        turnRight(rover);
        break; 
       case "l":
        turnLeft(rover);
        break;   
       case "b":
        moveBackward(rover);   
    }
  } 
console.log(rover.travelLog);
}
