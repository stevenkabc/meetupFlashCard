(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),i=(n(14),n(3)),l=n(4),s=n(6),m=n(5),u=n(7),d=(n(16),function(e){var t=e.icon,n=e.title;return o.a.createElement("button",null,!!t&&o.a.createElement("i",{className:"fa fa-"+t}),n)}),p=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={loading:!0,status:"loading",clicked:-1,rsvps:[],members:[]},n.componentDidMount=function(){fetch("/2/rsvps?offset=0&format=json&signed=true&rsvp=yes&event_id=257046298&page=200&fields=&key=7862814232c775b72f12448011388&order=name&desc=false").then(function(e){return e.json()}).then(function(e){var t=e.results.filter(function(e){return e.hasOwnProperty("member_photo")}),a=t.reduce(function(e,t,n){var a=t.member,o=a.member_id,r=a.name,c=t.member_photo,i=c.highres_link||c.photo_link;return e[0].push(o),e[1].push({name:r,photo_link:i}),e},[[],[]]);n.setState({rsvps:t,members:a,loading:!1})}).catch(function(e){var t=new Error(e);console.log(t)})},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this.state,n=t.members,a=(t.rsvps,t.loading),r=(n[0],n[1]);return e=a?o.a.createElement("li",{key:0},"Loading"):r.map(function(e,t){var a=n[0][t],r=e.name,c=e.photo_link;return o.a.createElement("li",{key:"".concat(e,"-").concat(t)},o.a.createElement("img",{className:"photo",link:!0,src:c,alt:"".concat(r," ID-").concat(a)}),o.a.createElement("span",{style:{paddingBottom:"4em",marginBottom:"30px"}},"".concat(r," ID-").concat(a)))}),o.a.createElement("div",null,o.a.createElement(d,{title:"Add item to cart"}),o.a.createElement(d,{title:"Add item to cart",icon:"plus"}),o.a.createElement("ul",{style:{display:"inline"}},e))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.6c0f62a2.chunk.js.map