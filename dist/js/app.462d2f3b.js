(function(t){function e(e){for(var a,o,r=e[0],c=e[1],u=e[2],d=0,p=[];d<r.length;d++)o=r[d],i[o]&&p.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0e39":function(t,e,n){"use strict";var a=n("584b"),i=n.n(a);i.a},"0e98":function(t,e,n){},2233:function(t,e,n){},"3ac7":function(t,e,n){},4177:function(t,e,n){"use strict";var a=n("a289"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=n("e508"),s=n("c4ae"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Contract"),t.showLogger?n("modal",{attrs:{"is-saving":t.isSaving},on:{close:function(e){t.showLogger=!1}}},[n("h3",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.logHeader))]),n("div",{attrs:{slot:"content"},slot:"content"},[n("logger")],1)]):t._e()],1)},r=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contract"},[n("div",{staticClass:"ui sidebar inverted vertical menu left visible"},[n("setting-form",{attrs:{disabled:t.isGenerating,"debug-mode":t.debugMode},on:{update:t.handleGenerate,switchDebugMode:t.handlerDebug}},[n("div",{staticClass:"ui red tiny progress"},[n("div",{staticClass:"bar",style:{width:t.progress+"%"}})]),n("button",{staticClass:"ui red button fluid",class:{disabled:t.isLoading,loading:t.isLoading},attrs:{disabled:t.isLoading},on:{click:t.handlerSubmit}},[t._v("\n        Save\n      ")])])],1),n("div",{staticClass:"pusher"},[n("div",{staticClass:"fix"},[n("div",{staticClass:"ui basic segment"},[t.show?n("pages",{attrs:{pages:t.pages,settings:t.settings,"debug-mode":t.debugMode,"image-upload-status":t.imageUploadStatus,progress:t.progress},on:{"update:progress":function(e){t.progress=e},updateDetails:t.handleDetails}}):t._e()],1)])])])},u=[],l=n("cebc"),d=(n("96cf"),n("3b8d")),p=n("f499"),f=n.n(p),m=n("d225"),g=n("b0b4"),h=function(){function t(){Object(m["a"])(this,t)}return Object(g["a"])(t,[{key:"uploadJSON",value:function(t){return fetch("http://localhost:8081/upload/data",{method:"POST",headers:{"Content-Type":"application/json"},body:f()({data:t})}).then(function(t){if(t.ok)return t.json();throw new Error(t)}).catch(function(t){return function(t){throw t}(new Error(t))})}},{key:"uploadImages",value:function(t){return fetch("http://localhost:8081/upload/images",{method:"POST",body:t}).then(function(t){if(t.ok)return t.json();throw new Error(t)}).catch(function(t){return function(t){throw t}(new Error(t))})}}]),t}(),b=new h,v=b,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("RecycleScroller",{staticClass:"scroller",attrs:{items:t.pages,"item-size":1200,"key-field":"id"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.item;return[n("page",{key:a.id,attrs:{order:a.id,sections:a.sections,settings:t.settings,"debug-mode":t.debugMode,"image-upload-status":t.imageUploadStatus},on:{updatePageData:t.handlePageData,updateImage:t.handleImage}})]}}])})],1)},S=[],x=n("e814"),_=n.n(x),w=(n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{ref:"box",staticClass:"paper"},[n("div",{staticClass:"paper-content",style:t.configuredStyles},t._l(t.sections,function(e,a){return n("Switcher",{key:a,attrs:{type:e},on:{updateData:t.getSectionData}})}),1),t.debugMode&&t.sectionsData?t._l(t.sectionsData,function(e){return n("div",{key:e.id,staticClass:"bounded-box",style:t.bbstyles(e.coords,e.type)})}):t._e()],2),t.debugMode?n("div",{staticClass:"metadata"},[t.image?n("img",{staticClass:"preview",attrs:{src:t.image.url,alt:t.image.name}}):t._e(),n("pre",[n("code",[t._v(t._s(t.configuredStyles))])]),t._m(0),n("pre",[n("code",[t._v(t._s(t.sectionsData))])])]):t._e()])}),C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("strong",[t._v("SectionsData:")])])}],F=(n("7f7f"),n("f560")),O=n.n(F),k={data:function(){return{countedBox:{top:0,left:0,right:0,bottom:0,width:0,height:0}}},mounted:function(){var t=this;setTimeout(function(){t.$nextTick(function(){t.matchCoords()})},100)},methods:{getOffset:function(t){var e=t.getBoundingClientRect();return{left:e.left+window.scrollX,top:e.top+window.scrollY,bottom:e.bottom+window.scrollY,right:e.right+window.scrollY,width:e.width,height:e.height}},matchCoords:function(){var t=this.$refs.box;t&&(this.countedBox=this.getOffset(t))}},computed:{box:function(){var t=this.countedBox,e=t.height,n=t.width;return e<16||n<10?null:this.countedBox}},watch:{box:function(t){t&&this.updateBoundedBox(t)}}},D=k,A=(n("6b54"),n("795b")),B=n.n(A),M=n("951f"),E=n.n(M),T=n("b047"),$=n.n(T),j=new a["a"],P=j,z="ADD_LOG",L="FINISH_LOG",N="SHOW_LOGGER",R=window.URL||window.webkitURL,I={data:function(){return{image:null}},created:function(){this.debouncedConvertToImage=$()(this.convertToImage,500)},methods:{getCanvasBlob:function(t){var e=this;return new B.a(function(n){t.toBlob(function(t){return P.$emit(z,{message:"Page_".concat(e.order," blob created")}),n(t)})})},convertToImage:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(){var e,n,a,i,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$el.children[0],t.next=3,E()(e);case 3:return n=t.sent,P.$emit(z,{message:"Page_".concat(this.order," canvas created")}),t.next=7,this.getCanvasBlob(n);case 7:return a=t.sent,i=new FormData,i.append("imagePage",a),t.next=12,this.sendImg(i);case 12:s=t.sent,this.image={name:s,url:R.createObjectURL(a)};case 14:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),sendImg:function(t){var e=this;return v.uploadImages(t).then(function(t){var n=t.filename,a=t.message;return P.$emit(z,{message:"Page_".concat(e.order," ").concat(n," is saved successfully <br />"),status:"success",description:a}),n}).catch(function(t){throw P.$emit(z,{message:"Page_".concat(e.order," __filename__ isn't saved"),description:t.toString(),status:"error"}),new Error(t)})}},watch:{imageUploadStatus:function(t){"start"===t&&this.debouncedConvertToImage()}}},G=I,q=["block","table","title","paragraph","list","paragraph","paragraph"],U={table:"red",title:"blue",list:"green",paragraph:"orange",block:"purple",default:"pink"},W={STYLE:{table:"red",title:"blue",list:"green",paragraph:"orange",block:"purple",default:"pink"},ALIGN:["left","center","right"]},H="true"===localStorage.getItem("debugMode")||!1,J="Open Sans",V="14px",Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{ref:"box",staticClass:"switch-box",style:t.blockStyles},[n(t.sectionName,{tag:"component"})],1)])},Z=[],K=n("98dc"),X=n.n(K),Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n  "+t._s(t.text)+"\n")])},tt=[],et=n("0f40"),nt=n.n(et),at=function(){};at.WORDS_PER_SENTENCE_AVG=24.46,at.WORDS_PER_SENTENCE_STD=5.08,at.WORDS=["lorem","ipsum","dolor","sit","amet","consectetur","adipiscing","elit","curabitur","vel","hendrerit","libero","eleifend","blandit","nunc","ornare","odio","ut","orci","gravida","imperdiet","nullam","purus","lacinia","a","pretium","quis","congue","praesent","sagittis","laoreet","auctor","mauris","non","velit","eros","dictum","proin","accumsan","sapien","nec","massa","volutpat","venenatis","sed","eu","molestie","lacus","quisque","porttitor","ligula","dui","mollis","tempus","at","magna","vestibulum","turpis","ac","diam","tincidunt","id","condimentum","enim","sodales","in","hac","habitasse","platea","dictumst","aenean","neque","fusce","augue","leo","eget","semper","mattis","tortor","scelerisque","nulla","interdum","tellus","malesuada","rhoncus","porta","sem","aliquet","et","nam","suspendisse","potenti","vivamus","luctus","fringilla","erat","donec","justo","vehicula","ultricies","varius","ante","primis","faucibus","ultrices","posuere","cubilia","curae","etiam","cursus","aliquam","quam","dapibus","nisl","feugiat","egestas","class","aptent","taciti","sociosqu","ad","litora","torquent","per","conubia","nostra","inceptos","himenaeos","phasellus","nibh","pulvinar","vitae","urna","iaculis","lobortis","nisi","viverra","arcu","morbi","pellentesque","metus","commodo","ut","facilisis","felis","tristique","ullamcorper","placerat","aenean","convallis","sollicitudin","integer","rutrum","duis","est","etiam","bibendum","donec","pharetra","vulputate","maecenas","mi","fermentum","consequat","suscipit","aliquam","habitant","senectus","netus","fames","quisque","euismod","curabitur","lectus","elementum","tempor","risus","cras"],at.prototype.generate=function(t){var e,n,a,i,s,o,r,c;for(t=t||100,e=[at.WORDS[0],at.WORDS[1]],t-=2,n=0;n<t;n++)a=Math.floor(Math.random()*at.WORDS.length),i=at.WORDS[a],n>0&&e[n-1]===i?n-=1:e[n]=i;o=[],s=0;while(t>0){for(r=this.getRandomSentenceLength(),t-r<4&&(r=t),t-=r,c=[],n=s;n<s+r;n++)c.push(e[n]);c=this.punctuate(c),s+=r,o.push(c.join(" "))}return o.join(" ")},at.prototype.punctuate=function(t){var e,n,a,i;if(e=t.length,t[e-1]+=".",e<4)return t;for(n=this.getRandomCommaCount(e),a=0;a<=n;a++)i=Math.round(a*e/(n+1)),i<e-1&&i>0&&(t[i]+=",");return t[0]=t[0].charAt(0).toUpperCase()+t[0].slice(1),t},at.prototype.getRandomCommaCount=function(t){var e,n,a;return e=6,n=Math.log(t)/Math.log(e),a=n/e,Math.round(this.gaussMS(n,a))},at.prototype.getRandomSentenceLength=function(){return Math.round(this.gaussMS(at.WORDS_PER_SENTENCE_AVG,at.WORDS_PER_SENTENCE_STD))},at.prototype.gauss=function(){return 2*Math.random()-1+(2*Math.random()-1)+(2*Math.random()-1)},at.prototype.gaussMS=function(t,e){return Math.round(this.gauss()*e+t)};var it={name:"SectionParagraph",data:function(){return{lipsum:new at}},computed:{text:function(){var t=nt()(80);return this.lipsum.generate(t)}}},st=it,ot=(n("ff82"),n("2877")),rt=Object(ot["a"])(st,Q,tt,!1,null,"1f2a8400",null),ct=rt.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{ref:"box",staticClass:"table-bordered",attrs:{rules:"groups"}},[t.hasHeader?n("thead",[n("tr",t._l(t.tdCount,function(e){return n("th",{key:e,style:t.cellStyles},[t._v("\n        "+t._s(t.lipsum.generate(5).substring(0,5))+"\n      ")])}),0)]):t._e(),n("tbody",t._l(t.trCount,function(e){return n("tr",{key:e},[n("td",{style:t.cellStyles},[t._v("\n        "+t._s(e)+"\n      ")]),n("td",{style:t.cellStyles,attrs:{align:"right"}},[t._v("\n        "+t._s(t.randPrice())+"\n      ")]),t._l(t.tdCount-2,function(e){return n("td",{key:e,style:t.cellStyles},[t.lipsum?n("span",[t._v("\n          "+t._s(t.lipsum.generate(5).substring(0,5))+"\n        ")]):t._e()])})],2)}),0)])},lt=[],dt={start:0,end:5},pt={start:2,end:8},ft={start:1,end:5},mt={start:0,end:1},gt={start:0,end:1e4},ht={name:"SectionTable",data:function(){return{tdCount:2,trCount:1,hasHeader:0,lipsum:new at}},mounted:function(){this.createCells()},methods:{createCells:function(){this.tdCount=nt()(pt.start,pt.end),this.trCount=nt()(ft.start,ft.end),this.hasHeader=nt()(mt.start,mt.end)},randPrice:function(){return nt()(gt.start,gt.end)}},computed:{cellStyles:function(){var t=nt()(dt.start,dt.end);return{borderWidth:"".concat(t,"px")}}}},bt=ht,vt=(n("5bdd"),Object(ot["a"])(bt,ut,lt,!1,null,"30718112",null)),yt=vt.exports,St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v(t._s(t.title))])},xt=[],_t={name:"SectionTitle",data:function(){return{lipsum:new at}},computed:{title:function(){var t=nt()(7);return t>0?this.lipsum.generate(t):""}}},wt=_t,Ct=(n("0e39"),Object(ot["a"])(wt,St,xt,!1,null,"19a76ab9",null)),Ft=Ct.exports,Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"box",staticClass:"contract-header"},[n("img",{attrs:{src:t.image,alt:""}})])},kt=[],Dt={name:"SectionHeader",computed:{image:function(){var t=nt()(3);if(!t)return null;var e=n("64a2"),a="header".concat(t);return e("./".concat(a,".png"))}}},At=Dt,Bt=(n("a724"),Object(ot["a"])(At,Ot,kt,!1,null,"5adae018",null)),Mt=Bt.exports,Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list"},[n("ul",t._l(t.randValue,function(e){return n("li",{key:e},[t._v("\n      "+t._s(t.lipsum.generate(5).substring(0,100))+"\n    ")])}),0)])},Tt=[],$t={start:1,end:10},jt={name:"SectionList",data:function(){return{lipsum:new at}},computed:{randValue:function(){return nt()($t.start,$t.end)}}},Pt=jt,zt=(n("a7d0"),Object(ot["a"])(Pt,Et,Tt,!1,null,"30fe2919",null)),Lt=zt.exports,Nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-block",style:t.blockStyles},[t._v("\n  "+t._s(t.text)+"\n")])},Rt=[],It={name:"SectionBlock",data:function(){return{lipsum:new at}},methods:{randWidth:function(){return nt()(25,50)},randAlign:function(){var t=["left","center","right"];return O()(t)[0]},randPosition:function(){var t=["0 0 1rem auto","0 auto 1rem","0 auto 1rem 0"];return O()(t)[0]},randFlexAlign:function(){var t=["flex-start","center","flex-end"];return O()(t)[0]}},computed:{text:function(){var t=nt()(40);return this.lipsum.generate(t)},blockStyles:function(){return{width:"".concat(this.randWidth(),"%"),textAlign:this.randAlign(),alignSelf:this.randFlexAlign}}}},Gt=It,qt=(n("7d19"),Object(ot["a"])(Gt,Nt,Rt,!1,null,"6cafa47e",null)),Ut=qt.exports,Wt=[{type:"paragraph",default:!0,component:ct},{type:"table",component:yt},{type:"header",component:Mt},{type:"list",component:Lt},{type:"title",component:Ft},{type:"block",component:Ut}],Ht=Wt,Jt=n("9b02"),Vt=n.n(Jt),Yt=n("2769"),Zt=n.n(Yt),Kt=n("0b85"),Xt=n.n(Kt),Qt=function(t,e){var n=Vt()(Zt()(t,["type",e]),"component");return Xt()(n)&&(n=Vt()(Zt()(t,"default"),"component")),n},te={methods:{randAlign:function(){var t=W.ALIGN;return O()(t)[0]}},computed:{blockStyles:function(){return{textAlign:this.randAlign()}}}},ee=te,ne={components:{SectionParagraph:ct,SectionTable:yt,SectionHeader:Mt,SectionList:Lt,SectionTitle:Ft,SectionBlock:Ut},props:{type:{type:String,default:""},updateMetadata:{type:Function,default:function(){}}},mixins:[D,ee],data:function(){return{section:null,sectionName:null}},mounted:function(){this.uuid=X()("section_");var t=Qt(Ht,this.type);this.section=t,this.sectionName=t.name},methods:{updateBoundedBox:function(t){this.$emit("updateData",{sectionCoords:t,id:this.uuid,type:this.type})}}},ae=ne,ie=(n("6b04"),Object(ot["a"])(ae,Y,Z,!1,null,"4515715a",null)),se=ie.exports,oe={name:"Page",mixins:[D,G],components:{Switcher:se},props:{sections:{type:Array,default:function(){return[]}},order:{type:Number,default:1},settings:{type:Object,default:function(){return{fontFamilies:function(){return[]},fontSizes:function(){return[]}}}},updatePageData:{type:Function,default:function(){}},debugMode:{type:Boolean,default:!1},imageUploadStatus:{type:String,default:""}},data:function(){return{selectedFF:[{name:J}],selectedFZ:[null],sectionsData:[],sectionBoundedBoxes:[]}},computed:{configuredStyles:function(){return{"font-family":this.selectedFF[0],"font-size":this.selectedFZ[0]}}},mounted:function(){this.selectedFF=O()(this.settings.fontFamilies),this.selectedFZ=O()(this.settings.fontSizes)},methods:{updateBoundedBox:function(t){this.updateSectionBoundedBox({pageBox:t})},updateSectionBoundedBox:function(t){var e=t.pageBox;e&&(this.sectionsData=this.sectionBoundedBoxes.map(function(t){var n=t.sectionCoords,a=n.top,i=n.right,s=n.bottom,o=n.left,r=n.height,c=n.width,u=t.id,d=t.type,p={top:a-e.top,bottom:s-e.top,right:i-e.left,left:o-e.left,height:r,width:c},f=1045;if(!(p.top>f)&&(p.bottom>f&&(p=Object(l["a"])({},p,{bottom:f,height:f-p.top})),!(p.height<16)))return{id:u,type:d,coords:p}}))},getSectionData:function(t){this.sectionBoundedBoxes.push(t)},bbstyles:function(t){var e=t.top,n=t.left,a=t.height,i=t.width,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";return{top:"".concat(e,"px"),left:"".concat(n,"px"),width:"".concat(i,"px"),height:"".concat(a,"px"),outline:"3px solid ".concat(U[s])}}},watch:{sectionsData:{deep:!0,handler:function(t){this.$emit("updatePageData",Object(l["a"])({sections:t,order:this.order},this.configuredStyles))}},image:function(t){t&&this.$emit("updateImage",{image:t.name,order:this.order})}}},re=oe,ce=(n("672b"),Object(ot["a"])(re,w,C,!1,null,"e0e9280c",null)),ue=ce.exports,le=(n("a899"),{name:"Pages",components:{Page:ue,RecycleScroller:i["a"]},props:{pages:{type:Array,default:function(){return[]}},settings:{type:Object,default:function(){return{}}},debugMode:{type:Boolean,default:!1},imageUploadStatus:{type:String,default:""},progress:{type:Number,default:0}},data:function(){return{contractDetails:[]}},methods:{handlePageData:function(t){var e=t.sections,n=t.order,a=t.fontFamily;console.log(">>>",e,n,a),this.contractDetails[n]={sections:e,fontFamily:a}},handleImage:function(t){var e=t.order,n=t.image,a=Object(l["a"])({},this.contractDetails[e],{image:n});this.$set(this.contractDetails,e,a),this.setProgress()},setProgress:function(){var t=this.pages.length,e=this.contractDetails.filter(function(t){return t.image}).length,n=e===t?100:_()(100*e/t,10);this.$emit("update:progress",n)}},watch:{contractDetails:{deep:!0,handler:function(t){var e=t.length,n=t.filter(function(t){return t.image}).length;e>0&&e===n&&this.$emit("updateDetails",t)}}}}),de=le,pe=Object(ot["a"])(de,y,S,!1,null,null,null),fe=pe.exports,me=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui basic segment setting-form"},[n("h2",{staticClass:"ui inverted header setting-header"},[t._v("Settings")]),n("div",{staticClass:"ui form inverted"},[n("div",{staticClass:"field fonts-select"},[n("div",{staticClass:"pull-right"},[n("div",{staticClass:"ui checkbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.cbxAllFamily,expression:"cbxAllFamily"}],attrs:{id:"allFamilies",name:"allFamilies",type:"checkbox"},domProps:{checked:Array.isArray(t.cbxAllFamily)?t._i(t.cbxAllFamily,null)>-1:t.cbxAllFamily},on:{change:function(e){var n=t.cbxAllFamily,a=e.target,i=!!a.checked;if(Array.isArray(n)){var s=null,o=t._i(n,s);a.checked?o<0&&(t.cbxAllFamily=n.concat([s])):o>-1&&(t.cbxAllFamily=n.slice(0,o).concat(n.slice(o+1)))}else t.cbxAllFamily=i}}}),n("label",{attrs:{for:"allFamilies"}},[t._v("Select all")])])]),n("label",{attrs:{for:"valueFamilyId"}},[t._v("Font family")]),t.showFamilySelect?n("multiselect",{attrs:{id:"valueFamilyId","clear-on-select":!1,"close-on-select":!1,multiple:!0,options:t.optionsFamily,placeholder:"Select Font Family"},model:{value:t.valueFamily,callback:function(e){t.valueFamily=e},expression:"valueFamily"}}):t._e()],1),n("div",{staticClass:"field fonts-select"},[n("div",{staticClass:"pull-right"},[n("div",{staticClass:"ui checkbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.cbxAllSizes,expression:"cbxAllSizes"}],attrs:{id:"allSizes",name:"allSizes",type:"checkbox"},domProps:{checked:Array.isArray(t.cbxAllSizes)?t._i(t.cbxAllSizes,null)>-1:t.cbxAllSizes},on:{change:function(e){var n=t.cbxAllSizes,a=e.target,i=!!a.checked;if(Array.isArray(n)){var s=null,o=t._i(n,s);a.checked?o<0&&(t.cbxAllSizes=n.concat([s])):o>-1&&(t.cbxAllSizes=n.slice(0,o).concat(n.slice(o+1)))}else t.cbxAllSizes=i}}}),n("label",{attrs:{for:"allSizes"}},[t._v("Select all")])])]),n("label",{attrs:{for:"valueSizeId"}},[t._v("Font size")]),t.showSizeSelect?n("multiselect",{attrs:{id:"valueSizeId","clear-on-select":!1,"close-on-select":!1,multiple:!0,options:t.optionsSizes,placeholder:"Select Font Size"},model:{value:t.valueSize,callback:function(e){t.valueSize=e},expression:"valueSize"}}):t._e()],1),n("div",{staticClass:"field"},[n("label",{attrs:{for:"pagesCountId"}},[t._v("Pages")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.pagesCount,expression:"pagesCount"}],attrs:{id:"pagesCountId",type:"number",min:"1"},domProps:{value:t.pagesCount},on:{input:function(e){e.target.composing||(t.pagesCount=e.target.value)}}})]),n("div",{staticClass:"ui divider"}),n("button",{staticClass:"ui primary button fluid ",class:{disabled:t.disabled,loading:t.disabled},attrs:{disabled:t.disabled},on:{click:t.handleSubmit}},[t._v("\n      Generate\n    ")]),n("div",{staticClass:"ui divider"}),n("div",{staticClass:"slot"},[t._t("default")],2)]),n("div",{staticClass:"ui form inverted to-bottom"},[n("div",{staticClass:"ui checkbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.cbxDebug,expression:"cbxDebug"}],attrs:{id:"cbxDebugId",name:"debug",type:"checkbox"},domProps:{checked:Array.isArray(t.cbxDebug)?t._i(t.cbxDebug,null)>-1:t.cbxDebug},on:{change:function(e){var n=t.cbxDebug,a=e.target,i=!!a.checked;if(Array.isArray(n)){var s=null,o=t._i(n,s);a.checked?o<0&&(t.cbxDebug=n.concat([s])):o>-1&&(t.cbxDebug=n.slice(0,o).concat(n.slice(o+1)))}else t.cbxDebug=i}}}),n("label",{attrs:{for:"cbxDebugId"}},[t._v("Show info")])])])])},ge=[],he=n("8e5f"),be=n.n(he),ve=["Action Man","Autobahn","AvantGarde Bk BT","BabelSans","Benguiat Bk BT","Blue Highway D Type","Blue Highway","Bremen Bd BT","Century Gothic","Corbel","Florencesans","Futura Lt BT","Futura Md BT","Gadugi","GoudyOlSt BT","Humanst521 BT","Junegull","Kabel Bk BT","Leelawadee UI","Lithograph","Medrano","Nirmala UI","Nirmala UI","NotMaryKate","Open Sans","Serifa BT","SF Buttacup Lettering","Souvenir Lt BT","Space Frigate","SquareFont","Tapeworm","Ubuntu","Whatafont Expanded","Whatafont","ZapfEllipt BT"],ye=["10px","12px","14px","16px","18px"],Se={name:"SettingForm",components:{Multiselect:be.a},props:{disabled:Boolean,debugMode:Boolean},data:function(){return{pagesCount:1,optionsFamily:ve,valueFamily:[J],optionsSizes:ye,valueSize:[V],cbxDebug:!0,cbxAllFamily:!1,cbxAllSizes:!1}},mounted:function(){this.cbxDebug=this.debugMode},computed:{showFamilySelect:function(){return this.optionsFamily.length},showSizeSelect:function(){return this.optionsSizes.length}},methods:{handleSubmit:function(){this.$emit("update",{pages:this.pagesCount,fontFamilies:this.valueFamily,fontSizes:this.valueSize})}},watch:{cbxAllFamily:function(t){this.valueFamily=t&&this.optionsFamily},cbxAllSizes:function(t){this.valueSize=t&&this.optionsSizes},cbxDebug:function(t){this.$emit("switchDebugMode",t)}}},xe=Se,_e=(n("4177"),Object(ot["a"])(xe,me,ge,!1,null,null,null)),we=_e.exports,Ce=q,Fe={name:"Contract",components:{Pages:fe,SettingForm:we},data:function(){return{isGenerating:!1,isLoading:!1,isReady:!1,show:!0,debugMode:H,pagesCount:1,settings:{fontFamilies:[]},progress:0}},methods:{handlerSubmit:function(){this.isLoading=!0,P.$emit(N,!0)},sendJSON:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(e){var n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v.uploadJSON(e).then(function(t){P.$emit(L,{message:"JSON is saved successfully",status:"success",description:t.message}),n.isLoading=!1}).catch(function(t){throw P.$emit(L,{message:"Error JSON",status:"error"}),n.isLoading=!1,new Error(t)});case 2:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),handleGenerate:function(t){var e=this,n=t.pages,a=t.fontFamilies,i=t.fontSizes;this.resetSettings(),this.settings=Object(l["a"])({},this.settings,{fontFamilies:a,fontSizes:i}),this.pagesCount=n,this.$nextTick(function(){e.isGenerating=!1})},handlerDebug:function(t){localStorage.setItem("debugMode",!!t),this.debugMode=t},handleDetails:function(t){this.sendJSON(t)},resetSettings:function(){var t=this;this.isGenerating=!0,this.progress=0,this.show=!1,this.$nextTick(function(){t.show=!0})}},computed:{pages:function(){for(var t=[],e=0;e<this.pagesCount;e++)t.push({id:e,sections:Ce});return console.log("pages",t),t},imageUploadStatus:function(){return!0===this.isLoading?"start":""}},watch:{progress:function(t){this.isReady=100===t}}},Oe=Fe,ke=(n("8912"),Object(ot["a"])(Oe,c,u,!1,null,"7993c6c4",null)),De=ke.exports,Ae=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"ui dimmer modals page transition visible active"},[n("div",{staticClass:"ui longer modal transition visible active"},[n("i",{staticClass:"close icon",on:{click:function(e){return t.$emit("close")}}}),n("div",{staticClass:"header"},[t._t("header",[t._v("\n          Modal Title\n        ")])],2),n("div",{staticClass:"scrolling content"},[t._t("content",[t._v("\n          A description can appear on the right\n        ")])],2),n("div",{staticClass:"actions"},[n("button",{staticClass:"ui green button",class:{disabled:t.isSaving},attrs:{disabled:t.isSaving},on:{click:function(e){return t.$emit("close")}}},[t._v("\n          OK\n        ")])])])])])},Be=[],Me={props:{isSaving:{type:Boolean}}},Ee=Me,Te=(n("b776"),Object(ot["a"])(Ee,Ae,Be,!1,null,"1591c068",null)),$e=Te.exports,je=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{domProps:{innerHTML:t._s(t.text)}}),n("div",{domProps:{innerHTML:t._s(t.summary)}})])},Pe=[],ze={data:function(){return{text:"",summary:""}},mounted:function(){var t=this;P.$on(z,function(e){var n=e.message,a=e.status,i=void 0===a?"":a,s=e.description,o=void 0===s?"":s;t.text+=t.getMessage({message:n,status:i,description:o})}),P.$on(L,function(e){var n=e.message,a=e.status,i=void 0===a?"":a,s=e.description,o=void 0===s?"":s;t.summary=t.getMessage({message:n,status:i,description:o})})},methods:{getMessage:function(t){var e=t.status,n=t.message,a=t.description;switch(e){case"success":return'<div class="ui text success" title="'.concat(a,'">').concat(n,"</div>");case"error":return'<div class="ui text error" title="'.concat(a,'">').concat(n,"</div>");default:return'<div class="ui text">'.concat(n,"</div>")}}}},Le=ze,Ne=Object(ot["a"])(Le,je,Pe,!1,null,null,null),Re=Ne.exports,Ie={name:"App",data:function(){return{showLogger:!1,isSaving:!0}},components:{Contract:De,Modal:$e,Logger:Re},mounted:function(){var t=this;P.$on(N,function(e){t.showLogger=e,t.isSaving=e}),P.$on(L,function(){t.isSaving=!1})},computed:{logHeader:function(){return this.isSaving?"Waiting":"Saved"}}},Ge=Ie,qe=Object(ot["a"])(Ge,o,r,!1,null,null,null),Ue=qe.exports;n("dbaa");a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(Ue)}}).$mount("#app"),a["a"].use(i["b"]),a["a"].use(s["a"],{duration:3e3,container:".toastr-container",autoshow:!0,html:!1,position:"right top"})},"584b":function(t,e,n){},"5bdd":function(t,e,n){"use strict";var a=n("0e98"),i=n.n(a);i.a},"617a":function(t,e,n){},"64a2":function(t,e,n){var a={"./header1.png":"b401","./header2.png":"6592","./header3.png":"b0a6"};function i(t){var e=s(t);return n(e)}function s(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}i.keys=function(){return Object.keys(a)},i.resolve=s,t.exports=i,i.id="64a2"},6592:function(t,e,n){t.exports=n.p+"img/header2.1f17cd96.png"},"672b":function(t,e,n){"use strict";var a=n("9c3e"),i=n.n(a);i.a},"6a90":function(t,e,n){},"6b04":function(t,e,n){"use strict";var a=n("fca0"),i=n.n(a);i.a},7858:function(t,e,n){},"7d19":function(t,e,n){"use strict";var a=n("2233"),i=n.n(a);i.a},8912:function(t,e,n){"use strict";var a=n("617a"),i=n.n(a);i.a},"9c3e":function(t,e,n){},a289:function(t,e,n){},a724:function(t,e,n){"use strict";var a=n("3ac7"),i=n.n(a);i.a},a7d0:function(t,e,n){"use strict";var a=n("7858"),i=n.n(a);i.a},b0a6:function(t,e,n){t.exports=n.p+"img/header3.29a180d8.png"},b401:function(t,e,n){t.exports=n.p+"img/header1.bcb52a1c.png"},b776:function(t,e,n){"use strict";var a=n("6a90"),i=n.n(a);i.a},dbaa:function(t,e,n){},f0b6:function(t,e,n){},fca0:function(t,e,n){},ff82:function(t,e,n){"use strict";var a=n("f0b6"),i=n.n(a);i.a}});
//# sourceMappingURL=app.462d2f3b.js.map