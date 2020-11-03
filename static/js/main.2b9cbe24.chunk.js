(this["webpackJsonpreact-registration-form"]=this["webpackJsonpreact-registration-form"]||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var r=a(4),n=a(0),c=a.n(n),i=a(15),o=a.n(i),s=(a(72),a(31)),l=a(9),j=(a(73),function(){return Object(r.jsx)("header",{children:Object(r.jsx)("h1",{className:"text-center mb-4 mt-1",children:"Registration form"})})}),b=a(16),u=a(14),m=a(34),d=a(40),h={width:"100%",height:"450px"},O={lat:34.101585,lng:-118.333626},f=function(){var e=c.a.useState(null),t=Object(u.a)(e,2),a=(t[0],t[1]),n=c.a.useCallback((function(e){var t=new window.google.maps.LatLngBounds;e.fitBounds(t),a(e)}),[]),i=c.a.useCallback((function(e){a(null)}),[]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.b,{googleMapsApiKey:"AIzaSyB3RIvpmO6drWbrblA8DViaAYzkuxZbS_o",children:Object(r.jsx)(d.a,{className:"mb-2",mapContainerStyle:h,center:O,zoom:10,onLoad:n,onUnmount:i,children:Object(r.jsx)(d.c,{position:O})})}),Object(r.jsx)("h4",{className:"mt-2 text-center",children:"To participate in the conference, please fill out the form "})]})},x=function(e){var t=e.children;return Object(r.jsx)("div",{className:"container",children:t})},p=a(56),v=a(8),N=function(e){var t=e.children,a=e.formTitle,n=e.onSubmit,c=Object(p.a)(e,["children","formTitle","onSubmit"]);return Object(r.jsxs)(v.a,Object(b.a)(Object(b.a)({onSubmit:n,noValidate:!0,className:"p-3"},c),{},{children:[Object(r.jsx)("fieldset",{children:Object(r.jsx)("legend",{className:"text-center",children:a})}),t]}))},g=a(57),S=a.n(g),y=a(58),I=(a(91),function(e){var t=e.onChangeCountry,a=Object(n.useState)({country:""}),c=Object(u.a)(a,2),i=c[0],o=c[1],s=i.country;return Object(r.jsx)("div",{children:Object(r.jsx)(y.a,{className:"countryPicker",value:s,onChange:function(e){t(e),o((function(t){return Object(b.a)(Object(b.a)({},t),{},{country:e})}))}})})}),L=a(26),C=a(62),E=a(46),_=a(63),w=a(65),D=a(66),T=function(e){var t=e.variant,a=e.text;return Object(r.jsx)(D.a,{className:"mt-3 mb-3",variant:t,children:a})},q="SET_FORM_DATA",F={formData:null,users:[]},R=function(e){return e.form.userInfo},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(b.a)(Object(b.a)({},e),{},{userInfo:Object(b.a)(Object(b.a)({},e.formData),t.formData)});default:return e}},k=(a(93),a(94),L.a().shape({firstName:L.b().matches(/^([^0-9]*)$/,"First name shouldn't contain numbers").required("First name is a required field"),lastName:L.b().matches(/^([^0-9]*)$/,"Last name shouldn't contain numbers").required("Last name is a required field"),reportSubject:L.b().required("Report Subject is a required field"),phoneNumber:L.b().required("Phone number is a required field").matches(/[\xa30-9\+]/,"Phone number should contain only numbers"),email:L.b().email("Email should have correct format").required("Email is a required field")})),P=function(){var e=Object(l.f)(),t=Object(m.b)(),a=Object(m.c)(R);Object(n.useEffect)((function(){}),[]);var c=Object(n.useState)(new Date),i=Object(u.a)(c,2),o=i[0],s=i[1],j=Object(n.useState)(""),d=Object(u.a)(j,2),h=d[0],O=d[1],p=Object(E.useForm)({defaultValues:{firstName:(null===a||void 0===a?void 0:a.firstName)&&a.firstName,lastName:(null===a||void 0===a?void 0:a.lastName)&&a.lastName,reportSubject:(null===a||void 0===a?void 0:a.reportSubject)&&a.reportSubject,phoneNumber:(null===a||void 0===a?void 0:a.phoneNumber)&&a.phoneNumber,email:(null===a||void 0===a?void 0:a.email)&&a.email},mode:"onBlur",resolver:Object(C.yupResolver)(k)}),g=p.register,y=p.handleSubmit,L=p.errors;return Object(r.jsxs)(x,{children:[Object(r.jsx)(f,{}),Object(r.jsxs)(N,{formTitle:"Step 1",onSubmit:y((function(a){var r=Object(b.a)(Object(b.a)({},a),{},{country:h,date:o.toDateString().slice(4,16)});console.log(r),t(function(e){return{type:q,formData:e}}(r)),e.push("./step2")})),children:[Object(r.jsxs)(v.a.Group,{controlId:"firstName",children:[Object(r.jsx)(v.a.Label,{children:"First name *"}),Object(r.jsx)(v.a.Control,{type:"text",name:"firstName",placeholder:"First Name",ref:g,isInvalid:!!L.firstName}),!!L.firstName&&Object(r.jsx)(T,{text:L.firstName.message,variant:"danger"})]}),Object(r.jsxs)(v.a.Group,{controlId:"lastName",children:[Object(r.jsx)(v.a.Label,{children:"Last name *"}),Object(r.jsx)(v.a.Control,{ref:g,type:"text",name:"lastName",placeholder:"Last Name",isInvalid:!!L.lastName}),!!L.lastName&&Object(r.jsx)(T,{text:L.lastName.message,variant:"danger"})]}),Object(r.jsxs)(v.a.Group,{controlId:"birthday",children:[Object(r.jsx)(v.a.Label,{children:"Birthday *"}),Object(r.jsx)(S.a,{className:"w-100",onChange:s,value:o,id:"birthday",name:"birthday",validate:!0})]}),Object(r.jsxs)(v.a.Group,{controlId:"reportSubject",children:[Object(r.jsx)(v.a.Label,{children:"Report Subject *"}),Object(r.jsx)(v.a.Control,{ref:g,type:"text",name:"reportSubject",placeholder:"Report subject",isInvalid:!!L.reportSubject}),!!L.reportSubject&&Object(r.jsx)(T,{text:L.reportSubject.message,variant:"danger"})]}),Object(r.jsxs)(v.a.Group,{controlId:"phoneNumber",children:[Object(r.jsx)(v.a.Label,{children:"Phone number *"}),Object(r.jsx)(v.a.Control,{ref:g,type:"tel",name:"phoneNumber",placeholder:"Phone number",isInvalid:!!L.phoneNumber,onChange:function(e){e.target.value=function(e){var t=Object(w.a)(e);return t?t.formatInternational():e}(e.target.value)}}),!!L.phoneNumber&&Object(r.jsx)(T,{text:L.phoneNumber.message,variant:"danger"})]}),Object(r.jsxs)(v.a.Group,{controlId:"reportSubject",children:[Object(r.jsx)(v.a.Label,{children:"Country *"}),Object(r.jsx)(I,{onChangeCountry:function(e){O(e)}})]}),Object(r.jsxs)(v.a.Group,{controlId:"email",children:[Object(r.jsx)(v.a.Label,{children:"Email *"}),Object(r.jsx)(v.a.Control,{type:"email",name:"email",placeholder:"Email",ref:g,isInvalid:!!L.email}),!!L.email&&Object(r.jsx)(T,{text:L.email.message,variant:"danger"})]}),Object(r.jsx)(_.a,{className:"ml-auto d-block",type:"submit",children:"Next"})]})]})},A=function(){return Object(r.jsx)(x,{children:Object(r.jsx)(N,{formTitle:"Step2",children:Object(r.jsx)(s.b,{to:"/",children:"Go to the first step"})})})},B=function(){return Object(r.jsx)(r.Fragment,{children:"sharePage"})},V=function(){return Object(r.jsx)(r.Fragment,{children:"finalList"})};var X=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j,{}),Object(r.jsx)(s.a,{children:Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{exact:!0,path:"/",component:P}),Object(r.jsx)(l.a,{path:"/step2",component:A}),Object(r.jsx)(l.a,{path:"/sharePage",component:B}),Object(r.jsx)(l.a,{path:"/finalList",component:V})]})})]})},z=a(22),M=Object(z.c)({form:G}),U=a(64),J=Object(z.e)(M,Object(z.d)(Object(z.a)(U.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(m.a,{store:J,children:Object(r.jsx)(X,{})})}),document.getElementById("root"))},72:function(e,t,a){},91:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){}},[[105,1,2]]]);
//# sourceMappingURL=main.2b9cbe24.chunk.js.map