(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(7),r=n.n(l),o=(n(13),n(2)),c=n(3),s=n(1),u=n(5),m=n(4),d=(n(14),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).createTasks=a.createTasks.bind(Object(s.a)(a)),a}return Object(c.a)(n,[{key:"delete",value:function(e){this.props.delete(e)}},{key:"createTasks",value:function(e){var t=this;return i.a.createElement("li",{onClick:function(e){return e.target.classList.toggle("crossedOut")},key:e.key},e.text,i.a.createElement("button",{className:"delete",onClick:function(){return t.delete(e.key)}},"\xd7"))}},{key:"render",value:function(){var e=this.props.entries.map(this.createTasks);return i.a.createElement("ul",{id:"source-html",style:{padding:0},className:"theList"},e)}}]),n}(a.Component)),h=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={items:[],title:"To Do: "},a.addItem=a.addItem.bind(Object(s.a)(a)),a.deleteItem=a.deleteItem.bind(Object(s.a)(a)),a.updateTitle=a.updateTitle.bind(Object(s.a)(a)),a.exportHTML=a.exportHTML.bind(Object(s.a)(a)),a}return Object(c.a)(n,[{key:"addItem",value:function(e){if(""!==this._inputElement.value){var t={text:this._inputElement.value,key:Date.now()};this.setState((function(e){return{items:e.items.concat(t)}})),this._inputElement.value=""}console.log(this.state.items),e.preventDefault()}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"updateTitle",value:function(e){""!==this._titleElement.value&&(this.setState({title:this._titleElement.value}),document.querySelector(".title").placeholder=this.state.title,this._titleElement.value="");e.preventDefault()}},{key:"exportHTML",value:function(){var e=this.state.title,t="<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>"+e+document.getElementById("source-html").innerHTML+"</body></html>";t=t.replace(/\xd7/g,"");var n="data:application/vnd.ms-word;charset=utf-8,"+encodeURIComponent(t),a=document.createElement("a");document.body.appendChild(a),a.href=n,a.download=e+".doc",a.click(),document.body.removeChild(a),console.log("exported successfully!")}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("form",{onSubmit:this.updateTitle},i.a.createElement("input",{ref:function(t){return e._titleElement=t},className:"title",type:"text",placeholder:this.state.title})),i.a.createElement("form",{onSubmit:this.addItem},i.a.createElement("input",{style:{padding:10,fontSize:16,borderWidth:2,borderStyle:"solid",width:165},ref:function(t){return e._inputElement=t},placeholder:"enter task"}),i.a.createElement("button",{type:"submit",className:"uiButton"},"add"))),i.a.createElement(d,{entries:this.state.items,delete:this.deleteItem}),i.a.createElement("div",null,i.a.createElement("button",{id:"btn-export",className:"uiButton",onClick:this.exportHTML}," Export to Word")))}}]),n}(a.Component),p=document.querySelector("#container");r.a.render(i.a.createElement(h,null),p)},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.a33d4932.chunk.js.map