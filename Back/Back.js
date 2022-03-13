/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Back extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Back/costumes/costume1.svg", {
        x: 398.75,
        y: 280.50141499999995
      }),
      new Costume("costume2", "./Back/costumes/costume2.svg", {
        x: 398.75,
        y: 281.501395
      })
    ];

    this.sounds = [new Sound("pop", "./Back/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.goto(0, 0);
      /* TODO: Implement looks_gotofrontback */ null;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.stage.vars.darkAndLight == "light") {
        this.costume = "costume1";
      } else {
        this.costume = "costume2";
      }
      yield;
    }
  }
}
