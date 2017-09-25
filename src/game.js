// game.js

import Snake from './snake';

class Game
{
  constructor()
  {
    this.snake = new Snake();
    this.food = [];

    // Create canvas.
    this.canvas = document.createElement('canvas');
    this.canvas.width = 100;
    this.canvas.height = 100;
    document.body.appendChild(canvas);
    this.context = canvas.getContext('2d');
  }

  update()
  {
    this.snake.update();
  }

  render()
  {
    this.snake.render(context);
  }
}
