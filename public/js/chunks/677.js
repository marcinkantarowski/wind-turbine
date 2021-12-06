/*! For license information please see 677.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[677],{89479:(e,r)=>{!function(e,r){for(var t in r)e[t]=r[t]}(r,function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";t.r(r),t.d(r,"deepObjectsMerge",(function(){return n})),t.d(r,"getColor",(function(){return a})),t.d(r,"getStyle",(function(){return s})),t.d(r,"hexToRgb",(function(){return l})),t.d(r,"hexToRgba",(function(){return u})),t.d(r,"makeUid",(function(){return d})),t.d(r,"omitByKeys",(function(){return f})),t.d(r,"pickByKeys",(function(){return h})),t.d(r,"rgbToHex",(function(){return p}));var n=function e(r,t){for(var n=0,o=Object.keys(t);n<o.length;n++){var c=o[n];t[c]instanceof Object&&Object.assign(t[c],e(r[c],t[c]))}return Object.assign(r||{},t),r},o=function(){for(var e={},r=document.styleSheets,t="",n=r.length-1;n>-1;n--){for(var o=r[n].cssRules,c=o.length-1;c>-1;c--)if(".ie-custom-properties"===o[c].selectorText){t=o[c].cssText;break}if(t)break}return(t=t.substring(t.lastIndexOf("{")+1,t.lastIndexOf("}"))).split(";").forEach((function(r){if(r){var t=r.split(": ")[0],n=r.split(": ")[1];t&&n&&(e["--".concat(t.trim())]=n.trim())}})),e},c=function(){return Boolean(document.documentMode)&&document.documentMode>=10},i=function(e){return e.match(/^--.*/i)},s=function(e){var r,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(i(e)&&c()){var n=o();r=n[e]}else r=window.getComputedStyle(t,null).getPropertyValue(e).replace(/^\s/,"");return r},a=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,t="--".concat(e),n=s(t,r);return n||e},l=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");var r,t,n;if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(r=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16)):(r=parseInt(e.slice(1,2),16),t=parseInt(e.slice(2,3),16),n=parseInt(e.slice(3,5),16)),"rgba(".concat(r,", ").concat(t,", ").concat(n,")")},u=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if(void 0===e)throw new TypeError("Hex color is not defined");var t,n,o,c=e.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!c)throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16)):(t=parseInt(e.slice(1,2),16),n=parseInt(e.slice(2,3),16),o=parseInt(e.slice(3,5),16)),"rgba(".concat(t,", ").concat(n,", ").concat(o,", ").concat(r/100,")")},d=function(){return"uid-"+Math.random().toString(36).substr(2)},f=function(e,r){for(var t={},n=Object.keys(e),o=0;o<n.length;o++)!r.includes(n[o])&&(t[n[o]]=e[n[o]]);return t},h=function(e,r){for(var t={},n=0;n<r.length;n++)t[r[n]]=e[r[n]];return t},p=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");if("transparent"===e)return"#00000000";var r=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!r)throw new Error("".concat(e," is not a valid rgb color"));var t="0".concat(parseInt(r[1],10).toString(16)),n="0".concat(parseInt(r[2],10).toString(16)),o="0".concat(parseInt(r[3],10).toString(16));return"#".concat(t.slice(-2)).concat(n.slice(-2)).concat(o.slice(-2))},g={deepObjectsMerge:n,getColor:a,getStyle:s,hexToRgb:l,hexToRgba:u,makeUid:d,omitByKeys:f,pickByKeys:h,rgbToHex:p};r.default=g}]))},73677:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>b});var n=t(45697),o=t.n(n),c=t(67294),i=t(94184),s=t.n(i),a=t(34475),l=t(89479),u=t(88876),d=t(85893);function f(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,o,c=[],i=!0,s=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(c.push(n.value),!r||c.length!==r);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(s)throw o}}return c}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return h(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return h(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var p=function(){var e=f((0,c.useState)("rgb(255, 255, 255)"),2),r=e[0],t=e[1],n=(0,c.createRef)();return(0,c.useEffect)((function(){var e=n.current.parentNode.firstChild,r=window.getComputedStyle(e).getPropertyValue("background-color");t(r)}),[n]),(0,d.jsx)("table",{className:"table w-100",ref:n,children:(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{className:"text-medium-emphasis",children:"HEX:"}),(0,d.jsx)("td",{className:"font-weight-bold",children:(0,l.rgbToHex)(r)})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{className:"text-medium-emphasis",children:"RGB:"}),(0,d.jsx)("td",{className:"font-weight-bold",children:r})]})]})})},g=function(e){var r=e.className,t=e.children,n=s()(r,"theme-color w-75 rounded mb-3");return(0,d.jsxs)(a.b7,{xs:12,sm:6,md:4,xl:2,className:"mb-4",children:[(0,d.jsx)("div",{className:n,style:{paddingTop:"75%"}}),t,(0,d.jsx)(p,{})]})};g.propTypes={children:o().node,className:o().string};const b=function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(a.xH,{className:"mb-4",children:[(0,d.jsxs)(a.bn,{children:["Theme colors",(0,d.jsx)(u.Z,{href:"https://coreui.io/docs/utilities/colors/"})]}),(0,d.jsx)(a.sl,{children:(0,d.jsxs)(a.rb,{children:[(0,d.jsx)(g,{className:"bg-primary",children:(0,d.jsx)("h6",{children:"Brand Primary Color"})}),(0,d.jsx)(g,{className:"bg-secondary",children:(0,d.jsx)("h6",{children:"Brand Secondary Color"})}),(0,d.jsx)(g,{className:"bg-success",children:(0,d.jsx)("h6",{children:"Brand Success Color"})}),(0,d.jsx)(g,{className:"bg-danger",children:(0,d.jsx)("h6",{children:"Brand Danger Color"})}),(0,d.jsx)(g,{className:"bg-warning",children:(0,d.jsx)("h6",{children:"Brand Warning Color"})}),(0,d.jsx)(g,{className:"bg-info",children:(0,d.jsx)("h6",{children:"Brand Info Color"})}),(0,d.jsx)(g,{className:"bg-light",children:(0,d.jsx)("h6",{children:"Brand Light Color"})}),(0,d.jsx)(g,{className:"bg-dark",children:(0,d.jsx)("h6",{children:"Brand Dark Color"})})]})})]})})}},94184:(e,r)=>{var t;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var c=typeof t;if("string"===c||"number"===c)e.push(t);else if(Array.isArray(t)){if(t.length){var i=o.apply(null,t);i&&e.push(i)}}else if("object"===c)if(t.toString===Object.prototype.toString)for(var s in t)n.call(t,s)&&t[s]&&e.push(s);else e.push(t.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(t=function(){return o}.apply(r,[]))||(e.exports=t)}()}}]);