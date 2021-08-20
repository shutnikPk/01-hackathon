import "./styles.css";
import ContextMenu from "./menu";
import { ClicksModule } from "./modules/clicks.module";
import { createArea } from "./utils";
import { BackgroundModule } from "./modules/background.module";
import { RandomSound } from "./modules/randomSound.module";

// Initialising contextMenu
const contextMenu = new ContextMenu('#menu');


// creating field area, to generate objects there
createArea();

const area = document.querySelector('.area');

// чтобы только на квадрате меню открывалось
area.addEventListener("contextmenu", (event) => {
	contextMenu.open(event);
});
document.body.addEventListener("click", (event) => {
	contextMenu.close(event);
});

// init modules
const clickModule = new ClicksModule('clickModule', 'Counts clicks made in 3 seconds');
const backgroundModule = new BackgroundModule()
const randomSound = new RandomSound()

// add modules to contextMenu
contextMenu.add(clickModule);
contextMenu.add(backgroundModule)
contextMenu.add(randomSound)

