webpackJsonp([1],{"4KcU":function(t,e,a){t.exports=a.p+"static/img/alee_logo_tiny.6bdb3fc.png"},"7xQ/":function(t,e){},CCBM:function(t,e){},GOoj:function(t,e){},LOxK:function(t,e){},NHnr:function(t,e,a){"use strict";function r(t){a("CCBM")}function n(t){a("P8iT")}function s(t){a("gyco")}function i(t){a("LOxK")}function o(t){a("7xQ/")}function c(t){a("GOoj")}Object.defineProperty(e,"__esModule",{value:!0});var h=a("7+uW"),u={name:"app"},m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{src:a("4KcU")}}),t._v(" "),r("router-view")],1)},p=[],l={render:m,staticRenderFns:p},d=l,w=a("VU/8"),v=r,_=w(u,d,!1,v,null,null),f=_.exports,g=a("/ocq"),D=a("//Fk"),y=a.n(D),C=a("mtWM"),L=a.n(C),b=L.a.create({baseURL:"//api.openweathermap.org/data/2.5/"});b.interceptors.request.use(function(t){return t.params.APPID="957914c50b7057f1e5ae2ddff4ace499",t.params.units="imperial",t},function(t){return y.a.reject(t)});var j={name:"ErrorList",data:function(){return{}},props:{ErrorList:[]}},x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("There was an error fetching weather data.")]),t._v(" "),a("ul",{staticClass:"errors"},t._l(t.ErrorList,function(e){return a("li",[t._v(t._s(e))])}))])},E=[],k={render:x,staticRenderFns:E},R=k,$=a("VU/8"),q=n,A=$(j,R,!1,q,"data-v-ece9c564",null),U=A.exports,I={name:"CubeSpinner"},F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0,!1,!1)},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spinner"},[a("div",{staticClass:"bounce1"}),t._v(" "),a("div",{staticClass:"bounce2"}),t._v(" "),a("div",{staticClass:"bounce3"})])}],V={render:F,staticRenderFns:T},P=V,W=a("VU/8"),H=s,M=W(I,P,!1,H,"data-v-0e2d6b14",null),O=M.exports,S={name:"CitySearch",data:function(){return{results:null,query:"",showLoading:!1,errors:[]}},methods:{getCities:function(){var t=this;this.results=null,this.showLoading=!0,b.get("find",{params:{q:this.query}}).then(function(e){t.results=e.data,t.showLoading=!1}).catch(function(e){t.messages.push(e),t.showLoading=!1})}},components:{"error-list":U,"load-spinner":O}},z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("Set Local City")]),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.getCities(e)}}},[a("p",[t._v("Enter city name: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text",placeholder:"Three Lakes"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),t._v(" "),a("button",{attrs:{type:"submit"}},[t._v("Go")])])]),t._v(" "),t.showLoading?a("load-spinner"):t._e(),t._v(" "),t.results&&t.results.list.length>0?a("ul",{staticClass:"cities"},t._l(t.results.list,function(e){return a("li",[a("h2",[t._v(t._s(e.name)+", "+t._s(e.sys.country))]),t._v(" "),a("p",[a("router-link",{attrs:{to:{name:"CurrentWeather",params:{cityID:e.id}}}},[t._v(" Get Coat ")])],1)])})):t.errors.length>0?a("error-list",{attrs:{errorList:t.errors}}):t._e()],1)},G=[],K={render:z,staticRenderFns:G},N=K,B=a("VU/8"),Q=i,J=B(S,N,!1,Q,"data-v-18784cae",null),X=J.exports,Y={name:"Coat",data:function(){return{weatherData:null,errors:[],coat:""}},methods:{getCoat:function(){this.weatherData.main.temp>=-30&&this.weatherData.main.temp<=20?this.coat="skisuit.jpg":this.weatherData.main.temp>=21&&this.weatherData.main.temp<=50&&("Rain"!==this.weatherData.weather[0].main||"Thunderstorm"!==this.weatherData.weather[0].main||"Drizzle"!==this.weatherData.weather[0].main)?this.coat="parka.jpg":this.weatherData.main.temp>=50&&this.weatherData.main.temp<=75&&("Rain"===this.weatherData.weather[0].main||"Thunderstorm"===this.weatherData.weather[0].main||"Drizzle"===this.weatherData.weather[0].main||"Mist"===this.weatherData.weather[0].main)?this.coat="raincoat.jpg":this.weatherData.main.temp>=51&&this.weatherData.main.temp<=70&&"Clear"!==this.weatherData.weather[0].main?this.coat="jacket.jpg":this.weatherData.main.temp>=51&&this.weatherData.main.temp<=70&&"Clear"===this.weatherData.weather[0].main?this.coat="sweater.jpg":this.coat=""}},created:function(){var t=this;this.showLoading=!0,b.get("weather",{params:{id:this.$route.params.cityID}}).then(function(e){t.showLoading=!1,t.weatherData=e.data,t.getCoat()}).catch(function(e){t.showLoading=!1})},components:{"error-list":U,"load-spinner":O}},Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("Current Weather "),t.weatherData?a("span",[t._v(" for "+t._s(t.weatherData.name)+", "+t._s(t.weatherData.sys.country))]):t._e()]),t._v(" "),a("p",[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),t.showLoading?a("load-spinner"):t._e(),t._v(" "),t.weatherData?a("div",[a("img",{attrs:{src:"static/"+t.coat}})]):t._e(),t._v(" "),a("div",[a("router-link",{attrs:{to:{name:"Accessories",params:{cityID:t.$route.params.cityID}}}},[t._v("View Suggested Accessories? ")])],1)],1)},tt=[],et={render:Z,staticRenderFns:tt},at=et,rt=a("VU/8"),nt=o,st=rt(Y,at,!1,nt,"data-v-65c91104",null),it=st.exports,ot={name:"Acccessories",data:function(){return{weatherData:null,accessory:""}},methods:{getAccessory:function(){"Clear"===this.weatherData.weather[0].main?this.accessory="sunglasses.jpg":this.weatherData.main.temp<=30?this.accessory="hat.jpg":"Rain"===this.weatherData.weather[0].main?this.accessory="umbrella.jpg":"Snow"===this.weatherData.weather[0].main?this.accessory="scarf.jpg":this.weatherData.main.temp<=45?this.accessory="mitten.jpg":this.accesory=""}},created:function(){var t=this;this.showLoading=!0,b.get("weather",{params:{id:this.$route.params.cityID}}).then(function(e){t.showLoading=!1,t.weatherData=e.data,t.getAccessory()}).catch(function(e){t.showLoading=!1})},components:{"error-list":U,"load-spinner":O}},ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("Current Weather "),t.weatherData?a("span",[t._v(" for "+t._s(t.weatherData.name)+", "+t._s(t.weatherData.sys.country))]):t._e()]),t._v(" "),a("p",[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),t.weatherData?a("div",[a("img",{attrs:{src:"static/"+t.accessory}})]):t._e()])},ht=[],ut={render:ct,staticRenderFns:ht},mt=ut,pt=a("VU/8"),lt=c,dt=pt(ot,mt,!1,lt,"data-v-280cb0b4",null),wt=dt.exports;h.a.use(g.a);var vt=new g.a({routes:[{path:"/",name:"Home",component:X},{path:"/current/:cityID",name:"CurrentWeather",component:it},{path:"/current/:cityID/accessories",name:"Accessories",component:wt}]});h.a.config.productionTip=!1,new h.a({el:"#app",router:vt,template:"<App/>",components:{App:f}})},P8iT:function(t,e){},gyco:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b496a21403cc8e7e27d7.js.map