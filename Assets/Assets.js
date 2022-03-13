import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Assets extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume2", "./Assets/costumes/costume2.svg", {
        x: 398.75,
        y: 280.50141499999995
      }),
      new Costume("costume3", "./Assets/costumes/costume3.svg", {
        x: 398.75,
        y: 281.501395
      }),
      new Costume("costume4", "./Assets/costumes/costume4.svg", {
        x: 23.849458097999985,
        y: 23.849461796399822
      }),
      new Costume("costume5", "./Assets/costumes/costume5.svg", {
        x: 23.849452684699855,
        y: 23.84946705129974
      }),
      new Costume("costume6", "./Assets/costumes/costume6.svg", {
        x: 23.84945952449999,
        y: 23.849468671999972
      }),
      new Costume("costume7", "./Assets/costumes/costume7.svg", {
        x: 23.84945638309989,
        y: 23.84946337929975
      }),
      new Costume("costume8", "./Assets/costumes/costume8.svg", {
        x: 23.849458573499987,
        y: 23.849461347299865
      }),
      new Costume("costume9", "./Assets/costumes/costume9.svg", {
        x: 23.8494533043999,
        y: 23.849466484399755
      }),
      new Costume("costume10", "./Assets/costumes/costume10.svg", {
        x: 23.84945130159997,
        y: 23.849468671999972
      }),
      new Costume("costume11", "./Assets/costumes/costume11.svg", {
        x: 23.849451157399955,
        y: 23.84946878979997
      }),
      new Costume("costume12", "./Assets/costumes/costume12.svg", {
        x: 18.65845999999999,
        y: 1.682940000000002
      }),
      new Costume("costume13", "./Assets/costumes/costume13.svg", {
        x: 18.658460000000076,
        y: 1.682940000000002
      }),
      new Costume("costume14", "./Assets/costumes/costume14.svg", {
        x: 23.84945904899999,
        y: 23.849460898199908
      }),
      new Costume("costume15", "./Assets/costumes/costume15.svg", {
        x: 23.849453924099947,
        y: 23.84946591749977
      }),
      new Costume("costume16", "./Assets/costumes/costume16.svg", {
        x: 23.849457002799937,
        y: 23.849462812399764
      }),
      new Costume("costume17", "./Assets/costumes/costume17.svg", {
        x: 23.84945130159997,
        y: 23.849468671999972
      }),
      new Costume("vector2", "./Assets/costumes/vector2.svg", {
        x: 362.9999965458014,
        y: 25.14115000000004
      }),
      new Costume("vector3", "./Assets/costumes/vector3.svg", {
        x: 363.45071500000006,
        y: 30.67559
      }),
      new Costume("costume18", "./Assets/costumes/costume18.svg", {
        x: -0.3710149999999999,
        y: 11.523047161178965
      }),
      new Costume("pencil", "./Assets/costumes/pencil.svg", {
        x: 63.0136865975,
        y: 39.85328880315706
      }),
      new Costume("pencil2", "./Assets/costumes/pencil2.svg", {
        x: 63.013689841774635,
        y: 43.90626499999999
      }),
      new Costume("costume19", "./Assets/costumes/costume19.svg", {
        x: 377.5,
        y: -107.47152499999993
      }),
      new Costume("costume20", "./Assets/costumes/costume20.svg", {
        x: 377.5,
        y: -107.47155500000002
      }),
      new Costume("costume21", "./Assets/costumes/costume21.svg", {
        x: 377.5,
        y: -107.47152
      }),
      new Costume("costume22", "./Assets/costumes/costume22.svg", {
        x: 377.5,
        y: -107.47152
      }),
      new Costume("costume23", "./Assets/costumes/costume23.svg", {
        x: 29.03438,
        y: 12.581520000000012
      }),
      new Costume("costume1", "./Assets/costumes/costume1.svg", {
        x: 395.64564564564563,
        y: 289.7897897897897
      })
    ];

    this.sounds = [new Sound("pop", "./Assets/sounds/pop.wav")];

    this.triggers = [];
  }
}
