(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{4802:function(e,a,s){Promise.resolve().then(s.bind(s,9085))},9085:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return d}});var n=s(7437),r=s(2265),l=s(230),t=s(802);function o(){let e=(0,l._)(["\n  color: #383131;\n"]);return o=function(){return e},e}let c=t.zo.span(o()),i=e=>{let{name:a,value:s,onChange:r,errorMessage:l,placeholder:t}=e;return(0,n.jsxs)("div",{children:[(0,n.jsx)("input",{type:"text",className:"form-control name px-4",placeholder:t,name:a,value:s,onChange:r}),l&&(0,n.jsx)(c,{children:l})]})},m={name:{value:"",error:""},email:{value:"",error:""},phone:{value:"",error:""},subject:{value:"",error:""},message:{value:"",error:""}};var d=()=>{let[e,a]=(0,r.useState)(m),s=e=>{let{name:s,value:n}=e.target;a(e=>({...e,[s]:{...e[s],value:n,error:""}}))},l=async s=>{s.preventDefault();let n=!0,r={...e};for(let e in r)if(r[e].value){let a=!0;if("email"===e){let e=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;e.test(r.email.value)||(r.email.error="Please enter a valid email address",n=!1,a=!1)}if("phone"===e){let e=/^\d{10}$/;e.test(r.phone.value)||(r.phone.error="Please enter a valid phone number",n=!1,a=!1)}"message"===e&&r.message.value.length>100&&(r.message.error="Message should not exceed 100 characters",n=!1,a=!1),a&&(r[e].error="")}else r[e].error="Please enter "+e,n=!1;if(!n){a(r);return}let l="\n              Name: ".concat(e.name.value,"\n              Email: ").concat(e.email.value,"\n              Subject: ").concat(e.subject.value,"\n              Phone: ").concat(e.phone.value,"\n              Message: ").concat(e.message.value,"\n            "),t="https://api.whatsapp.com/send?phone=7350837127&text=".concat(l);window.open(t,"_blank"),a(m)};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("section",{className:"ftco-section contact-section ftco-degree-bg",children:[(0,n.jsx)("div",{className:"row justify-content-center mb-5",children:(0,n.jsx)("div",{className:"col-md-7 text-center heading-section ftco-animate",style:{backgroundImage:"url('images/contactus.png')",backgroundSize:"cover",backgroundPosition:"center",height:"16em"},children:(0,n.jsx)("h2",{className:"mb-4",children:"Contact Us"})})}),(0,n.jsx)("div",{id:"contact-us",style:{marginBottom:"20px",padding:"6em 0px"},children:(0,n.jsx)("section",{className:"ftco-domain",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row d-flex align-items-center",children:[(0,n.jsxs)("div",{className:"col-lg-5 heading-white mb-4 mb-sm-4 mb-lg-0 ftco-animate",children:[(0,n.jsx)("h2",{children:"Let's Talk - Contact Us"}),(0,n.jsx)("p",{children:"Please provide the required details, and we will get back to you."})]}),(0,n.jsx)("div",{className:"col-lg-7 p-5 ftco-wrap ftco-animate",children:(0,n.jsxs)("form",{action:"#",className:"domain-form mb-3",children:[(0,n.jsxs)("div",{className:"d-flex",children:[(0,n.jsx)("div",{className:"form-group domain-name contactus_field",children:(0,n.jsx)(i,{name:"name",value:e.name.value,onChange:s,placeholder:"Name",errorMessage:e.name.error})}),(0,n.jsx)("div",{className:"form-group domain-name contactus_field",children:(0,n.jsx)(i,{name:"email",onChange:s,placeholder:"Email",errorMessage:e.email.error,value:e.email.value})})]}),(0,n.jsxs)("div",{className:"d-flex",children:[(0,n.jsx)("div",{className:"form-group domain-name contactus_field",children:(0,n.jsx)(i,{name:"phone",onChange:s,placeholder:"Phone",errorMessage:e.phone.error,value:e.phone.value})}),(0,n.jsx)("div",{className:"form-group domain-name contactus_field",children:(0,n.jsx)(i,{name:"subject",onChange:s,placeholder:"Subject",errorMessage:e.subject.error,value:e.subject.value})})]}),(0,n.jsxs)("div",{className:"form-group domain-name contactus_field",style:{width:"97%"},children:[(0,n.jsx)("textarea",{rows:8,cols:120,className:"form-control ",placeholder:"Message",name:"message",value:e.message.value,onChange:s}),e.message.error&&(0,n.jsx)("span",{style:{color:"#383131"},children:e.message.error})]}),(0,n.jsx)("div",{className:"form-group contactus_submit",children:(0,n.jsx)("input",{type:"submit",className:"search-domain btn btn-primary text-center",value:"Submit",onClick:l})})]})})]})})})})]})})}}},function(e){e.O(0,[576,971,596,744],function(){return e(e.s=4802)}),_N_E=e.O()}]);