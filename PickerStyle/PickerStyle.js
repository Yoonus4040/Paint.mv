/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PickerStyle extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("vector3", "./PickerStyle/costumes/vector3.svg", {
        x: 363.45071500000006,
        y: 30.67559
      }),
      new Costume("vector2", "./PickerStyle/costumes/vector2.svg", {
        x: 362.9999965458014,
        y: 25.14115000000004
      })
    ];

    this.sounds = [new Sound("pop", "./PickerStyle/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start" },
        this.whenIReceiveStart2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start" },
        this.whenIReceiveStart3
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveStart() {
    while (true) {
      /* TODO: Implement looks_goforwardbackwardlayers */ null;
      if (this.stage.vars.darkAndLight == "light") {
        /* TODO: Implement looks_gotofrontback */ null;
        this.costume = "vector2";
      } else {
        this.costume = "vector3";
      }
      yield;
    }
  }

  *whenIReceiveStart2() {
    /* TODO: Implement looks_gotofrontback */ null;
    while (true) {
      if (this.stage.vars.check == "yes") {
        /* TODO: Implement looks_gotofrontback */ null;
        this.visible = true;
      } else {
        this.visible = false;
      }
      yield;
    }
  }

  *whenIReceiveStart3() {
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
