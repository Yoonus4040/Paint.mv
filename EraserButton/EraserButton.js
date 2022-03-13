import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class EraserButton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./EraserButton/costumes/costume1.svg", {
        x: 23.849458097999985,
        y: 23.849461796399822
      }),
      new Costume("costume2", "./EraserButton/costumes/costume2.svg", {
        x: 23.849452684699855,
        y: 23.84946705129974
      }),
      new Costume("costume3", "./EraserButton/costumes/costume3.svg", {
        x: 23.84945952449999,
        y: 23.849468671999972
      }),
      new Costume("costume4", "./EraserButton/costumes/costume4.svg", {
        x: 23.84945638309989,
        y: 23.84946337929975
      })
    ];

    this.sounds = [
      new Sound("pop", "./EraserButton/sounds/pop.wav"),
      new Sound("Monster Text", "./EraserButton/sounds/Monster Text.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.KEY_PRESSED, { key: "2" }, this.whenKey2Pressed)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.moveAhead(100);
      if (this.stage.vars.darkAndLight == "light") {
        this.costume = "costume1";
        if (this.stage.vars.penOrPaint == "eraser") {
          this.costume = "costume3";
        }
      } else {
        this.costume = "costume2";
        if (this.stage.vars.penOrPaint == "eraser") {
          this.costume = "costume4";
        }
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.broadcast("eraser");
    this.stage.vars.penOrPaint = "eraser";
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

  *whenKey2Pressed() {
    this.broadcast("eraser");
    this.stage.vars.penOrPaint = "eraser";
  }
}
