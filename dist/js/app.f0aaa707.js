(function(e){function t(t){for(var c,o,s=t[0],i=t[1],l=t[2],b=0,p=[];b<s.length;b++)o=s[b],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],c=!0,s=1;s<r.length;s++){var i=r[s];0!==n[i]&&(c=!1)}c&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var c={},n={app:0},a=[];function o(t){if(c[t])return c[t].exports;var r=c[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=c,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(r,c,function(t){return e[t]}.bind(null,c));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"07e5":function(e,t,r){e.exports=r.p+"img/coffee.49f13e2d.gif"},"565d":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var c=r("7a23"),n={class:"bg-gray-900 p-4 md:py-20 md:px-12"};function a(e,t,r,a,o,s){var i=Object(c["v"])("Header"),l=Object(c["v"])("router-view"),d=Object(c["v"])("Footer");return Object(c["q"])(),Object(c["d"])(c["a"],null,[Object(c["h"])(i),Object(c["e"])("div",n,[Object(c["h"])(l)]),Object(c["h"])(d)],64)}var o={class:"bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 p-6 flex justify-between items-center flex-col md:flex-row"},s={class:"mb-3 md:mb-0"},i=Object(c["e"])("i",{class:"fab fa-bitcoin text-green-600"},null,-1),l=Object(c["g"])(" Krypton"),d={class:"text-gray-100 font-semibold flex items-center justify-between"},b=Object(c["g"])("Home"),p=Object(c["g"])("Explore Coins"),u=Object(c["e"])("button",{class:"bg-gradient-to-r from-green-400 to-green-600 text-gray-100 p-2 md:p-2 rounded-md font-medium md:font-semibold"},[Object(c["e"])("a",{class:"",href:"https://shoaibdevportfolio.netlify.app/"},"Meet Author")],-1);function m(e,t,r,n,a,m){var g=Object(c["v"])("router-link");return Object(c["q"])(),Object(c["d"])("div",o,[Object(c["e"])("div",s,[Object(c["h"])(g,{class:"text-green-500 text-2xl font-bold",to:"/"},{default:Object(c["A"])((function(){return[i,l]})),_:1})]),Object(c["e"])("div",d,[Object(c["h"])(g,{class:"px-1 md:px-4 hover:text-green-400",to:"/"},{default:Object(c["A"])((function(){return[b]})),_:1}),Object(c["h"])(g,{class:"px-1 md:px-4 hover:text-green-400",to:"/coins"},{default:Object(c["A"])((function(){return[p]})),_:1}),u])])}var g={name:"Header"},f=r("6b0d"),x=r.n(f),j=x()(g,[["render",m]]),O={class:"bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 py-6 px-4 md:p-6 text-gray-100 flex justify-center"},y=Object(c["e"])("div",null,[Object(c["e"])("span",null,[Object(c["g"])("Made by "),Object(c["e"])("a",{class:"text-green-400 text-2xl",href:"https://shoaibdevportfolio.netlify.app/"},"Shoaib"),Object(c["g"])(" with ❤️ and "),Object(c["e"])("span",{class:"text-green-400"},"Vue Js"),Object(c["g"])(".")])],-1),h=[y];function v(e,t,r,n,a,o){return Object(c["q"])(),Object(c["d"])("footer",O,h)}var w={name:"Footer"},k=x()(w,[["render",v]]),_={components:{Header:j,Footer:k}},C=x()(_,[["render",a]]),q=r("6c02"),S={key:0},T={key:1},W=Object(c["e"])("div",{class:"text-gray-500 text-3xl mt-10 mb-6 text-center"}," Fetching Data. Have a Cup of Coffee. ",-1),R=["src"];function H(e,t,r,n,a,o){var s=Object(c["v"])("Table");return a.loading?(Object(c["q"])(),Object(c["d"])("main",T,[W,Object(c["e"])("img",{src:a.loadingImage,class:"w-24 m-auto",alt:""},null,8,R)])):(Object(c["q"])(),Object(c["d"])("main",S,[Object(c["h"])(s,{crypto:a.stats},null,8,["crypto"])]))}var M=r("1da1"),P=(r("96cf"),r("d3b7"),r("b0c0"),{class:"flex flex-col"}),A={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},F={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},B={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},D={class:"min-w-full divide-y divide-gray-200"},E=Object(c["e"])("thead",{class:"bg-gray-700 text-gray-50"},[Object(c["e"])("tr",null,[Object(c["e"])("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"}," Rank "),Object(c["e"])("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"}," Coin "),Object(c["e"])("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"}," Price "),Object(c["e"])("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"}," 24h "),Object(c["e"])("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"}," Total Volume "),Object(c["e"])("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"}," Market Cap ")])],-1),I={class:"bg-gray-900 divide-y divide-gray-200"},N={class:"px-6 py-4 whitespace-nowrap"},$={class:"text-sm text-gray-50"},L={class:"px-6 py-4 whitespace-nowrap"},J={class:"flex items-center"},G={class:"flex-shrink-0 h-10 w-10"},V=["src","alt"],Y={class:"ml-4"},z={class:"text-sm font-medium text-gray-50"},K={class:"text-sm text-gray-300"},Q={class:"px-6 py-4 whitespace-nowrap"},U={class:"text-sm text-gray-50"},X={class:"px-6 py-4 whitespace-nowrap"},Z={key:0,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"},ee={key:1,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"},te={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-50"},re={class:"px-6 py-4 whitespace-nowrap"},ce={class:"text-sm text-gray-50"};function ne(e,t,r,n,a,o){return Object(c["q"])(),Object(c["d"])("div",P,[Object(c["e"])("div",A,[Object(c["e"])("div",F,[Object(c["e"])("div",B,[Object(c["e"])("table",D,[E,Object(c["e"])("tbody",I,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["u"])(r.crypto,(function(e){return Object(c["q"])(),Object(c["d"])("tr",null,[Object(c["e"])("td",N,[Object(c["e"])("div",$,Object(c["x"])(e.market_cap_rank),1)]),Object(c["e"])("td",L,[Object(c["e"])("div",J,[Object(c["e"])("div",G,[Object(c["e"])("img",{class:"h-10 w-10 rounded-full",src:e.image,alt:e.name},null,8,V)]),Object(c["e"])("div",Y,[Object(c["e"])("div",z,Object(c["x"])(e.name),1),Object(c["e"])("div",K,Object(c["x"])(e.symbol),1)])])]),Object(c["e"])("td",Q,[Object(c["e"])("div",U," $"+Object(c["x"])(o.numberWithCommas(e.current_price)),1)]),Object(c["e"])("td",X,[e.price_change_percentage_24h>0?(Object(c["q"])(),Object(c["d"])("span",Z,Object(c["x"])(e.price_change_percentage_24h)+"% ",1)):(Object(c["q"])(),Object(c["d"])("span",ee,Object(c["x"])(e.price_change_percentage_24h)+"% ",1))]),Object(c["e"])("td",te," $"+Object(c["x"])(o.numberWithCommas(e.total_volume)),1),Object(c["e"])("td",re,[Object(c["e"])("div",ce," $"+Object(c["x"])(o.numberWithCommas(e.market_cap)),1)])])})),256))])])])])])])}r("ac1f"),r("5319"),r("25f0");var ae={name:"Table",props:["crypto"],methods:{numberWithCommas:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},oe=x()(ae,[["render",ne]]),se={name:"Coins",components:{Table:oe},data:function(){return{loading:!0,stats:{},loadingImage:r("07e5")}},methods:{fetchCryptoData:function(){return Object(M["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false");case 2:return t=e.sent,r=t.json(),console.log(r),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))()}},created:function(){var e=this;return Object(M["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchCryptoData();case 2:r=t.sent,e.stats=r,e.loading=!1;case 5:case"end":return t.stop()}}),t)})))()}},ie=x()(se,[["render",H]]),le={class:"flex flex-col justify-center md:flex-row gap-0 md:gap-8 my-0 md:my-14"},de={class:"w-full mb-8 md:mb-0 md:w-7/12"},be=Object(c["e"])("h1",{class:"text-4xl mt-5 md:mt-0 mb-4 md:mb-8 md:text-6xl font-bold text-gray-200 font-serif"},[Object(c["g"])("Find the Next "),Object(c["e"])("span",{class:"text-green-400"},"Crypto Gem"),Object(c["g"])(" here")],-1),pe={class:"bg-gradient-to-r mt-6 from-green-400 to-green-600 text-gray-100 p-2 rounded-md font-semibold"},ue=Object(c["g"])("Explore Coins"),me={key:0,class:"flex items-center justify-center flex-col rounded-md"},ge={key:1,class:"flex items-center justify-center flex-col rounded-md"},fe=Object(c["e"])("span",{class:"text-2xl font-semibold text-gray-100"},"Loading",-1),xe=["src"],je={class:"px-2 md:px-14 py-14"},Oe={class:"px-2 md:px-14 py-14"},ye={class:"px-2 md:px-14 py-14"},he={key:0},ve={key:1,class:"flex items-center justify-center flex-col rounded-md"},we=Object(c["e"])("span",{class:"text-2xl font-semibold text-gray-100"},"Loading",-1),ke=["src"],_e={class:"px-2 md:px-14 py-14"};function Ce(e,t,r,n,a,o){var s=Object(c["v"])("router-link"),i=Object(c["v"])("HeroCard"),l=Object(c["v"])("Companies"),d=Object(c["v"])("Services"),b=Object(c["v"])("TopCoin"),p=Object(c["v"])("Newsletter");return Object(c["q"])(),Object(c["d"])(c["a"],null,[Object(c["e"])("section",le,[Object(c["e"])("div",de,[be,Object(c["e"])("button",pe,[Object(c["h"])(s,{to:"/coins"},{default:Object(c["A"])((function(){return[ue]})),_:1})])]),a.loading?(Object(c["q"])(),Object(c["d"])("div",ge,[Object(c["e"])("div",null,[fe,Object(c["e"])("img",{src:a.loadingImage,class:"w-12 m-auto",alt:""},null,8,xe)])])):(Object(c["q"])(),Object(c["d"])("div",me,[Object(c["h"])(i,{crypto:a.stats},null,8,["crypto"])]))]),Object(c["e"])("section",je,[Object(c["h"])(l)]),Object(c["e"])("section",Oe,[Object(c["h"])(d)]),Object(c["e"])("section",ye,[a.loading?(Object(c["q"])(),Object(c["d"])("div",ve,[Object(c["e"])("div",null,[we,Object(c["e"])("img",{src:a.loadingImage,class:"w-12 m-auto",alt:""},null,8,ke)])])):(Object(c["q"])(),Object(c["d"])("div",he,[Object(c["h"])(b,{coin:e.crypto},null,8,["coin"])]))]),Object(c["e"])("section",_e,[Object(c["h"])(p)])],64)}var qe={class:"rounded-xl bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 shadow-lg p-5 bg-opacity-60 backdrop-filter backdrop-blur-lg"},Se={class:"flex items-center text-gray-100 p-2 gap-3"},Te=["src","alt"],We={class:"uppercase"},Re={key:0,class:"text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 px-2"},He={key:1,class:"text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 px-2"};function Me(e,t,r,n,a,o){return Object(c["q"])(),Object(c["d"])("div",qe,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["u"])(r.crypto,(function(e){return Object(c["q"])(),Object(c["d"])("p",Se,[Object(c["e"])("img",{class:"h-8 w-8 rounded-full",src:e.image,alt:e.name},null,8,Te),Object(c["e"])("span",We,Object(c["x"])(e.symbol),1),e.price_change_percentage_24h<0?(Object(c["q"])(),Object(c["d"])("span",Re,Object(c["x"])(e.price_change_percentage_24h)+"% ",1)):(Object(c["q"])(),Object(c["d"])("span",He,Object(c["x"])(e.price_change_percentage_24h)+"% ",1)),Object(c["e"])("span",null,"$"+Object(c["x"])(o.numberWithCommas(e.current_price)),1)])})),256))])}var Pe={name:"HeroCard",props:["crypto"],methods:{numberWithCommas:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},Ae=x()(Pe,[["render",Me]]),Fe=r("804c"),Be=r.n(Fe),De=r("b636"),Ee=r.n(De),Ie=r("d615"),Ne=r.n(Ie),$e={class:"px-4 md:px-0 py-12 flex flex-col justify-center items-center bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-lg"},Le=Object(c["e"])("h1",{class:"font-serif text-4xl font-semibold text-gray-200 text-center"},"Created with support",-1),Je=Object(c["e"])("div",{class:"flex items-center justify-center gap-2 md:gap-8 py-6 pt-10"},[Object(c["e"])("img",{class:"w-1/3 h-1/3 md:w-1/4 md:h-1/4",src:Be.a}),Object(c["e"])("img",{class:"w-1/3 h-1/3 md:w-1/4 md:h-1/4",src:Ee.a}),Object(c["e"])("img",{class:"w-1/3 h-1/3 md:w-1/4 md:h-1/4",src:Ne.a})],-1),Ge=[Le,Je];function Ve(e,t,r,n,a,o){return Object(c["q"])(),Object(c["d"])("div",$e,Ge)}var Ye={name:"Companies"},ze=x()(Ye,[["render",Ve]]),Ke={class:""},Qe=Object(c["e"])("h1",{class:"text-2xl md:text-4xl lg:text-5xl font-serif text-center text-gray-200 mb-14"},"We've Created an Exchange to Lead this Revolutionary",-1),Ue={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"};function Xe(e,t,r,n,a,o){var s=Object(c["v"])("Card");return Object(c["q"])(),Object(c["d"])("div",Ke,[Qe,Object(c["e"])("div",Ue,[Object(c["h"])(s,{image:"https://cdn-icons-png.flaticon.com/512/4705/4705661.png",title:"Great Trading",description:"We believe in the potential to provide groundbreaking solutions accross industries and beyond crypto."},null,8,["image","description"]),Object(c["h"])(s,{image:"https://cdn-icons-png.flaticon.com/512/755/755091.png",title:"Security First",description:"When  choosing an exchange, trust matters. That is why security has been our top consideration. "},null,8,["image","description"]),Object(c["h"])(s,{image:"https://cdn-icons-png.flaticon.com/512/2428/2428691.png",title:"Robust Technology",description:"We believe in the potential to provide groundbreaking solutions accross industries and beyond crypto."},null,8,["image","description"])])])}r("a4d3"),r("e01a");var Ze={class:"px-4 py-8 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-200 rounded-lg shadow-lg"},et=["src"],tt={class:"my-3 font-semibold text-2xl text-gray-300"};function rt(e,t,r,n,a,o){return Object(c["q"])(),Object(c["d"])("div",Ze,[Object(c["e"])("img",{class:"w-1/4 h-1/3",src:r.image},null,8,et),Object(c["e"])("h1",tt,Object(c["x"])(r.title),1),Object(c["e"])("p",null,Object(c["x"])(r.description),1)])}var ct={name:"Card",props:{image:String,title:String,description:String}},nt=x()(ct,[["render",rt]]),at={name:"Services",components:{Card:nt}},ot=x()(at,[["render",Xe]]),st={class:"flex items-center justify-around flex-col-reverse md:flex-row"},it={class:"flex flex-col items-center rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 text-gray-200 py-12 px-28"},lt=["src"],dt={class:"flex flex-col items-center mt-4"},bt={class:"text-xl text-gray-200 font-semibold"},pt={class:"mb-6 uppercase"},ut={class:"mb-4 text-lg"},mt={key:0,class:"text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 px-2"},gt={key:1,class:"text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 px-2"},ft={class:"w-full md:w-1/2 px-0 md:px-6 md:mb-0 mb-8"},xt=Object(c["e"])("h1",{class:"text-gray-200 text-2xl md:text-2xl lg:text-4xl my-4 font-semibold"},"Your Access to the Top Coin Markets",-1),jt=Object(c["e"])("p",{class:"text-gray-200"},"Capitalize on trends and trade with confidence through our expensive marketplace listings.",-1),Ot=Object(c["e"])("span",{class:"text-green-500"},"Buy, sell and trade over 500 markets.",-1),yt=Object(c["e"])("br",null,null,-1),ht={class:"bg-gradient-to-r mt-6 from-green-400 to-green-600 text-gray-100 p-2 rounded-md font-semibold"},vt=Object(c["g"])("Explore Coins");function wt(e,t,r,n,a,o){var s=Object(c["v"])("router-link");return Object(c["q"])(),Object(c["d"])("div",st,[Object(c["e"])("div",null,[Object(c["e"])("div",it,[Object(c["e"])("img",{class:"h-16 w-16 rounded-full border-4 border-yellow-200",src:r.coin.image},null,8,lt),Object(c["e"])("div",dt,[Object(c["e"])("h3",bt,Object(c["x"])(r.coin.name),1),Object(c["e"])("span",pt,Object(c["x"])(r.coin.symbol),1),Object(c["e"])("span",ut,"$"+Object(c["x"])(o.numberWithCommas(r.coin.current_price)),1),r.coin.price_change_percentage_24h<0?(Object(c["q"])(),Object(c["d"])("span",mt,Object(c["x"])(r.coin.price_change_percentage_24h)+"%",1)):(Object(c["q"])(),Object(c["d"])("span",gt,Object(c["x"])(r.coin.price_change_percentage_24h)+"%",1))])])]),Object(c["e"])("div",ft,[xt,jt,Ot,yt,Object(c["e"])("button",ht,[Object(c["h"])(s,{to:"/coins"},{default:Object(c["A"])((function(){return[vt]})),_:1})])])])}var kt={name:"TopCoin",props:["coin"],methods:{numberWithCommas:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},_t=x()(kt,[["render",wt]]),Ct={class:"px-4 md:px-0 py-12 flex flex-col justify-center items-center bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-lg"},qt=Object(c["f"])('<h1 class="font-serif text-2xl md:text-4xl font-semibold text-gray-200 text-center">Subscribe to Our NewsLetter</h1><form class="flex justify-center items-center mt-12 my-6"><input class="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 w-full pl-4 pr-12 py-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent mr-0 md:mr-4" type="email" placeholder="Your Email" required><button type="submit" class="bg-gradient-to-r from-green-400 to-green-600 text-gray-100 p-3 rounded-md font-semibold"><a href="mailto: shoaibmehmood065@gmail.com">Subscribe</a></button></form>',2),St=[qt];function Tt(e,t,r,n,a,o){return Object(c["q"])(),Object(c["d"])("div",Ct,St)}var Wt={name:"Newsletter"},Rt=x()(Wt,[["render",Tt]]),Ht={name:"Home",components:{HeroCard:Ae,Companies:ze,Services:ot,TopCoin:_t,Newsletter:Rt},data:function(){return{loading:!0,stats:{},loadingImage:r("cf1c")}},methods:{fetchCryptoData:function(){return Object(M["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=1&sparkline=false");case 2:return t=e.sent,r=t.json(),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))()}},created:function(){var e=this;return Object(M["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchCryptoData();case 2:r=t.sent,e.stats=r,console.log(r[0]),e.crypto=r[0],e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()}},Mt=x()(Ht,[["render",Ce]]),Pt=[{path:"/",name:"Home",component:Mt},{path:"/coins",name:"Coins",component:ie}],At=Object(q["a"])({history:Object(q["b"])("/"),routes:Pt}),Ft=At;r("565d");Object(c["c"])(C).use(Ft).mount("#app")},"804c":function(e,t,r){e.exports=r.p+"img/CoinMc.3cc16331.png"},b636:function(e,t,r){e.exports=r.p+"img/Binance.b57c5179.png"},cf1c:function(e,t,r){e.exports=r.p+"img/loading.4ba61248.gif"},d615:function(e,t,r){e.exports=r.p+"img/coinbase.975c5d64.png"}});
//# sourceMappingURL=app.f0aaa707.js.map