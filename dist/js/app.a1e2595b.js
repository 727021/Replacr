(function(e){function t(t){for(var a,l,c=t[0],i=t[1],u=t[2],p=0,f=[];p<c.length;p++)l=c[p],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&f.push(r[l][0]),r[l]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);s&&s(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={app:0},o=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/Replacr/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[e._v(" Replacr ")]),n("v-spacer"),n("v-btn",{attrs:{href:"https://727021.github.io",target:"_blank",text:""}},[n("v-icon",[e._v("mdi-github")])],1)],1),n("v-content",[n("Inputs")],1)],1)},o=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",[n("v-col",[n("v-btn",{attrs:{color:"primary",block:"",outlined:""},on:{click:function(t){return t.preventDefault(),e.doRegex(t)}}},[e._v("Replace!")])],1)],1),n("v-row",{attrs:{justify:"space-around"}},[n("v-col",{attrs:{cols:"5"}},[n("v-text-field",{attrs:{clearable:"",outlined:"",label:"Regex",prefix:"/",suffix:"/"+e.flagString()},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.doRegex(t))}},model:{value:e.regex,callback:function(t){e.regex=t},expression:"regex"}})],1),n("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-checkbox",e._g({staticClass:"mx-2",attrs:{label:"g"},model:{value:e.flags.g,callback:function(t){e.$set(e.flags,"g",t)},expression:"flags.g"}},a))]}}])},[n("span",[e._v("Global")])]),n("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-checkbox",e._g({staticClass:"mx-2",attrs:{label:"i"},model:{value:e.flags.i,callback:function(t){e.$set(e.flags,"i",t)},expression:"flags.i"}},a))]}}])},[n("span",[e._v("Case-Sensitive")])]),n("v-col",{attrs:{cols:"5"}},[n("v-text-field",{attrs:{clearable:"",outlined:"",label:"Replacement"},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.doRegex(t))}},model:{value:e.replacement,callback:function(t){e.replacement=t},expression:"replacement"}})],1)],1),n("v-row",[n("v-col",[n("v-textarea",{attrs:{"no-resize":"","auto-grow":"",clearable:"",outlined:"",label:"Input"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1),n("v-col",[n("v-textarea",{attrs:{"no-resize":"","auto-grow":"",readonly:"",outlined:"",label:"Output",value:e.output,filled:""}})],1)],1)],1)},c=[],i=(n("99af"),n("4d63"),n("ac1f"),n("5377"),n("25f0"),n("5319"),{name:"Inputs",data:function(){return{regex:"cool",replacement:"awesome",input:"This is cool.",output:"",flags:{g:!0,i:!1}}},methods:{doRegex:function(){this.output="";try{this.output=this.input.replace(new RegExp(this.regex,this.flagString()),this.replacement)}catch(e){this.output="Invalid regex or replacement string!"}},flagString:function(){return"".concat(this.flags.g?"g":"").concat(this.flags.i?"i":"")}}}),u=i,s=n("2877"),p=n("6544"),f=n.n(p),v=n("8336"),d=n("ac7c"),g=n("62ad"),b=n("a523"),x=n("0fd9"),h=n("8654"),y=n("a844"),m=n("3a2f"),k=Object(s["a"])(u,l,c,!1,null,null,null),_=k.exports;f()(k,{VBtn:v["a"],VCheckbox:d["a"],VCol:g["a"],VContainer:b["a"],VRow:x["a"],VTextField:h["a"],VTextarea:y["a"],VTooltip:m["a"]});var w={name:"App",components:{Inputs:_},data:function(){return{}}},O=w,V=n("7496"),j=n("40dc"),S=n("a75b"),R=n("132d"),C=n("2fa4"),P=Object(s["a"])(O,r,o,!1,null,null,null),T=P.exports;f()(P,{VApp:V["a"],VAppBar:j["a"],VBtn:v["a"],VContent:S["a"],VIcon:R["a"],VSpacer:C["a"]});var I=n("f309");a["a"].use(I["a"]);var E=new I["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:E,render:function(e){return e(T)}}).$mount("#app")}});
//# sourceMappingURL=app.a1e2595b.js.map