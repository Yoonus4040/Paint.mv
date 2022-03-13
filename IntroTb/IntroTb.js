/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class IntroTb extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./IntroTb/costumes/costume1.svg", {
        x: 395.64564564564563,
        y: 289.7897897897897
      }),
      new Costume("costume2", "./IntroTb/costumes/costume2.svg", {
        x: 129.6793588529497,
        y: 121.70994580521355
      })
    ];

    this.sounds = [
      new Sound(
        "GTA V - Welcome to Los Santos Soundtrack - IntroTheme song",
        "./IntroTb/sounds/GTA V - Welcome to Los Santos Soundtrack - IntroTheme song.wav"
      ),
      new Sound("Dance_Monkey", "./IntroTb/sounds/Dance_Monkey.mp3"),
      new Sound(
        "Its Everyday Bro - Jake Paul feat. Team 10 (Audio) [Download].mp3",
        "./IntroTb/sounds/Its Everyday Bro - Jake Paul feat. Team 10 (Audio) [Download].mp3.wav"
      ),
      new Sound(
        "Norm Ender - Mekanın Sahibi2",
        "./IntroTb/sounds/Norm Ender - Mekanın Sahibi2.mp3"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart)
    ];
  }

  *whenGreenFlagClicked() {
    this.audioEffects.volume = 100;
    this.costume = "costume1";
    this.effects.brightness = -100;
    yield* this.wait(2);
    for (let i = 0; i < 20; i++) {
      this.effects.brightness += 10;
      yield;
    }
    for (let i = 0; i < 100; i++) {
      this.effects.brightness += -1;
      yield;
    }
    for (let i = 0; i < 20; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.broadcast("start");
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.moveAhead(100000);
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    yield* this.playSoundUntilDone("Dance_Monkey");
  }

  *whenIReceiveStart() {
    while (true) {
      null;
      yield;
    }
  }
}
