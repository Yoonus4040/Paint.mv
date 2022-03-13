/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Size extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume2", "./Size/costumes/costume2.svg", {
        x: 18.65845999999999,
        y: 1.682940000000002
      }),
      new Costume("costume3", "./Size/costumes/costume3.svg", {
        x: 18.658460000000076,
        y: 1.682940000000002
      })
    ];

    this.sounds = [new Sound("pop", "./Size/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenGreenFlagClicked() {
    this.moveAhead(100);
    this.visible = true;
  }

  *whenGreenFlagClicked2() {
    this.y = 0;
    this.stage.vars.size = 5;
    this.costume = "costume2";
    /* TODO: Implement looks_gotofrontback */ null;
    this.visible = true;
    while (true) {
      /* TODO: Implement looks_goforwardbackwardlayers */ null;
      while (!(this.touching("mouse") && this.mouse.down)) {
        yield;
      }
      while (!!this.mouse.down) {
        this.y = this.mouse.y;
        if (this.y > 130) {
          this.y = 130;
        }
        if (this.y < -50) {
          this.y = -50;
          this.stage.vars.size = 1;
        }
        yield;
      }
      this.stage.vars.size = (this.y + 100) / 10 - 4;
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.stage.vars.darkAndLight == "light") {
        this.costume = "costume2";
      } else {
        this.costume = "costume3";
      }
      yield;
    }
  }
}
