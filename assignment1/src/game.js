import {
    EMOJI_AMOUNT,
    EMOJI_URL_SOURCE,
    EMOJI_NAME,
    EMOJI_COMBINATION
} from './options'

import {
    clearCanvas,
    generateRandomPosition
} from './utils/canvas'

class Game {
    constructor() {
        this.canvas = document.getElementById('alchemy_table');
        this.canvas.width = parseInt(window.innerWidth) - 150;
        this.canvas.height = parseInt(window.innerHeight);
        this.context = this.canvas.getContext('2d');
    }

    addSidebarEmojiClickHandler(e) {
        // get the index of the clicked emoji
        let target = e.target;

        const { x, y } = generateRandomPosition(this.canvas, true);
        
        this.context.drawImage(target, x, y, 64, 64);
    }

    insertEmojisToSidebar() {
        for (let i = 0; i < EMOJI_AMOUNT; i++) {
            let div = document.createElement('div');
            div.className = `sidebar-emoji ${EMOJI_NAME[i]}`;
            let img = document.createElement('img');
            img.src = EMOJI_URL_SOURCE[i];
            div.append(img);

            div.addEventListener('click', (e) => this.addSidebarEmojiClickHandler(e));

            document.querySelector('.sidebar').append(div);
        }
    }
    
    addClearAllHandler() {
        document.querySelector('.clear-all').addEventListener('click', clearCanvas.bind(null, this.canvas, this.context));
    }

    combineElements(element1, element2){
        return EMOJI_COMBINATION[element1][element2];
    }

    debug() {
        window.canvas = this.canvas;
        window.context = this.context;
    }

    init() {
        this.insertEmojisToSidebar();
        this.addClearAllHandler();

        // only activate this function when you are in developing mode
        this.debug();
    }
}

export default Game;
