(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{364:function(t,e,r){"use strict";var o=r(234);e.a=o.a},599:function(t,e,r){var content=r(600);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("1c8f4490",content,!0,{sourceMap:!1})},600:function(t,e,r){var o=r(16)((function(i){return i[1]}));o.push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:24px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-bottom-left-radius:inherit;border-top-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-bottom-right-radius:inherit;border-top-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-bottom-left-radius:inherit;border-top-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-application--is-ltr .v-alert--border.v-alert--prominent .v-alert__icon{margin-left:8px}.v-application--is-rtl .v-alert--border.v-alert--prominent .v-alert__icon{margin-right:8px}.v-alert--dense{padding-bottom:8px;padding-top:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--prominent .v-alert__icon.v-icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent.v-alert--dense .v-alert__icon.v-icon:after{transform:scale(1)}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0}',""]),o.locals={},t.exports=o},603:function(t,e,r){"use strict";r(8),r(10),r(7),r(5),r(12),r(9),r(13);var o=r(2),n=(r(50),r(599),r(103)),l=r(364),c=r(84),d=r(66),v=r(24),h=r(1).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),m=r(6),_=r(15);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(m.a)(n.a,d.a,h).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(o.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(l.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(c.a,{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(c.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=x(x({},n.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||v.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(_.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},769:function(t,e,r){"use strict";r.r(e);var o=r(603),n=r(234),l=r(226),c=r(596),d=r(594),v=r(222),h=r(184),m=r(595),_={name:"sei",data:function(){return{page:{color:"info",title:"Contacto",icon:"mdi-card-account-phone-outline",contactos:[{dependencia:"Secretaría Ejecutiva",icon:"seac.png",datos:["Telefono: (844) 688 2178","Correo: informacion@seacoahuila.org.mx","Dirección: Blvd. Luis Donaldo Colosio No. 703 Piso 3 Fracc. Valle Real Saltillo, Coahuila de Zaragoza, México. C.P. 25205.","Horario de atención: De 08:30 a 17:00 de lunes a jueves, de 08:30 a 14:30 viernes."]},{dependencia:"Consejo de Participación Ciudadana",icon:"cc-cpc.png",datos:["Telefono: (844) 688 2178","Página Web: https://www.cpccoahuila.org.mx","Correos:","jafia.pacheco@cpccoahuila.org.mx // miguel.crespo@cpccoahuila.org.mx // yolanda.montes@cpccoahuila.org.mx // carlos.guzman@cpccoahuila.org.mx //  karla.samperio@cpccoahuila.org.mx"]}]}}}},f=r(67),component=Object(f.a)(_,(function(){var t=this,e=t._self._c;return e(d.a,[e(m.a,[e(c.a,[e(o.a,{staticClass:"mx-auto text-justify",attrs:{color:t.page.color,border:"top","colored-border":"",elevation:"2",icon:t.page.icon,prominent:""}},[e("div",{staticClass:"mb-5 text-xl-h1 text-md-h3 text-h4",attrs:{align:"center"}},[t._v(t._s(t.page.title))])]),t._v(" "),t._l(t.page.contactos,(function(o,i){return e("div",{key:i},[e(l.a,{staticClass:"mt-8",attrs:{color:"article"}},[e(m.a,[e(c.a,{attrs:{align:"center",cols:"6",justify:"center"}},[e(h.a,{attrs:{width:"300","lazy-src":r(236)("./"+o.icon),src:r(236)("./"+o.icon)}})],1),t._v(" "),e(c.a,{attrs:{cols:"6"}},[e("div",{staticClass:"mb-5 text-xl-h4 text-md-h5"},[t._v(t._s(o.dependencia))]),t._v(" "),t._l(o.datos,(function(i,r){return e("div",{key:r,staticClass:"mb-5 text-subtitle-2 font-weight-bold"},[t._v(" "+t._s(i))])})),t._v(" "),"Secretaría Ejecutiva"===o.dependencia?e("div",[e(n.a,{attrs:{href:"https://www.google.com/maps/dir//Secretar%C3%ADa+Ejecutiva+del+Sistema+Anticorrupci%C3%B3n+del+Estado+de+Coahuila+de+Zaragoza,+Blvd.+Luis+Donaldo+Colosio+No.+703.+Piso+3,+Fraccionamiento+Valle+Real,+25205+Saltillo,+Coah.,+M%C3%A9xico/@25.4705483,-100.9604294,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x86881331ebb6aadd:0x2c4069ae06e6a973!2m2!1d-100.9604294!2d25.4705483 "}},[e(v.a,{attrs:{color:"red"}},[t._v("mdi-map-marker-radius ")]),t._v("  Ver ubicación\r\n\r\n                                ")],1)],1):t._e()],2)],1)],1)],1)}))],2)],1)],1)}),[],!1,null,"2ac37718",null);e.default=component.exports}}]);