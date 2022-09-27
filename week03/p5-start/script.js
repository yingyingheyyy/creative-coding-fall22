let ballArray = []

function setup() {
  createCanvas(windowWidth, windowHeight)

  for(let i = 0; i < 100; i++){
    ballArray.push(new Ball(random(width), random(height), 
    color(random(255), random(255), random(255))))
  }

  console.log(ballArray)
}

function draw() {
  background(100)

  for (let i = 0; i < ballArray.length; i++) {
    // ellipse(ballArray[i].x, ballArray[i].y, 100)
    ballArray[i].move()
    ballArray[i].display()
  }
  // ballArray.forEach((ball) => {
  //   ellipse(ball.x, ball.y, 100)
  // })
}

// function makeBall(ballX, ballY) {
//   let ball = {
//     x: ballX,
//     y: ballY
//   }
//   return ball
// }