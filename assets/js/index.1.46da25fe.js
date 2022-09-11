(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,t){i(e,t),t.add(e)}function r(e,t,n){i(e,t),t.set(e,n)}function i(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function o(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}function a(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,c(e,t,"get"))}function l(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,c(e,t,"set"),n),n}function c(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var s=new WeakMap,u=new WeakMap,d=new WeakMap,h=new WeakMap,v=new WeakMap,f=new WeakMap,p=new WeakMap,b=new WeakMap,w=new WeakMap,m=new WeakSet,_=new WeakSet,y=new WeakSet,g=new WeakMap,S=new WeakMap,k=new WeakSet,E=function(){function e(t){var i=this,o=t.containerSelector,c=t.itemsSelector,E=t.nextScrollerSelector,L=t.prevScrollerSelector,q=t.activeItemClass,M=t.textItemsSelectors;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,k),n(this,y),n(this,_),n(this,m),r(this,s,{writable:!0,value:void 0}),r(this,u,{writable:!0,value:void 0}),r(this,d,{writable:!0,value:void 0}),r(this,h,{writable:!0,value:void 0}),r(this,v,{writable:!0,value:void 0}),r(this,f,{writable:!0,value:void 0}),r(this,p,{writable:!0,value:void 0}),r(this,b,{writable:!0,value:void 0}),r(this,w,{writable:!0,value:void 0}),r(this,g,{writable:!0,value:function(e){var t="next"===e?a(i,b):0,n="next"===e?0:a(i,b);a(i,u)[a(i,p)].classList.remove(a(i,d)),a(i,p)===t&&(a(i,u)[n].scrollIntoView({inline:"start",block:"nearest",behavior:"auto"}),l(i,p,n)),l(i,p,"next"===e?a(i,p)+1:a(i,p)-1)}}),r(this,S,{writable:!0,value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"smooth";a(i,u)[a(i,p)].classList.add(a(i,d)),a(i,u)[a(i,p)].scrollIntoView({inline:"start",block:"nearest",behavior:e}),a(i,w).forEach((function(e){var t=e.element,n=e.source;t.textContent=a(i,u)[a(i,p)].dataset[n]}))}}),l(this,s,document.querySelector(o)),l(this,u,Array.from(document.querySelectorAll(c))),l(this,d,q),l(this,h,M),l(this,v,document.querySelector(E)),l(this,f,document.querySelector(L))}var i,c;return i=e,(c=[{key:"init",value:function(){l(this,p,1),l(this,b,a(this,u).length),o(this,_,q).call(this),o(this,y,M).call(this),o(this,k,W).call(this),a(this,S).call(this,"auto"),o(this,m,L).call(this)}}])&&t(i.prototype,c),Object.defineProperty(i,"prototype",{writable:!1}),e}();function L(){window.scrollTo(0,0)}function q(){l(this,w,a(this,h).map((function(e){return{element:document.querySelector(e.selector),source:e.attributeName}})))}function M(){var t,n=a(this,u)[a(this,b)-1].cloneNode(!0),r=a(this,u)[0].cloneNode(!0);a(this,s).append(r),a(this,s).prepend(n),l(this,u,[n].concat(function(t){if(Array.isArray(t))return e(t)}(t=a(this,u))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[r]))}function W(){var e=this;a(this,v).addEventListener("click",(function(){a(e,g).call(e,"next"),a(e,S).call(e)})),a(this,f).addEventListener("click",(function(){a(e,g).call(e,"prev"),a(e,S).call(e)}))}var I=document.querySelectorAll("[data-href]"),x=document.querySelectorAll(".theme-toggler"),A=document.querySelector(".page");!function(e,t){t.addEventListener("touchstart",(function(e){l=e.target,a=Date.now(),n=e.touches[0].clientX,r=e.touches[0].clientY,i=0,o=0}),!1),t.addEventListener("touchmove",(function(e){if(n&&r){var t=e.touches[0].clientX,a=e.touches[0].clientY;i=n-t,o=r-a}}),!1),t.addEventListener("touchend",(function(e){if(l===e.target){var t=Date.now()-a,c="",s=e.changedTouches||e.touches||[];if(Math.abs(i)>Math.abs(o)?Math.abs(i)>20&&t<500&&(c=i>0?"swiped-left":"swiped-right"):Math.abs(o)>20&&t<500&&(c=o>0?"swiped-up":"swiped-down"),""!==c){var u,d,h,v,f={dir:c.replace(/swiped-/,""),touchType:null!==(u=(null!==(d=s[0])&&void 0!==d?d:{}).touchType)&&void 0!==u?u:"direct",xStart:parseInt(n,10),xEnd:parseInt((null!==(h=s[0])&&void 0!==h?h:{}).clientX||-1,10),yStart:parseInt(r,10),yEnd:parseInt((null!==(v=s[0])&&void 0!==v?v:{}).clientY||-1,10)};l.dispatchEvent(new CustomEvent("swiped",{bubbles:!0,cancelable:!0,detail:f})),l.dispatchEvent(new CustomEvent(c,{bubbles:!0,cancelable:!0,detail:f}))}n=null,r=null,a=null}}),!1);var n=null,r=null,i=null,o=null,a=null,l=null}(window,document),new E({containerSelector:".roads__pics-list",itemsSelector:".roads__pics-item",activeItemClass:"roads__pics-item_active",nextScrollerSelector:".roads__button_dir_right",prevScrollerSelector:".roads__button_dir_left",textItemsSelectors:[{selector:".roads__title",attributeName:"title"},{selector:".roads__text",attributeName:"text"}]}).init(),I.forEach((function(e){e.addEventListener("click",(function(){var t=e.dataset.href;document.querySelector(t).scrollIntoView({behavior:"smooth"})}))})),x.forEach((function(e){e.addEventListener("click",(function(){A.classList.toggle("page_dark"),e.querySelector(".footer__switch-toggle").classList.toggle("theme-toggler__switch-toggle_dark")}))})),document.querySelectorAll(".bikes__button").forEach((function(e){e.addEventListener("click",(function(){document.querySelector(".bikes__type_active").classList.remove("bikes__type_active"),document.querySelector(".bikes__button_active").classList.remove("bikes__button_active"),document.querySelector("#bikes-type-".concat(e.dataset.type)).classList.add("bikes__type_active"),e.classList.add("bikes__button_active")}))})),document.querySelector(".header__burger").addEventListener("click",(function(){document.querySelector(".header__nav").classList.toggle("header__nav_opened"),document.querySelector(".header__burger").classList.toggle("hamburger_active")})),document.querySelector(".header").addEventListener("swiped",(function(e){console.log(e.target),console.log(e.detail),console.log(e.detail.dir)}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MEJBQ2RkLFVBQ0F3RSxPQUFPLG9DQUNYLEdBQ0YsSUFFRDNELFNBQVNJLGlCQUFpQixrQkFBa0JWLFNBQVEsU0FBQWdFLEdBQ2xEQSxFQUFPekMsaUJBQWlCLFNBQVMsV0FDL0JqQixTQUNHQyxjQUFjLHVCQUNkZCxVQUNBQyxPQUFPLHNCQUNWWSxTQUNHQyxjQUFjLHlCQUNkZCxVQUNBQyxPQUFPLHdCQUNWWSxTQUNHQyxjQURILHNCQUNnQ3lELEVBQU81RCxRQUFROEQsT0FDNUN6RSxVQUNBTSxJQUFJLHNCQUNQaUUsRUFDR3ZFLFVBQ0FNLElBQUksdUJBQ1IsR0FDRixJQUVETyxTQUFTQyxjQUFjLG1CQUFtQmdCLGlCQUFpQixTQUFTLFdBQ2xFakIsU0FBU0MsY0FBYyxnQkFBZ0JkLFVBQVV3RSxPQUFPLHNCQUN4RDNELFNBQVNDLGNBQWMsbUJBQW1CZCxVQUFVd0UsT0FBTyxtQkFDNUQsSUFFRDNELFNBQVNDLGNBQWMsV0FBV2dCLGlCQUFpQixVQUFVLFNBQUFJLEdBQzNEd0MsUUFBUUMsSUFBSXpDLEVBQUVDLFFBQ2R1QyxRQUFRQyxJQUFJekMsRUFBRStCLFFBQ2RTLFFBQVFDLElBQUl6QyxFQUFFK0IsT0FBT3BFLElBQ3RCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmF2ZWwvLi9zcmMvY29tcG9uZW50cy9DYXJvdXNlbFNjcm9sbGVyLmpzIiwid2VicGFjazovL2dyYXZlbC8uL3NyYy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vZ3JhdmVsLy4vc3JjL2NvbXBvbmVudHMvc3dpcGUuanMiLCJ3ZWJwYWNrOi8vZ3JhdmVsLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcm91c2VsU2Nyb2xsZXIge1xuICAjY29udGFpbmVyXG4gICNpdGVtc1xuICAjYWN0aXZlSXRlbUNsYXNzXG4gICN0ZXh0SXRlbXNTZWxlY3RvcnNcbiAgI25leHRTY3JvbGxlclxuICAjcHJldlNjcm9sbGVyXG4gICNjdXJyZW50SWR4XG4gICNsZW5ndGhcbiAgI3RleHRFbGVtZW50c1xuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBjb250YWluZXJTZWxlY3RvcixcbiAgICBpdGVtc1NlbGVjdG9yLFxuICAgIG5leHRTY3JvbGxlclNlbGVjdG9yLFxuICAgIHByZXZTY3JvbGxlclNlbGVjdG9yLFxuICAgIGFjdGl2ZUl0ZW1DbGFzcyxcbiAgICB0ZXh0SXRlbXNTZWxlY3RvcnNcbiAgfSkge1xuICAgIHRoaXMuI2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xuICAgIHRoaXMuI2l0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGl0ZW1zU2VsZWN0b3IpKTtcbiAgICB0aGlzLiNhY3RpdmVJdGVtQ2xhc3MgPSBhY3RpdmVJdGVtQ2xhc3M7XG4gICAgdGhpcy4jdGV4dEl0ZW1zU2VsZWN0b3JzID0gdGV4dEl0ZW1zU2VsZWN0b3JzO1xuICAgIHRoaXMuI25leHRTY3JvbGxlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmV4dFNjcm9sbGVyU2VsZWN0b3IpO1xuICAgIHRoaXMuI3ByZXZTY3JvbGxlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJldlNjcm9sbGVyU2VsZWN0b3IpO1xuICB9XG5cbiAgI3Jlc2V0UGFnZSgpIHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gIH1cblxuICAjc2V0VGV4dEVsZW1lbnRzKCkge1xuICAgIHRoaXMuI3RleHRFbGVtZW50cyA9IHRoaXMuI3RleHRJdGVtc1NlbGVjdG9ycy5tYXAoaXRlbSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGl0ZW0uc2VsZWN0b3IpLFxuICAgICAgICBzb3VyY2U6IGl0ZW0uYXR0cmlidXRlTmFtZVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgI2FkZFNjcm9sbFBsYWNlaG9sZGVycygpIHtcbiAgICBjb25zdCBlbmRFbGVtZW50ID0gdGhpcy4jaXRlbXNbdGhpcy4jbGVuZ3RoIC0gMV0uY2xvbmVOb2RlKHRydWUpO1xuICAgIGNvbnN0IHN0YXJ0RWxlbWVudCA9IHRoaXMuI2l0ZW1zWzBdLmNsb25lTm9kZSh0cnVlKTtcblxuICAgIHRoaXMuI2NvbnRhaW5lci5hcHBlbmQoc3RhcnRFbGVtZW50KTtcbiAgICB0aGlzLiNjb250YWluZXIucHJlcGVuZChlbmRFbGVtZW50KTtcbiAgICB0aGlzLiNpdGVtcyA9IFtlbmRFbGVtZW50LCAuLi50aGlzLiNpdGVtcywgc3RhcnRFbGVtZW50XTtcbiAgfVxuXG4gICNjaGVja1Njcm9sbEJvcmRlciA9IChkaXIpID0+IHtcbiAgICBjb25zdCBib3JkZXIgPSBkaXIgPT09ICduZXh0JyA/IHRoaXMuI2xlbmd0aCA6IDA7XG4gICAgY29uc3QgcGxhY2Vob2xkZXIgPSBkaXIgPT09ICduZXh0JyA/IDAgOiB0aGlzLiNsZW5ndGg7XG4gICAgdGhpcy4jaXRlbXNbdGhpcy4jY3VycmVudElkeF0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLiNhY3RpdmVJdGVtQ2xhc3MpO1xuICAgIGlmICh0aGlzLiNjdXJyZW50SWR4ID09PSBib3JkZXIpIHtcbiAgICAgIHRoaXMuI2l0ZW1zW3BsYWNlaG9sZGVyXS5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgIGlubGluZTogJ3N0YXJ0JyxcbiAgICAgICAgYmxvY2s6ICduZWFyZXN0JyxcbiAgICAgICAgYmVoYXZpb3I6ICdhdXRvJ1xuICAgICAgfSk7XG4gICAgICB0aGlzLiNjdXJyZW50SWR4ID0gcGxhY2Vob2xkZXI7XG4gICAgfVxuICAgIHRoaXMuI2N1cnJlbnRJZHggPSBkaXIgPT09ICduZXh0J1xuICAgICAgPyB0aGlzLiNjdXJyZW50SWR4ICsgMVxuICAgICAgOiB0aGlzLiNjdXJyZW50SWR4IC0gMTtcbiAgfVxuXG4gICNzY3JvbGxUb0N1cnJlbnRJdGVtID0gKGJlaGF2aW9yID0gJ3Ntb290aCcpID0+IHtcbiAgICB0aGlzLiNpdGVtc1t0aGlzLiNjdXJyZW50SWR4XS5jbGFzc0xpc3QuYWRkKHRoaXMuI2FjdGl2ZUl0ZW1DbGFzcyk7XG4gICAgdGhpcy4jaXRlbXNbdGhpcy4jY3VycmVudElkeF0uc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgaW5saW5lOiAnc3RhcnQnLFxuICAgICAgYmxvY2s6ICduZWFyZXN0JyxcbiAgICAgIGJlaGF2aW9yXG4gICAgfSk7XG4gICAgdGhpcy4jdGV4dEVsZW1lbnRzLmZvckVhY2goKHsgZWxlbWVudCwgc291cmNlIH0pID0+IHtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLiNpdGVtc1t0aGlzLiNjdXJyZW50SWR4XS5kYXRhc2V0W3NvdXJjZV07XG4gICAgfSk7XG4gIH1cblxuICAjc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy4jbmV4dFNjcm9sbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy4jY2hlY2tTY3JvbGxCb3JkZXIoJ25leHQnKTtcbiAgICAgIHRoaXMuI3Njcm9sbFRvQ3VycmVudEl0ZW0oKTtcbiAgICB9KTtcbiAgICB0aGlzLiNwcmV2U2Nyb2xsZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLiNjaGVja1Njcm9sbEJvcmRlcigncHJldicpO1xuICAgICAgdGhpcy4jc2Nyb2xsVG9DdXJyZW50SXRlbSgpO1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLiNjdXJyZW50SWR4ID0gMTtcbiAgICB0aGlzLiNsZW5ndGggPSB0aGlzLiNpdGVtcy5sZW5ndGg7XG4gICAgdGhpcy4jc2V0VGV4dEVsZW1lbnRzKClcbiAgICB0aGlzLiNhZGRTY3JvbGxQbGFjZWhvbGRlcnMoKTtcbiAgICB0aGlzLiNzZXRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuI3Njcm9sbFRvQ3VycmVudEl0ZW0oJ2F1dG8nKTtcbiAgICB0aGlzLiNyZXNldFBhZ2UoKVxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgYW5jaG9yTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1ocmVmXScpO1xuZXhwb3J0IGNvbnN0IHRvZ2dsZVRoZW1lQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aGVtZS10b2dnbGVyJyk7XG5leHBvcnQgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJyk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTd2lwZUV2ZW50KHdpbmRvdywgZG9jdW1lbnQpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhhbmRsZVRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlVG91Y2hNb3ZlLCBmYWxzZSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgaGFuZGxlVG91Y2hFbmQsIGZhbHNlKTtcblxuICBsZXQgeERvd24gPSBudWxsO1xuICBsZXQgeURvd24gPSBudWxsO1xuICBsZXQgeERpZmYgPSBudWxsO1xuICBsZXQgeURpZmYgPSBudWxsO1xuICBsZXQgdGltZURvd24gPSBudWxsO1xuICBsZXQgc3RhcnRFbGVtZW50ID0gbnVsbDtcblxuICBmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZChlKSB7XG4gICAgaWYgKHN0YXJ0RWxlbWVudCAhPT0gZS50YXJnZXQpIHJldHVybjtcblxuICAgIGNvbnN0IHN3aXBlVGhyZXNob2xkID0gMjA7XG4gICAgY29uc3Qgc3dpcGVUaW1lb3V0ID0gNTAwO1xuICAgIGNvbnN0IHRpbWVEaWZmID0gRGF0ZS5ub3coKSAtIHRpbWVEb3duO1xuICAgIGxldCBldmVudFR5cGUgPSAnJztcbiAgICBjb25zdCBjaGFuZ2VkVG91Y2hlcyA9IGUuY2hhbmdlZFRvdWNoZXMgfHwgZS50b3VjaGVzIHx8IFtdO1xuXG4gICAgaWYgKE1hdGguYWJzKHhEaWZmKSA+IE1hdGguYWJzKHlEaWZmKSkge1xuICAgICAgaWYgKE1hdGguYWJzKHhEaWZmKSA+IHN3aXBlVGhyZXNob2xkICYmIHRpbWVEaWZmIDwgc3dpcGVUaW1lb3V0KSB7XG4gICAgICAgIGV2ZW50VHlwZSA9IHhEaWZmID4gMCA/ICdzd2lwZWQtbGVmdCcgOiAnc3dpcGVkLXJpZ2h0JztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKE1hdGguYWJzKHlEaWZmKSA+IHN3aXBlVGhyZXNob2xkICYmIHRpbWVEaWZmIDwgc3dpcGVUaW1lb3V0KSB7XG4gICAgICBldmVudFR5cGUgPSB5RGlmZiA+IDAgPyAnc3dpcGVkLXVwJyA6ICdzd2lwZWQtZG93bic7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50VHlwZSAhPT0gJycpIHtcblxuICAgICAgY29uc3QgZXZlbnREYXRhID0ge1xuICAgICAgICBkaXI6IGV2ZW50VHlwZS5yZXBsYWNlKC9zd2lwZWQtLywgJycpLFxuICAgICAgICB0b3VjaFR5cGU6IChjaGFuZ2VkVG91Y2hlc1swXSA/PyB7fSkudG91Y2hUeXBlID8/ICdkaXJlY3QnLFxuICAgICAgICB4U3RhcnQ6IHBhcnNlSW50KHhEb3duLCAxMCksXG4gICAgICAgIHhFbmQ6IHBhcnNlSW50KChjaGFuZ2VkVG91Y2hlc1swXSA/PyB7fSkuY2xpZW50WCB8fCAtMSwgMTApLFxuICAgICAgICB5U3RhcnQ6IHBhcnNlSW50KHlEb3duLCAxMCksXG4gICAgICAgIHlFbmQ6IHBhcnNlSW50KChjaGFuZ2VkVG91Y2hlc1swXSA/PyB7fSkuY2xpZW50WSB8fCAtMSwgMTApXG4gICAgICB9O1xuXG4gICAgICBzdGFydEVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3N3aXBlZCcsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSwgZGV0YWlsOiBldmVudERhdGEgfSkpO1xuXG4gICAgICBzdGFydEVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZXZlbnRUeXBlLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUsIGRldGFpbDogZXZlbnREYXRhIH0pKTtcbiAgICB9XG5cbiAgICB4RG93biA9IG51bGw7XG4gICAgeURvd24gPSBudWxsO1xuICAgIHRpbWVEb3duID0gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnQoZSkge1xuXG4gICAgc3RhcnRFbGVtZW50ID0gZS50YXJnZXQ7XG5cbiAgICB0aW1lRG93biA9IERhdGUubm93KCk7XG4gICAgeERvd24gPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICB5RG93biA9IGUudG91Y2hlc1swXS5jbGllbnRZO1xuICAgIHhEaWZmID0gMDtcbiAgICB5RGlmZiA9IDA7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmUoZSkge1xuICAgIGlmICgheERvd24gfHwgIXlEb3duKSByZXR1cm47XG5cbiAgICBjb25zdCB4VXAgPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICBjb25zdCB5VXAgPSBlLnRvdWNoZXNbMF0uY2xpZW50WTtcblxuICAgIHhEaWZmID0geERvd24gLSB4VXA7XG4gICAgeURpZmYgPSB5RG93biAtIHlVcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE5lYXJlc3RBdHRyaWJ1dGUoZWwsIGF0dHJpYnV0ZU5hbWUsIGRlZmF1bHRWYWx1ZSkge1xuICAgIHdoaWxlIChlbCAmJiBlbCAhPT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IGVsLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcblxuICAgICAgaWYgKGF0dHJpYnV0ZVZhbHVlKSB7XG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGVsID0gZWwucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgfVxufTtcbiIsImltcG9ydCBDYXJvdXNlbFNjcm9sbGVyIGZyb20gJ0AvY29tcG9uZW50cy9DYXJvdXNlbFNjcm9sbGVyJztcblxuaW1wb3J0IHsgYW5jaG9yTGlua3MsIHBhZ2UsIHRvZ2dsZVRoZW1lQnV0dG9ucyB9IGZyb20gJ0AvdXRpbHMvY29uc3RhbnRzLmpzJztcblxuXG5pbXBvcnQgY3JlYXRlU3dpcGVFdmVudCBmcm9tICdAL2NvbXBvbmVudHMvc3dpcGUnO1xuY3JlYXRlU3dpcGVFdmVudCh3aW5kb3csIGRvY3VtZW50KTtcblxuY29uc3QgYmlrZXNDYXJvdXNlbCA9IG5ldyBDYXJvdXNlbFNjcm9sbGVyKHtcbiAgY29udGFpbmVyU2VsZWN0b3I6ICcucm9hZHNfX3BpY3MtbGlzdCcsXG4gIGl0ZW1zU2VsZWN0b3I6ICcucm9hZHNfX3BpY3MtaXRlbScsXG4gIGFjdGl2ZUl0ZW1DbGFzczogJ3JvYWRzX19waWNzLWl0ZW1fYWN0aXZlJyxcbiAgbmV4dFNjcm9sbGVyU2VsZWN0b3I6ICcucm9hZHNfX2J1dHRvbl9kaXJfcmlnaHQnLFxuICBwcmV2U2Nyb2xsZXJTZWxlY3RvcjogJy5yb2Fkc19fYnV0dG9uX2Rpcl9sZWZ0JyxcbiAgdGV4dEl0ZW1zU2VsZWN0b3JzOiBbXG4gICAgeyBzZWxlY3RvcjogJy5yb2Fkc19fdGl0bGUnLCBhdHRyaWJ1dGVOYW1lOiAndGl0bGUnIH0sXG4gICAgeyBzZWxlY3RvcjogJy5yb2Fkc19fdGV4dCcsIGF0dHJpYnV0ZU5hbWU6ICd0ZXh0JyB9LFxuICBdXG59KTtcbmJpa2VzQ2Fyb3VzZWwuaW5pdCgpO1xuXG5hbmNob3JMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHNlY3Rpb25JZCA9IGxpbmsuZGF0YXNldC5ocmVmO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihzZWN0aW9uSWQpXG4gICAgICAuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgIH0pO1xuICB9KTtcbn0pO1xuXG50b2dnbGVUaGVtZUJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcGFnZS5jbGFzc0xpc3QudG9nZ2xlKCdwYWdlX2RhcmsnKTtcbiAgICBidXR0b25cbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyX19zd2l0Y2gtdG9nZ2xlJylcbiAgICAgIC5jbGFzc0xpc3RcbiAgICAgIC50b2dnbGUoJ3RoZW1lLXRvZ2dsZXJfX3N3aXRjaC10b2dnbGVfZGFyaycpO1xuICB9KTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmlrZXNfX2J1dHRvbicpLmZvckVhY2goYnV0dG9uID0+IHtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignLmJpa2VzX190eXBlX2FjdGl2ZScpXG4gICAgICAuY2xhc3NMaXN0XG4gICAgICAucmVtb3ZlKCdiaWtlc19fdHlwZV9hY3RpdmUnKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5iaWtlc19fYnV0dG9uX2FjdGl2ZScpXG4gICAgICAuY2xhc3NMaXN0XG4gICAgICAucmVtb3ZlKCdiaWtlc19fYnV0dG9uX2FjdGl2ZScpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihgI2Jpa2VzLXR5cGUtJHtidXR0b24uZGF0YXNldC50eXBlfWApXG4gICAgICAuY2xhc3NMaXN0XG4gICAgICAuYWRkKCdiaWtlc19fdHlwZV9hY3RpdmUnKTtcbiAgICBidXR0b25cbiAgICAgIC5jbGFzc0xpc3RcbiAgICAgIC5hZGQoJ2Jpa2VzX19idXR0b25fYWN0aXZlJyk7XG4gIH0pO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2J1cmdlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYnKS5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXJfX25hdl9vcGVuZWQnKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19idXJnZXInKS5jbGFzc0xpc3QudG9nZ2xlKCdoYW1idXJnZXJfYWN0aXZlJylcbn0pXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKS5hZGRFdmVudExpc3RlbmVyKCdzd2lwZWQnLCBlID0+IHtcbiAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICBjb25zb2xlLmxvZyhlLmRldGFpbCk7XG4gIGNvbnNvbGUubG9nKGUuZGV0YWlsLmRpcik7XG59KTtcbiJdLCJuYW1lcyI6WyJDYXJvdXNlbFNjcm9sbGVyIiwiY29udGFpbmVyU2VsZWN0b3IiLCJpdGVtc1NlbGVjdG9yIiwibmV4dFNjcm9sbGVyU2VsZWN0b3IiLCJwcmV2U2Nyb2xsZXJTZWxlY3RvciIsImFjdGl2ZUl0ZW1DbGFzcyIsInRleHRJdGVtc1NlbGVjdG9ycyIsImRpciIsImJvcmRlciIsInBsYWNlaG9sZGVyIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic2Nyb2xsSW50b1ZpZXciLCJpbmxpbmUiLCJibG9jayIsImJlaGF2aW9yIiwiYWRkIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJzb3VyY2UiLCJ0ZXh0Q29udGVudCIsImRhdGFzZXQiLCJ0aGlzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsIndpbmRvdyIsInNjcm9sbFRvIiwibWFwIiwiaXRlbSIsInNlbGVjdG9yIiwiYXR0cmlidXRlTmFtZSIsImVuZEVsZW1lbnQiLCJjbG9uZU5vZGUiLCJzdGFydEVsZW1lbnQiLCJhcHBlbmQiLCJwcmVwZW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFuY2hvckxpbmtzIiwidG9nZ2xlVGhlbWVCdXR0b25zIiwicGFnZSIsImUiLCJ0YXJnZXQiLCJ0aW1lRG93biIsIkRhdGUiLCJub3ciLCJ4RG93biIsInRvdWNoZXMiLCJjbGllbnRYIiwieURvd24iLCJjbGllbnRZIiwieERpZmYiLCJ5RGlmZiIsInhVcCIsInlVcCIsInRpbWVEaWZmIiwiZXZlbnRUeXBlIiwiY2hhbmdlZFRvdWNoZXMiLCJNYXRoIiwiYWJzIiwiZXZlbnREYXRhIiwicmVwbGFjZSIsInRvdWNoVHlwZSIsInhTdGFydCIsInBhcnNlSW50IiwieEVuZCIsInlTdGFydCIsInlFbmQiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImRldGFpbCIsImNyZWF0ZVN3aXBlRXZlbnQiLCJpbml0IiwibGluayIsInNlY3Rpb25JZCIsImhyZWYiLCJidXR0b24iLCJ0b2dnbGUiLCJ0eXBlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=