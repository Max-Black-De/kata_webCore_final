/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/call-modal.js":
/*!**************************!*\
  !*** ./js/call-modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-modal.js */ "./js/menu-modal.js");

const callModal = document.querySelector('.call');
const menuOpenCallBtn = document.querySelector('.footer-buttons-block__call');
const closeCallBtn = document.querySelector('.call__close-btn');
const generalOpenCallBtn = document.querySelector('.buttons__call-button');
menuOpenCallBtn.addEventListener('click', () => {
  callModal.style.display = 'flex';
  if (window.innerWidth < 1120) {
    (0,_menu_modal_js__WEBPACK_IMPORTED_MODULE_0__.toggle)(_menu_modal_js__WEBPACK_IMPORTED_MODULE_0__.menuModal);
  }
  _menu_modal_js__WEBPACK_IMPORTED_MODULE_0__.app.style.overflow = 'hidden';
});
closeCallBtn.addEventListener('click', () => {
  _menu_modal_js__WEBPACK_IMPORTED_MODULE_0__.app.style.overflow = 'scroll';
  callModal.style.display = 'none';
});
generalOpenCallBtn.addEventListener('click', () => {
  callModal.style.display = 'flex';
  _menu_modal_js__WEBPACK_IMPORTED_MODULE_0__.app.style.overflow = 'hidden';
});
window.addEventListener('click', event => {
  if (event.target == callModal) {
    _menu_modal_js__WEBPACK_IMPORTED_MODULE_0__.app.style.overflow = 'scroll';
    callModal.style.display = 'none';
  }
});

/***/ }),

/***/ "./js/feedback-modal.js":
/*!******************************!*\
  !*** ./js/feedback-modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-modal.js */ "./js/menu-modal.js");

const feedbackModal = document.querySelector('.feedback');
const openFeedbackBtn = document.querySelector('.footer-buttons-block__chat');
const closeFeedbackBtn = document.querySelector('.feedback__close-btn');
const generalOpenFeedbackBtn = document.querySelector('.buttons__chat-button');
openFeedbackBtn.addEventListener('click', () => {
  feedbackModal.style.display = 'flex';
  if (window.innerWidth < 1120) {
    (0,_menu_modal_js__WEBPACK_IMPORTED_MODULE_0__.toggle)(_menu_modal_js__WEBPACK_IMPORTED_MODULE_0__.menuModal);
  }
  _menu_modal_js__WEBPACK_IMPORTED_MODULE_0__.app.style.overflow = 'hidden';
});
closeFeedbackBtn.addEventListener('click', () => {
  _menu_modal_js__WEBPACK_IMPORTED_MODULE_0__.app.style.overflow = 'scroll';
  feedbackModal.style.display = 'none';
});
generalOpenFeedbackBtn.addEventListener('click', () => {
  feedbackModal.style.display = 'flex';
  _menu_modal_js__WEBPACK_IMPORTED_MODULE_0__.app.style.overflow = 'hidden';
});
window.addEventListener('click', event => {
  if (event.target == feedbackModal) {
    _menu_modal_js__WEBPACK_IMPORTED_MODULE_0__.app.style.overflow = 'scroll';
    feedbackModal.style.display = 'none';
  }
});

/***/ }),

/***/ "./js/menu-modal.js":
/*!**************************!*\
  !*** ./js/menu-modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app),
/* harmony export */   menuModal: () => (/* binding */ menuModal),
/* harmony export */   toggle: () => (/* binding */ toggle)
/* harmony export */ });
const app = document.querySelector('.application');
const menuModal = document.querySelector('.menu-modal--none');
const openMenuBtn = document.querySelector('.buttons-block__burger-button');
const closeMenuBtn = document.querySelector('.menu-header__close-button');
const mediaQuery = window.matchMedia('(min-width: 1120px)');
const toggle = () => {
  menuModal.classList.toggle('menu-modal--none');
  menuModal.classList.toggle('menu-modal');
};
openMenuBtn.addEventListener('click', () => {
  toggle();
  app.style.overflow = 'hidden';
});
closeMenuBtn.addEventListener('click', () => {
  app.style.overflow = 'scroll';
  toggle();
});
let handleTableChange = event => {
  if (event.matches) {
    if (menuModal.className === 'menu-modal') {
      toggle();
    }
    menuModal.classList.add('menu-modal--static');
    app.style.overflow = 'scroll';
  } else {
    menuModal.classList.remove('menu-modal--static');
  }
};
window.addEventListener('click', event => {
  if (event.target == menuModal) {
    app.style.overflow = 'scroll';
    toggle();
  }
});
mediaQuery.addListener(handleTableChange);
handleTableChange(mediaQuery);

/***/ }),

/***/ "./js/swiper-script.js":
/*!*****************************!*\
  !*** ./js/swiper-script.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "../node_modules/swiper/modules/index.mjs");
// init Swiper:



const swiperBrand = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.brands__swiper', {
  modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination],
  pagination: {
    el: '.brands__swiper-pagination',
    clickable: true
  },
  slidesPerView: 'auto',
  spaceBetween: 16,
  slidesOffsetAfter: 64,
  breakpoints: {
    768: {
      spaceBetween: 24
    },
    1120: {
      spaceBetween: 32
    }
  }
});
const swiperGadget = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.gadgets__swiper', {
  modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination],
  pagination: {
    el: '.gadgets__swiper-pagination',
    clickable: true
  },
  slidesPerView: 'auto',
  spaceBetween: 16,
  slidesOffsetAfter: 64,
  breakpoints: {
    768: {
      spaceBetween: 24
    },
    1120: {
      spaceBetween: 32
    }
  }
});
const swiperPrice = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.price__swiper', {
  modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination],
  pagination: {
    el: '.price__swiper-pagination',
    clickable: true
  },
  slidesPerView: 'auto',
  spaceBetween: 16,
  slidesOffsetAfter: 64,
  breakpoints: {
    768: {
      spaceBetween: 24
    },
    1120: {
      spaceBetween: 32
    }
  }
});
const mql = window.matchMedia('(min-width: 768px)');
let handleWindowResize = e => {
  if (e.matches) {
    swiperBrand.disable();
    swiperGadget.disable();
    swiperPrice.disable();
  } else {
    swiperBrand.enable();
    swiperGadget.enable();
    swiperPrice.enable();
  }
};
mql.addListener(handleWindowResize);
handleWindowResize(mql);

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/swiper/swiper-bundle.css */ "../node_modules/swiper/swiper-bundle.css");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _js_call_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/call-modal.js */ "./js/call-modal.js");
/* harmony import */ var _js_feedback_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/feedback-modal.js */ "./js/feedback-modal.js");
/* harmony import */ var _js_menu_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/menu-modal.js */ "./js/menu-modal.js");
/* harmony import */ var _js_swiper_script_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/swiper-script.js */ "./js/swiper-script.js");







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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_swiper_swiper-bundle_css-node_modules_swiper_modules_index_mjs-node_modu-188b80"], () => (__webpack_require__("./index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map