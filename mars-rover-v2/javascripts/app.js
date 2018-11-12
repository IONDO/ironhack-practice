// Rover Object Goes Here
// ======================
var rover= {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}
// ======================
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

function moveForward(rover){
  rover.travelLog.push([rover.x, rover.y]);
  switch(rover.direction) {
    case "W":
      rover.x -= 1;
      break;
    case "N":
      rover.y -= 1;
      break;
    case "S":
      rover.y += 1;
      break;
    case "E":
      rover.x += 1;    
  }
}
function execute(list,rover) {
    for(var i=0 ; i < list.length; i++) {
      if (list[i] === "f") {
        moveForward(rover);
      }  else if (list[i] === "r") {
        turnRight(rover);
      }  else if (list[i] ==="l") {
        turnLeft(rover);   
      }
  }
  console.log(rover.travelLog);
}
