(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{19:function(e,t,n){e.exports={App:"App_App__O3aib",AppLight:"App_AppLight__g7CnA App_App__O3aib",AppDark:"App_AppDark__1jWZD App_App__O3aib"}},26:function(e,t,n){e.exports=n(47)},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),l=n.n(c),o=n(4),u=n(6),i=n(20),m=n(23),s=n.n(m),h=n(24),p=n(8),d={ADD_CONTACT:"ADD_CONTACT",DELETE_CONTACT:"DELETE_CONTACT",FILTER_CONTACTS:"FILTER_CONTACTS",SWITCH_THEME:"SWITCH_THEME"},b={list:[],filter:""};var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.ADD_CONTACT:return Object(p.a)(Object(p.a)({},e),{},{list:[].concat(Object(h.a)(e.list),[t.payload.contact])});case d.DELETE_CONTACT:return Object(p.a)(Object(p.a)({},e),{},{list:e.list.filter((function(e){return e.id!==t.payload.id}))});case d.FILTER_CONTACTS:return Object(p.a)(Object(p.a)({},e),{},{filter:t.payload.filter});default:return e}},E={currentTheme:"light"};var T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.SWITCH_THEME:return"light"===e.currentTheme?{currentTheme:"dark"}:{currentTheme:"light"};default:return e}},C={key:"root",storage:s.a},O=Object(u.b)({contacts:f,theme:T}),_=Object(i.a)(C,O),v=Object(u.c)(_,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());Object(i.b)(v);var g=function(e){var t=e.name,n=e.children;return r.a.createElement("section",null,t&&r.a.createElement("h2",null,t),n)},A=n(11),y=n(12),k=n(13),N=n(16),j=n(15),D=n(14),S=n.n(D),L=function(e){var t=e.value,n=e.label,a=e.type,c=e.name,l=e.placeholder,o=e.onChange,u=S.a.generate();return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:u},n),r.a.createElement("input",{id:u,value:t,type:a,name:c,placeholder:l,onChange:o}))};L.defaultProps={type:"text"};var w=L,I=function(e){var t=e.name,n=e.type,a=e.onClick,c=e.clsn;return r.a.createElement("button",{className:c,type:n,onClick:a},t)};I.defaultProps={type:"button"};var F=I,H=function(e){return{type:d.ADD_CONTACT,payload:{contact:e}}},R=function(e){return{type:d.DELETE_CONTACT,payload:{id:e}}},M=function(e){return{type:d.FILTER_CONTACTS,payload:{filter:e.target.value}}},W={name:"",number:""},x=function(e){Object(N.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(y.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleInput=function(t){e.setState(Object(A.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var n={id:S.a.generate(),name:e.state.name,number:e.state.number};e.state.name.trim()&&e.props.addContact(n),e.setState(W)},e}return Object(k.a)(n,[{key:"render",value:function(){return r.a.createElement("form",null,r.a.createElement(w,{value:this.state.name,label:"Name",name:"name",onChange:this.handleInput}),r.a.createElement(w,{value:this.state.number,label:"Number",name:"number",onChange:this.handleInput}),r.a.createElement(F,{name:"Add contact",type:"submit",onClick:this.handleSubmit}))}}]),n}(a.Component),J=Object(o.b)(null,(function(e){return{addContact:function(t){return e(H(t))}}}))(x),P=Object(o.b)(null,(function(e){return{setFilter:function(t){return e(M(t))}}}))((function(e){var t=e.setFilter;return r.a.createElement(w,{label:"Find contacts by name",onChange:t,name:"filter"})})),X=Object(o.b)((function(e,t){var n=t.id;return e.contacts.list.find((function(e){return e.id===n}))}),(function(e,t){var n=t.id;return{deleteContact:function(){return e(R(n))}}}))((function(e){var t=e.name,n=e.number,a=e.deleteContact;return r.a.createElement("li",null,r.a.createElement("span",{className:"contactName"},t),r.a.createElement("span",{className:"contactNumber"},n),r.a.createElement(F,{name:"Delete",clsn:"btnDelete",onClick:a}))})),U=function(e){var t=e.contacts;return r.a.createElement("ul",{className:"contactsList"},t.map((function(e){return r.a.createElement(X,{key:e.id,id:e.id})})))},B=n(62),V=function(){return{type:d.SWITCH_THEME}},Z=function(e){Object(N.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(y.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={checked:!0},e.handleChange=function(){e.setState((function(e){return e.checked?{checked:!1}:{checked:!0}}))},e}return Object(k.a)(n,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("persist:root"));null!==e&&("light"===JSON.parse(e.theme).currentTheme?this.setState({checked:!0}):this.setState({checked:!1}))}},{key:"componentDidUpdate",value:function(e,t){t.checked!==this.state.checked&&this.props.toggleTheme()}},{key:"render",value:function(){return r.a.createElement(B.a,{className:"switch",checked:this.state.checked,onChange:this.handleChange,color:"primary",name:"checkedB",inputProps:{"aria-label":"primary checkbox"}})}}]),n}(a.Component),q=Object(o.b)((function(e,t){return{theme:e.theme.currentTheme}}),(function(e){return{toggleTheme:function(){return e(V())}}}))(Z),z=n(19),G=n.n(z),K=Object(o.b)((function(e){var t=e.contacts,n=e.theme;return{contacts:t.list,filter:t.filter,currentTheme:n.currentTheme}}))((function(e){var t,n,a=e.contacts,c=e.filter,l=e.currentTheme;return r.a.createElement("div",{className:"light"===l?G.a.AppLight:G.a.AppDark},r.a.createElement(q,null),r.a.createElement("h1",null,"Phonebook"),r.a.createElement(g,null,r.a.createElement(J,null)),r.a.createElement(g,{name:"Contacts"},a.length>1&&r.a.createElement(P,null),r.a.createElement(U,{contacts:""!==c?(t=a,n=c,t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))):a})))}));n(46);l.a.render(r.a.createElement(o.a,{store:v},r.a.createElement(K,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.ef5c73d2.chunk.js.map