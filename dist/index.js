"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var v=n(function(k,f){
var O=require('@stdlib/strided-base-reinterpret-complex64/dist');function h(e,r,i,p){var u,t,a;if(e<=0)return-1;for(u=O(r,0),t=p*2,i*=2,a=0;a<e;a++){if(u[t]||u[t+1])return a;t+=i}return-1}f.exports=h
});var q=n(function(z,o){
var T=require('@stdlib/strided-base-stride2offset/dist'),j=v();function m(e,r,i){return j(e,r,i,T(e,i))}o.exports=m
});var y=n(function(A,x){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=q(),R=v();l(c,"ndarray",R);x.exports=c
});var _=require("path").join,w=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),b=y(),s,d=w(_(__dirname,"./native.js"));E(d)?s=b:s=d;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
