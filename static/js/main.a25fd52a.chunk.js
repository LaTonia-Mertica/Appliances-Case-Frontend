(this["webpackJsonpappliance-frontend"]=this["webpackJsonpappliance-frontend"]||[]).push([[0],{19:function(e,t,c){},26:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(20),r=c.n(a),l=(c(26),c(11)),i=c(2),o=(c(19),c(16)),j=c(7),d=c.n(j),b=c(9),h=c(10),m=c(0),p=function(){return Object(m.jsx)("nav",{className:"navbar navbar-dark bg-primary",children:Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsx)("span",{className:"navbar-brand mb-0 h1",children:"APPLIANCES \u042f US"})})})},x=c.p+"static/media/blender.0a20e35f.png",O=function(){var e=Object(i.f)();return Object(m.jsxs)("div",{style:{height:"calc(125vh - 1px)",backgroundColor:"#c8c4bd",padding:15},children:[Object(m.jsxs)("ul",{className:"list-group",children:[Object(m.jsx)("li",{className:"list-group-item customers",style:{backgroundColor:"#c8c4bd"},children:"CUSTOMERS"}),Object(m.jsx)("li",{className:"list-group-item",children:"APPLIANCES"}),Object(m.jsx)("li",{className:"list-group-item",children:"SERVICE ORDERS"}),Object(m.jsx)("li",{className:"list-group-item",children:"SERVICE ORDERS ASSIGNMENTS"}),Object(m.jsx)("li",{className:"list-group-item",children:"MANAGE USERS"}),Object(m.jsx)("li",{className:"list-group-item",children:"REPORTS"}),Object(m.jsx)("li",{className:"list-group-item",children:"PARTS"}),Object(m.jsx)("li",{className:"list-group-item",onClick:function(){delete localStorage.password,delete localStorage.email,e.push("./")},children:"LOG OUT"})]}),Object(m.jsx)("a",{href:"https://www.barnesandnoble.com/w/the-clock-jobbers-handybook-microform-paul-n-hasluck/1120048499?ean=9781528702843",target:"_blank",rel:"noreferrer",children:Object(m.jsxs)("p",{style:{paddingTop:50,color:"#000000"},children:[Object(m.jsx)("span",{style:{marginLeft:25,fontStyle:"italic"},children:"Want to DIY? Click to Buy"})," ",Object(m.jsx)("br",{}),Object(m.jsx)("span",{style:{marginLeft:25,fontWeight:"bold"},children:"The Clock Jobber's Handybook"}),Object(m.jsx)("img",{className:"adInSidebar img-responsive",src:x,alt:"Blender",style:{maxWidth:150,width:"calc(100vw - 1000px)",height:"calc(100vh - 500px)",marginTop:25,marginLeft:50}})]})})]})},u=function(){var e=Object(s.useState)(null),t=Object(h.a)(e,2),c=t[0],n=t[1],a=Object(s.useRef)(null),r=Object(s.useState)(""),l=Object(h.a)(r,2),i=l[0],j=l[1],x=Object(s.useState)(null),u=Object(h.a)(x,2),f=u[0],N=u[1],g=Object(s.useState)(1),v=Object(h.a)(g,2),y=v[0],S=v[1],w=Object(s.useState)(""),C=Object(h.a)(w,2),k=C[0],I=C[1];Object(s.useEffect)((function(){Object(b.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://appliances-case.herokuapp.com/customers/".concat(y),{method:"GET",headers:{email:localStorage.email,password:localStorage.password}});case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,N(Math.ceil(c.customers.count/5)),n(c.customers.rows),c.customers.rows;case 9:case"end":return e.stop()}}),e)})))()}),[y]);var T=function(){var e=Object(b.a)(d.a.mark((function e(t){var c,s,r,l,j,b,h,m;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),c={},s=Object(o.a)(t.target);try{for(s.s();!(r=s.n()).done;)(l=r.value).id&&(c[l.id]=l.value)}catch(d){s.e(d)}finally{s.f()}if(c.zipCode=i,!(c.zipCode.length<5)){e.next=9;break}alert("Dude - check your zip code, it's a little light on numbers."),e.next=20;break;case 9:if(!(c.phoneNumber.length<10)){e.next=13;break}alert("Seriously dude, add in on your phone number."),e.next=20;break;case 13:return e.next=15,fetch("https://appliances-case.herokuapp.com/customers",{method:"POST",headers:{"Content-Type":"application/json",email:localStorage.email,password:localStorage.password},body:JSON.stringify(c)});case 15:return j=e.sent,e.next=18,j.json();case 18:if((b=e.sent).error)alert(b.error);else{n(b.customers),a.current.scrollIntoView(),h=Object(o.a)(t.target);try{for(h.s();!(m=h.n()).done;)m.value.value=""}catch(d){h.e(d)}finally{h.f()}}case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=[];if(f)for(var E=function(e){A.push(Object(m.jsx)("li",{className:"page-item ".concat(y===e?"active":""),onClick:function(){S(e)},children:Object(m.jsx)("span",{className:"page-link",children:e})},e))},R=1;R<=f;R++)E(R);var L=function(){var e=Object(b.a)(d.a.mark((function e(t){var c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("https://appliances-case.herokuapp.com/customersSearch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchQuery:k})});case 3:return c=e.sent,e.next=6,c.json();case 6:s=e.sent,n(s.customers);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{children:[Object(m.jsx)(p,{}),Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-3",style:{paddingLeft:0},children:Object(m.jsx)(O,{})}),Object(m.jsxs)("div",{className:"col-9",children:[Object(m.jsx)("div",{style:{textAlign:"center"},children:Object(m.jsx)("h1",{style:{fontSize:27,fontWeight:700,paddingTop:25,paddingBottom:13},children:"CUSTOMERS"})}),Object(m.jsxs)("form",{className:"row",style:{marginTop:10,marginBottom:10},onSubmit:L,children:[Object(m.jsx)("div",{className:"col-10",children:Object(m.jsx)("input",{type:"text",onChange:function(e){I(e.target.value)},value:k,className:"form-control",placeholder:"search by name",id:"nameSearchText"})}),Object(m.jsx)("div",{className:"col-2",children:Object(m.jsx)("button",{className:"btn btn-primary",type:"submit",style:{fontSize:13,fontWeight:700,marginLeft:-20},children:"SEARCH"})})]}),Object(m.jsx)("div",{style:{maxHeight:350,overflow:"scroll"},children:Object(m.jsxs)("table",{className:"table table-hover",style:{border:"1px solid black"},ref:a,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"col",style:{paddingLeft:24,backgroundColor:"#c8c4bd",color:"#0275d8"},children:"First Name"}),Object(m.jsx)("th",{scope:"col",style:{backgroundColor:"#c8c4bd",color:"#0275d8"},children:"Last Name"}),Object(m.jsx)("th",{scope:"col",style:{backgroundColor:"#c8c4bd",color:"#0275d8"},children:"Phone"}),Object(m.jsx)("th",{scope:"col",style:{backgroundColor:"#c8c4bd",color:"#0275d8"},children:"Address"}),Object(m.jsx)("th",{scope:"col",style:{backgroundColor:"#c8c4bd"}})]})}),Object(m.jsx)("tbody",{children:c?c.map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.firstName}),Object(m.jsx)("td",{children:e.lastName}),Object(m.jsx)("td",{children:e.phoneNumber}),Object(m.jsxs)("td",{children:[e.address1,e.address2?", ".concat(e.address2):"",",",e.city,", ",e.state," ",e.zipCode]}),Object(m.jsx)("td",{children:"\ud83d\udd8a\xa0\xa0\xa0\ud83d\uddd1"})]},e.customerID)})):Object(m.jsx)("tr",{children:Object(m.jsx)("td",{children:"Loading ..."})})})]})}),f<2?null:Object(m.jsx)("nav",{"aria-label":"Page navigation",children:Object(m.jsxs)("ul",{className:"pagination",children:[Object(m.jsx)("li",{className:"page-item ".concat(1===y?"disabled":""),children:Object(m.jsx)("span",{className:"page-link",onClick:function(){S(y-1)},children:"Previous"})}),A,Object(m.jsx)("li",{className:"page-item ".concat(y===f?"disabled":""),children:Object(m.jsx)("span",{className:"page-link",onClick:function(){S(y+1)},children:"Next"})})]})}),Object(m.jsx)("div",{style:{textAlign:"center"},children:Object(m.jsx)("h1",{style:{fontSize:27,fontWeight:700,paddingTop:10,paddingBottom:10},children:"add customer below"})}),Object(m.jsxs)("form",{onSubmit:T,children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col",children:Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"firstName",className:"form-label",children:"first name:"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"firstName",required:!0,tabIndex:"1"})]})}),Object(m.jsx)("div",{className:"col",children:Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"address1",className:"form-label",children:"address 1:"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"address1",required:!0,tabIndex:"2"})]})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col",children:Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"lastName",className:"form-label",children:"last name:"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"lastName",required:!0,tabIndex:"3"})]})}),Object(m.jsx)("div",{className:"col",children:Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"address2",className:"form-label",children:"address 2:"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"address2",tabIndex:"4"})]})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-6",children:Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"phoneNumber",className:"form-label",children:"phone number:"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"phoneNumber",required:!0,tabIndex:"5",onBlur:function(e){var t=e.target.value.trim();10===t.length&&(e.target.value="(".concat(t.substring(0,3),") ").concat(t.substring(3,6),"-").concat(t.substring(6)))}})]})}),Object(m.jsx)("div",{className:"col-3",children:Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"city",className:"form-label",children:"city:"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"city",required:!0,tabIndex:"6"})]})}),Object(m.jsx)("div",{className:"col-3",children:Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"state",className:"form-label",children:"state:"}),Object(m.jsxs)("select",{className:"form-select",defaultValue:"NY",id:"state",required:!0,tabIndex:"7",children:[Object(m.jsx)("option",{}),Object(m.jsx)("option",{children:"AL"}),Object(m.jsx)("option",{children:"AK"}),Object(m.jsx)("option",{children:"AZ"}),Object(m.jsx)("option",{children:"AR"}),Object(m.jsx)("option",{children:"CA"}),Object(m.jsx)("option",{children:"CO"}),Object(m.jsx)("option",{children:"CT"}),Object(m.jsx)("option",{children:"DE"}),Object(m.jsx)("option",{children:"FL"}),Object(m.jsx)("option",{children:"GA"}),Object(m.jsx)("option",{children:"HI"}),Object(m.jsx)("option",{children:"ID"}),Object(m.jsx)("option",{children:"IL"}),Object(m.jsx)("option",{children:"IN"}),Object(m.jsx)("option",{children:"IA"}),Object(m.jsx)("option",{children:"KS"}),Object(m.jsx)("option",{children:"KY"}),Object(m.jsx)("option",{children:"LA"}),Object(m.jsx)("option",{children:"ME"}),Object(m.jsx)("option",{children:"MD"}),Object(m.jsx)("option",{children:"MA"}),Object(m.jsx)("option",{children:"MI"}),Object(m.jsx)("option",{children:"MN"}),Object(m.jsx)("option",{children:"MS"}),Object(m.jsx)("option",{children:"MO"}),Object(m.jsx)("option",{children:"MT"}),Object(m.jsx)("option",{children:"NE"}),Object(m.jsx)("option",{children:"NV"}),Object(m.jsx)("option",{children:"NH"}),Object(m.jsx)("option",{children:"NJ"}),Object(m.jsx)("option",{children:"NM"}),Object(m.jsx)("option",{children:"NY"}),Object(m.jsx)("option",{children:"NC"}),Object(m.jsx)("option",{children:"ND"}),Object(m.jsx)("option",{children:"OH"}),Object(m.jsx)("option",{children:"OK"}),Object(m.jsx)("option",{children:"OR"}),Object(m.jsx)("option",{children:"PA"}),Object(m.jsx)("option",{children:"RI"}),Object(m.jsx)("option",{children:"SC"}),Object(m.jsx)("option",{children:"SD"}),Object(m.jsx)("option",{children:"TN"}),Object(m.jsx)("option",{children:"TX"}),Object(m.jsx)("option",{children:"UT"}),Object(m.jsx)("option",{children:"VT"}),Object(m.jsx)("option",{children:"VA"}),Object(m.jsx)("option",{children:"WA"}),Object(m.jsx)("option",{children:"WV"}),Object(m.jsx)("option",{children:"WI"}),Object(m.jsx)("option",{children:"WY"})]})]})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-9"}),Object(m.jsx)("div",{className:"col",children:Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"zipCode",className:"form-label",children:"zip code:"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"zipCode",required:!0,tabIndex:"8",value:i,onChange:function(e){j(e.target.value)}})]})})]}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col text-center",children:Object(m.jsx)("button",{type:"submit",className:"btn btn-primary",style:{fontWeight:700,marginBottom:25,padding:9,letterSpacing:1},children:"ADD CUSTOMER"})})})]})]})]})})]})},f=function(){var e=Object(i.f)(),t=function(){var t=Object(b.a)(d.a.mark((function t(c){var s,n,a,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),s=c.target.email.value,n=c.target.password.value,t.next=5,fetch("https://appliances-case.herokuapp.com/login",{method:"POST",headers:{"Content-Type":"application/json",email:s,password:n}});case 5:return a=t.sent,t.next=8,a.json();case 8:r=t.sent,console.log(r),r.error?alert(r.error):r.success&&(localStorage.email=s,localStorage.password=n,e.push("./customers"));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(m.jsxs)("div",{children:[Object(m.jsx)(p,{}),Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-4"}),Object(m.jsx)("div",{className:"col-4 card",style:{marginTop:125,borderRadius:37,padding:22,backgroundColor:"#c8c4bd"},children:Object(m.jsxs)("form",{className:"card-body",onSubmit:t,children:[Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"exampleInputEmail",className:"form-label",style:{color:"#0275d8",fontWeight:900},children:"email address"}),Object(m.jsx)("input",{type:"email",className:"form-control",id:"email"})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",style:{color:"#0275d8",fontWeight:900},children:"password"}),Object(m.jsx)("input",{type:"password",className:"form-control",id:"password"})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary",style:{width:"100%"},children:"LOG IN"})]})})]})})]})};var N=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(l.a,{children:Object(m.jsxs)(i.c,{children:[Object(m.jsx)(i.a,{path:"/customers",children:Object(m.jsx)(u,{})}),Object(m.jsx)(i.a,{path:"/",children:Object(m.jsx)(f,{})})]})})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root")),g()}},[[37,1,2]]]);
//# sourceMappingURL=main.a25fd52a.chunk.js.map