function Rover(direction, position, travelLog) {
  this.direction = direction;
  this.position = position;
  this.travelLog = travelLog;
};

function Obstacle(direction, position) {
  this.direction = direction;
  this.position = position;
}

Rover.prototype.turnLeft = function () {
  switch (this.direction) {
    case "N":
      this.direction = "W";
      break;
    case "W":
      this.direction = "S";
    case "S":
      this.direction = "W";
      break;
    case "E":
      this.direction = "N";
      break;
  }
};

Rover.prototype.turnRight = function () {
  switch (this.direction) {
    case "N":
      this.direction = "E";
      break;
    case "E":
      this.direction = "S";
      break;
    case "S":
      this.direction = "W";
      break;
    case "W":
      this.direction = "N";
  }
};


Rover.prototype.nextPosition = function (step) {
  switch (this.direction) {
    case "W":
      return {
        x: this.position.x - step,
        y: this.position.y
      }; //We have created a new object that is the possible next position
    case "N":
      return {
        x: this.position.x,
        y: this.position.y - step
      };
    case "S":
      return {
        x: this.position.x,
        y: this.position.y + step
      };
    case "E":
      return {
        x: this.position.x + step,
        y: this.position.y
      };
  }
}

Rover.prototype.isInGrid = function (position) {
  return position.x >= 0 && position.x <= 9 && position.y >= 0 && position.y <= 9;
}

Rover.prototype.noObstacle = function (position, obstacles) {
  for (let i = 0; i < obstacles.length; i++) {
    if (obstacles[i].position.x === position.x &&
      obstacles[i].position.y === position.y) {
      return false;
      /*If any of the elements in obstables array has the same position as
           rover, then there is an obstable*/
    }
  }
  return true; //If none of the elements in the array has the same position as rover.
}

Rover.prototype.isClear = function (position, obstacles) {
  return this.isInGrid(position) && this.noObstacle(position, obstacles);
}

Rover.prototype.move = function (step, obstacles) {
  this.travelLog.push([this.position.x, this.position.y]);
  let position = this.nextPosition(step)
  if (this.isClear(position, obstacles)) {
    this.position = position;
  } else {
    console.log("Stop Rover!!!!")
  }
}

Rover.prototype.moveForward = function (obstacles) {
  this.move(1, obstacles);
};

Rover.prototype.moveBackward = function (obstacles) {
  this.move(-1, obstacles);
}

let rover1 = new Rover("N", {
  x: 0,
  y: 0
}, []);
let rover2 = new Rover("N", {
  x: 2,
  y: 1
}, []);

let stone = new Obstacle("E", {
  x: 5,
  y: 5
});

let tree = new Obstacle("N", {
  x: 3,
  y: 1
});

function execute(list, rover, otherRover, obstacles) {
  for (var i = 0; i < list.length; i++) {
    if (i % 2 === 0) {
      switch (list[i]) {
        case "f":
          rover.moveForward(obstacles);
          break;
        case "r":
          rover.turnRight();
          break;
        case "l":
          rover.turnLeft();
          break;
        case "b":
          rover.moveBackward(obstacles);
      }
    } else {
      switch (list[i]) {
        case "f":
          otherRover.moveForward(obstacles);
          break;
        case "r":
          otherRover.turnRight();
          break;
        case "l":
          otherRover.turnLeft();
          break;
        case "b":
          otherRover.moveBackward(obstacles);
      }
    }
  }
  console.log(rover.travelLog);
  console.log(otherRover.travelLog);
}