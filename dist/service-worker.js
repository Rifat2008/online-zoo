if(!self.define){let i,n={};const l=(l,o)=>(l=new URL(l+".js",o).href,n[l]||new Promise((n=>{if("document"in self){const i=document.createElement("script");i.src=l,i.onload=n,document.head.appendChild(i)}else i=l,importScripts(l),n()})).then((()=>{let i=n[l];if(!i)throw new Error(`Module ${l} didn’t register its module`);return i})));self.define=(o,r)=>{const e=i||("document"in self?document.currentScript.src:"")||location.href;if(n[e])return;let s={};const u=i=>l(i,e),a={module:{uri:e},exports:s,require:u};n[e]=Promise.all(o.map((i=>a[i]||u(i)))).then((i=>(r(...i),s)))}}define(["./workbox-db5fc017"],(function(i){"use strict";i.setCacheNameDetails({prefix:"online-zoo"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/css/app.46b96800.css",revision:null},{url:"/favicon.png",revision:"71b88be5120b8318ca29d9a0c1e3e3c9"},{url:"/fonts/roboto-v30-latin-300.006981bf.woff",revision:null},{url:"/fonts/roboto-v30-latin-300.a4eae32d.woff2",revision:null},{url:"/fonts/roboto-v30-latin-500.3170fd9a.woff2",revision:null},{url:"/fonts/roboto-v30-latin-500.e5748c3b.woff",revision:null},{url:"/fonts/roboto-v30-latin-700.71b2beb8.woff2",revision:null},{url:"/fonts/roboto-v30-latin-700.bd41d1cd.woff",revision:null},{url:"/fonts/roboto-v30-latin-regular.224e95b0.woff",revision:null},{url:"/fonts/roboto-v30-latin-regular.f2894edc.woff2",revision:null},{url:"/img/arrow-left.ba08b980.svg",revision:null},{url:"/img/arrow-right.4f8fbc27.svg",revision:null},{url:"/img/avatar-1.3d888811.svg",revision:null},{url:"/img/avatar-2.5a30e528.svg",revision:null},{url:"/img/avatar-3.413d025c.svg",revision:null},{url:"/img/avatar-4.b580d451.svg",revision:null},{url:"/img/bamboo-cap-sm.a7fd4035.png",revision:null},{url:"/img/bamboo-cap.37c06eb7.png",revision:null},{url:"/img/bamboo-icon.33486c4b.svg",revision:null},{url:"/img/banana_icon.d4aee7e6.svg",revision:null},{url:"/img/cheetahs.1a168882.png",revision:null},{url:"/img/close-icon.72f62d05.svg",revision:null},{url:"/img/eagles.26c1de1a.png",revision:null},{url:"/img/facebook-icon.54628a2d.svg",revision:null},{url:"/img/fish_icon.5cc1b5b9.svg",revision:null},{url:"/img/giant-panda.8e4f95f2.jpg",revision:null},{url:"/img/giant-pandas.71bdbdba.png",revision:null},{url:"/img/gorillas.006fc4db.png",revision:null},{url:"/img/instagram-icon.1c2c4f00.svg",revision:null},{url:"/img/pay-arrow.a2dc58a5.svg",revision:null},{url:"/img/pay-icon-1.8ffd3050.svg",revision:null},{url:"/img/pay-icon-2.9366963e.svg",revision:null},{url:"/img/pay-icon-3.4237d6ce.svg",revision:null},{url:"/img/penguins.8fd1acb5.png",revision:null},{url:"/img/steak_icon.859c31dd.svg",revision:null},{url:"/img/strelitzia1.5a72211c.svg",revision:null},{url:"/img/twitter-icon.3bd5ad87.svg",revision:null},{url:"/img/two-toed-sloth.06cf9bba.png",revision:null},{url:"/img/usd-icon.04d5d26b.svg",revision:null},{url:"/img/youtube-icon.c91a1068.svg",revision:null},{url:"/index.html",revision:"389d1c537ff7f0b330a75af15a7323d8"},{url:"/js/app.31d0b1bc.js",revision:null},{url:"/js/chunk-vendors.90fbb3ed.js",revision:null},{url:"/manifest.json",revision:"20ec66de82a6e6f50c8634bedfdcb69d"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
