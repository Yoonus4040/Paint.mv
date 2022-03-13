import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Paint from "./Paint/Paint.js";
import Pencil from "./Pencil/Pencil.js";
import Eraser from "./Eraser/Eraser.js";
import Mouse from "./Mouse/Mouse.js";
import Clear from "./Clear/Clear.js";
import PencilButton from "./PencilButton/PencilButton.js";
import EraserButton from "./EraserButton/EraserButton.js";
import DarkMode from "./DarkMode/DarkMode.js";
import Size from "./Size/Size.js";
import Back from "./Back/Back.js";
import Canvas from "./Canvas/Canvas.js";
import Toolbar from "./Toolbar/Toolbar.js";
import IntroTb from "./IntroTb/IntroTb.js";
import Color2 from "./Color2/Color2.js";
import PickerStyle from "./PickerStyle/PickerStyle.js";
import Assets from "./Assets/Assets.js";
import PaintButton from "./PaintButton/PaintButton.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Paint: new Paint({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Pencil: new Pencil({
    x: -117,
    y: 35,
    direction: 150,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Eraser: new Eraser({
    x: -85,
    y: 112,
    direction: 150,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Mouse: new Mouse({
    x: -236,
    y: 180,
    direction: 90,
    costumeNumber: 4,
    size: 100,
    visible: true
  }),
  Clear: new Clear({
    x: -208,
    y: 145,
    direction: 90,
    costumeNumber: 1,
    size: 90,
    visible: true
  }),
  PencilButton: new PencilButton({
    x: -208,
    y: 75,
    direction: 90,
    costumeNumber: 1,
    size: 80,
    visible: true
  }),
  EraserButton: new EraserButton({
    x: -208,
    y: 40,
    direction: 90,
    costumeNumber: 1,
    size: 80,
    visible: true
  }),
  DarkMode: new DarkMode({
    x: -203,
    y: -96,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: true
  }),
  Size: new Size({
    x: 226,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Back: new Back({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Canvas: new Canvas({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Toolbar: new Toolbar({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  IntroTb: new IntroTb({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Color2: new Color2({
    x: -1,
    y: -142,
    direction: 90,
    costumeNumber: 15,
    size: 101,
    visible: false
  }),
  PickerStyle: new PickerStyle({
    x: 0,
    y: -130,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false
  }),
  Assets: new Assets({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 27,
    size: 100,
    visible: false
  }),
  PaintButton: new PaintButton({
    x: -208,
    y: 109,
    direction: 90,
    costumeNumber: 3,
    size: 80,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
