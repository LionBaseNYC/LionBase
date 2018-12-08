(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return E}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(147),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var s=a(203),m=a.n(s);a.d(t,"PageRenderer",function(){return m.a});var u=a(48);a.d(t,"parsePath",function(){return u.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function E(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},150:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=(a(151),a(0)),c=a.n(i),o=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.header,a=e.subheader,n=e.children;return c.a.createElement("div",null,c.a.createElement("section",{id:"one",className:"main style1"},c.a.createElement("div",{className:"page-section-wrapper"},c.a.createElement("div",{className:"page-section"},c.a.createElement("header",{className:"major"},c.a.createElement("h2",null,t)),c.a.createElement("p",null,a))),n))},t}(i.Component);o.defaultProps={header:"Header",subheader:"Subheader"},t.a=o},151:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),c=a.n(i),o=(a(321),a(146)),l=(a(4),a(152)),s=(a(323),a(324)),m=a(148),u=a(149),d=function(e){function t(t){return e.call(this,t)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{id:"burger-wrap"},c.a.createElement("div",{className:"nav-item"},c.a.createElement(o.Link,{to:"/"},"LionBase")),c.a.createElement("div",{className:"grow"}),c.a.createElement(s.bubble,{right:!0,customBurgerIcon:c.a.createElement(m.a,{icon:u.a}),customCrossIcon:c.a.createElement(m.a,{icon:u.p}),disableCloseOnEsc:!0,noOverlay:!0},c.a.createElement(o.Link,{id:"home",className:"menu-item",to:"/"},"Home"),c.a.createElement("div",{className:"divider"}),c.a.createElement(o.Link,{id:"about",className:"menu-item",to:"/about"},"About"),c.a.createElement("div",{className:"divider"}),c.a.createElement(o.Link,{id:"projects",className:"menu-item",to:"/projects"},"Projects"),c.a.createElement("div",{className:"divider"}),c.a.createElement(o.Link,{id:"contact",className:"menu-item",to:"/contact"},"Contact Us"),c.a.createElement("div",{className:"divider"}),c.a.createElement(o.Link,{id:"apply",className:"menu-item",to:"/apply"},"Apply"),c.a.createElement("div",{className:"divider"}))),c.a.createElement("div",{id:"navbar"},c.a.createElement("div",{className:"nav-item title-item"},c.a.createElement(o.Link,{to:"/"},"LionBase")),c.a.createElement("div",{className:"grow"}),c.a.createElement("div",{className:"nav-item"},c.a.createElement(o.Link,{to:"/about"},"About")),c.a.createElement("div",{className:"nav-item"},c.a.createElement(o.Link,{to:"/projects"},"Projects")),c.a.createElement("div",{className:"nav-item"},c.a.createElement("a",{target:"_blank",href:"https://medium.com/@lionbase.nyc"},"Blog")),c.a.createElement("div",{className:"nav-item"},c.a.createElement(o.Link,{to:"/contact"},"Contact Us")),c.a.createElement("div",{className:"nav-item"},c.a.createElement(o.Link,{to:"/apply"},"Apply"))))},t}(i.Component),p=Object(l.compose)()(d),E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.subtitle,n=e.icon,r=e.navbar_children;return c.a.createElement("div",{id:"header-container"},c.a.createElement(p,null),c.a.createElement("section",{id:"header"},c.a.createElement("div",{className:"inner"},n,c.a.createElement("h1",{className:"header-title"},t.toUpperCase()),c.a.createElement("p",null,a),r)))},t}(c.a.Component);E.defaultProps={title:"LionBase",subtitle:"Subtitle here",icon:null,navbar_children:null};var f=E,h=a(205),v=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement("section",{id:"footer"},c.a.createElement("div",{className:"footer-sub"},c.a.createElement("ul",{className:"icons"},c.a.createElement("li",null,c.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/lionbase.nyc",className:"footer-link"},c.a.createElement(m.a,{icon:h.a,className:"icon footer-icon"}))),c.a.createElement("li",null,c.a.createElement("a",{target:"_blank",href:"https://github.com/LionBase ",className:"footer-link"},c.a.createElement(m.a,{icon:h.c,className:"icon footer-icon"}))),c.a.createElement("li",null,c.a.createElement("a",{target:"_blank",href:"https://medium.com/@lionbase.nyc",className:"footer-link"},c.a.createElement(m.a,{icon:h.e,className:"icon footer-icon"}))),c.a.createElement("li",null,c.a.createElement("a",{target:"_blank",href:"mailto:lionbase.nyc@gmail.com",className:"footer-link"},c.a.createElement(m.a,{icon:u.g,className:"icon footer-icon"})))),c.a.createElement("ul",{className:"copyright"},c.a.createElement("li",null,"© lionbase.nyc"))))},t}(c.a.Component),b=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={loading:"is-loading"},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},a.render=function(){var e=this.props.children;return c.a.createElement("div",{className:"body "+this.state.loading},c.a.createElement(f,this.props),e,c.a.createElement(v,null))},t}(c.a.Component);t.a=b},203:function(e,t,a){var n;e.exports=(n=a(322))&&n.default||n},321:function(e,t,a){},322:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(66),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},323:function(e,t,a){}}]);
//# sourceMappingURL=1-dfa0214ecabc9716b8d6.js.map