import{_ as i,o as n,c as o,a as s,v as d}from"./app.440e8313.js";const l={props:{name:{required:!0},default:{default:!1},os:{default:void 0}},data:()=>({active:!1,platforms:{Win32:"windows",MacIntel:"macos",MacPPC:"macos"}}),computed:{id(){return this.name.toLowerCase().replace(/ /g,"-")},parentId(){return this.$parent.$parent.$props.id.toLowerCase().replace(/ /g,"-")},parentIdSafe(){return this.parentId.replace(/[\-\/\\^$*+?.()|[\]{}]/g,"\\$&")}},created(){this.active=this.default===""},mounted(){const e=decodeURI(window.location.href).match(RegExp(`[?&]${this.parentIdSafe}=(.*?)(?=&|#|$)`));e&&e.length>1?e[1]===this.id&&(this.active=!0):this.os===this.platforms[navigator.platform]?this.active=!0:this.os==="other"&&!this.$parent.$parent.$slots.default().some(a=>a.props.os===this.platforms[navigator.platform])&&(this.active=!0)},methods:{setTab(){let e=window.location.href;e.match(RegExp(`[?&]${this.parentIdSafe}=`))?e=e.replace(RegExp(`([?&]${this.parentIdSafe}=)(.*?)(?=&|#|$)`),"$1"+this.id):e.match(/\?/)?e=e.replace(/[?&].*?(?=#|$)/,`$&&${this.parentId}=`+this.id):e=e.replace(/(?=#|$)/,`?${this.parentId}=`+this.id),e!=window.location.href&&history.pushState({},"",encodeURI(e))}}},c=["id","name","checked"],p=["for","innerHTML"],h={class:"tab"};function f(e,a,r,u,m,t){return n(),o("section",null,[s("input",{id:t.parentId+"-"+t.id,name:t.parentId,type:"radio",checked:e.active},null,8,c),s("label",{for:t.parentId+"-"+t.id,class:"tab-link",innerHTML:r.name,onClick:a[0]||(a[0]=$=>this.setTab())},null,8,p),s("div",h,[d(e.$slots,"default")])])}var v=i(l,[["render",f],["__file","Tab.vue"]]);export{v as default};
