/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_sprite__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game__ = __webpack_require__(2);



// let canvas = document.getElementById("alchemy_table");
// let context = canvas.getContext('2d');

// console.log(Sprite);
// The element array for combos (initial elements are tentative)
// var elements = new Array();
// names.push("air");
// names.push("earth");
// names.push("water");
// names.push("fire");

// Picture sources (will need updating)
// var sources = new Array();
// sources.push("https://i.pinimg.com/736x/e6/30/c9/e630c92cb45fd28c8a1f441387076d9f--college-board-college-life.jpg");
// sources.push("https://s-media-cache-ak0.pinimg.com/736x/42/44/57/424457167a1892fe810127d8c7758d82--entrance-wolf.jpg");

// var selectedImage = -1;


// var pictures = new Array();

// pictureA = new Sprite(20, 20, 200, 200, sources[0]);

// pictures.push(pictureA);

// var pictureB = new Sprite(250, 20, 200, 200, sources[1]);

// pictures.push(pictureB);

// canvas.addEventListener("click", handleClick);
// document.addEventListener("keydown", handleKeyDown);


// function handleKeyDown(e){
// 	switch(e.keyCode){
//   	case 37: //left
//     	selectedImage = Math.abs(1 - selectedImage);
//       break;
//     case 39: //right
//     	selectedImage = Math.abs(1 - selectedImage);
//       break;
//   }

// }

// function handleClick(e) {
//   selectedImage = e.clientX + " " + e.clientY;

//   for (var iter = 0; iter < pictures.length; iter++) {
//     if (checkSprite(pictures[iter], e.clientX, e.clientY)) {
//       selectedImage = iter;
//     }
//   }
// }

// function checkSprite(sprite, x, y) {
//   var minX = sprite.X;
//   var maxX = sprite.X + sprite.image.width;
//   var minY = sprite.Y;
//   var maxY = sprite.Y + sprite.image.height;
//   var mx = x;
//   var my = y;
//   console.log(minX + " " + maxX);
//   if (mx >= minX && mx <= maxX && my >= minY && my <= maxY) {

//     return true;
//   }
//   return false;
// }

// function update() {

// }

// function draw() {
//   canvas.width = canvas.width;
//   //context.drawImage(pictureA, pictureA.X, pictureA.Y, pictureA.width, pictureA.height);

//   context.font = "30px Verdana";
//   context.fillText("Selected Image: " + selectedImage, 100, 300);

//   //draw selected outline
//   if (selectedImage >= 0) {
//     context.beginPath();
//     context.lineWidth = "6";
//     context.strokeStyle = "red";
//     context.rect(pictures[selectedImage].X, pictures[selectedImage].Y, pictures[selectedImage].image.width, pictures[selectedImage].image.height);
//     context.stroke();

//   }
//     for (var iter = 0; iter < pictures.length; iter++) {
//     context.drawImage(pictures[iter].image, pictures[iter].X, pictures[iter].Y, pictures[iter].image.width, pictures[iter].image.height);

//   }

// }

// function game_loop() {
//   update();
//   draw();
// }

// setInterval(game_loop, 30);

(function () {
    let game = new __WEBPACK_IMPORTED_MODULE_1__game__["a" /* default */]();
    game.init();
})();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Sprite {
    constructor(x, y, width, height, src) {
        this.X = x;
        this.Y = y;
        this.image = new Image();
        this.image.width = width;
        this.image.height = height;
        this.image.src = src;
    }
}

/* unused harmony default export */ var _unused_webpack_default_export = (Sprite);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Element__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_dnd__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__options__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_canvas__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper__ = __webpack_require__(6);







class Game {
    constructor() {
        this.canvas = document.getElementById('alchemy_table');
        this.canvas.width = parseInt(window.innerWidth) - 150;
        this.canvas.height = parseInt(window.innerHeight);
        this.context = this.canvas.getContext('2d');
        this.sidebar = ['fearful', 'relaxed', 'cop'];

        // current emojis on the canvas
        this.emojis = [];

        // the index of the draggin emoji you are dragging, note that this
        // is NOT the common-sense index in EMOJI_NAME
        // and this should be only used in Game
        this.draggingIndex = -1;
        this.draggingOffsetTop = 0;
        this.draggingOffsetLeft = 0;

        this.dnd = Object(__WEBPACK_IMPORTED_MODULE_1__utils_dnd__["a" /* default */])(this.canvas, this.context);
    }

    showUnlockedCount() {
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_canvas__["e" /* insertText */])(this.context, {
            text: `You have unlocked ${this.sidebar.length - 3}/${__WEBPACK_IMPORTED_MODULE_2__options__["a" /* EMOJI_AMOUNT */] - 3} hidden ${this.sidebar.length - 3 > 1 ? 'elements' : 'element'}`,
            font: '30px Georgia',
            position: {
                x: 50,
                y: this.canvas.height - 40
            },
            color: '#ada386'
        });
    }

    addCanvasHandlers(canvas) {
        canvas.onmousemove = this.onCanvasMouseMove.bind(this);
        canvas.onmousedown = this.onCanvasMouseDown.bind(this);
        canvas.onmouseup = this.onCanvasMouseUp.bind(this);
        canvas.onmouseout = this.onCanvasMouseUp.bind(this);
    }

    onCanvasMouseDown(e) {
        this.dnd.isMouseDown = true;

        // get and set the current dragging index
        const { getDraggingItemIndex } = this.dnd;
        const { clientX, clientY } = e;

        this.draggingIndex = getDraggingItemIndex(this.emojis, clientX, clientY);
        if (this.draggingIndex >= 0) {
            this.draggingOffsetLeft = clientX - this.emojis[this.draggingIndex].position.x;
            this.draggingOffsetTop = clientY - this.emojis[this.draggingIndex].position.y;
        }
    }

    onCanvasMouseMove(e) {
        const { isMouseDown } = this.dnd;
        const { clientX, clientY } = e;

        if (isMouseDown && this.draggingIndex >= 0) {
            // update position
            this.emojis[this.draggingIndex].position = {
                x: clientX - this.draggingOffsetLeft,
                y: clientY - this.draggingOffsetTop
            };
        }
    }

    onCanvasMouseUp(e) {
        this.dnd.isMouseDown = false;
        // collision detection
        const { isCollapsed } = this.dnd;
        let collapsedIndex = isCollapsed(this.emojis, this.draggingIndex);

        if (this.draggingIndex < 0 || collapsedIndex < 0) return;

        let a = this.emojis[this.draggingIndex].index;
        let b = this.emojis[collapsedIndex].index;

        let combIndex = Object(__WEBPACK_IMPORTED_MODULE_4__helper__["b" /* getCombinationIndex */])(a, b);

        if (combIndex < 0) return;

        this.emojis = Object(__WEBPACK_IMPORTED_MODULE_4__helper__["d" /* removeMultiElementFromArray */])(this.emojis, this.draggingIndex, collapsedIndex);

        const x = e.clientX - __WEBPACK_IMPORTED_MODULE_2__options__["d" /* EMOJI_SIZE */].width / 2;
        const y = e.clientY - __WEBPACK_IMPORTED_MODULE_2__options__["d" /* EMOJI_SIZE */].height / 2;

        let emoji_name = __WEBPACK_IMPORTED_MODULE_2__options__["c" /* EMOJI_NAME */][combIndex];

        this.emojis.push(new __WEBPACK_IMPORTED_MODULE_0__Element__["a" /* default */](emoji_name, { x, y }));

        // if it unlocks a new element
        if (this.sidebar.indexOf(emoji_name) === -1) {
            this.sidebar.push(emoji_name);
            this.insertEmojiToSidebar(emoji_name);
        }

        this.draggingIndex = -1;
    }

    addSidebarEmojiClickHandler(e) {
        // get the index of the clicked emoji
        let target = e.target;
        let name = e.target.parentNode.className.split(' ')[1];

        const { x, y } = Object(__WEBPACK_IMPORTED_MODULE_3__utils_canvas__["d" /* generateRandomPosition */])(this.canvas, true);

        this.emojis.push(new __WEBPACK_IMPORTED_MODULE_0__Element__["a" /* default */](name, { x, y }));

        // TODO: when inserting, the new element's position should not overlaps that of others

        const { width, height } = __WEBPACK_IMPORTED_MODULE_2__options__["d" /* EMOJI_SIZE */];

        this.context.drawImage(target, x, y, width, height);
    }

    insertEmojiToSidebar(name) {
        let index = __WEBPACK_IMPORTED_MODULE_2__options__["c" /* EMOJI_NAME */].indexOf(name);
        let div = document.createElement('div');
        div.className = `sidebar-emoji ${__WEBPACK_IMPORTED_MODULE_2__options__["c" /* EMOJI_NAME */][index]}`;
        let img = document.createElement('img');
        img.src = __WEBPACK_IMPORTED_MODULE_2__options__["e" /* EMOJI_URL_SOURCE */][index];
        div.append(img);

        div.addEventListener('click', e => this.addSidebarEmojiClickHandler(e));

        document.querySelector('.sidebar').append(div);
    }

    initSidebar() {
        for (let i = 0; i < this.sidebar.length; i++) {
            this.insertEmojiToSidebar(this.sidebar[i]);
        }
    }

    addClearAllHandler() {
        document.querySelector('.clear-all').addEventListener('click', () => {
            if (window.confirm('Are you sure you want to remove ALL the elements on the canvas??')) {
                this.emojis = [];
            }
        });
    }

    debug() {
        window.canvas = this.canvas;
        window.context = this.context;
        window.emojis = this.emojis;
        window.dnd = this.dnd;
    }

    render() {
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_canvas__["a" /* clearCanvas */])(this.canvas, this.context);

        const { width, height } = __WEBPACK_IMPORTED_MODULE_2__options__["d" /* EMOJI_SIZE */];
        for (let i = 0; i < this.emojis.length; i++) {
            let src = this.emojis[i].src;
            let { x, y } = this.emojis[i].position;

            __WEBPACK_IMPORTED_MODULE_3__utils_canvas__["c" /* drawImageByUrl */].call(this.context, this.emojis[i].src, x, y, width, height);
        }

        this.showUnlockedCount();

        setTimeout(this.render.bind(this), 30);
    }

    gameLoop() {
        // why we don't have update()?
        // because we have already done those parts in the canvas handlers
        // in the future we may abstract those logic into a single function

        this.render();
    }

    init() {
        this.initSidebar();

        this.addClearAllHandler();
        this.addCanvasHandlers(this.canvas);

        // only activate this function when you are in developing mode
        this.gameLoop();
        this.debug();
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Game);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const EMOJI_NAME = ['fearful', 'relaxed', 'cop', 'heartpulse', 'anger', 'penguin', 'cactus', 'octopus'];
/* harmony export (immutable) */ __webpack_exports__["c"] = EMOJI_NAME;

const EMOJI_AMOUNT = EMOJI_NAME.length;
/* harmony export (immutable) */ __webpack_exports__["a"] = EMOJI_AMOUNT;


const EMOJI_SIZE = {
    width: 64,
    height: 64
};
/* harmony export (immutable) */ __webpack_exports__["d"] = EMOJI_SIZE;


const EMOJI_URL_SOURCE = ['data:image/png;base64,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', 'data:image/png;base64,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', 'data:image/png;base64,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', 'data:image/png;base64,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', 'data:image/png;base64,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', 'data:image/png;base64,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', 'data:image/png;base64,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', 'data:image/png;base64,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'];
/* harmony export (immutable) */ __webpack_exports__["e"] = EMOJI_URL_SOURCE;

/**
 * In this implementation, three elements (0, 1 and 2) are given at the beginning of the game
 * Element 0 is combined with itself to create element 3
 * Elements 1 and 2 are combined to create element 4
 * Elements 3 and 4 are combined to create element 5
 * Elements 1 and 5 are combined to create element 6
 * Elements 2 and 6 are combined to create element 7
 */
const EMOJI_COMBINATION = [[3, -1, -1, -1, -1, -1, -1, -1], [-1, -1, 4, -1, -1, 6, -1, -1], [-1, 4, -1, -1, -1, -1, 7, -1], [-1, -1, -1, -1, 5, -1, -1, -1], [-1, -1, -1, 5, -1, -1, -1, -1], [-1, 6, -1, -1, -1, -1, -1, -1], [-1, -1, 7, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1]];
/* harmony export (immutable) */ __webpack_exports__["b"] = EMOJI_COMBINATION;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = clearCanvas;
/* harmony export (immutable) */ __webpack_exports__["b"] = coordinateConversion;
/* harmony export (immutable) */ __webpack_exports__["d"] = generateRandomPosition;
/* harmony export (immutable) */ __webpack_exports__["c"] = drawImageByUrl;
/* harmony export (immutable) */ __webpack_exports__["e"] = insertText;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__options__ = __webpack_require__(3);


function clearCanvas(canvas, context) {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function coordinateConversion(canvas, x, y) {
    var box = canvas.getBoundingRect();
    return {
        x: Math.round(x - box.left),
        y: Math.round(y - box.right)
    };
}

// TODO: should dnd the emoji from the sidebar into the canvas
function generateRandomPosition(canvas, middle = false) {
    let x, y;
    const getRandomNumBetween = (min, max) => Math.random() * (max - min) + min;
    const { width, height } = __WEBPACK_IMPORTED_MODULE_0__options__["d" /* EMOJI_SIZE */];

    if (middle) {
        x = Math.round(getRandomNumBetween(canvas.width * 0.2, canvas.width * 0.8 - width));
        y = Math.round(getRandomNumBetween(canvas.height * 0.2, canvas.height * 0.8 - height));
    } else {
        x = Math.round(getRandomNumBetween(0, canvas.width - width));
        y = Math.round(getRandomNumBetween(0, canvas.height - height));
    }
    return { x, y };
}

function drawImageByUrl(url, x, y, width, height) {
    // this refers to the canvas CONTEXT
    let img = new Image();
    img.src = url;

    this.drawImage(img, x, y, width, height);
}

function insertText(context, options = {}) {
    const { text, font, position: { x, y }, color } = options;

    context.fillStyle = color;
    context.font = font;

    context.fillText(text, x, y);
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(3);



class Element {
    constructor(name, { x, y }) {
        this.index = __WEBPACK_IMPORTED_MODULE_1__options__["c" /* EMOJI_NAME */].indexOf(name);
        this.src = Object(__WEBPACK_IMPORTED_MODULE_0__helper__["c" /* getImgSourceUrl */])(name);
        this.size = __WEBPACK_IMPORTED_MODULE_1__options__["d" /* EMOJI_SIZE */];
        this.position = { x, y };
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Element);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = getImgSourceUrl;
/* harmony export (immutable) */ __webpack_exports__["a"] = getBoundaries;
/* harmony export (immutable) */ __webpack_exports__["b"] = getCombinationIndex;
/* harmony export (immutable) */ __webpack_exports__["d"] = removeMultiElementFromArray;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__options__ = __webpack_require__(3);


function getImgSourceUrl(name) {
    return __WEBPACK_IMPORTED_MODULE_0__options__["e" /* EMOJI_URL_SOURCE */][__WEBPACK_IMPORTED_MODULE_0__options__["c" /* EMOJI_NAME */].indexOf(name)];
}

function getBoundaries(pos, size) {
    const { x, y } = pos;
    const { width, height } = size;

    return {
        top: y,
        left: x,
        bottom: y + height,
        right: x + width
    };
}

function getCombinationIndex(a, b) {
    return __WEBPACK_IMPORTED_MODULE_0__options__["b" /* EMOJI_COMBINATION */][a][b];
}

function removeMultiElementFromArray(arr, ...indexes) {
    indexes.sort((a, b) => b - a); // decendent

    for (let i = 0; i < indexes.length; i++) {
        arr.splice(indexes[i], 1);
    }

    return arr;
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dndWrapper;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvas__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__options__ = __webpack_require__(3);
// drag and drop utils handlers




/*
    drag and drop in canvas is much different than in DOM, because the canvas comes
    as a whole, so these functions may seem to be hacky, or dirty.
*/
function dndWrapper(canvas, context) {
    let isMouseDown = false;

    let getItemPosition = item => {
        const { x, y } = item.position;
        return { x, y };
    };

    let getMousePosition = (mouseX, mouseY) => {
        const { x, y } = Object(__WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* coordinateConversion */])(canvas, mouseX, mouseY);
        return { x, y };
    };

    let getDraggingItemIndex = (items, x, y) => {
        for (let i = 0; i < items.length; i++) {
            let currItem = items[i];
            let {
                top,
                left,
                right,
                bottom
            } = Object(__WEBPACK_IMPORTED_MODULE_1__helper__["a" /* getBoundaries */])(currItem.position, currItem.size);

            if (x < right && x > left && y < bottom && y > top) {
                return i;
            }
        }
        return -1;
    };

    let isCollapsed = (items, draggingIndex) => {
        // check if the `draggingIndex`th of items overlaps any one of the rest elements
        if (draggingIndex < 0 || items.length === 0) return;

        const dragging = items[draggingIndex];

        const { x, y } = dragging.position;
        const center = {
            x: x + dragging.size.width / 2,
            y: y + dragging.size.height / 2
        };

        for (let i = 0; i < items.length; i++) {
            if (i === draggingIndex) continue;
            const {
                top,
                right,
                left,
                bottom
            } = Object(__WEBPACK_IMPORTED_MODULE_1__helper__["a" /* getBoundaries */])(items[i].position, items[i].size);
            if (center.x < right && center.x > left && center.y < bottom && center.y > top) {
                return i;
            }
        }
        return -1;
    };

    return {
        isCollapsed,
        getDraggingItemIndex
    };
};

/***/ })
/******/ ]);