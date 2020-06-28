(this["webpackJsonpreact-season-app"]=this["webpackJsonpreact-season-app"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(7),o=t.n(s),c=t(5),i=t(1),l=t(2),m=t(4),u=t(3),h=function(e){return r.a.createElement("button",{type:e.type,className:"button ".concat(e.class),onClick:function(a){"load-more"===e.function&&e.loadMoreImages()}},e.value)},p=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={searchTerm:""},e.inputChangeHandler=function(a){e.setState({searchTerm:a.target.value})},e.formSubmitHandler=function(a){a.preventDefault(),""!==e.state.searchTerm&&(e.props.getImages(e.state.searchTerm),e.setState({searchTerm:""}))},e}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"form",onSubmit:this.formSubmitHandler},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",placeholder:"Search for images...",className:"search-bar",onChange:this.inputChangeHandler,value:this.state.searchTerm}),this.props.children))}}]),t}(r.a.Component),g=(t(13),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={span:0},n.imageContainerClickHandler=function(){n.props.showModal(n.props.image)},n.imgRef=r.a.createRef(),n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.imgRef.current.addEventListener("load",(function(){var a=Math.floor(e.imgRef.current.clientHeight/5);e.setState({span:a})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"image-container",onClick:this.imageContainerClickHandler,style:{gridRow:" auto / span ".concat(this.state.span," ")}},r.a.createElement("img",{src:this.props.image.urls.small,alt:"",ref:this.imgRef}))}}]),t}(r.a.Component)),d=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"gallery ".concat(this.props.class)},this.props.images.map((function(a){return r.a.createElement(g,{image:a,key:a.id,showModal:e.props.showModal})}))),this.props.children)}}]),t}(r.a.Component),f=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.class},this.props.message)}}]),t}(r.a.Component),y=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return this.props.images.length>0?this.props.searchTerm?r.a.createElement("h1",{className:"search-info text-center capitalize"},'search results for "',r.a.createElement("span",null,this.props.searchTerm),'"'):r.a.createElement("h1",{className:"search-info text-center capitalize"},"new images"):null}}]),t}(r.a.Component),v=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).modalClickHandler=function(a){a.target.classList.contains("modal-image")||e.props.hideModal()},e}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.class,onClick:this.modalClickHandler},r.a.createElement("i",{className:"fas fa-times fa-3x"}),r.a.createElement("img",{src:this.props.imageURL,alt:"",className:"modal-image"}))}}]),t}(r.a.Component),b=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=a.call.apply(a,[this].concat(s))).state={images:[],errorMessage:"",showAlert:!1,showModal:!1,modalClass:"modal",galleryClass:"hide",modalImage:"",searched:!1,page:1,query:null},e.apiInfo={searchURL:"https://api.unsplash.com/search/photos",randomURL:"https://api.unsplash.com/photos",key:"NFPXHjm0O70CKmPIwGa5LyRSTF22RAGhPvzaPIdwyK8",per_page:30,query:""},e.showError=function(){if(!0===e.state.showAlert)return setTimeout((function(){e.setState({showAlert:!1})}),3e3),r.a.createElement(f,{message:e.state.errorMessage,class:"alert show"})},e.loadMoreImages=function(){e.setState({page:++e.state.page}),e.getImages(e.apiInfo.query)},e.getImages=function(a){a?e.apiInfo.query!==a&&(e.setState({images:[]}),e.apiInfo.query=a,e.apiInfo.query=a,!1===e.state.searched&&e.setState({images:[],searched:!0}),fetch("".concat(e.apiInfo.searchURL,"?page=").concat(e.state.page,"&per_page=").concat(e.apiInfo.per_page,"&client_id=").concat(e.apiInfo.key,"&query=").concat(e.apiInfo.query)).then((function(e){return e.json()})).then((function(a){e.handleFetchedData(a.results)}))):fetch("".concat(e.apiInfo.randomURL,"?page=").concat(e.state.page,"&per_page=").concat(e.apiInfo.per_page,"&client_id=").concat(e.apiInfo.key)).then((function(e){return e.json()})).then((function(a){e.handleFetchedData(a)}))},e.handleFetchedData=function(a){0!==a.length?e.setState({images:[].concat(Object(c.a)(e.state.images),Object(c.a)(a)),galleryClass:"show"}):e.setState({errorMessage:"no images were found",showAlert:!0})},e.showModal=function(a){e.setState({modalClass:"modal modal-show",modalImage:a.urls.regular})},e.hideModal=function(){e.setState({modalClass:"modal"})},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getImages()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.showError(),r.a.createElement("div",{className:"header"},r.a.createElement(p,{getImages:this.getImages},r.a.createElement(h,{value:"search",type:"submit"}))),r.a.createElement(y,{searchTerm:this.apiInfo.query,images:this.state.images}),r.a.createElement(d,{images:this.state.images,showModal:this.showModal,class:this.state.galleryClass},r.a.createElement(h,{value:"load more",class:"".concat(this.state.galleryClass," button-gallery"),function:"load-more",loadMoreImages:this.loadMoreImages})),r.a.createElement(v,{class:this.state.modalClass,imageURL:this.state.modalImage,hideModal:this.hideModal}))}}]),t}(r.a.Component);o.a.render(r.a.createElement(b,null),document.querySelector("#root"))},8:function(e,a,t){e.exports=t(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.e86c36bb.chunk.js.map