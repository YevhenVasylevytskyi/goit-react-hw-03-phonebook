(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={list:"ContactsList_list__253ug",item:"ContactsList_item__3d_Gs",button:"ContactsList_button__1GdJo"}},12:function(t,e,n){t.exports={label:"Filter_label__3vPXn",input:"Filter_input__36LGn"}},15:function(t,e,n){t.exports={container:"Container_container__1N1vJ"}},16:function(t,e,n){t.exports={title:"Section_title__GLbY9"}},18:function(t,e,n){},3:function(t,e,n){t.exports={form:"FormAddContact_form__2tvHb",label:"FormAddContact_label__31D8K",input:"FormAddContact_input__2CEv6",input_number:"FormAddContact_input_number__1Ka6i",button:"FormAddContact_button__1Rt5B"}},34:function(t,e,n){"use strict";n.r(e);n(18);var a=n(1),r=n.n(a),c=n(14),i=n.n(c),o=n(13),s=n(6),l=n(7),u=n(9),d=n(8),b=n(15),m=n.n(b),h=n(0);var j=function(t){var e=t.children;return Object(h.jsx)("div",{className:m.a.container,children:e})},p=n(2),f=n.n(p),_=n(16),C=n.n(_);function O(t){var e=t.title,n=t.children;return Object(h.jsxs)("section",{children:[Object(h.jsx)("h2",{className:C.a.title,children:e}),n]})}O.protoType={title:f.a.string};var v=O,x=n(17),g=n(4),F=n.n(g),N=n(3),y=n.n(N),S=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).loginInputId=F.a.generate(),t.numberInputId=F.a.generate(),t.contactInputId=F.a.generate(),t.state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(x.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault();var n={id:F.a.generate(),name:t.state.name,number:t.state.number};t.props.onSubmit(n),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("form",{className:y.a.form,onSubmit:this.handleSubmit,children:[Object(h.jsxs)("label",{className:y.a.label,htmlFor:this.loginInputId,children:["Name",Object(h.jsx)("input",{className:y.a.input,type:"text",name:"name",placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,id:this.loginInputId,value:this.state.name,onChange:this.handleChange})]}),Object(h.jsxs)("label",{className:y.a.label,htmlFor:this.numberInputId,children:["Namber",Object(h.jsx)("input",{className:y.a.input_number,type:"tel",name:"number",placeholder:"Namber",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,id:this.numberInputId,value:this.state.number,onChange:this.handleChange})]}),Object(h.jsx)("button",{className:y.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component);S.protoType={onSubmit:f.a.func};var A=S,I=n(10),L=n.n(I),k=function(t){var e=t.contacts,n=t.deleteContact;return Object(h.jsx)("ul",{className:L.a.list,children:e.map((function(t){return Object(h.jsxs)("li",{className:L.a.item,children:[Object(h.jsxs)("span",{children:[t.name,": ",t.number]}),Object(h.jsx)("button",{className:L.a.button,type:"button",id:t.id,onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})},w=n(12),J=n.n(w),T=function(t){var e=t.filter,n=t.onChangeFilter;return Object(h.jsxs)("label",{className:J.a.label,children:["Find contacts by name",Object(h.jsx)("input",{className:J.a.input,type:"text",name:"filter",onChange:n,value:e})]})};T.protoType={filter:f.a.string,onChangeFilter:f.a.func};var z=T,G=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},t.addContact=function(e){t.setState((function(t){return t.contacts.some((function(t){return t.name.includes(e.name)}))?alert("".concat(e.name," is already in contacts!")):{contacts:[].concat(Object(o.a)(t.contacts),[e])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:Object(o.a)(t.contacts.filter((function(t){return t.id!==e})))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value.toLocaleLowerCase()})},t.onFilter=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLocaleLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(j,{children:[Object(h.jsx)(v,{title:"Phonebook",children:Object(h.jsx)(A,{onSubmit:this.addContact})}),Object(h.jsxs)(v,{title:"Contacts",children:[Object(h.jsx)(z,{filter:this.state.filter,onChangeFilter:this.changeFilter}),""===this.state.filter?Object(h.jsx)(k,{contacts:this.state.contacts,deleteContact:this.deleteContact}):Object(h.jsx)(k,{contacts:this.onFilter(),deleteContact:this.deleteContact})]})]})}}]),n}(a.Component),q=G;i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(q,{})}),document.querySelector("#root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.f2bdc667.chunk.js.map