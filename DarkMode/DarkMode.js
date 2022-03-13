/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class DarkMode extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("pencil", "./DarkMode/costumes/pencil.svg", {
        x: 63.0136865975,
        y: 39.85328880315706
      }),
      new Costume("pencil2", "./DarkMode/costumes/pencil2.svg", {
        x: 63.013689841774635,
        y: 43.90626499999999
      })
    ];

    this.sounds = [
      new Sound("Monster Text", "./DarkMode/sounds/Monster Text.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.darkAndLight = "light";
    this.costume = "pencil";
    while (true) {
      this.moveAhead(100);
      if (this.costumeNumber == 1) {
        this.stage.vars.darkAndLight = "light";
      }
      if (this.costumeNumber == 2) {
        this.stage.vars.darkAndLight = "dark";
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.stage.vars.check == "yes") {
        yield* this.glide(0.2, -203, -61);
      }
      if (this.stage.vars.check == "no") {
        yield* this.glide(0.2, -203, -96);
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.costumeNumber += 1;
  }

  *whenthisspriteclicked2() {
    yield* this.startSound("Monster Text");
  }
}
