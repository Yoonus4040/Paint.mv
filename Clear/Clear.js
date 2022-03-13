/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Clear extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Clear/costumes/costume1.svg", {
        x: 29.03438,
        y: 12.581520000000012
      }),
      new Costume("costume2", "./Clear/costumes/costume2.svg", {
        x: 29.03438,
        y: 12.581520000000012
      })
    ];

    this.sounds = [
      new Sound("Monster Text", "./Clear/sounds/Monster Text.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2)
    ];
  }

  *whenthisspriteclicked() {
    yield* this.startSound("Monster Text");
    /* TODO: Implement looks_gotofrontback */ null;
    while (!!this.mouse.down) {
      yield;
    }
    this.clearPen();
  }

  *whenGreenFlagClicked() {
    while (true) {
      /* TODO: Implement looks_gotofrontback */ null;
      if (this.touching("mouse")) {
        this.costume = "costume2";
      } else {
        this.costume = "costume1";
      }
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

  *whenthisspriteclicked2() {
    yield* this.startSound("Monster Text");
  }
}
