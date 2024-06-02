"use strict";(self.webpackChunkgoit_react_hw_08_phonebook_user=self.webpackChunkgoit_react_hw_08_phonebook_user||[]).push([[946],{4946:function(e,n,t){t.r(n),t.d(n,{default:function(){return V}});var a=t(2791),r={sectionBook:"Section_sectionBook__nx7TT",wrapperSection:"Section_wrapperSection__JdvNT"},s=t(184);var c=function(e){var n=e.title,t=e.children;return(0,s.jsx)("section",{className:r.sectionBook,children:(0,s.jsxs)("div",{className:r.wrapperSection,children:[(0,s.jsx)("h2",{className:r.titleBook,children:n}),t]})})},o=t(4942),i=t(1413),l=t(9439),u="ContactForm_form__dhl+T",m="ContactForm_labelName__3dKMP",d="ContactForm_labelPhone__NRIcw",h="ContactForm_formInput__GszVU",_="ContactForm_btnSubmit__+7wnS",f=t(4420),p=t(5162),b=t(7694),x=t.n(b),N=t(3553),v=function(e){return e.contacts.contacts},C=function(e){return e.contacts.isLoading},j=function(e){return e.contacts.error},y=function(e){return e.filters.status},g=(0,N.P1)([v,y],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),k=t(5984);x().Notify.init({width:"280px",position:"center-center",distance:"10px",opacity:1});var w=function(){var e=(0,f.v9)(v),n=(0,f.I0)(),t=(0,a.useState)({name:"",number:""}),r=(0,l.Z)(t,2),c=r[0],b=r[1],N=function(e){var n=e.target,t=n.name,a=n.value;b((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,o.Z)({},t,a))}))},C=function(t){var a=e.find((function(e){return e.name===t.name})),r=e.find((function(e){return e.number===t.number}));a?x().Notify.failure("".concat(t.name," is already in contacts!")):r?x().Notify.failure("Number ".concat(t.number," is already in contacts!")):(n((0,p.el)({name:t.name,number:t.number})),x().Notify.success("".concat(t.name," has been added to contacts!")))},j=function(){var e=c.name,n=c.number;return""!==e.trim()&&""!==n.trim()},y=c.name,g=c.number;return(0,s.jsxs)("form",{className:u,onSubmit:function(e){if(e.preventDefault(),j()){var n={id:(0,k.x0)(),name:c.name,number:c.number};C(n),b({name:"",number:""})}else x().Notify.failure("Please fill in both name and number fields!")},children:[(0,s.jsxs)("label",{className:m,children:[" Name:",(0,s.jsx)("input",{className:h,type:"text",name:"name",value:y,onChange:N,placeholder:"Name",pattern:"^[a-zA-Z]+(([' \\-][a-zA-Z ])?[a-zA-Z]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,s.jsxs)("label",{className:d,children:[" Number:",(0,s.jsx)("input",{className:h,type:"tel",name:"number",value:g,onChange:N,placeholder:"Phone number",pattern:"\\+?\\d{1,4}?[[\\-.\\s]]?\\(?\\d{1,3}?\\)?[[\\-.\\s]]?\\d{1,4}[[\\-.\\s]]?\\d{1,4}[[\\-.\\s]]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,s.jsx)("button",{type:"submit",className:_,disabled:!j(),children:"Add contact"})]})},F={filterInput:"FilterContacts_filterInput__y+xQQ"},L=t(7574);var S=function(){var e=(0,f.v9)(y),n=(0,f.I0)();return(0,s.jsxs)("div",{className:F.containerFilter,children:[(0,s.jsx)("h3",{className:F.titleFilter,children:"Find contacts by name:"}),(0,s.jsx)("input",{className:F.filterInput,type:"text",name:"filter",value:e,placeholder:"Contacts",onChange:function(e){n((0,L.b)(e.target.value))},required:!0})]})},A="ContactList_containerContacts__rS7bN",I="ContactList_itemsContact__ktPfN",P="ContactList_itemContact__S-nbG",z="ContactList_titleContact__2Hr29",Z="ContactList_containerBtnDel__VyK1O",B="ContactList_btnDelete__Eeo9v",q="ContactList_contactName__wLcl6",D="ContactList_wrapperContact__K8Uf8",R=t(5546);var T=function(){var e=(0,f.I0)(),n=(0,f.v9)(v),t=(0,f.v9)(g),a=Array.isArray(n)?t:[];return Array.isArray(n)?(0,s.jsxs)("div",{className:A,children:[(0,s.jsx)("h3",{className:z,children:"Contact List:"}),(0,s.jsx)("ul",{className:I,children:a.map((function(n){return(0,s.jsxs)("li",{className:P,children:[(0,s.jsxs)("div",{className:D,children:[(0,s.jsx)(R.ZP,{name:n.name,size:"25",round:!0,color:"#e7ae56",textSizeRatio:2.3,style:{marginRight:"5px"}}),(0,s.jsx)("span",{className:q,children:"".concat(n.name)})," : ",n.number]}),(0,s.jsx)("div",{className:Z,children:(0,s.jsx)("button",{className:B,onClick:function(){return e((0,p._f)(n.id))},children:"Delete"})})]},n.id)}))})]}):(console.error("Contacts is not an array:",n),null)},K={loading:"Contacts_loading__lzF4V"},V=function(){var e=(0,f.v9)(v),n=(0,f.I0)(),t=(0,f.v9)(C),r=(0,f.v9)(j);return(0,a.useEffect)((function(){n((0,p.yF)()).then((function(e){return console.log("Fetched contacts:",e)}))}),[n]),(0,s.jsxs)(c,{title:"PhoneBook",className:K.sectionHome,children:[(0,s.jsx)(w,{}),(0,s.jsx)(S,{}),t&&!r?(0,s.jsx)("b",{className:K.loading,children:"Request in progress..."}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(T,{}),e.length?(0,s.jsxs)("h4",{children:["Your phonebook has ",e.length," contacts"]}):(0,s.jsx)("h3",{children:"Your phonebook is empty. Add your first contact"})]})]})}}}]);
//# sourceMappingURL=946.15c22567.chunk.js.map