(this.webpackJsonpdesafio=this.webpackJsonpdesafio||[]).push([[0],[,,,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a.p+"static/media/arrow.cdfdf297.svg"},function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),s=a.n(o),c=(a(16),a(1)),l=a(2),i=a(4),u=a(3),m=a(6),d=a(5),h=(a(7),"http://denrakaev.com/wp-content/uploads/2015/03/no-image-800x511.png"),p=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={imageURL:h},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){""!==this.props.keywords&&this.getCarImage(this.props.keywords)}},{key:"componentDidUpdate",value:function(e){this.props.keywords!==e.keywords&&""!==this.props.keywords&&this.getCarImage(this.props.keywords)}},{key:"getCarImage",value:function(e){var t=this;if(""===e||void 0===e)return!1;fetch("//www.carimagery.com/api.asmx/GetImageUrl?searchTerm="+e).then((function(e){return e.text()})).then((function(e){return(new window.DOMParser).parseFromString(e,"text/xml")})).then((function(e){var a=e.getElementsByTagName("string")[0]||!1,n=!!a&&a.childNodes[0];n&&t.setState({imageURL:n.nodeValue})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Badge"},r.a.createElement("figure",{className:"Badge__box"},r.a.createElement("img",{className:"Badge__image",alt:"",src:this.state.imageURL})))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={referencia:"",fipe_codigo:"",name:"",combustivel:"",marca:"",ano_modelo:"",preco:"",key:"",time:"",veiculo:"",id:""},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.showSelectedCar;e&&this.setState({fipe_codigo:e.fipe_codigo,name:e.name,combustivel:e.combustivel,marca:e.marca,ano_modelo:e.ano_modelo,preco:e.preco,key:e.key,time:e.time,id:e.id})}},{key:"componentDidUpdate",value:function(e){if(this.props.showSelectedCar.key!==e.showSelectedCar.key||!e.showSelectedCar){var t=this.props.showSelectedCar;this.setState({fipe_codigo:t.fipe_codigo,name:t.name,combustivel:t.combustivel,marca:t.marca,ano_modelo:t.ano_modelo,preco:t.preco,key:t.key,time:t.time,id:t.id})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"Results"},r.a.createElement("h2",null,"Encontramos o seu carro!"),r.a.createElement("table",{className:"Results__table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"C\xf3digo FIPE:"),r.a.createElement("td",null,this.state.fipe_codigo)),r.a.createElement("tr",null,r.a.createElement("th",null,"Nome:"),r.a.createElement("td",null,this.state.name)),r.a.createElement("tr",null,r.a.createElement("th",null,"Combust\xedvel:"),r.a.createElement("td",null,this.state.combustivel)),r.a.createElement("tr",null,r.a.createElement("th",null,"Marca:"),r.a.createElement("td",null,this.state.marca)),r.a.createElement("tr",null,r.a.createElement("th",null,"Ano Modelo:"),r.a.createElement("td",null,this.state.ano_modelo)),r.a.createElement("tr",null,r.a.createElement("th",null,"Pre\xe7o:"),r.a.createElement("td",null,this.state.preco)))))}}]),t}(n.Component),v=a(10),b=a.n(v),y=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"onChange",value:function(e){this.props.onChangeEvent(e)}},{key:"render",value:function(){var e=this.props.options.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)}));return r.a.createElement("div",{className:"SelectBox"},r.a.createElement("label",null,this.props.label,":"),r.a.createElement("div",{className:"select-box"},r.a.createElement("select",{onChange:this.onChange},r.a.createElement("option",{value:""},"Selecione"),e),r.a.createElement("img",{src:b.a,className:"select-arrow",alt:"arrow"})))}}]),t}(n.Component),E="http://fipeapi.appspot.com/api/1/carros/",g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={brands:[],models:[],years:[],brand:"",model:"",year:"",selectedCar:!1},a.onSelectBrand=a.onSelectBrand.bind(Object(m.a)(a)),a.onSelectModel=a.onSelectModel.bind(Object(m.a)(a)),a.onSelectYear=a.onSelectYear.bind(Object(m.a)(a)),a.updateimage=a.updateimage.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=[];fetch("".concat(E,"/marcas.json")).then((function(e){return e.json()})).then((function(a){t=a.map((function(e){return e})),e.setState({brands:t})}))}},{key:"updateimage",value:function(){var e=[];if(""!==this.state.brand){var t=this.state.brand,a=this.state.brands.find((function(e){return parseInt(e.id)===parseInt(t)}));e.push(a.fipe_name)}if(""!==this.state.model){var n=this.state.model,r=this.state.models.find((function(e){return parseInt(e.id)===parseInt(n)}));e.push(r.fipe_name.split(" ")[0])}if(""!==this.state.year){var o=this.state.year,s=this.state.years.find((function(e){return parseInt(e.id)===parseInt(o)}));e.push(s.name.split(" ")[0])}this.props.onUpdateSelection(e)}},{key:"onSelectBrand",value:function(e){var t=this,a=e.target.value;if(""===a)return this.setState({selectedCar:!1,brand:"",models:[],model:"",years:[],year:""}),!1;var n=[];this.setState({brand:a,models:[],model:"",years:[],year:"",selectedCar:!1}),fetch("".concat(E,"/carros/veiculos/").concat(a,".json")).then((function(e){return e.json()})).then((function(e){n=e.map((function(e){return e})),t.setState({models:n}),t.updateimage()}))}},{key:"onSelectModel",value:function(e){var t=this,a=e.target.value;if(""===a)return this.setState({model:"",year:"",years:[],selectedCar:!1}),!1;var n=this.state.brand,r=[];this.setState({model:a,years:[],year:"",selectedCar:!1}),fetch("".concat(E,"/carros/veiculo/").concat(n,"/").concat(a,".json")).then((function(e){return e.json()})).then((function(e){r=e.map((function(e){return e})),t.setState({years:r}),t.updateimage()}))}},{key:"onSelectYear",value:function(e){var t=this,a=e.target.value;if(""===a)return this.setState({year:"",selectedCar:!1}),!1;var n=this.state.brand,r=this.state.model;this.setState({year:a}),fetch("".concat(E,"/carros/veiculo/").concat(n,"/").concat(r,"/").concat(a,".json")).then((function(e){return e.json()})).then((function(e){if(!e)return!1;t.setState({selectedCar:e}),t.updateimage()}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"CalculatorForm"},r.a.createElement("form",null,r.a.createElement(y,{label:"Marca",options:this.state.brands,onChangeEvent:this.onSelectBrand}),this.state.models.length>0?r.a.createElement(y,{label:"Modelo",options:this.state.models,onChangeEvent:this.onSelectModel}):null,this.state.years.length>0?r.a.createElement(y,{label:"Ano",options:this.state.years,onChangeEvent:this.onSelectYear}):null),this.state.selectedCar?r.a.createElement(f,{showSelectedCar:this.state.selectedCar}):null)}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={keywords:""},a.updateSelection=a.updateSelection.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"updateSelection",value:function(e){var t=e.join("+").replace(/ /g,"+");this.setState({keywords:t})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Card"},r.a.createElement("header",{className:"Card-header"},r.a.createElement(p,{keywords:this.state.keywords})),r.a.createElement(g,{onUpdateSelection:this.updateSelection}))}}]),t}(n.Component);var k=function(){return r.a.createElement("div",{className:"Calculator"},r.a.createElement("h1",null,"Quanto vale meu carro?"),r.a.createElement("p",null,"Descubra aqui por quanto seu carro pode ser vendido."),r.a.createElement(S,null),r.a.createElement("small",null,"Desenvolvido por Vin\xedcius Rocha"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.8150df6c.chunk.js.map