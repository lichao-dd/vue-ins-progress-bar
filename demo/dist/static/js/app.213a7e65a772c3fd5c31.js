webpackJsonp([1],{"0SF1":function(e,t){},GcaU:function(e,t,a){e.exports=a.p+"static/img/rainbow.eb1e4a4.png"},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var d=a("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view"),this._v(" "),t("vue-ins-progress-bar")],1)},staticRenderFns:[]};var s=a("VU/8")({name:"App"},i,!1,function(e){a("0SF1")},null,null).exports,T=a("/ocq"),n={name:"HomePage",data:()=>({github:"https://github.com/meloalright/vue-ins-progress-bar",text:"to finish",isLoading:!0,handler:null,loaded:!1}),methods:{onload(){this.loaded=!0},start(){this.$insProgress.start()},finish(){this.$insProgress.finish()},change(e){this.isLoading=e.value,this.text=this.isLoading?"to finish":"to start",this.isLoading?this.start():this.finish()}},created(){this.$insProgress.start()},mounted(){this.handler=(()=>{this.onload()}),setTimeout(this.handler,10),window.addEventListener("load",this.handler)},beforeDestroy(){window.removeEventListener("load",this.handler)}},l={render:function(){var e=this,t=e.$createElement,d=e._self._c||t;return d("div",{staticClass:"hello"},[d("img",{staticClass:"rainbow",style:{opacity:e.loaded?1:0},attrs:{src:a("GcaU")}}),e._v(" "),d("br"),e._v(" "),d("h2",{staticClass:"switch",style:{opacity:e.loaded?1:0}},[e._v("Press  "),d("toggle-button",{attrs:{value:e.isLoading,labels:{checked:"Loading",unchecked:"Finished"},width:80},on:{change:e.change}}),e._v("  "+e._s(e.text))],1),e._v(" "),d("br"),e._v(" "),d("br"),e._v(" "),d("br"),e._v(" "),d("a",{staticClass:"github",style:{opacity:e.loaded?1:0},attrs:{href:e.github}},[d("img",{attrs:{src:a("oFA0")}})])])},staticRenderFns:[]};var o=a("VU/8")(n,l,!1,function(e){a("OFxt")},"data-v-36271c1a",null).exports;d.default.use(T.a);var M=new T.a({routes:[{path:"/",name:"HomePage",component:o}]}),N=a("CmzC"),c=a.n(N),r=a("nkUn"),R=a.n(r);d.default.config.productionTip=!1;d.default.use(c.a,{position:"fixed",show:!0,height:"3px"}),d.default.use(R.a),new d.default({el:"#app",router:M,components:{App:s},template:"<App/>"})},OFxt:function(e,t){},oFA0:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTQ2IiBoZWlnaHQ9IjI4Ij48ZyBzaGFwZS1yZW5kZXJpbmc9ImNyaXNwRWRnZXMiPjxwYXRoIGZpbGw9IiM1NTUiIGQ9Ik0wIDBoODl2MjhIMHoiLz48cGF0aCBmaWxsPSIjOWY5ZjlmIiBkPSJNODkgMGg1N3YyOEg4OXoiLz48L2c+PGcgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkRlamFWdSBTYW5zLFZlcmRhbmEsR2VuZXZhLHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAwIj48aW1hZ2UgeD0iOSIgeT0iNyIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0IiB4bGluazpocmVmPSJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSTBNQ0lnYUdWcFoyaDBQU0kwTUNJZ2RtbGxkMEp2ZUQwaU1USWdNVElnTkRBZ05EQWlQZ284Y0dGMGFDQm1hV3hzUFNJak16TXpNek16SWlCa1BTSk5NeklzTVRNdU5HTXRNVEF1TlN3d0xURTVMRGd1TlMweE9Td3hPV013TERndU5DdzFMalVzTVRVdU5Td3hNeXd4T0dNeExEQXVNaXd4TGpNdE1DNDBMREV1TXkwd0xqbGpNQzB3TGpVc01DMHhMamNzTUMwekxqSWdZeTAxTGpNc01TNHhMVFl1TkMweUxqWXROaTQwTFRJdU5rTXlNQ3cwTVM0MkxERTRMamdzTkRFc01UZ3VPQ3cwTVdNdE1TNDNMVEV1TWl3d0xqRXRNUzR4TERBdU1TMHhMakZqTVM0NUxEQXVNU3d5TGprc01pd3lMamtzTW1NeExqY3NNaTQ1TERRdU5Td3lMakVzTlM0MUxERXVOaUJqTUM0eUxURXVNaXd3TGpjdE1pNHhMREV1TWkweUxqWmpMVFF1TWkwd0xqVXRPQzQzTFRJdU1TMDRMamN0T1M0MFl6QXRNaTR4TERBdU55MHpMamNzTWkwMUxqRmpMVEF1TWkwd0xqVXRNQzQ0TFRJdU5Dd3dMakl0TldNd0xEQXNNUzQyTFRBdU5TdzFMaklzTWlCak1TNDFMVEF1TkN3ekxqRXRNQzQzTERRdU9DMHdMamRqTVM0MkxEQXNNeTR6TERBdU1pdzBMamNzTUM0M1l6TXVOaTB5TGpRc05TNHlMVElzTlM0eUxUSmpNU3d5TGpZc01DNDBMRFF1Tml3d0xqSXNOV014TGpJc01TNHpMRElzTXl3eUxEVXVNV013TERjdU15MDBMalVzT0M0NUxUZ3VOeXc1TGpRZ1l6QXVOeXd3TGpZc01TNHpMREV1Tnl3eExqTXNNeTQxWXpBc01pNDJMREFzTkM0MkxEQXNOUzR5WXpBc01DNDFMREF1TkN3eExqRXNNUzR6TERBdU9XTTNMalV0TWk0MkxERXpMVGt1Tnl3eE15MHhPQzR4UXpVeExESXhMamtzTkRJdU5Td3hNeTQwTERNeUxERXpMalI2SWk4K0Nqd3ZjM1puUGdvPSIvPjx0ZXh0IHg9IjUzMCIgeT0iMTc1IiB0cmFuc2Zvcm09InNjYWxlKC4xKSIgdGV4dExlbmd0aD0iNDgwIj5HSVRIVUI8L3RleHQ+PHRleHQgeD0iMTE3NSIgeT0iMTc1IiBmb250LXdlaWdodD0iYm9sZCIgdHJhbnNmb3JtPSJzY2FsZSguMSkiIHRleHRMZW5ndGg9IjMzMCI+VklFVzwvdGV4dD48L2c+IDwvc3ZnPg=="}},["NHnr"]);
//# sourceMappingURL=app.213a7e65a772c3fd5c31.js.map