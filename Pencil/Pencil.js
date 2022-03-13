/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pencil extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Pencil", "./Pencil/costumes/Pencil.svg", {
        x: 1.125834999999995,
        y: 1.0687750000000165
      })
    ];

    this.sounds = [
      new Sound("Monster Text", "./Pencil/sounds/Monster Text.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "pencil" },
        this.whenIReceivePencil
      ),
      new Trigger(Trigger.BROADCAST, { name: "image" }, this.whenIReceiveImage)
    ];
  }

  *whenIReceivePencil() {
    this.penSize = 1.2;
    this.penColor = Color.rgb(136, 136, 136);
    this.visible = false;
    this.goto(0, 0);
    while (true) {
      if (
        this.mouse.y < 155 &&
        this.mouse.y > -60 &&
        this.mouse.x < 140 && this.mouse.x > -147
      ) {
        this.goto(this.mouse.x, this.mouse.y);
      }
      if (this.stage.vars.penOrPaint == "pencil") {
        if (
          this.mouse.down &&
          !(this.mouse.x > 140) &&
          !(this.mouse.y < -70) &&
          this.stage.vars.datS == 0
        ) {
          this.penDown = true;
          this.visible = true;
        } else {
          this.visible = false;
          this.penDown = false;
        }
      }
      if (this.stage.vars.penOrPaint == "paint") {
        this.visible = false;
        return;
      }
      if (this.stage.vars.penOrPaint == "eraser") {
        this.visible = false;
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
