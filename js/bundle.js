/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/cards.js":
/*!*************************!*\
  !*** ./src/js/cards.js ***!
  \*************************/
/***/ ((module) => {

function cards() {
    class PetCard {
        constructor(src, alt, name, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.name = name;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const slide = document.createElement("li");
            if (!this.classes.length) {
                const defaultClass = "splide__slide";
                slide.classList.add(defaultClass);
            } else {
                this.classes.forEach(className => slide.classList.add(className));
            }

            slide.innerHTML =
                `
                    <div class="splide__slide__photo">
                        <img src="${this.src}" alt="${this.alt}">
                    </div>
                    <div class="splide__slide__descr">
                        <h3 class="heading heading_item">${this.name}</h3>
                        <button class="button button_item button_popup">Learn more</button>
                    </div>
            `;
            this.parent.append(slide);
        }
    }


    getResource('http://localhost:3000/pets') // get data and cards render
        .then(data => {
            data.forEach((pet) => {
                new PetCard(pet.src, pet.alt, pet.name, '.splide .splide__list').render();
            });

            const slider = new Splide('.splide', { // slider options
                type: 'loop',
                perPage: 3,
                perMove: 1,
                fixedWidth: '270px',
                gap: '90px',
                breakpoints: {
                    992: {
                        gap: '40px'
                    }
                }
            });
            slider.mount();
        });
}

module.exports = cards;

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getResource: () => (/* binding */ getResource)
/* harmony export */ });
const getResource = async (url) => {
    try {
        const request = await fetch(url);
        if (!request.ok) {
            throw new Error(`Couldn't fetch ${url}, status: ${request.status}`);
        }
        const response = await request.json();
        return response;
    } catch (error) {
        console.error('Error: ', error);
        throw new Error(error);
    }
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/js/utils.js");
/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards.js */ "./src/js/cards.js");
/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cards_js__WEBPACK_IMPORTED_MODULE_1__);



window.addEventListener("DOMContentLoaded", () => {
    const
        header = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
        cards = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/cards'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
        pagination = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/pagination'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

        tabs();
        header();
        pagination();
});



})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map