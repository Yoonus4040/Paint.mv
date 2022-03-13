/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Eraser extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Pencil", "./Eraser/costumes/Pencil.svg", { x: 0, y: 0 })
    ];

    this.sounds = [
      new Sound("Monster Text", "./Eraser/sounds/Monster Text.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "eraser" },
        this.whenIReceiveEraser
      ),
      new Trigger(Trigger.BROADCAST, { name: "image" }, this.whenIReceiveImage)
    ];
  }

  *whenIReceiveEraser() {
    this.visible = false;
    this.penSize = 14;
    this.goto(0, 0);
    while (true) {
      this.penColor = Color.rgb(255, 255, 255);
      this.penSize = this.stage.vars.size;
      this.size = this.stage.vars.size;
      if (
        this.mouse.y < 155 &&
        this.mouse.y > -60 &&
        this.mouse.x < 140 && this.mouse.x > -147
      ) {
        this.goto(this.mouse.x, this.mouse.y);
      }
      if (this.stage.vars.penOrPaint == "eraser") {
        if (
          this.mouse.down &&
          !(this.mouse.x > 140) &&
          !(this.mouse.y < -70) &&
          this.stage.vars.datS == 0
        ) {
          this.penDown = true;
        } else {
          this.penDown = false;
        }
      }
      if (this.stage.vars.penOrPaint == "pencil") {
        return;
      }
      if (this.stage.vars.penOrPaint == "paint") {
        return;
      }
      yield;
    }
  }

  *whenIReceiveImage() {
    if (this.stage.vars.image == 1) {
      /* TODO: Implement stop other scripts in sprite */ null;
    }
    if (this.stage.vars.image == 2) {
      /* TODO: Implement stop other scripts in sprite */ null;
    }
    if (this.stage.vars.image == 3) {
      /* TODO: Implement stop other scripts in sprite */ null;
    }
  }
}
