/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PaintButton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./PaintButton/costumes/costume1.svg", {
        x: 23.84945904899999,
        y: 23.849460898199908
      }),
      new Costume("costume2", "./PaintButton/costumes/costume2.svg", {
        x: 23.849453924099947,
        y: 23.84946591749977
      }),
      new Costume("costume3", "./PaintButton/costumes/costume3.svg", {
        x: 23.849457002799937,
        y: 23.849462812399764
      }),
      new Costume("costume4", "./PaintButton/costumes/costume4.svg", {
        x: 23.84945130159997,
        y: 23.849468671999972
      })
    ];

    this.sounds = [
      new Sound("pop", "./PaintButton/sounds/pop.wav"),
      new Sound("Monster Text", "./PaintButton/sounds/Monster Text.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.KEY_PRESSED, { key: "3" }, this.whenKey3Pressed)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      this.moveAhead(1000);
      this.moveAhead(1000);
      if (this.stage.vars.darkAndLight == "light") {
        this.costume = "costume1";
        if (this.stage.vars.penOrPaint == "paint") {
          this.costume = "costume3";
        }
      } else {
        this.costume = "costume2";
        if (this.stage.vars.penOrPaint == "paint") {
          this.costume = "costume4";
        }
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.broadcast("paint");
    this.stage.vars.penOrPaint = "paint";
  }

  *whenthisspriteclicked2() {
    yield* this.startSound("Monster Text");
  }

  *whenIReceiveStart() {
    this.visible = true;
  }

  *whenKey3Pressed() {
    this.broadcast("paint");
    this.stage.vars.penOrPaint = "paint";
  }
}
