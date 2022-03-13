/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Paint extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Pencil", "./Paint/costumes/Pencil.png", { x: 0, y: 0 })
    ];

    this.sounds = [
      new Sound("Monster Text", "./Paint/sounds/Monster Text.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "paint" }, this.whenIReceivePaint),
      new Trigger(
        Trigger.BROADCAST,
        { name: "colour edit" },
        this.whenIReceiveColourEdit
      ),
      new Trigger(Trigger.BROADCAST, { name: "color" }, this.whenIReceiveColor),
      new Trigger(
        Trigger.BROADCAST,
        { name: "color" },
        this.whenIReceiveColor2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "color" },
        this.whenIReceiveColor3
      ),
      new Trigger(Trigger.BROADCAST, { name: "shade" }, this.whenIReceiveShade),
      new Trigger(Trigger.KEY_PRESSED, { key: "b" }, this.whenKeyBPressed),
      new Trigger(Trigger.BROADCAST, { name: "image" }, this.whenIReceiveImage)
    ];
  }

  *whenIReceivePaint() {
    this.visible = false;
    this.goto(0, 0);
    while (true) {
      this.penSize = this.stage.vars.size;
      this.size = this.stage.vars.size;
      if (
        this.mouse.y < 155 &&
        this.mouse.y > -60 &&
        this.mouse.x < 140 && this.mouse.x > -147
      ) {
        this.goto(this.mouse.x, this.mouse.y);
      }
      if (this.stage.vars.penOrPaint == "paint") {
        if (
          this.mouse.down &&
          !(this.mouse.x > 140) &&
          !(this.mouse.y < -60) &&
          this.stage.vars.datS == 0
        ) {
          this.penDown = true;
          /* TODO: Implement looks_gotofrontback */ null;
        } else {
          this.penDown = false;
        }
      }
      if (this.stage.vars.penOrPaint == "pencil") {
        return;
      }
      if (this.stage.vars.penOrPaint == "eraser") {
        return;
      }
      yield;
    }
  }

  *whenIReceiveColourEdit() {
    this.penColor.h += 0.2;
  }

  *whenIReceiveColor() {
    if (this.stage.vars.Color == 1) {
      this.penColor = Color.rgb(254, 0, 0);
    }
    if (this.stage.vars.Color == 2) {
      this.penColor = Color.rgb(239, 35, 0);
    }
    if (this.stage.vars.Color == 3) {
      this.penColor = Color.rgb(254, 128, 0);
    }
    if (this.stage.vars.Color == 4) {
      this.penColor = Color.rgb(253, 160, 0);
    }
    if (this.stage.vars.Color == 5) {
      this.penColor = Color.rgb(255, 187, 0);
    }
    if (this.stage.vars.Color == 6) {
      this.penColor = Color.rgb(246, 171, 1);
    }
    if (this.stage.vars.Color == 7) {
      this.penColor = Color.rgb(242, 179, 1);
    }
    if (this.stage.vars.Color == 8) {
      this.penColor = Color.rgb(255, 195, 1);
    }
    if (this.stage.vars.Color == 9) {
      this.penColor = Color.rgb(219, 222, 1);
    }
    if (this.stage.vars.Color == 10) {
      this.penColor = Color.rgb(213, 236, 1);
    }
    if (this.stage.vars.Color == 11) {
      this.penColor = Color.rgb(210, 249, 3);
    }
    if (this.stage.vars.Color == 11) {
      this.penColor = Color.rgb(198, 252, 4);
    }
  }

  *whenIReceiveColor2() {
    if (this.stage.vars.Color == 12) {
      this.penColor = Color.rgb(165, 252, 4);
    }
    if (this.stage.vars.Color == 13) {
      this.penColor = Color.rgb(90, 252, 6);
    }
    if (this.stage.vars.Color == 13) {
      this.penColor = Color.rgb(90, 252, 6);
    }
    if (this.stage.vars.Color == 14) {
      this.penColor = Color.rgb(2, 253, 176);
    }
    if (this.stage.vars.Color == 15) {
      this.penColor = Color.rgb(2, 254, 219);
    }
    if (this.stage.vars.Color == 16) {
      this.penColor = Color.rgb(3, 197, 255);
    }
    if (this.stage.vars.Color == 17) {
      this.penColor = Color.rgb(7, 91, 255);
    }
    if (this.stage.vars.Color == 18) {
      this.penColor = Color.rgb(44, 42, 255);
    }
    if (this.stage.vars.Color == 18) {
      this.penColor = Color.rgb(127, 43, 255);
    }
    if (this.stage.vars.Color == 19) {
      this.penColor = Color.rgb(135, 43, 255);
    }
    if (this.stage.vars.Color == 20) {
      this.penColor = Color.rgb(216, 40, 233);
    }
    if (this.stage.vars.Color == 21) {
      this.penColor = Color.rgb(251, 29, 168);
    }
    if (this.stage.vars.Color == 22) {
      this.penColor = Color.rgb(6, 0, 1);
    }
  }

  *whenGreenFlagClicked() {
    this.penColor = Color.rgb(153, 102, 255);
  }

  *whenIReceiveColor3() {
    if (this.stage.vars.Color == 1) {
      this.penColor = Color.rgb(254, 0, 0);
    }
    if (this.stage.vars.Color == 2) {
      this.penColor = Color.rgb(239, 35, 0);
    }
    if (this.stage.vars.Color == 3) {
      this.penColor = Color.rgb(254, 128, 0);
    }
    if (this.stage.vars.Color == 4) {
      this.penColor = Color.rgb(253, 160, 0);
    }
    if (this.stage.vars.Color == 5) {
      this.penColor = Color.rgb(255, 187, 0);
    }
    if (this.stage.vars.Color == 6) {
      this.penColor = Color.rgb(246, 171, 1);
    }
    if (this.stage.vars.Color == 7) {
      this.penColor = Color.rgb(242, 179, 1);
    }
    if (this.stage.vars.Color == 8) {
      this.penColor = Color.rgb(255, 195, 1);
    }
    if (this.stage.vars.Color == 9) {
      this.penColor = Color.rgb(219, 222, 1);
    }
    if (this.stage.vars.Color == 10) {
      this.penColor = Color.rgb(213, 236, 1);
    }
    if (this.stage.vars.Color == 11) {
      this.penColor = Color.rgb(210, 249, 3);
    }
    if (this.stage.vars.Color == 11) {
      this.penColor = Color.rgb(198, 252, 4);
    }
  }

  *whenIReceiveShade() {
    if (this.stage.vars.shade == 1) {
      /* TODO: Implement pen_setPenShadeToNumber */ null;
    }
    if (this.stage.vars.shade == 2) {
      /* TODO: Implement pen_setPenShadeToNumber */ null;
    }
    if (this.stage.vars.shade == 3) {
      /* TODO: Implement pen_setPenShadeToNumber */ null;
    }
    if (this.stage.vars.shade == 4) {
      /* TODO: Implement pen_setPenShadeToNumber */ null;
    }
    if (this.stage.vars.shade == 4) {
      /* TODO: Implement pen_setPenShadeToNumber */ null;
    }
  }

  *whenKeyBPressed() {
    this.penColor = Color.rgb(0, 0, 0);
  }

  *whenIReceiveImage() {
    if (this.stage.vars.image == 1) {
      /* TODO: Implement stop other scripts in sprite */ null;
    }
    if (this.stage.vars.image == 2) {
      /* TODO: Implement stop other scripts in sprite */ null;
    }
    if (this.stage.vars.image == 3) {
      /* TODO: Implement stop other scripts in sprite */ null;
    }
  }
}
