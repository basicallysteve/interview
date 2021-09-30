(this.webpackJsonpinterview=this.webpackJsonpinterview||[]).push([[0],{64:function(e,t,n){},65:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),i=n(21),r=n.n(i),a=(n(64),n(65),n(102)),j=n(101),o=n(33),l=n(8),d=n(9),b=n(26),h=n.n(b),u=n(27),O=n.n(u),x=n(96),m=n(97),p=n(54),f=n(100),v=n(98),g=n(1);var w=n(7),y=n(2),C=n(103),L=n(99);var N=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],i=Object(s.useState)(""),r=Object(d.a)(i,2),a=r[0],j=r[1];Object(s.useEffect)((function(){0===n.length&&h.a.get("https://jsonplaceholder.typicode.com/users").then((function(e){var t=e.data;c(t)}))}),[n]);var o=O.a.memoize((function(e,t){return""!==e?t.filter((function(t){return t.name.split(" ")[0].toLowerCase().startsWith(e.toLowerCase())||t.name.split(" ")[1].toLowerCase().startsWith(e.toLowerCase())})):t}));return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(x.a,{size:"sm",children:[Object(g.jsx)(m.a,{children:Object(g.jsx)(p.a,{children:Object(g.jsx)("h1",{children:"Question 1"})})}),Object(g.jsx)(m.a,{children:Object(g.jsxs)(p.a,{children:[Object(g.jsx)("p",{children:"We've received a list of users from our fictionary endpoint. We need to be able to view this information in a table with the first name, last name, username and then a link to their website. "}),Object(g.jsx)("p",{children:Object(g.jsx)("i",{children:"It's not required, but if you can filter the list of users by their first or last name, that is preferred"})})]})}),Object(g.jsx)(m.a,{className:"mb-1",children:Object(g.jsx)(f.a.Control,{placeholder:"Search by Name",plaintext:!0,value:a,onChange:function(e){j(e.target.value)}})}),Object(g.jsx)(m.a,{children:Object(g.jsxs)(v.a,{striped:!0,bordered:!0,hover:!0,children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"First Name"}),Object(g.jsx)("th",{children:"Last Name"}),Object(g.jsx)("th",{children:"Username"}),Object(g.jsx)("th",{children:"Website"})]})}),Object(g.jsx)("tbody",{children:o(a,n).map((function(e){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:e.name.split(" ")[0]}),Object(g.jsx)("td",{children:e.name.split(" ")[1]}),Object(g.jsx)("td",{children:e.username}),Object(g.jsx)("td",{children:e.website})]},e.id)}))})]})})]})})},k=function(){var e=Object(s.useState)({title:"",body:""}),t=Object(d.a)(e,2),n=t[0],c=t[1],i=Object(s.useState)(null),r=Object(d.a)(i,2),a=r[0],j=r[1],o=O.a.memoize((function(e,t){return""!==e&&""!==t}));function l(e,t){c((function(n){return Object(y.a)(Object(y.a)({},n),{},Object(w.a)({},t,e.target.value))}))}return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(C.a,{show:null!==a,variant:a<300?"success":"danger",onClose:function(){return j(null)},dismissible:!0,children:a<300&&a?"Post created!":"Hmm, that message didn't post."}),Object(g.jsxs)(x.a,{size:"sm",children:[Object(g.jsx)(m.a,{children:Object(g.jsx)(p.a,{children:Object(g.jsx)("h1",{children:"Question 2"})})}),Object(g.jsx)(m.a,{children:Object(g.jsxs)(p.a,{children:[Object(g.jsxs)("p",{children:["One of the requirements of our application is that users should be able to create posts. A post is made up of a title and a body. Please use the ",Object(g.jsx)("a",{href:"https://jsonplaceholder.typicode.com/posts",target:"_blank",rel:"noreferrer",children:"provided API"})," to post a message. "]}),Object(g.jsxs)("ol",{className:"w-50",style:{margin:"auto"},children:[Object(g.jsx)("li",{children:"If given an error status, what message would you show the user and how?"}),Object(g.jsx)("li",{children:"How can we prevent invalid requests from being fired?"})]})]})}),Object(g.jsx)(m.a,{children:Object(g.jsx)(p.a,{children:Object(g.jsxs)(f.a,{children:[Object(g.jsx)(f.a.Label,{className:"mt-3 mb-3",children:"Title"}),Object(g.jsx)(f.a.Control,{type:"text",value:n.title,onChange:function(e){return l(e,"title")}}),Object(g.jsx)(f.a.Label,{className:"mb-3",children:"Body"}),Object(g.jsx)(f.a.Control,{as:"textarea",value:n.body,onChange:function(e){return l(e,"body")}}),Object(g.jsx)(L.a,{className:"mt-3",variant:"primary",type:"submit",onClick:function(e){e.preventDefault(),o(n.title,n.body)&&h.a.post("https://jsonplaceholder.typicode.com/posts",{post:n,userId:1}).then((function(e){j(e.status)})).finally((function(){c({title:"",body:""}),setTimeout((function(){return j(null)}),2500)}))},children:"Post"})]})})})]})]})},q=function(){return Object(g.jsx)("div",{children:"Question 3"})};n(89);var I=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)(o.a,{children:[Object(g.jsx)(a.a,{expand:"lg",bg:"dark",variant:"dark",children:Object(g.jsxs)(j.a,{className:"me-auto",children:[Object(g.jsx)(j.a.Link,{as:o.b,to:"/question-1",children:"Interview Question 1"}),Object(g.jsx)(j.a.Link,{as:o.b,to:"/question-2",children:"Interview Question 2"})]})}),Object(g.jsxs)(l.c,{children:[Object(g.jsx)(l.a,{path:"/question-1",children:Object(g.jsx)(N,{})}),Object(g.jsx)(l.a,{path:"/question-2",children:Object(g.jsx)(k,{})}),Object(g.jsx)(l.a,{path:"/question-3",children:Object(g.jsx)(q,{})})]})]})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,104)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),i(e),r(e)}))};r.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(I,{})}),document.getElementById("root")),F()}},[[94,1,2]]]);
//# sourceMappingURL=main.530e0d0b.chunk.js.map