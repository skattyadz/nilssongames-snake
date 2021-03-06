const isCollision = (currentSnake, game) => {
  var collision = false;

  // check if snake is going off the canvas
  if (currentSnake.direction.y === 1 && currentSnake.head.y >= (game.board.y + game.board.height - currentSnake.size)) {
    return true;
  } else if (currentSnake.direction.y === -1 && currentSnake.head.y <= game.board.y) {
    return true;
  } else if (currentSnake.direction.x === 1 && currentSnake.head.x >= (game.board.x + game.board.width - currentSnake.size)) {
    return true;
  } else if (currentSnake.direction.x === -1 && currentSnake.head.x <= game.board.x) {
    return true;
  }

  // collision with other snakes
  game.snakes.forEach(function (snake) {
    // next frame's position of the head (this snake)
    var next = {
      x: currentSnake.head.x + (currentSnake.direction.x * currentSnake.size),
      y: currentSnake.head.y + (currentSnake.direction.y * currentSnake.size)
    };

    // next frame's position of the head (other snake)
    var otherSnakeNext = {
      x: snake.head.x + (snake.direction.x * snake.size),
      y: snake.head.y + (snake.direction.y * snake.size)
    };

    snake.tail.forEach(part => {
      if (next.x === part.x && next.y === part.y) {
        collision = true;
      }
    });

    if (next.x === otherSnakeNext.x && next.y === otherSnakeNext.y) {
      if (currentSnake.index === snake.index) {
        // Don't check collision on own body on "next" position because it should be "collision"
        return;
      }

      collision = true;
    }
  });

  return collision;
};

export default isCollision;
