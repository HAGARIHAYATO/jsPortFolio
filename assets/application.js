!function(e){var t={};function n(l){if(t[l])return t[l].exports;var s=t[l]={i:l,l:!1,exports:{}};return e[l].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(l,s,function(t){return e[t]}.bind(null,s));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){"use strict";var l=document.querySelector(".hundle"),s=document.querySelector(".main-container");l.children[0].addEventListener("click",function(){s.children[0].style.display="block",s.children[1].style.display="none",s.children[2].style.display="none",console.log(s.children[0])}),l.children[1].addEventListener("click",function(){s.children[0].style.display="none",s.children[1].style.display="block",s.children[2].style.display="none",console.log(s.children[1])}),l.children[2].addEventListener("click",function(){s.children[0].style.display="none",s.children[1].style.display="none",s.children[2].style.display="block",console.log(s.children[2])});var o=document.querySelector(".message-container"),i=document.querySelector(".text-input"),a=document.querySelector(".name-input"),c=document.querySelector(".submit");console.log(c);var u=document.querySelector(".modal"),r=document.querySelector(".modal-overlay"),d=document.querySelector(".x-mark");o.addEventListener("click",function(e){r.style.display="block",u.style.display="block"}),d.addEventListener("click",function(e){r.style.display="none",u.style.display="none"}),c.addEventListener("click",function(e){""!==i.value&&("master"===a.value?(o.innerHTML+='<div class="master-comment"><div class="output-name"><p class="on">'+a.value+'</p></div><div class="output-text"><p class="ot">'+i.value+"</p></div></div>",i.value="",a.value=""):""===a.value?(o.innerHTML+='<div class="comment"><div class="output-name"><p class="on">user</p></div><div class="output-text"><p class="ot">'+i.value+"</p></div></div>",i.value="",a.value=""):(o.innerHTML+='<div class="comment"><div class="output-name"><p class="on">'+a.value+'</p></div><div class="output-text"><p class="ot">'+i.value+"</p></div></div>",i.value="",a.value=""),r.style.display="none",u.style.display="none")}),u.addEventListener("keypress",function(e){"Enter"===e.key&&""!==i.value&&("master"===a.value?(o.innerHTML+='<div class="master-comment"><div class="output-name"><p class="on">'+a.value+'</p></div><div class="output-text"><p class="ot">'+i.value+"</p></div></div>",i.value="",a.value=""):""===a.value?(o.innerHTML+='<div class="comment"><div class="output-name"><p class="on">user</p></div><div class="output-text"><p class="ot">'+i.value+"</p></div></div>",i.value="",a.value=""):(o.innerHTML+='<div class="comment"><div class="output-name"><p class="on">'+a.value+'</p></div><div class="output-text"><p class="ot">'+i.value+"</p></div></div>",i.value="",a.value=""),r.style.display="none",u.style.display="none")})}]);