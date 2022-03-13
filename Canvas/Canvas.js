/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Canvas extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Canvas/costumes/costume1.svg", {
        x: 150.57495,
        y: 157.824865
      })
    ];

    this.sounds = [new Sound("pop", "./Canvas/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.effects.ghost = 100;
    /* TODO: Implement looks_gotofrontback */ null;
  }
}
