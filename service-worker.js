if(!self.define){let i,n={};const l=(l,o)=>(l=new URL(l+".js",o).href,n[l]||new Promise((n=>{if("document"in self){const i=document.createElement("script");i.src=l,i.onload=n,document.head.appendChild(i)}else i=l,importScripts(l),n()})).then((()=>{let i=n[l];if(!i)throw new Error(`Module ${l} didn’t register its module`);return i})));self.define=(o,r)=>{const e=i||("document"in self?document.currentScript.src:"")||location.href;if(n[e])return;let s={};const u=i=>l(i,e),a={module:{uri:e},exports:s,require:u};n[e]=Promise.all(o.map((i=>a[i]||u(i)))).then((i=>(r(...i),s)))}}define(["./workbox-db5fc017"],(function(i){"use strict";i.setCacheNameDetails({prefix:"online-zoo"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/css/app.769a4af3.css",revision:null},{url:"/favicon.png",revision:"71b88be5120b8318ca29d9a0c1e3e3c9"},{url:"/fonts/roboto-v30-latin-300.006981bf.woff",revision:null},{url:"/fonts/roboto-v30-latin-300.a4eae32d.woff2",revision:null},{url:"/fonts/roboto-v30-latin-500.3170fd9a.woff2",revision:null},{url:"/fonts/roboto-v30-latin-500.e5748c3b.woff",revision:null},{url:"/fonts/roboto-v30-latin-700.71b2beb8.woff2",revision:null},{url:"/fonts/roboto-v30-latin-700.bd41d1cd.woff",revision:null},{url:"/fonts/roboto-v30-latin-regular.224e95b0.woff",revision:null},{url:"/fonts/roboto-v30-latin-regular.f2894edc.woff2",revision:null},{url:"/img/arrow-left.ac7daebf.svg",revision:null},{url:"/img/arrow-right.dabee2c1.svg",revision:null},{url:"/img/avatar-1.c26927f3.svg",revision:null},{url:"/img/avatar-2.7e20cc4a.svg",revision:null},{url:"/img/avatar-3.4b4befa6.svg",revision:null},{url:"/img/avatar-4.45d09127.svg",revision:null},{url:"/img/bamboo-cap-sm.a7fd4035.png",revision:null},{url:"/img/bamboo-cap.37c06eb7.png",revision:null},{url:"/img/bamboo-icon.0d5584bd.svg",revision:null},{url:"/img/banana_icon.928d787d.svg",revision:null},{url:"/img/cheetahs.1a168882.png",revision:null},{url:"/img/close-icon.0a783e43.svg",revision:null},{url:"/img/eagles.26c1de1a.png",revision:null},{url:"/img/facebook-icon.7ffd6e36.svg",revision:null},{url:"/img/fish_icon.f3297768.svg",revision:null},{url:"/img/giant-panda.8e4f95f2.jpg",revision:null},{url:"/img/giant-pandas.71bdbdba.png",revision:null},{url:"/img/gorillas.006fc4db.png",revision:null},{url:"/img/instagram-icon.ae382a75.svg",revision:null},{url:"/img/pay-arrow.b3713f87.svg",revision:null},{url:"/img/pay-icon-1.3031dfd8.svg",revision:null},{url:"/img/pay-icon-2.8669677f.svg",revision:null},{url:"/img/pay-icon-3.e5380b1c.svg",revision:null},{url:"/img/penguins.8fd1acb5.png",revision:null},{url:"/img/steak_icon.aa27e5ec.svg",revision:null},{url:"/img/strelitzia1.bfa79044.svg",revision:null},{url:"/img/twitter-icon.ff127b6d.svg",revision:null},{url:"/img/two-toed-sloth.06cf9bba.png",revision:null},{url:"/img/usd-icon.4ef58602.svg",revision:null},{url:"/img/youtube-icon.2d0f64f7.svg",revision:null},{url:"/index.html",revision:"e0a235ff4a7df9ce3cba564d220a0e9c"},{url:"/js/app.c750fed4.js",revision:null},{url:"/js/chunk-vendors.58e5fe1a.js",revision:null},{url:"/manifest.json",revision:"20ec66de82a6e6f50c8634bedfdcb69d"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
