if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let n={};const l=e=>d(e,r),s={module:{uri:r},exports:n,require:l};i[r]=Promise.all(a.map((e=>s[e]||l(e)))).then((e=>(c(...e),n)))}}define(["./workbox-d4c5e7e1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2019/01/14/MySQL安装及配置最详细教程/index.html",revision:"14d9d75a45000b5fe74e3d63311fb2e1"},{url:"2019/01/15/Java环境变量配置超详细教程/index.html",revision:"e394f259d09248755c9af814e1e5a028"},{url:"2019/07/14/JAVA可视化闹钟源码/index.html",revision:"ce275c8f19bf40d2fc928291a7cdeec8"},{url:"2019/07/16/计算机二级Python/index.html",revision:"5baf455af058ea495a6a8d09445b97ee"},{url:"2019/08/06/vivado三人表决仿真/index.html",revision:"d4ec9d385e82b7aba98a0f625719bd50"},{url:"2019/08/07/verilog设设计加法器/index.html",revision:"5854eb58713fc32b85e6b99b98283545"},{url:"2019/08/08/超前进位加法器/index.html",revision:"f2fc85c66b0b2ed6dd541d401f98f4fe"},{url:"2019/08/09/verilog设计乘法器/index.html",revision:"071016ec9c9149a1fd19424f3c4844e4"},{url:"2019/10/24/OPPO-R11刷机初体验/index.html",revision:"adb01ac2ca99f9fc2f428110d6c745f6"},{url:"2019/10/31/OPERATING-SYSTEMS-THREE-EASY-PIECES/index.html",revision:"5aadd88548b4bb79ad5b93467fc35980"},{url:"2020/09/12/二进制/index.html",revision:"ce87d8206aff23a359ee2d2f03a047d4"},{url:"2020/09/13/操作系统开发/index.html",revision:"43067950d62a732922bd445722805bb3"},{url:"2020/09/29/Verilog入门/index.html",revision:"7f51cf277c4e39872ddafade65d258a4"},{url:"2020/10/28/web结课论文/index.html",revision:"33ffd9b02cd4b2e20920662dcee4a785"},{url:"2020/11/07/八位右移位乘法器（无符号）/index.html",revision:"acfd607e3358c9a928c475902f341bf7"},{url:"2020/11/07/八位超前进位加法器/index.html",revision:"5d9cfd790c8aca1d7639443335ad12ec"},{url:"2020/12/09/BIOS、UEFI、Boot-Loader都是些什么/index.html",revision:"3c9b15b965d2fb0f347c6b1043951e08"},{url:"2020/12/09/使用树莓派搭建wordpress博客网站/index.html",revision:"14eed1959e7f990ff3a21ee10f0c2bd0"},{url:"2020/12/26/硬件入门的一点点心得/index.html",revision:"84455a9098edf457b936af3e4b541373"},{url:"2021/12/05/Ubuntu19.10使用Qemu安装树莓派/index.html",revision:"d1a46d354a32edd1db710ff5dec6eac5"},{url:"2021/12/05/What-is-BIOS/index.html",revision:"357b18a4b4eb2feb11781c68189a8e3f"},{url:"2021/12/05/内网穿透工具大全/index.html",revision:"637abb7912a6da8c4c965cf60db721ae"},{url:"2021/12/05/内网穿透软件推荐/index.html",revision:"41c942c9fe49e4db91ca274073790626"},{url:"2021/12/05/最后，点个关注不迷路/index.html",revision:"eb8535665837c179307a2dc400fc8c41"},{url:"2021/12/05/手机备份到底备份什么/index.html",revision:"99e6535f30aed2e0a5f72d214503554f"},{url:"2021/12/05/摊牌了，我抄袭的/index.html",revision:"14867e9e4ee09027c6123517ae7d972c"},{url:"2021/12/05/无开发板如何开发linux系统内核/index.html",revision:"6b47893b96987dd9f47c76137cf0a918"},{url:"2021/12/05/树莓派-01/index.html",revision:"118a44c80e9a97bf21b2cc22b90c392d"},{url:"2021/12/05/树莓派-02内网穿透服务器/index.html",revision:"51b74661721b07916668b5d5cf81febf"},{url:"2021/12/05/炫猿导航——所谓精致，就是如此/index.html",revision:"0741565e91794828e40164da46207a2d"},{url:"2021/12/05/自动获取参考链接的标题/index.html",revision:"110342a97c826756ba532681afca3b2c"},{url:"2021/12/05/自己动手写操作系统一/index.html",revision:"3de014cec3a95fb27c2f2b065adc3d3b"},{url:"2021/12/05/自己动手写操作系统二/index.html",revision:"c89cbb3b23592d914bdc67b077220546"},{url:"2021/12/05/自己封装一个专属的Windows10系统/index.html",revision:"05e58543e5ccb3db232a6f2bb7126a8d"},{url:"2021/12/05/远程控制/index.html",revision:"75ecc9039e827d7641f3adb3d5bb9943"},{url:"archives/2019/01/index.html",revision:"348dd4d11613f7dc31f38367c2655cd7"},{url:"archives/2019/07/index.html",revision:"b1af510beb48e484a0dc701e188ff3b1"},{url:"archives/2019/08/index.html",revision:"0cc0ad37ba67cf7041ed86c179accae5"},{url:"archives/2019/10/index.html",revision:"a8edef89f7bb11e3217d6f2bcca167f5"},{url:"archives/2019/index.html",revision:"85c0503cf513bf9697a386c0dcb5cff8"},{url:"archives/2020/09/index.html",revision:"27071e0b0b918f7788fe587f9415b80a"},{url:"archives/2020/10/index.html",revision:"c864923d019681706291da88dbab44f5"},{url:"archives/2020/11/index.html",revision:"878a2ce0532d0843de88e03c48dce0ca"},{url:"archives/2020/12/index.html",revision:"ea9f73fccac3e77337ae894824f23f47"},{url:"archives/2020/index.html",revision:"339344fb9333331070194ab4d0cfc83e"},{url:"archives/2021/12/index.html",revision:"42e0327caa3e5a82cedf67bdefeb2eb6"},{url:"archives/2021/12/page/2/index.html",revision:"ecd9da813a7980a607cb5fa0375f8b8e"},{url:"archives/2021/index.html",revision:"56be49179a3d7bf78ce46d2df3414493"},{url:"archives/2021/page/2/index.html",revision:"ea1395935dac2802a99a6808e2f1a302"},{url:"archives/index.html",revision:"b49ca5d26dd2a32a11b44777ee53f344"},{url:"archives/page/2/index.html",revision:"764faace185c15e9c4cabb42cebd83d3"},{url:"archives/page/3/index.html",revision:"02beb652ae0e37c3ba7751c7535e3485"},{url:"archives/page/4/index.html",revision:"1389e1b75f7d05475f62d9a4b0093a05"},{url:"categories/index.html",revision:"9277e1272c3bc12e284ec0ccd5f72f28"},{url:"categories/硬件/index.html",revision:"bc29a929d5af49aeb5c3678b59e2051e"},{url:"css/index.css",revision:"2e23e054e7f96965f0705b1cbd21f139"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/alipay.jpg",revision:"d864ce75029cdc492986705d7f917c7d"},{url:"img/background.jpg",revision:"59fcda4277480620534446406793c441"},{url:"img/background1.jpg",revision:"486d78e205f38d3957085b3e8e49021d"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/mxdon.png",revision:"07088d988cd29828f465680c47832b6c"},{url:"img/wechatpay.jpg",revision:"6c2307e058385f9f2c1dbd33e89db038"},{url:"index.html",revision:"437f61cb8b899a63f54835db492aa0c0"},{url:"js/fish.js",revision:"526a92b6a5ada3f3024cf2f169fee09b"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"page/2/index.html",revision:"aa47b191af9e9e3e7e1cc266dbe494ba"},{url:"page/3/index.html",revision:"7b00d99c164fb2aacd2693fde529bc91"},{url:"page/4/index.html",revision:"9ef5410e5e4a072be39b24afc3ef489a"},{url:"tags/index.html",revision:"de7103dc5fa60c4236eb02399a038cef"},{url:"tags/java/index.html",revision:"bb2543417c508bdc0e0eac975dca3a57"},{url:"tags/Operating-Systems/index.html",revision:"ce07f141f6c24c5a94f5f072be6adbc2"},{url:"tags/Python/index.html",revision:"a1a3d10338885b4572827dc3c1ffc07c"},{url:"tags/verilog/index.html",revision:"9ba5d31e111e8612ab02fc63e92f7106"},{url:"tags/vivado/index.html",revision:"7d4979d78230033e3a6bb930593b912b"},{url:"tags/刷机/index.html",revision:"a3789643e359f2c9ddf904d37e1d6c84"},{url:"tags/学习笔记/index.html",revision:"74c7c9dfad610ec7c10c5152251000e8"},{url:"tags/尾巴/index.html",revision:"9d1ed511e80d44ab44d0145a149891a6"},{url:"tags/应用/index.html",revision:"ccf1d0e4b02da6cf42b0ebedda12cf76"},{url:"tags/应用软件/index.html",revision:"51dcaf4bc8a1a894425c82f2387e755c"},{url:"tags/心得/index.html",revision:"b1b22000e1c166f792f2e1a57eb07f6b"},{url:"tags/折腾/index.html",revision:"9713514cf0ee8a51633a9f2b95acd557"},{url:"tags/推荐/index.html",revision:"a388f0624360e5d812753511ac0fe3ac"},{url:"tags/搞机/index.html",revision:"7a9d032e18d01a45dd80c54eeb081e9a"},{url:"tags/操作系统/index.html",revision:"128eda94037787fca4d67286fc63bdb0"},{url:"tags/教程/index.html",revision:"ccd2cd40a44f6434dd8e0a4db049fa7e"},{url:"tags/电脑/index.html",revision:"0b7900ea935be3e226adc62943ff471e"},{url:"tags/硬件/index.html",revision:"24813aa773ede0a780ba501ace8272eb"},{url:"tags/经验/index.html",revision:"249edd6ecb15a42934e2ee704f480f2e"},{url:"tags/脚本/index.html",revision:"70fb72c6d67b6370cdbc0c98110bc187"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
