(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function t(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t){n(e,t),t.add(e)}function i(e,t,r){n(e,t),t.set(e,r)}function n(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function o(e,t,r){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return r}function a(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,c(e,t,"get"))}function l(e,t,r){return function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}(e,c(e,t,"set"),r),r}function c(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}var s=new WeakMap,u=new WeakMap,d=new WeakMap,h=new WeakMap,v=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap,_=new WeakMap,b=new WeakSet,w=new WeakSet,y=new WeakMap,S=new WeakMap,k=new WeakSet,g=function(){function e(t){var n=this,o=t.containerSelector,c=t.itemsSelector,g=t.nextScrollerSelector,q=t.prevScrollerSelector,L=t.activeItemClass,E=t.textItemsSelectors;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,k),r(this,w),r(this,b),i(this,s,{writable:!0,value:void 0}),i(this,u,{writable:!0,value:void 0}),i(this,d,{writable:!0,value:void 0}),i(this,h,{writable:!0,value:void 0}),i(this,v,{writable:!0,value:void 0}),i(this,f,{writable:!0,value:void 0}),i(this,p,{writable:!0,value:void 0}),i(this,m,{writable:!0,value:void 0}),i(this,_,{writable:!0,value:void 0}),i(this,y,{writable:!0,value:function(e){var t="next"===e?a(n,m):0,r="next"===e?0:a(n,m);a(n,u)[a(n,p)].classList.remove(a(n,d)),a(n,p)===t&&(a(n,u)[r].scrollIntoView({inline:"start",block:"nearest",behavior:"auto"}),l(n,p,r)),l(n,p,"next"===e?a(n,p)+1:a(n,p)-1)}}),i(this,S,{writable:!0,value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"smooth";a(n,u)[a(n,p)].classList.add(a(n,d)),a(n,u)[a(n,p)].scrollIntoView({inline:"start",block:"nearest",behavior:e}),a(n,_).forEach((function(e){var t=e.element,r=e.source;t.textContent=a(n,u)[a(n,p)].dataset[r]}))}}),l(this,s,document.querySelector(o)),l(this,u,Array.from(document.querySelectorAll(c))),l(this,d,L),l(this,h,E),l(this,v,document.querySelector(g)),l(this,f,document.querySelector(q))}var n,c;return n=e,(c=[{key:"init",value:function(){l(this,p,1),l(this,m,a(this,u).length),o(this,b,q).call(this),o(this,w,L).call(this),o(this,k,E).call(this),a(this,S).call(this,"auto")}}])&&t(n.prototype,c),Object.defineProperty(n,"prototype",{writable:!1}),e}();function q(){l(this,_,a(this,h).map((function(e){return{element:document.querySelector(e.selector),source:e.attributeName}})))}function L(){var t,r=a(this,u)[a(this,m)-1].cloneNode(!0),i=a(this,u)[0].cloneNode(!0);a(this,s).append(i),a(this,s).prepend(r),l(this,u,[r].concat(function(t){if(Array.isArray(t))return e(t)}(t=a(this,u))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,r){if(t){if("string"==typeof t)return e(t,r);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?e(t,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[i]))}function E(){var e=this;a(this,v).addEventListener("click",(function(){a(e,y).call(e,"next"),a(e,S).call(e)})),a(this,f).addEventListener("click",(function(){a(e,y).call(e,"prev"),a(e,S).call(e)}))}var W=document.querySelectorAll("[data-href]"),M=document.querySelector(".footer__theme-switch"),x=document.querySelector(".page");new g({containerSelector:".roads__pics-list",itemsSelector:".roads__pics-item",activeItemClass:"roads__pics-item_active",nextScrollerSelector:".roads__button_dir_right",prevScrollerSelector:".roads__button_dir_left",textItemsSelectors:[{selector:".roads__title",attributeName:"title"},{selector:".roads__text",attributeName:"text"}]}).init(),W.forEach((function(e){e.addEventListener("click",(function(){var t=e.dataset.href;document.querySelector(t).scrollIntoView({behavior:"smooth"})}))})),M.addEventListener("click",(function(){x.classList.toggle("page_dark"),M.querySelector(".footer__switch-toggle").classList.toggle("footer__switch-toggle_dark")})),document.querySelectorAll(".bikes__button").forEach((function(e){e.addEventListener("click",(function(){document.querySelector(".bikes__type_active").classList.remove("bikes__type_active"),document.querySelector(".bikes__button_active").classList.remove("bikes__button_active"),document.querySelector("#bikes-type-".concat(e.dataset.type)).classList.add("bikes__type_active"),e.classList.add("bikes__button_active")}))})),document.querySelector(".header__burger").addEventListener("click",(function(){document.querySelector(".header__links").classList.toggle("header__links_opened"),document.querySelector(".header__burger").classList.toggle("hamburger_active")})),document.querySelector(".header").addEventListener("swiped",(function(e){alert(e.target),alert(e.detail),alert(e.detail.dir)}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU83QyxJQUNoQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhdmVsLy4vc3JjL2NvbXBvbmVudHMvQ2Fyb3VzZWxTY3JvbGxlci5qcyIsIndlYnBhY2s6Ly9ncmF2ZWwvLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2dyYXZlbC8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJvdXNlbFNjcm9sbGVyIHtcbiAgI2NvbnRhaW5lclxuICAjaXRlbXNcbiAgI2FjdGl2ZUl0ZW1DbGFzc1xuICAjdGV4dEl0ZW1zU2VsZWN0b3JzXG4gICNuZXh0U2Nyb2xsZXJcbiAgI3ByZXZTY3JvbGxlclxuICAjY3VycmVudElkeFxuICAjbGVuZ3RoXG4gICN0ZXh0RWxlbWVudHNcblxuICBjb25zdHJ1Y3Rvcih7XG4gICAgY29udGFpbmVyU2VsZWN0b3IsXG4gICAgaXRlbXNTZWxlY3RvcixcbiAgICBuZXh0U2Nyb2xsZXJTZWxlY3RvcixcbiAgICBwcmV2U2Nyb2xsZXJTZWxlY3RvcixcbiAgICBhY3RpdmVJdGVtQ2xhc3MsXG4gICAgdGV4dEl0ZW1zU2VsZWN0b3JzXG4gIH0pIHtcbiAgICB0aGlzLiNjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcbiAgICB0aGlzLiNpdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChpdGVtc1NlbGVjdG9yKSk7XG4gICAgdGhpcy4jYWN0aXZlSXRlbUNsYXNzID0gYWN0aXZlSXRlbUNsYXNzO1xuICAgIHRoaXMuI3RleHRJdGVtc1NlbGVjdG9ycyA9IHRleHRJdGVtc1NlbGVjdG9ycztcbiAgICB0aGlzLiNuZXh0U2Nyb2xsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5leHRTY3JvbGxlclNlbGVjdG9yKTtcbiAgICB0aGlzLiNwcmV2U2Nyb2xsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByZXZTY3JvbGxlclNlbGVjdG9yKTtcbiAgfVxuXG4gICNzZXRUZXh0RWxlbWVudHMoKSB7XG4gICAgdGhpcy4jdGV4dEVsZW1lbnRzID0gdGhpcy4jdGV4dEl0ZW1zU2VsZWN0b3JzLm1hcChpdGVtID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaXRlbS5zZWxlY3RvciksXG4gICAgICAgIHNvdXJjZTogaXRlbS5hdHRyaWJ1dGVOYW1lXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAjYWRkU2Nyb2xsUGxhY2Vob2xkZXJzKCkge1xuICAgIGNvbnN0IGVuZEVsZW1lbnQgPSB0aGlzLiNpdGVtc1t0aGlzLiNsZW5ndGggLSAxXS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgY29uc3Qgc3RhcnRFbGVtZW50ID0gdGhpcy4jaXRlbXNbMF0uY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgdGhpcy4jY29udGFpbmVyLmFwcGVuZChzdGFydEVsZW1lbnQpO1xuICAgIHRoaXMuI2NvbnRhaW5lci5wcmVwZW5kKGVuZEVsZW1lbnQpO1xuICAgIHRoaXMuI2l0ZW1zID0gW2VuZEVsZW1lbnQsIC4uLnRoaXMuI2l0ZW1zLCBzdGFydEVsZW1lbnRdO1xuICB9XG5cbiAgI2NoZWNrU2Nyb2xsQm9yZGVyID0gKGRpcikgPT4ge1xuICAgIGNvbnN0IGJvcmRlciA9IGRpciA9PT0gJ25leHQnID8gdGhpcy4jbGVuZ3RoIDogMDtcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9IGRpciA9PT0gJ25leHQnID8gMCA6IHRoaXMuI2xlbmd0aDtcbiAgICB0aGlzLiNpdGVtc1t0aGlzLiNjdXJyZW50SWR4XS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuI2FjdGl2ZUl0ZW1DbGFzcyk7XG4gICAgaWYgKHRoaXMuI2N1cnJlbnRJZHggPT09IGJvcmRlcikge1xuICAgICAgdGhpcy4jaXRlbXNbcGxhY2Vob2xkZXJdLnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgaW5saW5lOiAnc3RhcnQnLFxuICAgICAgICBibG9jazogJ25lYXJlc3QnLFxuICAgICAgICBiZWhhdmlvcjogJ2F1dG8nXG4gICAgICB9KTtcbiAgICAgIHRoaXMuI2N1cnJlbnRJZHggPSBwbGFjZWhvbGRlcjtcbiAgICB9XG4gICAgdGhpcy4jY3VycmVudElkeCA9IGRpciA9PT0gJ25leHQnXG4gICAgICA/IHRoaXMuI2N1cnJlbnRJZHggKyAxXG4gICAgICA6IHRoaXMuI2N1cnJlbnRJZHggLSAxO1xuICB9XG5cbiAgI3Njcm9sbFRvQ3VycmVudEl0ZW0gPSAoYmVoYXZpb3IgPSAnc21vb3RoJykgPT4ge1xuICAgIHRoaXMuI2l0ZW1zW3RoaXMuI2N1cnJlbnRJZHhdLmNsYXNzTGlzdC5hZGQodGhpcy4jYWN0aXZlSXRlbUNsYXNzKTtcbiAgICB0aGlzLiNpdGVtc1t0aGlzLiNjdXJyZW50SWR4XS5zY3JvbGxJbnRvVmlldyh7XG4gICAgICBpbmxpbmU6ICdzdGFydCcsXG4gICAgICBibG9jazogJ25lYXJlc3QnLFxuICAgICAgYmVoYXZpb3JcbiAgICB9KTtcbiAgICB0aGlzLiN0ZXh0RWxlbWVudHMuZm9yRWFjaCgoeyBlbGVtZW50LCBzb3VyY2UgfSkgPT4ge1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMuI2l0ZW1zW3RoaXMuI2N1cnJlbnRJZHhdLmRhdGFzZXRbc291cmNlXTtcbiAgICB9KTtcbiAgfVxuXG4gICNzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLiNuZXh0U2Nyb2xsZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLiNjaGVja1Njcm9sbEJvcmRlcignbmV4dCcpO1xuICAgICAgdGhpcy4jc2Nyb2xsVG9DdXJyZW50SXRlbSgpO1xuICAgIH0pO1xuICAgIHRoaXMuI3ByZXZTY3JvbGxlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuI2NoZWNrU2Nyb2xsQm9yZGVyKCdwcmV2Jyk7XG4gICAgICB0aGlzLiNzY3JvbGxUb0N1cnJlbnRJdGVtKCk7XG4gICAgfSk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuI2N1cnJlbnRJZHggPSAxO1xuICAgIHRoaXMuI2xlbmd0aCA9IHRoaXMuI2l0ZW1zLmxlbmd0aDtcbiAgICB0aGlzLiNzZXRUZXh0RWxlbWVudHMoKVxuICAgIHRoaXMuI2FkZFNjcm9sbFBsYWNlaG9sZGVycygpO1xuICAgIHRoaXMuI3NldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy4jc2Nyb2xsVG9DdXJyZW50SXRlbSgnYXV0bycpO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgYW5jaG9yTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1ocmVmXScpO1xuZXhwb3J0IGNvbnN0IHRvZ2dsZVRoZW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3Rlcl9fdGhlbWUtc3dpdGNoJyk7XG5leHBvcnQgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJyk7XG4iLCJpbXBvcnQgQ2Fyb3VzZWxTY3JvbGxlciBmcm9tICdAL2NvbXBvbmVudHMvQ2Fyb3VzZWxTY3JvbGxlcic7XG5cbmltcG9ydCB7IGFuY2hvckxpbmtzLCBwYWdlLCB0b2dnbGVUaGVtZUJ1dHRvbiB9IGZyb20gJ0AvdXRpbHMvY29uc3RhbnRzLmpzJztcblxuXG5jb25zdCBiaWtlc0Nhcm91c2VsID0gbmV3IENhcm91c2VsU2Nyb2xsZXIoe1xuICBjb250YWluZXJTZWxlY3RvcjogJy5yb2Fkc19fcGljcy1saXN0JyxcbiAgaXRlbXNTZWxlY3RvcjogJy5yb2Fkc19fcGljcy1pdGVtJyxcbiAgYWN0aXZlSXRlbUNsYXNzOiAncm9hZHNfX3BpY3MtaXRlbV9hY3RpdmUnLFxuICBuZXh0U2Nyb2xsZXJTZWxlY3RvcjogJy5yb2Fkc19fYnV0dG9uX2Rpcl9yaWdodCcsXG4gIHByZXZTY3JvbGxlclNlbGVjdG9yOiAnLnJvYWRzX19idXR0b25fZGlyX2xlZnQnLFxuICB0ZXh0SXRlbXNTZWxlY3RvcnM6IFtcbiAgICB7IHNlbGVjdG9yOiAnLnJvYWRzX190aXRsZScsIGF0dHJpYnV0ZU5hbWU6ICd0aXRsZScgfSxcbiAgICB7IHNlbGVjdG9yOiAnLnJvYWRzX190ZXh0JywgYXR0cmlidXRlTmFtZTogJ3RleHQnIH0sXG4gIF1cbn0pO1xuYmlrZXNDYXJvdXNlbC5pbml0KCk7XG5cbmFuY2hvckxpbmtzLmZvckVhY2gobGluayA9PiB7XG4gIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3Qgc2VjdGlvbklkID0gbGluay5kYXRhc2V0LmhyZWY7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHNlY3Rpb25JZClcbiAgICAgIC5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgfSk7XG4gIH0pO1xufSk7XG5cbnRvZ2dsZVRoZW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBwYWdlLmNsYXNzTGlzdC50b2dnbGUoJ3BhZ2VfZGFyaycpO1xuICB0b2dnbGVUaGVtZUJ1dHRvblxuICAgIC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyX19zd2l0Y2gtdG9nZ2xlJylcbiAgICAuY2xhc3NMaXN0XG4gICAgLnRvZ2dsZSgnZm9vdGVyX19zd2l0Y2gtdG9nZ2xlX2RhcmsnKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmlrZXNfX2J1dHRvbicpLmZvckVhY2goYnV0dG9uID0+IHtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignLmJpa2VzX190eXBlX2FjdGl2ZScpXG4gICAgICAuY2xhc3NMaXN0XG4gICAgICAucmVtb3ZlKCdiaWtlc19fdHlwZV9hY3RpdmUnKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5iaWtlc19fYnV0dG9uX2FjdGl2ZScpXG4gICAgICAuY2xhc3NMaXN0XG4gICAgICAucmVtb3ZlKCdiaWtlc19fYnV0dG9uX2FjdGl2ZScpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihgI2Jpa2VzLXR5cGUtJHtidXR0b24uZGF0YXNldC50eXBlfWApXG4gICAgICAuY2xhc3NMaXN0XG4gICAgICAuYWRkKCdiaWtlc19fdHlwZV9hY3RpdmUnKTtcbiAgICBidXR0b25cbiAgICAgIC5jbGFzc0xpc3RcbiAgICAgIC5hZGQoJ2Jpa2VzX19idXR0b25fYWN0aXZlJyk7XG4gIH0pO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2J1cmdlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19saW5rcycpLmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlcl9fbGlua3Nfb3BlbmVkJylcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYnVyZ2VyJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGFtYnVyZ2VyX2FjdGl2ZScpXG59KVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykuYWRkRXZlbnRMaXN0ZW5lcignc3dpcGVkJywgZSA9PiB7XG4gIGFsZXJ0KGUudGFyZ2V0KTtcbiAgYWxlcnQoZS5kZXRhaWwpO1xuICBhbGVydChlLmRldGFpbC5kaXIpO1xufSk7XG4iXSwibmFtZXMiOlsiQ2Fyb3VzZWxTY3JvbGxlciIsImNvbnRhaW5lclNlbGVjdG9yIiwiaXRlbXNTZWxlY3RvciIsIm5leHRTY3JvbGxlclNlbGVjdG9yIiwicHJldlNjcm9sbGVyU2VsZWN0b3IiLCJhY3RpdmVJdGVtQ2xhc3MiLCJ0ZXh0SXRlbXNTZWxlY3RvcnMiLCJkaXIiLCJib3JkZXIiLCJwbGFjZWhvbGRlciIsImNsYXNzTGlzdCIsInJlbW92ZSIsInNjcm9sbEludG9WaWV3IiwiaW5saW5lIiwiYmxvY2siLCJiZWhhdmlvciIsImFkZCIsImZvckVhY2giLCJlbGVtZW50Iiwic291cmNlIiwidGV4dENvbnRlbnQiLCJkYXRhc2V0IiwidGhpcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwic2VsZWN0b3IiLCJhdHRyaWJ1dGVOYW1lIiwiZW5kRWxlbWVudCIsImNsb25lTm9kZSIsInN0YXJ0RWxlbWVudCIsImFwcGVuZCIsInByZXBlbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiYW5jaG9yTGlua3MiLCJ0b2dnbGVUaGVtZUJ1dHRvbiIsInBhZ2UiLCJpbml0IiwibGluayIsInNlY3Rpb25JZCIsImhyZWYiLCJ0b2dnbGUiLCJidXR0b24iLCJ0eXBlIiwiZSIsImFsZXJ0IiwidGFyZ2V0IiwiZGV0YWlsIl0sInNvdXJjZVJvb3QiOiIifQ==