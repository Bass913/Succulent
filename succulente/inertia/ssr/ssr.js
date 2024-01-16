/******/ var __webpack_modules__ = ({

/***/ "./resources/js/Components/Navbar.tsx":
/*!********************************************!*\
  !*** ./resources/js/Components/Navbar.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var react_1 = __webpack_require__(/*! react */ "react");
var outline_1 = __webpack_require__(/*! @heroicons/react/24/outline */ "@heroicons/react/24/outline");
function App() {
  var _ref = (0, react_1.useState)(false),
    _ref2 = _slicedToArray(_ref, 2),
    toggleMenu = _ref2[0],
    setToggleMenu = _ref2[1];
  return (0, jsx_runtime_1.jsx)("div", {
    className: "app",
    children: (0, jsx_runtime_1.jsxs)("nav", {
      children: [(0, jsx_runtime_1.jsx)("div", {
        className: "max-w-7xl mx-auto",
        children: (0, jsx_runtime_1.jsxs)("div", {
          className: "flex mx-auto justify-between w-5/6 ",
          children: [(0, jsx_runtime_1.jsxs)("div", {
            className: "flex items-center gap-16 my-12",
            children: [(0, jsx_runtime_1.jsx)("div", {
              children: (0, jsx_runtime_1.jsx)("a", {
                href: "/",
                className: "flex gap-1 text-lg font-bold items-center ",
                children: (0, jsx_runtime_1.jsx)("span", {
                  className: "first-letter:text-succulente-raspberry",
                  children: "Succulente"
                })
              })
            }), (0, jsx_runtime_1.jsxs)("div", {
              className: "hidden lg:flex gap-10 m-5",
              children: [(0, jsx_runtime_1.jsxs)("div", {
                className: "flex gap-2",
                children: [(0, jsx_runtime_1.jsx)(outline_1.ChartPieIcon, {
                  className: "h-6 w-6"
                }), (0, jsx_runtime_1.jsx)("a", {
                  href: "#",
                  children: " Recettes"
                })]
              }), (0, jsx_runtime_1.jsxs)("div", {
                className: "flex gap-2",
                children: [(0, jsx_runtime_1.jsx)(outline_1.ClockIcon, {
                  className: "h-6 w-6"
                }), (0, jsx_runtime_1.jsx)("a", {
                  href: "#",
                  children: "Recettes rapides"
                })]
              }), (0, jsx_runtime_1.jsxs)("div", {
                className: "flex gap-2",
                children: [(0, jsx_runtime_1.jsx)(outline_1.BookmarkIcon, {
                  className: "h-6 w-6"
                }), (0, jsx_runtime_1.jsx)("a", {
                  href: "#",
                  children: "Mes succulentes"
                })]
              })]
            })]
          }), (0, jsx_runtime_1.jsxs)("div", {
            className: "flex gap-6",
            children: [(0, jsx_runtime_1.jsxs)("div", {
              className: "hidden xs:flex items-center gap-10",
              children: [(0, jsx_runtime_1.jsxs)("div", {
                className: "hidden lg:flex items-center gap-2",
                children: [(0, jsx_runtime_1.jsx)(outline_1.MoonIcon, {
                  className: "h-6 w-6"
                }), (0, jsx_runtime_1.jsx)(outline_1.SunIcon, {
                  className: "h-6 w-6"
                })]
              }), (0, jsx_runtime_1.jsx)("div", {
                children: (0, jsx_runtime_1.jsx)("button", {
                  className: "rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100",
                  children: "Free Trial"
                })
              })]
            }), (0, jsx_runtime_1.jsx)("div", {
              className: "lg:hidden flex items-center",
              children: (0, jsx_runtime_1.jsx)("button", {
                onClick: function onClick() {
                  return setToggleMenu(!toggleMenu);
                },
                children: (0, jsx_runtime_1.jsx)(outline_1.Bars3Icon, {
                  className: "h-6"
                })
              })
            })]
          })]
        })
      }), (0, jsx_runtime_1.jsx)("div", {
        className: "fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ".concat(!toggleMenu ? "h-0" : "h-full"),
        children: (0, jsx_runtime_1.jsx)("div", {
          className: "px-8",
          children: (0, jsx_runtime_1.jsxs)("div", {
            className: "flex flex-col gap-8 font-bold tracking-wider",
            children: [(0, jsx_runtime_1.jsx)("a", {
              href: "#",
              className: "border-l-4 border-gray-600",
              children: "Features"
            }), (0, jsx_runtime_1.jsx)("a", {
              href: "#",
              children: "Pricing"
            }), (0, jsx_runtime_1.jsx)("a", {
              href: "#",
              children: "Download"
            }), (0, jsx_runtime_1.jsx)("a", {
              href: "#",
              children: "Classic"
            })]
          })
        })
      })]
    })
  });
}
exports["default"] = App;

/***/ }),

/***/ "./resources/js/Pages/Index.tsx":
/*!**************************************!*\
  !*** ./resources/js/Pages/Index.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var Navbar_1 = __importDefault(__webpack_require__(/*! ../Components/Navbar */ "./resources/js/Components/Navbar.tsx"));
function App() {
  return (0, jsx_runtime_1.jsx)(Navbar_1["default"], {});
}
exports["default"] = App;

/***/ }),

/***/ "./resources/js/Pages sync recursive ^\\.\\/.*$":
/*!*******************************************!*\
  !*** ./resources/js/Pages/ sync ^\.\/.*$ ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Index": "./resources/js/Pages/Index.tsx",
	"./Index.tsx": "./resources/js/Pages/Index.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/Pages sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "@heroicons/react/24/outline":
/*!**********************************************!*\
  !*** external "@heroicons/react/24/outline" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@heroicons/react/24/outline");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "deepmerge":
/*!****************************!*\
  !*** external "deepmerge" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("deepmerge");

/***/ }),

/***/ "lodash.isequal":
/*!*********************************!*\
  !*** external "lodash.isequal" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("lodash.isequal");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("nprogress");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("qs");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "./node_modules/@inertiajs/core/dist/index.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/@inertiajs/core/dist/index.esm.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHeadManager: () => (/* binding */ Q),
/* harmony export */   hrefToUrl: () => (/* binding */ v),
/* harmony export */   mergeDataIntoQueryString: () => (/* binding */ k),
/* harmony export */   router: () => (/* binding */ Oe),
/* harmony export */   setupProgress: () => (/* binding */ Z),
/* harmony export */   shouldIntercept: () => (/* binding */ ee),
/* harmony export */   urlWithoutHash: () => (/* binding */ w)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deepmerge */ "deepmerge");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ "nprogress");
function R(t,e){let i;return function(...n){clearTimeout(i),i=setTimeout(()=>t.apply(this,n),e)}}function f(t,e){return document.dispatchEvent(new CustomEvent(`inertia:${t}`,e))}var M=t=>f("before",{cancelable:!0,detail:{visit:t}}),j=t=>f("error",{detail:{errors:t}}),H=t=>f("exception",{cancelable:!0,detail:{exception:t}}),N=t=>f("finish",{detail:{visit:t}}),$=t=>f("invalid",{cancelable:!0,detail:{response:t}}),S=t=>f("navigate",{detail:{page:t}}),q=t=>f("progress",{detail:{progress:t}}),W=t=>f("start",{detail:{visit:t}}),K=t=>f("success",{detail:{page:t}});function I(t){return t instanceof File||t instanceof Blob||t instanceof FileList&&t.length>0||t instanceof FormData&&Array.from(t.values()).some(e=>I(e))||typeof t=="object"&&t!==null&&Object.values(t).some(e=>I(e))}function A(t,e=new FormData,i=null){t=t||{};for(let n in t)Object.prototype.hasOwnProperty.call(t,n)&&J(e,X(i,n),t[n]);return e}function X(t,e){return t?t+"["+e+"]":e}function J(t,e,i){if(Array.isArray(i))return Array.from(i.keys()).forEach(n=>J(t,X(e,n.toString()),i[n]));if(i instanceof Date)return t.append(e,i.toISOString());if(i instanceof File)return t.append(e,i,i.name);if(i instanceof Blob)return t.append(e,i);if(typeof i=="boolean")return t.append(e,i?"1":"0");if(typeof i=="string")return t.append(e,i);if(typeof i=="number")return t.append(e,`${i}`);if(i==null)return t.append(e,"");A(i,t,e)}var z={modal:null,listener:null,show(t){typeof t=="object"&&(t=`All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>${JSON.stringify(t)}`);let e=document.createElement("html");e.innerHTML=t,e.querySelectorAll("a").forEach(n=>n.setAttribute("target","_top")),this.modal=document.createElement("div"),this.modal.style.position="fixed",this.modal.style.width="100vw",this.modal.style.height="100vh",this.modal.style.padding="50px",this.modal.style.boxSizing="border-box",this.modal.style.backgroundColor="rgba(0, 0, 0, .6)",this.modal.style.zIndex=2e5,this.modal.addEventListener("click",()=>this.hide());let i=document.createElement("iframe");if(i.style.backgroundColor="white",i.style.borderRadius="5px",i.style.width="100%",i.style.height="100%",this.modal.appendChild(i),document.body.prepend(this.modal),document.body.style.overflow="hidden",!i.contentWindow)throw new Error("iframe not yet ready.");i.contentWindow.document.open(),i.contentWindow.document.write(e.outerHTML),i.contentWindow.document.close(),this.listener=this.hideOnEscape.bind(this),document.addEventListener("keydown",this.listener)},hide(){this.modal.outerHTML="",this.modal=null,document.body.style.overflow="visible",document.removeEventListener("keydown",this.listener)},hideOnEscape(t){t.keyCode===27&&this.hide()}};function v(t){return new URL(t.toString(),window.location.toString())}function k(t,e,i,n="brackets"){let o=/^https?:\/\//.test(e.toString()),c=o||e.toString().startsWith("/"),h=!c&&!e.toString().startsWith("#")&&!e.toString().startsWith("?"),m=e.toString().includes("?")||t==="get"&&Object.keys(i).length,b=e.toString().includes("#"),a=new URL(e.toString(),"http://localhost");return t==="get"&&Object.keys(i).length&&(a.search=qs__WEBPACK_IMPORTED_MODULE_2__.stringify(deepmerge__WEBPACK_IMPORTED_MODULE_1__(qs__WEBPACK_IMPORTED_MODULE_2__.parse(a.search,{ignoreQueryPrefix:!0}),i),{encodeValuesOnly:!0,arrayFormat:n}),i={}),[[o?`${a.protocol}//${a.host}`:"",c?a.pathname:"",h?a.pathname.substring(1):"",m?a.search:"",b?a.hash:""].join(""),i]}function w(t){return t=new URL(t.href),t.hash="",t}var _=typeof window>"u",C=class{constructor(){this.visitId=null}init({initialPage:e,resolveComponent:i,swapComponent:n}){this.page=e,this.resolveComponent=i,this.swapComponent=n,this.setNavigationType(),this.clearRememberedStateOnReload(),this.isBackForwardVisit()?this.handleBackForwardVisit(this.page):this.isLocationVisit()?this.handleLocationVisit(this.page):this.handleInitialPageVisit(this.page),this.setupEventListeners()}setNavigationType(){this.navigationType=window.performance&&window.performance.getEntriesByType("navigation").length>0?window.performance.getEntriesByType("navigation")[0].type:"navigate"}clearRememberedStateOnReload(){this.navigationType==="reload"&&window.history.state?.rememberedState&&delete window.history.state.rememberedState}handleInitialPageVisit(e){this.page.url+=window.location.hash,this.setPage(e,{preserveState:!0}).then(()=>S(e))}setupEventListeners(){window.addEventListener("popstate",this.handlePopstateEvent.bind(this)),document.addEventListener("scroll",R(this.handleScrollEvent.bind(this),100),!0)}scrollRegions(){return document.querySelectorAll("[scroll-region]")}handleScrollEvent(e){typeof e.target.hasAttribute=="function"&&e.target.hasAttribute("scroll-region")&&this.saveScrollPositions()}saveScrollPositions(){this.replaceState({...this.page,scrollRegions:Array.from(this.scrollRegions()).map(e=>({top:e.scrollTop,left:e.scrollLeft}))})}resetScrollPositions(){window.scrollTo(0,0),this.scrollRegions().forEach(e=>{typeof e.scrollTo=="function"?e.scrollTo(0,0):(e.scrollTop=0,e.scrollLeft=0)}),this.saveScrollPositions(),window.location.hash&&setTimeout(()=>document.getElementById(window.location.hash.slice(1))?.scrollIntoView())}restoreScrollPositions(){this.page.scrollRegions&&this.scrollRegions().forEach((e,i)=>{let n=this.page.scrollRegions[i];if(n)typeof e.scrollTo=="function"?e.scrollTo(n.left,n.top):(e.scrollTop=n.top,e.scrollLeft=n.left);else return})}isBackForwardVisit(){return window.history.state&&this.navigationType==="back_forward"}handleBackForwardVisit(e){window.history.state.version=e.version,this.setPage(window.history.state,{preserveScroll:!0,preserveState:!0}).then(()=>{this.restoreScrollPositions(),S(e)})}locationVisit(e,i){try{let n={preserveScroll:i};window.sessionStorage.setItem("inertiaLocationVisit",JSON.stringify(n)),window.location.href=e.href,w(window.location).href===w(e).href&&window.location.reload()}catch{return!1}}isLocationVisit(){try{return window.sessionStorage.getItem("inertiaLocationVisit")!==null}catch{return!1}}handleLocationVisit(e){let i=JSON.parse(window.sessionStorage.getItem("inertiaLocationVisit")||"");window.sessionStorage.removeItem("inertiaLocationVisit"),e.url+=window.location.hash,e.rememberedState=window.history.state?.rememberedState??{},e.scrollRegions=window.history.state?.scrollRegions??[],this.setPage(e,{preserveScroll:i.preserveScroll,preserveState:!0}).then(()=>{i.preserveScroll&&this.restoreScrollPositions(),S(e)})}isLocationVisitResponse(e){return!!(e&&e.status===409&&e.headers["x-inertia-location"])}isInertiaResponse(e){return!!e?.headers["x-inertia"]}createVisitId(){return this.visitId={},this.visitId}cancelVisit(e,{cancelled:i=!1,interrupted:n=!1}){e&&!e.completed&&!e.cancelled&&!e.interrupted&&(e.cancelToken.abort(),e.onCancel(),e.completed=!1,e.cancelled=i,e.interrupted=n,N(e),e.onFinish(e))}finishVisit(e){!e.cancelled&&!e.interrupted&&(e.completed=!0,e.cancelled=!1,e.interrupted=!1,N(e),e.onFinish(e))}resolvePreserveOption(e,i){return typeof e=="function"?e(i):e==="errors"?Object.keys(i.props.errors||{}).length>0:e}cancel(){this.activeVisit&&this.cancelVisit(this.activeVisit,{cancelled:!0})}visit(e,{method:i="get",data:n={},replace:o=!1,preserveScroll:c=!1,preserveState:h=!1,only:m=[],headers:b={},errorBag:a="",forceFormData:l=!1,onCancelToken:g=()=>{},onBefore:L=()=>{},onStart:d=()=>{},onProgress:p=()=>{},onFinish:T=()=>{},onCancel:y=()=>{},onSuccess:D=()=>{},onError:U=()=>{},queryStringArrayFormat:F="brackets"}={}){let x=typeof e=="string"?v(e):e;if((I(n)||l)&&!(n instanceof FormData)&&(n=A(n)),!(n instanceof FormData)){let[r,s]=k(i,x,n,F);x=v(r),n=s}let P={url:x,method:i,data:n,replace:o,preserveScroll:c,preserveState:h,only:m,headers:b,errorBag:a,forceFormData:l,queryStringArrayFormat:F,cancelled:!1,completed:!1,interrupted:!1};if(L(P)===!1||!M(P))return;this.activeVisit&&this.cancelVisit(this.activeVisit,{interrupted:!0}),this.saveScrollPositions();let G=this.createVisitId();this.activeVisit={...P,onCancelToken:g,onBefore:L,onStart:d,onProgress:p,onFinish:T,onCancel:y,onSuccess:D,onError:U,queryStringArrayFormat:F,cancelToken:new AbortController},g({cancel:()=>{this.activeVisit&&this.cancelVisit(this.activeVisit,{cancelled:!0})}}),W(P),d(P),axios__WEBPACK_IMPORTED_MODULE_0__({method:i,url:w(x).href,data:i==="get"?{}:n,params:i==="get"?n:{},signal:this.activeVisit.cancelToken.signal,headers:{...b,Accept:"text/html, application/xhtml+xml","X-Requested-With":"XMLHttpRequest","X-Inertia":!0,...m.length?{"X-Inertia-Partial-Component":this.page.component,"X-Inertia-Partial-Data":m.join(",")}:{},...a&&a.length?{"X-Inertia-Error-Bag":a}:{},...this.page.version?{"X-Inertia-Version":this.page.version}:{}},onUploadProgress:r=>{n instanceof FormData&&(r.percentage=r.progress?Math.round(r.progress*100):0,q(r),p(r))}}).then(r=>{if(!this.isInertiaResponse(r))return Promise.reject({response:r});let s=r.data;m.length&&s.component===this.page.component&&(s.props={...this.page.props,...s.props}),c=this.resolvePreserveOption(c,s),h=this.resolvePreserveOption(h,s),h&&window.history.state?.rememberedState&&s.component===this.page.component&&(s.rememberedState=window.history.state.rememberedState);let E=x,V=v(s.url);return E.hash&&!V.hash&&w(E).href===V.href&&(V.hash=E.hash,s.url=V.href),this.setPage(s,{visitId:G,replace:o,preserveScroll:c,preserveState:h})}).then(()=>{let r=this.page.props.errors||{};if(Object.keys(r).length>0){let s=a?r[a]?r[a]:{}:r;return j(s),U(s)}return K(this.page),D(this.page)}).catch(r=>{if(this.isInertiaResponse(r.response))return this.setPage(r.response.data,{visitId:G});if(this.isLocationVisitResponse(r.response)){let s=v(r.response.headers["x-inertia-location"]),E=x;E.hash&&!s.hash&&w(E).href===s.href&&(s.hash=E.hash),this.locationVisit(s,c===!0)}else if(r.response)$(r.response)&&z.show(r.response.data);else return Promise.reject(r)}).then(()=>{this.activeVisit&&this.finishVisit(this.activeVisit)}).catch(r=>{if(!axios__WEBPACK_IMPORTED_MODULE_0__.isCancel(r)){let s=H(r);if(this.activeVisit&&this.finishVisit(this.activeVisit),s)return Promise.reject(r)}})}setPage(e,{visitId:i=this.createVisitId(),replace:n=!1,preserveScroll:o=!1,preserveState:c=!1}={}){return Promise.resolve(this.resolveComponent(e.component)).then(h=>{i===this.visitId&&(e.scrollRegions=e.scrollRegions||[],e.rememberedState=e.rememberedState||{},n=n||v(e.url).href===window.location.href,n?this.replaceState(e):this.pushState(e),this.swapComponent({component:h,page:e,preserveState:c}).then(()=>{o||this.resetScrollPositions(),n||S(e)}))})}pushState(e){this.page=e,window.history.pushState(e,"",e.url)}replaceState(e){this.page=e,window.history.replaceState(e,"",e.url)}handlePopstateEvent(e){if(e.state!==null){let i=e.state,n=this.createVisitId();Promise.resolve(this.resolveComponent(i.component)).then(o=>{n===this.visitId&&(this.page=i,this.swapComponent({component:o,page:i,preserveState:!1}).then(()=>{this.restoreScrollPositions(),S(i)}))})}else{let i=v(this.page.url);i.hash=window.location.hash,this.replaceState({...this.page,url:i.href}),this.resetScrollPositions()}}get(e,i={},n={}){return this.visit(e,{...n,method:"get",data:i})}reload(e={}){return this.visit(window.location.href,{...e,preserveScroll:!0,preserveState:!0})}replace(e,i={}){return console.warn(`Inertia.replace() has been deprecated and will be removed in a future release. Please use Inertia.${i.method??"get"}() instead.`),this.visit(e,{preserveState:!0,...i,replace:!0})}post(e,i={},n={}){return this.visit(e,{preserveState:!0,...n,method:"post",data:i})}put(e,i={},n={}){return this.visit(e,{preserveState:!0,...n,method:"put",data:i})}patch(e,i={},n={}){return this.visit(e,{preserveState:!0,...n,method:"patch",data:i})}delete(e,i={}){return this.visit(e,{preserveState:!0,...i,method:"delete"})}remember(e,i="default"){_||this.replaceState({...this.page,rememberedState:{...this.page?.rememberedState,[i]:e}})}restore(e="default"){if(!_)return window.history.state?.rememberedState?.[e]}on(e,i){let n=o=>{let c=i(o);o.cancelable&&!o.defaultPrevented&&c===!1&&o.preventDefault()};return document.addEventListener(`inertia:${e}`,n),()=>document.removeEventListener(`inertia:${e}`,n)}};var ie={buildDOMElement(t){let e=document.createElement("template");e.innerHTML=t;let i=e.content.firstChild;if(!t.startsWith("<script "))return i;let n=document.createElement("script");return n.innerHTML=i.innerHTML,i.getAttributeNames().forEach(o=>{n.setAttribute(o,i.getAttribute(o)||"")}),n},isInertiaManagedElement(t){return t.nodeType===Node.ELEMENT_NODE&&t.getAttribute("inertia")!==null},findMatchingElementIndex(t,e){let i=t.getAttribute("inertia");return i!==null?e.findIndex(n=>n.getAttribute("inertia")===i):-1},update:R(function(t){let e=t.map(n=>this.buildDOMElement(n));Array.from(document.head.childNodes).filter(n=>this.isInertiaManagedElement(n)).forEach(n=>{let o=this.findMatchingElementIndex(n,e);if(o===-1){n?.parentNode?.removeChild(n);return}let c=e.splice(o,1)[0];c&&!n.isEqualNode(c)&&n?.parentNode?.replaceChild(c,n)}),e.forEach(n=>document.head.appendChild(n))},1)};function Q(t,e,i){let n={},o=0;function c(){let l=o+=1;return n[l]=[],l.toString()}function h(l){l===null||Object.keys(n).indexOf(l)===-1||(delete n[l],a())}function m(l,g=[]){l!==null&&Object.keys(n).indexOf(l)>-1&&(n[l]=g),a()}function b(){let l=e(""),g={...l?{title:`<title inertia="">${l}</title>`}:{}},L=Object.values(n).reduce((d,p)=>d.concat(p),[]).reduce((d,p)=>{if(p.indexOf("<")===-1)return d;if(p.indexOf("<title ")===0){let y=p.match(/(<title [^>]+>)(.*?)(<\/title>)/);return d.title=y?`${y[1]}${e(y[2])}${y[3]}`:p,d}let T=p.match(/ inertia="[^"]+"/);return T?d[T[0]]=p:d[Object.keys(d).length]=p,d},g);return Object.values(L)}function a(){t?i(b()):ie.update(b())}return a(),{forceUpdate:a,createProvider:function(){let l=c();return{update:g=>m(l,g),disconnect:()=>h(l)}}}}var Y=null;function ne(t){document.addEventListener("inertia:start",re.bind(null,t)),document.addEventListener("inertia:progress",oe),document.addEventListener("inertia:finish",se)}function re(t){Y=setTimeout(()=>nprogress__WEBPACK_IMPORTED_MODULE_3__.start(),t)}function oe(t){nprogress__WEBPACK_IMPORTED_MODULE_3__.isStarted()&&t.detail.progress?.percentage&&nprogress__WEBPACK_IMPORTED_MODULE_3__.set(Math.max(nprogress__WEBPACK_IMPORTED_MODULE_3__.status,t.detail.progress.percentage/100*.9))}function se(t){if(clearTimeout(Y),nprogress__WEBPACK_IMPORTED_MODULE_3__.isStarted())t.detail.visit.completed?nprogress__WEBPACK_IMPORTED_MODULE_3__.done():t.detail.visit.interrupted?nprogress__WEBPACK_IMPORTED_MODULE_3__.set(0):t.detail.visit.cancelled&&(nprogress__WEBPACK_IMPORTED_MODULE_3__.done(),nprogress__WEBPACK_IMPORTED_MODULE_3__.remove());else return}function ae(t){let e=document.createElement("style");e.type="text/css",e.textContent=`
    #nprogress {
      pointer-events: none;
    }

    #nprogress .bar {
      background: ${t};

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${t}, 0 0 5px ${t};
      opacity: 1.0;

      -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
    }

    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ${t};
      border-left-color: ${t};
      border-radius: 50%;

      -webkit-animation: nprogress-spinner 400ms linear infinite;
              animation: nprogress-spinner 400ms linear infinite;
    }

    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }

    @-webkit-keyframes nprogress-spinner {
      0%   { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes nprogress-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `,document.head.appendChild(e)}function Z({delay:t=250,color:e="#29d",includeCSS:i=!0,showSpinner:n=!1}={}){ne(t),nprogress__WEBPACK_IMPORTED_MODULE_3__.configure({showSpinner:n}),i&&ae(e)}function ee(t){let e=t.currentTarget.tagName.toLowerCase()==="a";return!(t.target&&(t?.target).isContentEditable||t.defaultPrevented||e&&t.which>1||e&&t.altKey||e&&t.ctrlKey||e&&t.metaKey||e&&t.shiftKey)}var Oe=new C;
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@inertiajs/react/dist/index.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@inertiajs/react/dist/index.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ ae),
/* harmony export */   Link: () => (/* binding */ de),
/* harmony export */   createInertiaApp: () => (/* binding */ j),
/* harmony export */   router: () => (/* binding */ yt),
/* harmony export */   useForm: () => (/* binding */ W),
/* harmony export */   usePage: () => (/* binding */ q),
/* harmony export */   useRemember: () => (/* binding */ D)
/* harmony export */ });
/* harmony import */ var _inertiajs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/core */ "./node_modules/@inertiajs/core/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.isequal */ "lodash.isequal");
var B=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(void 0);B.displayName="InertiaHeadContext";var A=B;var N=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(void 0);N.displayName="InertiaPageContext";var E=N;function w({children:l,initialPage:c,initialComponent:s,resolveComponent:p,titleCallback:a,onHeadUpdate:S}){let[d,P]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({component:s||null,page:c,key:null}),u=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,_inertiajs_core__WEBPACK_IMPORTED_MODULE_0__.createHeadManager)(typeof window>"u",a||(f=>f),S||(()=>{})),[]);if((0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{_inertiajs_core__WEBPACK_IMPORTED_MODULE_0__.router.init({initialPage:c,resolveComponent:p,swapComponent:async({component:f,page:e,preserveState:i})=>{P(r=>({component:f,page:e,key:i?r.key:Date.now()}))}}),_inertiajs_core__WEBPACK_IMPORTED_MODULE_0__.router.on("navigate",()=>u.forceUpdate())},[]),!d.component)return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(A.Provider,{value:u},(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(E.Provider,{value:d.page},null));let g=l||(({Component:f,props:e,key:i})=>{let r=(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(f,{key:i,...e});return typeof f.layout=="function"?f.layout(r):Array.isArray(f.layout)?f.layout.concat(r).reverse().reduce((y,T)=>(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(T,{children:y,...e})):r});return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(A.Provider,{value:u},(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(E.Provider,{value:d.page},g({Component:d.component,key:d.key,props:d.page.props})))}w.displayName="Inertia";async function j({id:l="app",resolve:c,setup:s,title:p,progress:a={},page:S,render:d}){let P=typeof window>"u",u=P?null:document.getElementById(l),g=S||JSON.parse(u.dataset.page),f=r=>Promise.resolve(c(r)).then(y=>y.default||y),e=[],i=await f(g.component).then(r=>s({el:u,App:w,props:{initialPage:g,initialComponent:r,resolveComponent:f,titleCallback:p,onHeadUpdate:P?y=>e=y:null}}));if(!P&&a&&(0,_inertiajs_core__WEBPACK_IMPORTED_MODULE_0__.setupProgress)(a),P){let r=await d((0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("div",{id:l,"data-page":JSON.stringify(g)},i));return{head:e,body:r}}}var ne=function({children:l,title:c}){let s=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(A),p=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>s.createProvider(),[s]);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>()=>{p.disconnect()},[p]);function a(e){return["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"].indexOf(e.type)>-1}function S(e){let i=Object.keys(e.props).reduce((r,y)=>{if(["head-key","children","dangerouslySetInnerHTML"].includes(y))return r;let T=e.props[y];return T===""?r+` ${y}`:r+` ${y}="${T}"`},"");return`<${e.type}${i}>`}function d(e){return typeof e.props.children=="string"?e.props.children:e.props.children.reduce((i,r)=>i+P(r),"")}function P(e){let i=S(e);return e.props.children&&(i+=d(e)),e.props.dangerouslySetInnerHTML&&(i+=e.props.dangerouslySetInnerHTML.__html),a(e)||(i+=`</${e.type}>`),i}function u(e){return react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(e,{inertia:e.props["head-key"]!==void 0?e.props["head-key"]:""})}function g(e){return P(u(e))}function f(e){let i=react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(e).filter(r=>r).map(r=>g(r));return c&&!i.find(r=>r.startsWith("<title"))&&i.push(`<title inertia>${c}</title>`),i}return p.update(f(l)),null},ae=ne;var F=()=>{},V=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({children:l,as:c="a",data:s={},href:p,method:a="get",preserveScroll:S=!1,preserveState:d=null,replace:P=!1,only:u=[],headers:g={},queryStringArrayFormat:f="brackets",onClick:e=F,onCancelToken:i=F,onBefore:r=F,onStart:y=F,onProgress:T=F,onFinish:H=F,onCancel:h=F,onSuccess:M=F,onError:x=F,...O},R)=>{let I=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(o=>{e(o),(0,_inertiajs_core__WEBPACK_IMPORTED_MODULE_0__.shouldIntercept)(o)&&(o.preventDefault(),_inertiajs_core__WEBPACK_IMPORTED_MODULE_0__.router.visit(p,{data:s,method:a,preserveScroll:S,preserveState:d??a!=="get",replace:P,only:u,headers:g,onCancelToken:i,onBefore:r,onStart:y,onProgress:T,onFinish:H,onCancel:h,onSuccess:M,onError:x}))},[s,p,a,S,d,P,u,g,e,i,r,y,T,H,h,M,x]);c=c.toLowerCase(),a=a.toLowerCase();let[v,t]=(0,_inertiajs_core__WEBPACK_IMPORTED_MODULE_0__.mergeDataIntoQueryString)(a,p||"",s,f);return p=v,s=t,c==="a"&&a!=="get"&&console.warn(`Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${p}" method="${a}" as="button">...</Link>`),(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(c,{...O,...c==="a"?{href:p}:{},ref:R,onClick:I},l)});V.displayName="InertiaLink";var de=V;function D(l,c){let[s,p]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{let a=_inertiajs_core__WEBPACK_IMPORTED_MODULE_0__.router.restore(c);return a!==void 0?a:l});return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{_inertiajs_core__WEBPACK_IMPORTED_MODULE_0__.router.remember(s,c)},[s,c]),[s,p]}function W(l,c){let s=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),p=typeof l=="string"?l:null,[a,S]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((typeof l=="string"?c:l)||{}),d=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),P=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),[u,g]=p?D(a,`${p}:data`):(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(a),[f,e]=p?D({},`${p}:errors`):(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),[i,r]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),[y,T]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),[H,h]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),[M,x]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),[O,R]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),I=t=>t;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>(s.current=!0,()=>{s.current=!1}),[]);let v=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((t,o,n={})=>{let k={...n,onCancelToken:m=>{if(d.current=m,n.onCancelToken)return n.onCancelToken(m)},onBefore:m=>{if(x(!1),R(!1),clearTimeout(P.current),n.onBefore)return n.onBefore(m)},onStart:m=>{if(T(!0),n.onStart)return n.onStart(m)},onProgress:m=>{if(h(m),n.onProgress)return n.onProgress(m)},onSuccess:m=>{if(s.current&&(T(!1),h(null),e({}),r(!1),x(!0),R(!0),P.current=setTimeout(()=>{s.current&&R(!1)},2e3)),n.onSuccess)return n.onSuccess(m)},onError:m=>{if(s.current&&(T(!1),h(null),e(m),r(!0)),n.onError)return n.onError(m)},onCancel:()=>{if(s.current&&(T(!1),h(null)),n.onCancel)return n.onCancel()},onFinish:()=>{if(s.current&&(T(!1),h(null)),d.current=null,n.onFinish)return n.onFinish()}};t==="delete"?_inertiajs_core__WEBPACK_IMPORTED_MODULE_0__.router.delete(o,{...k,data:I(u)}):_inertiajs_core__WEBPACK_IMPORTED_MODULE_0__.router[t](o,I(u),k)},[u,e]);return{data:u,setData(t,o){g(typeof t=="string"?{...u,[t]:o}:typeof t=="function"?n=>t(n):t)},isDirty:!lodash_isequal__WEBPACK_IMPORTED_MODULE_2__(u,a),errors:f,hasErrors:i,processing:y,progress:H,wasSuccessful:M,recentlySuccessful:O,transform(t){I=t},setDefaults(t,o){S(typeof t>"u"?()=>u:n=>({...n,...typeof t=="string"?{[t]:o}:t}))},reset(...t){t.length===0?g(a):g(Object.keys(a).filter(o=>t.includes(o)).reduce((o,n)=>(o[n]=a[n],o),{...u}))},setError(t,o){e(n=>{let k={...n,...typeof t=="string"?{[t]:o}:t};return r(Object.keys(k).length>0),k})},clearErrors(...t){e(o=>{let n=Object.keys(o).reduce((k,m)=>({...k,...t.length>0&&!t.includes(m)?{[m]:o[m]}:{}}),{});return r(Object.keys(n).length>0),n})},submit:v,get(t,o){v("get",t,o)},post(t,o){v("post",t,o)},put(t,o){v("put",t,o)},patch(t,o){v("patch",t,o)},delete(t,o){v("delete",t,o)},cancel(){d.current&&d.current.cancel()}}}function q(){let l=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(E);if(!l)throw new Error("usePage must be used within the Inertia component");return l}var yt=_inertiajs_core__WEBPACK_IMPORTED_MODULE_0__.router;
//# sourceMappingURL=index.esm.js.map


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./resources/js/ssr.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inertiajs_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/react */ "./node_modules/@inertiajs/react/dist/index.esm.js");



function render(page) {
  return (0,_inertiajs_react__WEBPACK_IMPORTED_MODULE_2__.createInertiaApp)({
    page: page,
    render: (react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString),
    resolve: function resolve(name) {
      return __webpack_require__("./resources/js/Pages sync recursive ^\\.\\/.*$")("./".concat(name));
    },
    setup: function setup(_ref) {
      var App = _ref.App,
        props = _ref.props;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, props);
    }
  });
}
})();

module.exports = __webpack_exports__;
