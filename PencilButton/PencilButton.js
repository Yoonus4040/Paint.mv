/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PencilButton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./PencilButton/costumes/costume1.svg", {
        x: 23.849458573499987,
        y: 23.849461347299865
      }),
      new Costume("costume2", "./PencilButton/costumes/costume2.svg", {
        x: 23.8494533043999,
        y: 23.849466484399755
      }),
      new Costume("costume3", "./PencilButton/costumes/costume3.svg", {
        x: 23.84945130159997,
        y: 23.849468671999972
      }),
      new Costume("costume4", "./PencilButton/costumes/costume4.svg", {
        x: 23.849451157399955,
        y: 23.84946878979997
      })
    ];

    this.sounds = [
      new Sound("pop", "./PencilButton/sounds/pop.wav"),
      new Sound("Monster Text", "./PencilButton/sounds/Monster Text.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.KEY_PRESSED, { key: "1" }, this.whenKey1Pressed)
    ];
  }

  *whenGreenFlagClicked() {
    this.moveAhead(100);
    while (true) {
      if (this.stage.vars.darkAndLight == "light") {
        this.costume = "costume1";
        if (this.stage.vars.penOrPaint == "pencil") {
          this.costume = "costume3";
        }
      } else {
        this.costume = "costume2";
        if (this.stage.vars.penOrPaint == "pencil") {
          this.costume = "costume4";
        }
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.stage.vars.penOrPaint = "pencil";
    this.broadcast("pencil");
  }

  *whenthisspriteclicked2() {
    yield* this.startSound("Monster Text");
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.visible = true;
  }

  *whenKey1Pressed() {
    this.stage.vars.penOrPaint = "pencil";
    this.broadcast("pencil");
  }
}
