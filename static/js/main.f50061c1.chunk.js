(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/ana-ivanovic.a0caf92f.jpg"},function(e,t,a){e.exports=a.p+"static/media/penguin.e76583db.png"},function(e,t,a){e.exports=a.p+"static/media/rose.c7cf6652.png"},,,function(e,t,a){e.exports=a.p+"static/media/ana-ivanovic.c3d416c1.webp"},function(e,t,a){e.exports=a.p+"static/media/penguin_lossyalpha.74d2b579.webp"},function(e,t,a){e.exports=a.p+"static/media/rose_lossyalpha.6a0784d2.webp"},function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),A=a.n(n),i=a(10),o=a.n(i),s=(a(20),a(1)),c=a(2),l=a(4),r=a(3),p=a(5),m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",d={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"},h=JSON.parse(localStorage.getItem("thisBrowserIsWebpCompatible"))||{};["lossy","alpha"].forEach(function(e){if(void 0===h[e]){var t=new Image;t.onload=function(){h[e]=t.width>0&&t.height>0,localStorage.setItem("thisBrowserIsWebpCompatible",JSON.stringify(h))},t.onerror=function(){h[e]=!1,localStorage.setItem("thisBrowserIsWebpCompatible",JSON.stringify(h))},t.src="data:image/webp;base64,".concat(d[e])}});var u=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,A=new Array(n),i=0;i<n;i++)A[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(A))))._onLoad=function(e){var t=a.props.onLoad;t&&e.target.src!==m&&t(e)},a._onMouseMove=function(e){var t=a.props.onMouseMove;t&&e.target.src!==m&&t(e)},a._onMouseLeave=function(e){var t=a.props.onMouseLeave;t&&e.target.src!==m&&t(e)},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t=this,a=this.props,n=a.src,i=a.srcWebp,o=void 0===i?null:i,s=a.className,c=void 0===s?null:s,l=a.style,r=void 0===l?null:l,p=a.width,d=void 0===p?null:p,u=a.height,g=void 0===u?null:u,v=a.alt,w=void 0===v?"":v;return o?void 0===h.alpha||void 0===h.lossy?(e=m,setTimeout(function(){return t.forceUpdate()},0)):e=o.lastIndexOf(".png")===o.length-4?h.alpha?o:n:h.lossy?o:n:e=n,A.a.createElement("img",{src:e,className:c,style:r,onLoad:this._onLoad,onMouseMove:this._onMouseMove,onMouseLeave:this._onMouseLeave,alt:w,width:d,height:g})}}]),t}(n.Component),g=a(6),v=a.n(g),w=a(11),f=a.n(w),b=a(7),E=a.n(b),I=a(12),y=a.n(I),B=a(8),R=a.n(B),Q=a(13),T=a.n(Q),N=(a(21),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,A=new Array(n),i=0;i<n;i++)A[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(A)))).state={AnaTitle:"(jpg)",PenguinTitle:"(png)",RoseTitle:"(png)"},a._checkImageLoadedIsWebp=function(e){return e.target.src.lastIndexOf(".webp")===e.target.src.length-5},a._setTitleAna=function(e){a._checkImageLoadedIsWebp(e)&&a.setState({AnaTitle:"(webp lossy)"})},a._setTitlePenguin=function(e){a._checkImageLoadedIsWebp(e)&&a.setState({PenguinTitle:"(webp lossy transparency)"})},a._setTitleRose=function(e){a._checkImageLoadedIsWebp(e)&&a.setState({RoseTitle:"(webp lossy transparency)"})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.AnaTitle,a=e.PenguinTitle,n=e.RoseTitle;return A.a.createElement("div",{className:"App"},A.a.createElement("div",{className:"App-title"},"Webp images demo"),A.a.createElement("div",{className:"App-container"},A.a.createElement("div",{className:"App-col"},A.a.createElement("div",{className:"App-item"},A.a.createElement("img",{src:v.a,width:"600",height:"600",alt:""}),A.a.createElement("div",null," Ana Ivanovic (jpg)")),A.a.createElement("div",{className:"App-item"},A.a.createElement("img",{src:E.a,width:"386",height:"395",alt:""}),A.a.createElement("div",null," Penguin (png with transparency)")),A.a.createElement("div",{className:"App-item"},A.a.createElement("img",{src:R.a,width:"400",height:"401",alt:""}),A.a.createElement("div",null," Rose (png with transparency)"))),A.a.createElement("div",{className:"App-col"},A.a.createElement("div",{className:"App-item"},A.a.createElement(u,{srcWebp:f.a,src:v.a,width:"600",height:"600",onLoad:this._setTitleAna}),A.a.createElement("div",null," Ana Ivanovic ",t)),A.a.createElement("div",{className:"App-item"},A.a.createElement(u,{srcWebp:y.a,src:E.a,width:"386",height:"395",onLoad:this._setTitlePenguin}),A.a.createElement("div",null," Penguin ",a)),A.a.createElement("div",{className:"App-item"},A.a.createElement(u,{srcWebp:T.a,src:R.a,width:"400",height:"401",onLoad:this._setTitleRose}),A.a.createElement("div",null," Rose ",n)))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(A.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[14,1,2]]]);
//# sourceMappingURL=main.f50061c1.chunk.js.map