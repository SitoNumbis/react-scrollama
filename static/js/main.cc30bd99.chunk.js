(this["webpackJsonpreact-scrollama-example"]=this["webpackJsonpreact-scrollama-example"]||[]).push([[0],{13:function(e,t,r){e.exports=r(27)},27:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(6),i=r.n(a),s=r(7),c=r(8),l=r(12),p=r(11),f=r(10),u=r(1),d=r.n(u);function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t,r){return t&&h(e.prototype,t),r&&h(e,r),e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?O(e):t}function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=w(e);if(t){var o=w(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return x(this,r)}}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(c){o=!0,a=c}finally{try{n||null==s.return||s.return()}finally{if(o)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var I={position:"fixed",left:0,width:"100%",height:0,borderTop:"2px dashed black",zIndex:9999},D={fontSize:"12px",fontFamily:"monospace",margin:0,padding:6},H=function(e){var t=e.offsetMargin,r=e.offsetVal;return d.a.createElement("div",{style:y(y({},I),{},{top:t})},d.a.createElement("p",{style:D},"trigger: ",r))},R=["stepAbove","stepBelow","stepProgress","viewportAbove","viewportBelow"],A=function(e){E(r,e);var t=M(r);function r(e){var n;g(this,r),b(O(n=t.call(this,e)),"cb",{stepEnter:function(){return null},stepExit:function(){return null},stepProgress:function(){return null}}),b(O(n),"io",{}),b(O(n),"disconnectObserver",(function(e){return n.io[e]&&n.io[e].forEach((function(e){return e.disconnect()}))})),b(O(n),"stepElIds",[]),b(O(n),"viewH","undefined"!==typeof window?window.innerHeight:0),b(O(n),"pageH",0),b(O(n),"offsetVal",0),b(O(n),"offsetMargin",0),b(O(n),"previousYOffset",0),b(O(n),"progressThreshold",0),b(O(n),"direction","down"),b(O(n),"updateDirection",(function(){window.pageYOffset>n.previousYOffset?n.direction="down":window.pageYOffset<n.previousYOffset&&(n.direction="up"),n.previousYOffset=window.pageYOffset})),b(O(n),"isReady",!1),b(O(n),"isEnabled",!1),b(O(n),"isDebug",!1),b(O(n),"progressMode",!1),b(O(n),"getStep",(function(e){var t=e instanceof Element?e.getAttribute("data-react-scrollama-id"):e,r=n[t];if(r&&r.current)return r.current;throw"Could not get step with id "+t})),b(O(n),"handleResize",(function(){n.viewH=window.innerHeight,n.pageH=function(){var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight)}(),n.setState({offsetMargin:n.offsetVal*n.viewH}),n.isReady&&(n.stepElIds.forEach((function(e){n.getStep(e).updateOffsetHeight()})),n.isEnabled&&n.updateIO())})),b(O(n),"handleEnable",(function(e){if(e&&!n.isEnabled){if(!n.isReady)return console.error("react scrollama: handleEnable() called before scroller was ready"),void(n.isEnabled=!1);n.updateIO()}!e&&n.isEnabled&&R.forEach(n.disconnectObserver),n.isEnabled=e})),b(O(n),"updateIO",(function(){R.forEach(n.disconnectObserver),n.updateStepAboveIO(),n.updateStepBelowIO(),n.progressMode&&n.updateStepProgressIO()})),b(O(n),"updateStepAboveIO",(function(){var e=n.state.offsetMargin;n.io.stepAbove=n.stepElIds.map((function(t){var r=n.getStep(t),o=r.updateOffsetHeight(),a=-e+o,i=e-n.viewH,s={rootMargin:"".concat(a,"px 0px ").concat(i,"px 0px")},c=new IntersectionObserver(n.intersectStepAbove,s);return c.observe(r.getDOMNode()),c}))})),b(O(n),"updateStepBelowIO",(function(){var e=n.state.offsetMargin;n.io.stepBelow=n.stepElIds.map((function(t){var r=n.getStep(t),o=r.updateOffsetHeight(),a=-e,i=e-n.viewH+o,s={rootMargin:"".concat(a,"px 0px ").concat(i,"px 0px")},c=new IntersectionObserver(n.intersectStepBelow,s);return c.observe(r.getDOMNode()),c}))})),b(O(n),"updateStepProgressIO",(function(){var e=n.state.offsetMargin;n.io.stepProgress=n.stepElIds.map((function(t){var r,o=n.getStep(t),a=-e+o.state.offsetHeight,i=e-n.viewH,s={rootMargin:"".concat(a,"px 0px ").concat(i,"px 0px"),threshold:n.createThreshold(null!==(r=o.state.offsetHeight)&&void 0!==r?r:1)},c=new IntersectionObserver(n.intersectStepProgress,s);return c.observe(o.getDOMNode()),c}))})),b(O(n),"intersectStepAbove",(function(e){var t=P(e,1)[0];n.updateDirection();var r=n.state.offsetMargin,o=t.isIntersecting,a=t.boundingClientRect,i=a.top,s=a.bottom,c=t.target,l=i-r,p=s-r,f=n.getStep(c);o&&l<=0&&p>=0&&"down"===n.direction&&"enter"!==f.state.state&&n.notifyStepEnter(f,n.direction),!o&&l>-.5&&"up"===n.direction&&"enter"===f.state.state&&n.notifyStepExit(f,n.direction)})),b(O(n),"intersectStepBelow",(function(e){var t=P(e,1)[0];n.updateDirection();var r=n.state.offsetMargin,o=t.isIntersecting,a=t.boundingClientRect,i=a.top,s=a.bottom,c=t.target,l=i-r,p=s-r,f=n.getStep(c);o&&l<=0&&p>=0&&"up"===n.direction&&"enter"!==f.state.state&&n.notifyStepEnter(f,n.direction),!o&&p<0&&"down"===n.direction&&"enter"===f.state.state&&n.notifyStepExit(f,n.direction)})),b(O(n),"intersectStepProgress",(function(e){var t=P(e,1)[0];n.updateDirection();var r=t.isIntersecting,o=t.intersectionRatio,a=t.boundingClientRect.bottom,i=t.target,s=a-n.state.offsetMargin;r&&s>=0&&n.notifyStepProgress(n.getStep(i),o)})),b(O(n),"createThreshold",(function(e){for(var t=Math.ceil(e/n.progressThreshold),r=[],o=1/t,a=0;a<=t;a+=1)r.push(a*o);return r})),b(O(n),"notifyStepProgress",(function(e,t){void 0!==t&&e.progress(t);var r={element:e.getDOMNode(),data:e.getData(),progress:e.state.progress};"enter"===e.state.state&&n.cb.stepProgress(r)})),b(O(n),"notifyStepEnter",(function(e,t){e.enter(t);var r={element:e.getDOMNode(),data:e.getData(),direction:t};n.cb.stepEnter&&n.cb.stepEnter(r),n.progressMode&&n.notifyStepProgress(e)})),b(O(n),"notifyStepExit",(function(e,t){n.progressMode&&("down"===t&&e.state.progress<1&&n.notifyStepProgress(e,1),"up"===t&&e.state.progress>0&&n.notifyStepProgress(e,0)),e.exit(t);var r={element:e.getDOMNode(),data:e.getData(),direction:t};n.cb.stepExit&&n.cb.stepExit(r)}));var o=n.props,a=o.children,i=o.onStepEnter,s=o.onStepExit,c=o.onStepProgress,l=o.offset,p=void 0===l?.3:l,f=o.progress,u=void 0!==f&&f,h=o.threshold,v=void 0===h?4:h,m=o.debug;return d.a.Children.forEach(a,(function(e,t){var r="react-scrollama-".concat(t);n[r]=d.a.createRef(),n.stepElIds.push(r)})),p&&!isNaN(p)&&(n.offsetVal=Math.min(Math.max(0,p),1)),n.cb.stepEnter=i,n.cb.stepExit=s,n.cb.stepProgress=c,n.isDebug=m,n.progressMode=u,n.progressThreshold=Math.max(1,+v),n.isReady=!0,n.state={offsetMargin:n.offsetVal*n.viewH},n}return v(r,[{key:"componentDidMount",value:function(){this.domDidLoad.bind(this)(),window.addEventListener("load",this.domDidLoad.bind(this))}},{key:"domDidLoad",value:function(){this.handleResize(),this.handleEnable(!0),window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("load",this.domDidLoad.bind(this)),window.removeEventListener("resize",this.handleResize),this.handleEnable(!1)}},{key:"render",value:function(){var e=this;return d.a.createElement(u.Fragment,null,this.isDebug&&d.a.createElement(H,{offsetMargin:this.state.offsetMargin,offsetVal:this.offsetVal}),d.a.Children.map(this.props.children,(function(t,r){var n=e.stepElIds[r];return d.a.cloneElement(t,{scrollamaId:n,ref:e[n]})})))}}]),r}(u.Component);var k=function(e){E(r,e);var t=M(r);function r(){var e;g(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return b(O(e=t.call.apply(t,[this].concat(o))),"state",{direction:null,state:null,offsetHeight:null,progress:0}),b(O(e),"nodeRef",d.a.createRef()),b(O(e),"getDOMNode",(function(){return e.nodeRef.current})),b(O(e),"getData",(function(){return e.props.data})),b(O(e),"updateOffsetHeight",(function(){var t=e.getDOMNode().offsetHeight;return e.setState({offsetHeight:t}),t})),b(O(e),"enter",(function(t){return e.setState({state:"enter",direction:t})})),b(O(e),"exit",(function(t){return e.setState({state:"exit",direction:t})})),b(O(e),"progress",(function(t){return e.setState({progress:t})})),e}return v(r,[{key:"render",value:function(){var e=this.props,t=e.scrollamaId,r=e.children;return d.a.cloneElement(d.a.Children.only(r),{"data-react-scrollama-id":t,ref:this.nodeRef})}}]),r}(u.Component),C=function(e){Object(l.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={data:0,steps:[10,20,30],progress:0},e.onStepEnter=function(t){var r=t.data;e.setState({data:r})},e.onStepExit=function(t){var r=t.direction,n=t.data;"up"===r&&n===e.state.steps[0]&&e.setState({data:0})},e.onStepProgress=function(t){var r=t.progress;e.setState({progress:r})},e}return Object(c.a)(r,[{key:"render",value:function(){var e=this.state,t=e.data,r=e.steps,n=e.progress,a=this.props.classes;return o.a.createElement("div",null,o.a.createElement("div",{className:a.navbar},o.a.createElement("a",{href:"https://github.com/jsonkao/react-scrollama"},"GitHub")),o.a.createElement("p",{className:a.pageTitle},o.a.createElement("a",{href:"https://github.com/jsonkao/react-scrollama"},"React Scrollama")," ","Example"),o.a.createElement("p",{className:a.pageSubtitle},"Scroll \u2193"),o.a.createElement("div",{className:a.graphicContainer},o.a.createElement("div",{className:a.scroller},o.a.createElement(A,{onStepEnter:this.onStepEnter,onStepExit:this.onStepExit,progress:!0,onStepProgress:this.onStepProgress,offset:.4,debug:!0},r.map((function(e){var r=e===t,i=r?"rgba(44,127,184, ".concat(n,")"):"white",s=r?"visible":"hidden";return o.a.createElement(k,{data:e,key:e},o.a.createElement("div",{className:a.step,style:{background:i}},o.a.createElement("p",null,"step value: ",e),o.a.createElement("p",{style:{visibility:s}},Math.round(1e3*n)/10+"%")))})))),o.a.createElement("div",{className:a.graphic},o.a.createElement("p",null,t))))}}]),r}(n.PureComponent),N=Object(f.a)({navbar:{position:"fixed",display:"flex",top:0,right:0,zIndex:1,"& a":{display:"block",fontSize:"20px",padding:"20px"}},pageTitle:{textAlign:"center",fontSize:30,margin:"110px 0 10px"},pageSubtitle:{textAlign:"center",fontSize:"24px",color:"#888"},graphicContainer:{padding:"40vh 2vw 70vh",display:"flex",justifyContent:"space-between"},graphic:{flexBasis:"60%",position:"sticky",width:"100%",height:"60vh",top:"20vh",backgroundColor:"#aaa",display:"flex",alignItems:"center",justifyContent:"center","& p":{fontSize:"5rem",fontWeight:700,textAlign:"center",color:"#fff"}},scroller:{flexBasis:"35%"},step:{margin:"0 auto 3rem auto",padding:"180px 0",border:"1px solid #333","& p":{textAlign:"center",padding:"1rem",fontSize:"1.8rem",margin:0},"&:last-child":{marginBottom:0}}})(C);i.a.render(o.a.createElement(N,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.cc30bd99.chunk.js.map