(function(t){function e(e){for(var a,s,i=e[0],u=e[1],c=e[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"0fdc":function(t,e,n){"use strict";var a=n("dad9"),o=n.n(a);o.a},"27cf":function(t,e,n){"use strict";var a=n("a722"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("HelloTeacher",{attrs:{msg:"Bem-vindo, professor!"}}),n("Calculator")],1)},r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("img",{attrs:{alt:"logo",src:n("bca0")}}),a("h1",[t._v(t._s(t.msg))]),a("p",[t._v(" Utilize esta plataforma para descobrir a situação acadêmica de seus alunos. ")])])},i=[],u={name:"HelloWorld",props:{msg:String}},c=u,l=(n("0fdc"),n("2877")),p=Object(l["a"])(c,s,i,!1,null,"e40af3d2",null),f=p.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"calculator"},[n("p",[t._v(" Insira o nome do aluno e suas duas primeiras notas para descobrir o mínimo necessário para a aprovação. ")]),n("form",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"Nome do aluno"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.nota1,expression:"nota1"}],attrs:{type:"number",step:"any",placeholder:"Nota 1"},domProps:{value:t.nota1},on:{input:function(e){e.target.composing||(t.nota1=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.nota2,expression:"nota2"}],attrs:{type:"number",step:"any",placeholder:"Nota 2"},domProps:{value:t.nota2},on:{input:function(e){e.target.composing||(t.nota2=e.target.value)}}}),n("button",{attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.calculate(e)}}},[t._v("Calcular")])]),n("div",{staticClass:"scroll"},t._l(t.students,(function(e,a){return n("div",{key:a,staticClass:"student-info"},[n("p",[n("strong",[t._v(t._s(e.name))]),t._v(" precisa tirar, no mínimo, "),n("strong",[t._v(t._s(e.nota))])]),n("span",[n("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.removeStudent(a)}}},[t._v("OK")])])])})),0)])},m=[],v=(n("a434"),n("b0c0"),n("498a"),{data:function(){return{students:[],name:"",nota1:"",nota2:""}},methods:{calculate:function(){if(""!==this.name.trim()&&""!==this.nota1.trim()&&""!==this.nota2.trim()){var t=(6.2-(parseFloat(.25*this.nota1)+parseFloat(.25*this.nota2)))/.5,e="".concat(t," pontos.");t>10&&(e="mais tempo para estudar ano que vem."),this.students.push({name:this.name,nota:e}),this.name="",this.nota1="",this.nota2=""}},removeStudent:function(t){this.students.splice(t,1)}}}),h=v,b=(n("27cf"),Object(l["a"])(h,d,m,!1,null,"26472062",null)),g=b.exports,y={name:"App",components:{HelloTeacher:f,Calculator:g}},_=y,O=(n("034f"),Object(l["a"])(_,o,r,!1,null,null,null)),w=O.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(w)}}).$mount("#app")},"85ec":function(t,e,n){},a722:function(t,e,n){},bca0:function(t,e,n){t.exports=n.p+"img/Logo.9c575bf1.png"},dad9:function(t,e,n){}});
//# sourceMappingURL=app.4a93edfe.js.map