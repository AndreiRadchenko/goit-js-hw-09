!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var o=r("h6c0i");function i(e,n){var t=Math.random()>.3;return new Promise((function(r,o){setTimeout((function(){t?r("Fulfilled promice ".concat(n+1," in ").concat(e," ms")):o("Rejected promice ".concat(n+1," in ").concat(e," ms"))}),e)})).then((function(e){return o.Notify.success(e,{timeout:5e3})})).catch((function(e){return o.Notify.failure(e,{timeout:5e3})}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();var n=new FormData(e.currentTarget),t={};n.forEach((function(e,n){t[n]=Number(e)})),r=t,o=r.delay,u=r.step,c=r.amount,Array.from({length:c},(function(e,n){return o+n*u})).map(i);var r,o,u,c}))}();
//# sourceMappingURL=03-promises.d464bac4.js.map
