webpackJsonp([1,0],[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var s=a(21),o=n(s),r=a(11),i=n(r);new o.default({el:"#app",template:"<App/>",components:{App:i.default}})},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(14),o=n(s),r=a(12),i=n(r),c=a(13),l=n(c),d=a(15),v=n(d);t.default={name:"app",components:{Navigation:o.default,Create:i.default,Hello:l.default,Testing:v.default}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"create",data:function(){return{introduction:!0,characterNew:!1,characterRandom:!1,storyOne:!1,storyTwo:!1,name:"",nameFirst:"",nameMiddle:"",nameLast:"",alignment:"",age:"",gender:"",race:"",occupation:"",location:"",namesLast:["Deathrump","Wellington","the Great"]}},methods:{toggle:function(){this.toggleActive=!this.toggleActive},randomName:function(){var e=["Dusty","Tiberius Facebutt","Herbert Deathrump Flamebeard","Bloodnutt the Flatulant IV","Grumpf the Angry","Prince Ludwig the Indestructible","Weasley Wigglebottom","Theodore Thornheart"],t=Math.floor(Math.random()*e.length);this.name=e[t]},randomNameFirst:function(){var e=["Dusty","Tiberius","Herbert","Grumpf","Prince","Weasley","Winston"],t=Math.floor(Math.random()*e.length);this.nameFirst=e[t]},randomNameMiddle:function(){var e=["the Flatulant","Ludwig","Deathrump"],t=Math.floor(Math.random()*e.length);this.nameMiddle=e[t]},randomNameLast:function(){var e=["Deathrump","Wellington","IV","Thornheart","Flamebeard","Facebutt","the Angry"],t=Math.floor(Math.random()*e.length);this.nameLast=e[t]},randomAlignment:function(){var e=["good","evil","really evil","psychopathic"],t=Math.floor(Math.random()*e.length);this.alignment=e[t]},randomAge:function(){var e=Math.floor(1e3*Math.random());this.age=e},randomGender:function(){var e=["male","female","transsexual","bigender","genderqueer","androgyne","drag king","drag queen"],t=Math.floor(Math.random()*e.length);this.gender=e[t]},randomRace:function(){var e=["hobbit","ork","pixie","owlbear","satyr","reptillian","goblin","monopod","giant","hobbit","kerbal","undead"],t=Math.floor(Math.random()*e.length);this.race=e[t]},randomOccupation:function(){var e=["knight","wizard","sorcerer","peasent"],t=Math.floor(Math.random()*e.length);this.occupation=e[t]},randomLocation:function(){var e=["King's landing","Brobdingnag","Another Dimension","Hell"],t=Math.floor(Math.random()*e.length);this.location=e[t]}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hello",data:function(){return{msg:"Sup to Your Vue.js App"}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"create",data:function(){return{toggleActive:!1}},methods:{toggle:function(){this.toggleActive=!this.toggleActive}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"create",data:function(){return{showMe:!1,hideMe:!0}},method:{hidden:function(){this.showMe=!this.hideMe}}}},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,a){var n,s;a(7),n=a(1);var o=a(17);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,e.exports=n},function(e,t,a){var n,s;a(10),n=a(2);var o=a(20);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,s._scopeId="data-v-a7cf012a",e.exports=n},function(e,t,a){var n,s;a(9),n=a(3);var o=a(19);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,s._scopeId="data-v-52dc1c9a",e.exports=n},function(e,t,a){var n,s;a(8),n=a(4);var o=a(18);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,s._scopeId="data-v-3e504dfa",e.exports=n},function(e,t,a){var n,s;a(6),n=a(5);var o=a(16);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,s._scopeId="data-v-1f4ae49e",e.exports=n},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{attrs:{id:"demo"}},[t("transition",{attrs:{name:"fade"}},[e.showMe?t("p",[e._v("show")]):e._e()]),e._v(" "),t("button",{on:{click:function(t){e.showMe=!e.showMe}}},[e._v("\n    show\n  ")]),e._v(" "),t("button",{on:{click:function(t){e.hideMe=!e.hideMe}}},[e._v("\n    hide\n  ")]),e._v(" "),t("transition",{attrs:{name:"fade"}},[e.hideMe?t("p",[e._v("hide")]):e._e()]),e._v(" "),t("pre",[e._v(e._s(e.$data))])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{attrs:{id:"app"}},[t("navigation"),e._v(" "),t("div",{staticClass:"layout"},[t("create"),e._v(" "),t("hello"),e._v(" ")])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this;e.$createElement,e._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=(e.$createElement,e._c);return t("nav",[t("div",{staticClass:"fl"},[t("p",{staticClass:"mb0  dib"},[e._v("Chef Adventures")])]),e._v(" "),t("div",{staticClass:"fr  tr"},[t("p",{staticClass:"mb0"},[e._v("HP: "),t("span",{staticClass:"green"},[e._v("100")])]),e._v(" "),t("p",{staticClass:"mb0"},[e._v("Charisma: 20")]),e._v(" "),t("p",{staticClass:"mb0"},[e._v("Strength: "),t("span",{staticClass:"red"},[e._v("2")])]),e._v(" "),t("p",{staticClass:"mb0"},[e._v("Wisdom: 2")]),e._v(" "),t("p",{staticClass:"mb0"},[e._v("Weapon: Fists of anger")]),e._v(" "),t("p",{staticClass:"mb0"},[e._v("Mood: Angry")]),e._v(" "),t("p",{staticClass:"mb0"},[e._v("Gold: 0")])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"hello"})},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"create"},[t("transition",{attrs:{name:"fade"}},[e.introduction?t("div",{staticClass:"mb3"},[t("p",{staticClass:"mb3"},[e._v("Select an option.")]),e._v(" "),t("div",{staticClass:"mb1"},[t("button",{staticClass:"btn",class:{" is-active":e.characterNew},on:{click:function(t){t.preventDefault(),e.characterNew=!e.characterNew,e.characterRandom=e.characterRandom}}},[e._v("\n          New Character\n        ")])]),e._v(" "),t("div",{staticClass:"mb1"},[t("button",{staticClass:"btn",class:{" is-active":e.characterRandom},on:{click:function(t){t.preventDefault(),e.randomName(),e.randomAlignment(),e.randomAge(),e.randomGender(),e.randomRace(),e.randomOccupation(),e.randomLocation(),e.characterRandom=!e.characterRandom,e.characterNew=e.characterNew}}},[e._v("\n          Random Character\n        ")])])]):e._e()]),e._v(" "),t("transition",{attrs:{name:"fade"}},[e.characterNew?t("section",[t("p",{staticClass:"white"},[t("b",[e._v("\n          Greetings"),e.nameFirst?e._e():t("span",[e._v(" Adventurer!")]),e._v(" "),"male"===e.gender&&"knight"===e.occupation?t("span",{staticClass:"grey-dark"},[e._v(" Sir")]):e._e(),e._v(" "),"female"===e.gender&&"knight"===e.occupation?t("span",{staticClass:"grey-dark"},[e._v(" Dame")]):e._e(),e._v(" "),t("span",{staticClass:"pink"},[e._v(e._s(e.nameFirst))]),e._v(" "),t("span",{staticClass:"green"},[e._v(e._s(e.nameMiddle))]),e._v(" "),t("span",{staticClass:"blue-light"},[e._v(e._s(e.nameLast))]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.alignment,expression:"alignment"}],staticClass:"purple-light"},[e._v("the "+e._s(e.alignment))]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.age,expression:"age"}],staticClass:"yellow"},[e._v(e._s(e.age)+" year old")]),e._v(" "),t("span",{staticClass:"red"},[e._v(e._s(e.gender))]),e._v(" "),t("span",{staticClass:"blue-dark"},[e._v(e._s(e.race))]),e._v(" "),t("span",{staticClass:"purple-dark"},[e._v(e._s(e.occupation))]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.location,expression:"location"}],staticClass:"grey-dark"},[e._v("from "+e._s(e.location)+",")]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.location,expression:"location"}]},[e._v("you are very weak, very slow and butt ugly.")])])]),e._v(" "),t("p",{staticClass:"grey  mb3"},[e._v("\n        Enter your details below. (input "),t("b",{staticClass:"white"},[e._v(";")]),e._v(" for random)\n      ")]),e._v(" "),t("form",{staticClass:"mb1",attrs:{autocomplete:"off"}},[t("div",{},[t("label",{staticClass:"white",attrs:{for:"nameFirst"}},[e._v("\n            First Name:\n          ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.nameFirst,expression:"nameFirst"}],attrs:{name:"nameFirst",type:"text",autofocus:""},domProps:{value:e._s(e.nameFirst)},on:{keyup:function(t){186===t.keyCode&&e.randomNameFirst()},input:function(t){t.target.composing||(e.nameFirst=t.target.value)}}})]),e._v(" "),e._v(" "),t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.nameFirst,expression:"nameFirst"}]},[t("label",{staticClass:"white",attrs:{for:"nameMiddle"}},[e._v("\n              Middle Name:\n            ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.nameMiddle,expression:"nameMiddle"}],attrs:{name:"nameMiddle",type:"text"},domProps:{value:e._s(e.nameMiddle)},on:{keyup:function(t){186===t.keyCode&&e.randomNameMiddle()},input:function(t){t.target.composing||(e.nameMiddle=t.target.value)}}})])]),e._v(" "),e._v(" "),t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.nameMiddle,expression:"nameMiddle"}]},[t("label",{staticClass:"white",attrs:{for:"nameLast"}},[e._v("\n              Last Name:\n            ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.nameLast,expression:"nameLast"}],attrs:{name:"nameLast",type:"text"},domProps:{value:e._s(e.nameLast)},on:{keyup:function(t){186===t.keyCode&&e.randomNameLast()},input:function(t){t.target.composing||(e.nameLast=t.target.value)}}})])]),e._v(" "),e._v(" "),t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.nameLast,expression:"nameLast"}]},[t("label",{staticClass:"white",attrs:{for:"alignment"}},[e._v("\n              Alignment:\n            ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.alignment,expression:"alignment"}],attrs:{name:"alignment",type:"text"},domProps:{value:e._s(e.alignment)},on:{keyup:function(t){186===t.keyCode&&e.randomAlignment()},input:function(t){t.target.composing||(e.alignment=t.target.value)}}})])]),e._v(" "),e._v(" "),t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.alignment,expression:"alignment"}]},[t("label",{staticClass:"white",attrs:{for:"age"}},[e._v("\n              Age:\n            ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.age,expression:"age"}],attrs:{name:"age",type:"number"},domProps:{value:e._s(e.age)},on:{keyup:function(t){186===t.keyCode&&e.randomAge()},input:function(t){t.target.composing||(e.age=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})])]),e._v(" "),e._v(" "),t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.age,expression:"age"}]},[t("label",{staticClass:"white",attrs:{for:"gender"}},[e._v("\n              Gender:\n            ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],attrs:{name:"gender",type:"text"},domProps:{value:e._s(e.gender)},on:{keyup:function(t){186===t.keyCode&&e.randomGender()},input:function(t){t.target.composing||(e.gender=t.target.value)}}})])]),e._v(" "),e._v(" "),t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.gender,expression:"gender"}]},[t("label",{staticClass:"white",attrs:{for:"race"}},[e._v("\n              Race:\n            ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.race,expression:"race"}],attrs:{name:"race",type:"text"},domProps:{value:e._s(e.race)},on:{keyup:function(t){186===t.keyCode&&e.randomRace()},input:function(t){t.target.composing||(e.race=t.target.value)}}})])]),e._v(" "),e._v(" "),t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.race,expression:"race"}]},[t("label",{staticClass:"white",attrs:{for:"occupation"}},[e._v("\n              Class:\n            ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.occupation,expression:"occupation"}],attrs:{name:"occupation",type:"text"},domProps:{value:e._s(e.occupation)},on:{keyup:function(t){186===t.keyCode&&e.randomOccupation()},input:function(t){t.target.composing||(e.occupation=t.target.value)}}})])]),e._v(" "),e._v(" "),t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.occupation,expression:"occupation"}],staticClass:"mb3"},[t("label",{staticClass:"white",attrs:{for:"location"}},[e._v("\n              Where are you from?:\n            ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.location,expression:"location"}],attrs:{name:"location",type:"text"},domProps:{value:e._s(e.location)},on:{keyup:function(t){186===t.keyCode&&e.randomLocation()},input:function(t){t.target.composing||(e.location=t.target.value)}}})])]),e._v(" "),e._v(" "),t("transition",{attrs:{name:"fade"}},[t("button",{directives:[{name:"show",rawName:"v-show",value:e.location,expression:"location"}],staticClass:"btn  btn--p",on:{click:function(t){t.preventDefault(),e.storyOne=!e.storyOne,e.characterNew=!e.characterNew,e.introduction=!e.introduction}}},[e._v("\n            Begin adventure\n          ")])])])]):e.characterRandom?t("section",[t("p",{staticClass:"white"},[t("b",[e._v("\n          Greetings\n          "),"male"===e.gender&&"knight"===e.occupation?t("span",{staticClass:"grey-dark"},[e._v(" Sir")]):e._e(),e._v(" "),"female"===e.gender&&"knight"===e.occupation?t("span",{staticClass:"grey-dark"},[e._v(" Dame")]):e._e(),e._v(" "),t("span",{staticClass:"pink"},[e._v(e._s(e.name))]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.alignment,expression:"alignment"}],staticClass:"purple-light"},[e._v("the "+e._s(e.alignment))]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.age,expression:"age"}],staticClass:"yellow"},[e._v(e._s(e.age)+" year old")]),e._v(" "),t("span",{staticClass:"red"},[e._v(e._s(e.gender))]),e._v(" "),t("span",{staticClass:"blue-dark"},[e._v(e._s(e.race))]),e._v(" "),t("span",{staticClass:"purple-dark"},[e._v(e._s(e.occupation))]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.location,expression:"location"}],staticClass:"grey-dark"},[e._v("from "+e._s(e.location)+",")]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.location,expression:"location"}]},[e._v("you are very weak, very slow and butt ugly.")])])]),e._v(" "),t("button",{staticClass:"btn  btn--p",on:{click:function(t){t.preventDefault(),e.storyOne=!e.storyOne,e.characterRandom=!e.characterRandom,e.introduction=!e.introduction}}},[e._v("\n        Begin adventure\n      ")])]):e._e(),e._v(" ")]),e._v(" "),t("transition",{attrs:{name:"fade"}},[e.storyOne?t("section",[t("p",[e._v("\n        You are a chef lost in a "),t("span",{staticClass:"red"},[e._v("decrepit,")]),e._v(" "),t("span",{staticClass:"red"},[e._v("untrustworthy")]),e._v(" and "),t("span",{staticClass:"red"},[e._v("evil")]),e._v(" world. \n      ")]),e._v(" "),t("p",[e._v("\n        You approach one of the cheapest markets in the town of "),t("span",{staticClass:"red"},[e._v("Helldoom.")]),e._v(" The worst cuts of "),t("span",{staticClass:"red"},[e._v("horse")]),e._v(" meat sit on wooden tables. \n      ")]),e._v(" "),t("p",[e._v("\n        It's your turn to cook tonight for your company of unsavoury adventurers known as "),t("span",{staticClass:"pink"},[e._v("Barry's Angels.")])]),e._v(" "),t("p",{staticClass:"mb3"},[e._v("  \n        You pick up and inspect a maggot infested piece of meat.\n      ")]),e._v(" "),t("button",{staticClass:"btn  db  mb1",on:{click:function(t){t.preventDefault(),e.storyOne=!e.storyOne,e.storyTwo=!e.storyTwo}}},[e._v("\n        Purchase Meat\n      ")]),e._v(" "),t("button",{staticClass:"btn",on:{click:function(t){t.preventDefault(),e.storyOne=!e.storyOne,e.storyTwo=!e.storyTwo}}},[e._v("\n        Place meat back on table\n      ")])]):e._e()]),e._v(" "),t("transition",{attrs:{name:"fade"}},[e.storyTwo?t("section",[t("p",[e._v("To be continued.")]),e._v(" "),t("button",{staticClass:"btn  btn--p",on:{click:function(t){t.preventDefault(),e.storyOne=!e.storyOne,e.storyTwo=!e.storyTwo,e.introduction=e.introduction}}},[e._v("\n        Back to start\n      ")])]):e._e()]),e._v(" ")])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.e09e0d99402d2e1d2016.js.map