(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),c=a(0),l=a.n(c),o=a(157),i=a(165),s=a.n(i),m=a(152),u=(a(150),a(156)),d=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={},t}return r()(t,e),t.prototype.render=function(){return l.a.createElement(m.a,{title:"Oops! Page Not Found",subtitle:"We are sorry, but the page you requested was not found"},l.a.createElement(s.a,{title:"Oops! Page Not Found"}),l.a.createElement(u.a,{header:"",subheader:l.a.createElement("p",null,"")}))},t}(c.Component);d.propTypes={},t.default=Object(o.compose)()(d)},150:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(4),l=a.n(c),o=a(32),i=a.n(o);a.d(t,"a",function(){return i.a});a(151),r.a.createContext({});l.a.object,l.a.string.isRequired,l.a.func,l.a.func},151:function(e,t,a){var n;e.exports=(n=a(158))&&n.default||n},152:function(e,t,a){"use strict";var n=a(7),r=a.n(n),c=a(0),l=a.n(c),o=(a(166),a(150)),i=(a(4),a(157)),s=(a(167),a(168)),m=a(153),u=a(154),d=function(e){function t(t){return e.call(this,t)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"burger-wrap"},l.a.createElement("div",{className:"nav-item"},l.a.createElement(o.a,{to:"/"},"LionBase")),l.a.createElement("div",{className:"grow"}),l.a.createElement(s.bubble,{right:!0,customBurgerIcon:l.a.createElement(m.a,{icon:u.a}),customCrossIcon:l.a.createElement(m.a,{icon:u.n}),disableCloseOnEsc:!0,noOverlay:!0},l.a.createElement(o.a,{id:"home",className:"menu-item",to:"/"},"Home"),l.a.createElement("div",{className:"divider"}),l.a.createElement(o.a,{id:"about",className:"menu-item",to:"/about"},"About"),l.a.createElement("div",{className:"divider"}),l.a.createElement(o.a,{id:"projects",className:"menu-item",to:"/projects"},"Projects"),l.a.createElement("div",{className:"divider"}),l.a.createElement(o.a,{id:"contact",className:"menu-item",to:"/contact"},"Contact Us"),l.a.createElement("div",{className:"divider"}),l.a.createElement(o.a,{id:"apply",className:"menu-item action",to:"/apply"},"Schedule a Consultation"),l.a.createElement("div",{className:"divider"}))),l.a.createElement("div",{id:"navbar"},l.a.createElement("div",{className:"nav-item title-item"},l.a.createElement(o.a,{to:"/"},"LionBase")),l.a.createElement("div",{className:"grow"}),l.a.createElement("div",{className:"nav-item"},l.a.createElement(o.a,{to:"/about"},"About")),l.a.createElement("div",{className:"nav-item"},l.a.createElement(o.a,{to:"/projects"},"Projects")),l.a.createElement("div",{className:"nav-item"},l.a.createElement("a",{target:"_blank",href:"https://medium.com/@lionbase.nyc"},"Blog")),l.a.createElement("div",{className:"nav-item"},l.a.createElement(o.a,{to:"/contact"},"Contact Us")),l.a.createElement("div",{className:"nav-item action"},l.a.createElement(o.a,{to:"/apply"},"Schedule a Consultation"))))},t}(c.Component),p=Object(i.compose)()(d),E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.subtitle,n=e.icon,r=e.navbar_children;return l.a.createElement(c.Fragment,null,l.a.createElement("div",{id:"header-container"},l.a.createElement(p,null),l.a.createElement("section",{id:"header"},l.a.createElement("div",{className:"inner"},n,l.a.createElement("h1",{className:"header-title"},t),l.a.createElement("p",null,a),r))),l.a.createElement("div",{id:"subtitle-container"}))},t}(l.a.Component);E.defaultProps={title:"LionBase",subtitle:"Subtitle here",icon:null,navbar_children:null};var h=E,f=a(162),v=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement("section",{id:"footer"},l.a.createElement("div",{className:"footer-sub"},l.a.createElement("ul",{className:"icons"},l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/lionbase.nyc",className:"footer-link"},l.a.createElement(m.a,{icon:f.a,className:"icon footer-icon"}))),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",href:"https://github.com/LionBase ",className:"footer-link"},l.a.createElement(m.a,{icon:f.c,className:"icon footer-icon"}))),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",href:"https://medium.com/@lionbase.nyc",className:"footer-link"},l.a.createElement(m.a,{icon:f.e,className:"icon footer-icon"}))),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",href:"mailto:lionbase.nyc@gmail.com",className:"footer-link"},l.a.createElement(m.a,{icon:u.g,className:"icon footer-icon"})))),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"© lionbase.nyc"))))},t}(l.a.Component),b=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={loading:"is-loading"},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},a.render=function(){var e=this.props.children;return l.a.createElement("div",{className:"body "+this.state.loading},l.a.createElement(h,this.props),e,l.a.createElement(v,null))},t}(l.a.Component);t.a=b},156:function(e,t,a){"use strict";var n=a(7),r=a.n(n),c=(a(152),a(0)),l=a.n(c),o=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.header,a=e.subheader,n=e.className,r=e.children;return l.a.createElement("div",null,l.a.createElement("section",{id:"one",className:"main "+n},l.a.createElement("div",{className:"page-section-wrapper"},l.a.createElement("div",{className:"page-section"},l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,t)),a)),r))},t}(c.Component);o.defaultProps={header:"Header",subheader:"Subheader",className:"style1"},t.a=o},158:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),o=a(54),i=a(2),s=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s}}]);
//# sourceMappingURL=component---src-pages-404-js-fee02cf05e2436aa52cd.js.map