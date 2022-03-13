/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Toolbar extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Toolbar/costumes/costume1.svg", {
        x: 377.5,
        y: -107.47152499999993
      }),
      new Costume("costume3", "./Toolbar/costumes/costume3.svg", {
        x: 377.5,
        y: -107.47155500000002
      }),
      new Costume("costume2", "./Toolbar/costumes/costume2.svg", {
        x: 377.5,
        y: -107.47152
      }),
      new Costume("costume4", "./Toolbar/costumes/costume4.svg", {
        x: 377.5,
        y: -107.47152
      })
    ];

    this.sounds = [new Sound("pop", "./Toolbar/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    while (true) {
      if (this.touching("mouse")) {
        this.stage.vars.check = "yes";
        yield* this.glide(0.2, 0, 29);
        if (this.stage.vars.darkAndLight == "light") {
          this.costume = "costume3";
        } else {
          this.costume = "costume4";
        }
      } else {
        yield* this.glide(0.2, 0, 0);
        this.stage.vars.check = "no";
        if (this.stage.vars.darkAndLight == "light") {
          this.costume = "costume1";
        } else {
          this.costume = "costume2";
        }
      }
      yield;
    }
  }
}
