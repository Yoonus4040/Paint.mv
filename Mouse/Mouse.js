/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Mouse extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Mouse/costumes/costume1.svg", {
        x: -0.3710149999999999,
        y: 11.523047161178965
      }),
      new Costume("costume3", "./Mouse/costumes/costume3.svg", {
        x: 14.020285587881006,
        y: 10.00111437696674
      }),
      new Costume("costume4", "./Mouse/costumes/costume4.svg", {
        x: 7.3570725346239385,
        y: -3.7828899999999805
      }),
      new Costume("costume2", "./Mouse/costumes/costume2.svg", {
        x: 6.838630797325067,
        y: 3.5983382580597265
      }),
      new Costume("costume6", "./Mouse/costumes/costume6.svg", {
        x: 6.838630797325067,
        y: 3.5983382580596697
      }),
      new Costume("pencil", "./Mouse/costumes/pencil.svg", {
        x: -0.1260773961280961,
        y: 17.115565000000004
      }),
      new Costume("costume5", "./Mouse/costumes/costume5.svg", {
        x: 6.447781422785937,
        y: -2.906656548530293
      }),
      new Costume("eraser", "./Mouse/costumes/eraser.svg", {
        x: 4.84825103358844,
        y: 10.90502775641417
      })
    ];

    this.sounds = [
      new Sound("Monster Text", "./Mouse/sounds/Monster Text.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.moveAhead(50000000);
      this.goto(this.mouse.x, this.mouse.y);
      if (this.stage.vars.darkAndLight == "light") {
        if (this.touching(this.sprites["Back"].andClones())) {
          this.costume = "costume2";
        }
        if (this.touching(this.sprites["Color2"].andClones())) {
          this.costume = "costume3";
        }
        if (this.touching(this.sprites["Canvas"].andClones())) {
          if (this.stage.vars.penOrPaint == "paint") {
            this.costume = "costume1";
          }
          if (this.stage.vars.penOrPaint == "pencil") {
            this.costume = "pencil";
          }
          if (this.stage.vars.penOrPaint == "eraser") {
            this.costume = "eraser";
          }
        }
        if (this.touching(this.sprites["Size"].andClones())) {
          this.costume = "costume4";
        }
        if (this.touching(this.sprites["Clear"].andClones())) {
          this.costume = "costume5";
        }
        if (this.touching(this.sprites["Color2"].andClones())) {
          if (this.stage.vars.open == "no") {
            /* TODO: Implement looks_gotofrontback */ null;
            this.costume = "costume5";
          }
        }
        if (
          this.touching(this.sprites["PaintButton"].andClones()) ||
          this.touching(this.sprites["EraserButton"].andClones()) ||
          this.touching(this.sprites["Pencil"].andClones())
        ) {
          /* TODO: Implement looks_gotofrontback */ null;
          this.costume = "costume5";
        }
      } else {
        if (this.touching(this.sprites["Back"].andClones())) {
          this.costume = "costume6";
        }
        if (this.touching(this.sprites["Color2"].andClones())) {
          this.costume = "costume3";
        }
        if (this.touching(this.sprites["Size"].andClones())) {
          this.costume = "costume4";
        }
        if (this.touching(this.sprites["Color2"].andClones())) {
          if (this.stage.vars.open == "no") {
            /* TODO: Implement looks_gotofrontback */ null;
            this.costume = "costume5";
          }
        }
        if (
          this.touching(this.sprites["PaintButton"].andClones()) ||
          this.touching(this.sprites["EraserButton"].andClones()) ||
          this.touching(this.sprites["Pencil"].andClones())
        ) {
          /* TODO: Implement looks_gotofrontback */ null;
          this.costume = "costume5";
        }
        if (this.touching(this.sprites["Clear"].andClones())) {
          this.costume = "costume5";
        }
        if (this.touching(this.sprites["Canvas"].andClones())) {
          if (this.stage.vars.penOrPaint == "paint") {
            this.costume = "costume1";
          }
          if (this.stage.vars.penOrPaint == "pencil") {
            this.costume = "pencil";
          }
          if (this.stage.vars.penOrPaint == "eraser") {
            this.costume = "eraser";
          }
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.moveAhead(50000000);
      if (this.mouse.down) {
        if (!this.touching(this.sprites["Canvas"].andClones())) {
          yield* this.playSoundUntilDone("Monster Text");
        }
      }
      yield;
    }
  }
}
