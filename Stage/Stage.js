/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", { x: 0, y: 0 })
    ];

    this.sounds = [
      new Sound(
        "Ballad of the Cats2",
        "./Stage/sounds/Ballad of the Cats2.wav"
      ),
      new Sound("Ballad of the Cats", "./Stage/sounds/Ballad of the Cats.wav"),
      new Sound("Among Us Remix", "./Stage/sounds/Among Us Remix.wav"),
      new Sound(
        "His World (Theme of Sonic) - Sonic the Hedgehog [OST] (192  kbps) (cdn",
        "./Stage/sounds/His World (Theme of Sonic) - Sonic the Hedgehog [OST] (192  kbps) (cdn.mp3"
      ),
      new Sound(
        "GTA V - Welcome to Los Santos Soundtrack - IntroTheme song",
        "./Stage/sounds/GTA V - Welcome to Los Santos Soundtrack - IntroTheme song.wav"
      ),
      new Sound("Hi Beatbox", "./Stage/sounds/Hi Beatbox.wav"),
      new Sound(
        "jinsang - affection..mp3",
        "./Stage/sounds/jinsang - affection..mp3.wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart)
    ];

    this.audioEffects.volume = 60;

    this.vars.Color = 2;
    this.vars.size = 5;
    this.vars.x = -203;
    this.vars.y = 23;
    this.vars.preset = 0;
    this.vars.offS = 0;
    this.vars.datS = 0;
    this.vars.digets = 0;
    this.vars.data = 0;
    this.vars.dataCounter = 0;
    this.vars.multiplier = 0;
    this.vars.lettersCount = 0;
    this.vars.clear = 0;
    this.vars.sine = 0;
    this.vars.colorHex = 0;
    this.vars.check = "no";
    this.vars.time = 0;
    this.vars.songPauseCodeStartVariabelTechnology = 0;
    this.vars.penOrPaint = "paint";
    this.vars.open = "no";
    this.vars.darkAndLight = "light";
    this.vars.colourEdior = 0;
    this.vars.changingVariable = 1;
    this.vars.changed = 1;
    this.vars.shade = 0;
    this.vars.Blur = 0;
    this.vars.openCheck20 = "no";
    this.vars.scrx = 0;
    this.vars.scry = 0;
    this.vars.x2 = 0;
    this.vars.y2 = 0;
    this.vars.gameStart = 0;
    this.vars.canMove = 0;
    this.vars.Playercolor = 0;
    this.vars.gravity = 0;
    this.vars.jumpForce = 0;
    this.vars.jumpDuration = 0;
    this.vars.acceleration = 0;
    this.vars.resistance = 0;
    this.vars.keyX = 0;
    this.vars.scene = 0;
    this.vars.platformDx = 0;
    this.vars.platformDy = 0;
    this.vars.image = 2;
  }

  *whenIReceiveStart() {
    this.vars.penOrPaint = "paint";
    this.broadcast("paint");
    this.clearPen();
    this.audioEffects.volume = 60;
    this.costume = "backdrop1";
    this.audioEffects.pitch += 10;
    while (true) {
      0;
      yield;
    }
  }
}
