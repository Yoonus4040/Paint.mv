/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Color2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume2", "./Color2/costumes/costume2.svg", {
        x: 231.147525,
        y: 14
      }),
      new Costume("costume3", "./Color2/costumes/costume3.svg", {
        x: 198.5,
        y: 14
      }),
      new Costume("costume4", "./Color2/costumes/costume4.svg", {
        x: 193.5,
        y: 14
      }),
      new Costume("costume5", "./Color2/costumes/costume5.svg", {
        x: 193.5,
        y: 14
      }),
      new Costume("costume6", "./Color2/costumes/costume6.svg", {
        x: 193.5,
        y: 14
      }),
      new Costume("costume7", "./Color2/costumes/costume7.svg", {
        x: 188.5,
        y: 14
      }),
      new Costume("costume8", "./Color2/costumes/costume8.svg", {
        x: 188.5,
        y: 14
      }),
      new Costume("costume9", "./Color2/costumes/costume9.svg", {
        x: 188,
        y: 14
      }),
      new Costume("costume10", "./Color2/costumes/costume10.svg", {
        x: 179,
        y: 14
      }),
      new Costume("costume11", "./Color2/costumes/costume11.svg", {
        x: 166,
        y: 14.5
      }),
      new Costume("costume12", "./Color2/costumes/costume12.svg", {
        x: 141.5,
        y: 14.5
      }),
      new Costume("costume13", "./Color2/costumes/costume13.svg", {
        x: 121,
        y: 15
      }),
      new Costume("costume14", "./Color2/costumes/costume14.svg", {
        x: 80,
        y: 15
      }),
      new Costume("costume15", "./Color2/costumes/costume15.svg", {
        x: 52.5,
        y: 15
      }),
      new Costume("costume16", "./Color2/costumes/costume16.svg", {
        x: 27.5,
        y: 15.5
      }),
      new Costume("costume17", "./Color2/costumes/costume17.svg", {
        x: -1,
        y: 15.5
      }),
      new Costume("costume18", "./Color2/costumes/costume18.svg", {
        x: -35,
        y: 15.5
      }),
      new Costume("costume19", "./Color2/costumes/costume19.svg", {
        x: -70.5,
        y: 16
      }),
      new Costume("costume20", "./Color2/costumes/costume20.svg", {
        x: -96.5,
        y: 16
      }),
      new Costume("costume21", "./Color2/costumes/costume21.svg", {
        x: -122,
        y: 16
      }),
      new Costume("costume1", "./Color2/costumes/costume1.svg", {
        x: -152.5,
        y: 15
      }),
      new Costume("costume22", "./Color2/costumes/costume22.svg", {
        x: -181.375,
        y: 20.375
      })
    ];

    this.sounds = [new Sound("pop", "./Color2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart2)
    ];
  }

  *startAsClone() {
    while (true) {
      if (this.stage.vars.check == "yes") {
        this.visible = true;
      } else {
        this.visible = false;
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.broadcast("color");
    this.stage.vars.Color = this.costumeNumber;
  }

  *whenIReceiveStart() {
    while (true) {
      if (this.stage.vars.check == "yes") {
        this.visible = true;
      } else {
        this.visible = false;
      }
      yield;
    }
  }

  *whenIReceiveStart2() {
    this.goto(-1, -142);
    for (let i = 0; i < 22; i++) {
      /* TODO: Implement looks_gotofrontback */ null;
      /* TODO: Implement looks_gotofrontback */ null;
      this.costumeNumber += 1;
      this.goto(-1, -142);
      this.createClone();
      yield;
    }
  }
}
