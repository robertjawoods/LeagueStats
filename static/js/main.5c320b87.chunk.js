(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(27)},26:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),u=a(13),r=a.n(u),s=a(5),l=a(6),c=a(8),o=a(7),m=a(9),p=a(28),d=a(30),b=a(15),h="https://league-stats-backend.herokuapp.com/",f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),u=0;u<n;u++)i[u]=arguments[u];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={query:""},a.onSearchSubmit=function(e){e.preventDefault(),fetch("".concat(h,"summoner/GetSummonerByAccountName/").concat(a.search.value)).then(function(e){a.setState({query:e})})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("form",{onSubmit:function(t){return e.onSearchSubmit(t)}},i.a.createElement("input",{placeholder:"Summoner Name",ref:function(t){return e.search=t}}),i.a.createElement("input",{type:"submit",style:{display:"none"}}),i.a.createElement("p",null,this.state.query))}}]),t}(n.Component),v=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"Home"),i.a.createElement(f,null))}}]),t}(n.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"Matches"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget ligula risus. Quisque malesuada tempor nisl vitae tempus. Suspendisse potenti. Donec placerat risus et quam pulvinar porta nec a tortor. Nam sodales, turpis et semper varius, felis risus aliquam justo, eget faucibus ligula mi sed arcu. Proin faucibus justo et tortor fringilla dictum vitae vel tortor. Integer auctor enim leo, vitae dignissim nibh pellentesque quis. Sed neque mi, cursus sit amet dolor quis, facilisis laoreet dui. Nam sodales venenatis facilisis. Sed quis nulla lobortis, sollicitudin ligula eget, maximus elit. Suspendisse tincidunt enim metus, sit amet cursus nisl tristique sit amet."))}}]),t}(n.Component),j=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"Summoner"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget ligula risus. Quisque malesuada tempor nisl vitae tempus. Suspendisse potenti. Donec placerat risus et quam pulvinar porta nec a tortor. Nam sodales, turpis et semper varius, felis risus aliquam justo, eget faucibus ligula mi sed arcu. Proin faucibus justo et tortor fringilla dictum vitae vel tortor. Integer auctor enim leo, vitae dignissim nibh pellentesque quis. Sed neque mi, cursus sit amet dolor quis, facilisis laoreet dui. Nam sodales venenatis facilisis. Sed quis nulla lobortis, sollicitudin ligula eget, maximus elit. Suspendisse tincidunt enim metus, sit amet cursus nisl tristique sit amet."))}}]),t}(n.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,{basename:"/LeagueStats"},i.a.createElement("div",null,i.a.createElement("h1",null,"League Stats"),i.a.createElement("ul",{className:"navigation-bar"},i.a.createElement("li",null,i.a.createElement(d.a,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(d.a,{to:"/summoner"},"Summoner")),i.a.createElement("li",null,i.a.createElement(d.a,{to:"/matches"},"Matches"))),i.a.createElement("div",{className:"content"},i.a.createElement(b.a,{exact:!0,path:"/",component:v}),i.a.createElement(b.a,{path:"/summoner",component:j}),i.a.createElement(b.a,{path:"/matches",component:E}))))}}]),t}(n.Component),O=(a(26),a(29));r.a.render(i.a.createElement(O.a,{basename:"/LeagueStats"},i.a.createElement(g,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5c320b87.chunk.js.map