(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[9860],{5862:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],s={keywords:["ISCP","Smart Contracts","TestNet"],description:"A public testnet for developers to try out smart contracts",image:"/img/logo/WASP_logo_dark.png"},p="Testnet",c={unversionedId:"guide/chains_and_nodes/testnet",id:"guide/chains_and_nodes/testnet",isDocsHomePage:!1,title:"Testnet",description:"A public testnet for developers to try out smart contracts",source:"@site/docs/guide/chains_and_nodes/testnet.md",sourceDirName:"guide/chains_and_nodes",slug:"/guide/chains_and_nodes/testnet",permalink:"/docs/guide/chains_and_nodes/testnet",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/guide/chains_and_nodes/testnet.md",version:"current",frontMatter:{keywords:["ISCP","Smart Contracts","TestNet"],description:"A public testnet for developers to try out smart contracts",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Chain Management",permalink:"/docs/guide/chains_and_nodes/chain-management"},next:{title:"Rust/WASM Based Smart Contracts",permalink:"/docs/guide/rust_wasm/introduction"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Endpoints",id:"endpoints",children:[]},{value:"Configuring <em>wasp-cli</em>",id:"configuring-wasp-cli",children:[]}],u={toc:l};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"testnet"},"Testnet"),(0,i.kt)("p",null,"The testnet is deployed for the community to use for testing and interacting with smart contracts. "),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This testnet is deployed with our own GoShimmer cluster dedicated to backing smart contracts. There are multiple committee nodes that do the work for the chain as well as multiple access nodes that are exposed via the endpoints listed below. We do throttle the endpoints to prevent overloading the testnet because we are looking for functionality testing more than stress testing. "),(0,i.kt)("h2",{id:"endpoints"},"Endpoints"),(0,i.kt)("p",null,"The testnet can be accessed via a series of endpoints that hve been made available. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wasp.sc.iota.org"},"https://wasp.sc.iota.org"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The Wasp dashboard to explore the node configuration and view peering/chain configurations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wasp.sc.iota.org/api/"},"https://wasp.sc.iota.org/api/"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The Wasp api to deploy and interact with smart contracts"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wasp.sc.iota.org/api/info"},"https://wasp.sc.iota.org/api/info"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Information about the Wasp access node"))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://goshimmer.sc.iota.org"},"https://goshimmer.sc.iota.org"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The GoShimmer dashboard to explore the Tangle backing our smart contract testnet"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://goshimmer.sc.iota.org/api/"},"https://goshimmer.sc.iota.org/api/"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The GoShimmer api to interact with the Tangle directly"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://goshimmer.sc.iota.org/api/info"},"https://goshimmer.sc.iota.org/api/info"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Information about GoShimmer via the API"))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://demo.sc.iota.org"},"https://demo.sc.iota.org"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Our FairRoulette demo application to see a live smart contract")))),(0,i.kt)("h2",{id:"configuring-wasp-cli"},"Configuring ",(0,i.kt)("em",{parentName:"h2"},"wasp-cli")),(0,i.kt)("p",null,"You will need to initialize ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp-cli")," in order to create a seed that will be used to generate addresses."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wasp-cli init\n")),(0,i.kt)("p",null,"Now we need to tell ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp-cli")," how to reach our GoShimmer node."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wasp-cli set goshimmer.api https://goshimmer.sc.iota.org/api\n")),(0,i.kt)("p",null,"In order to deploy a smart contract you will need some funds. The wasp-cli tool makes this easy on our testnet. Run the following command to request some funds."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wasp-cli request-funds\n")),(0,i.kt)("p",null,"We need to let ",(0,i.kt)("em",{parentName:"p"},"wasp-cli")," know how to reach ",(0,i.kt)("em",{parentName:"p"},"Wasp")," by configuring the API address."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wasp-cli set wasp.0.api https://wasp.sc.iota.org/api\n")),(0,i.kt)("p",null,"Now you need to set the chain ID in ",(0,i.kt)("em",{parentName:"p"},"wasp-cli")," so that the correct chain can be found. Yo can find the ChainID by navigating to the (chains)","[https://wasp.sc.iota.org/chains]"," page of the wasp dashboard. Click on the ChainID of the chain you will be able to copy the ChainID from the next page. It will be formatted like ",(0,i.kt)("inlineCode",{parentName:"p"},"dCwCC8D2v2MJKtj4gvi8ixVtoerGDp9aVbAxbCyPGSwn"),". "),(0,i.kt)("p",null,"Use the ChainID to tell ",(0,i.kt)("em",{parentName:"p"},"wasp-cli")," which chain you want to interact with. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wasp-cli set chains.testchain dCwCC8D2v2MJKtj4gvi8ixVtoerGDp9aVbAxbCyPGSwn\nwasp-cli set chain testchain\n")),(0,i.kt)("p",null,"On the ",(0,i.kt)("strong",{parentName:"p"},"testchain")," we have deployed a FairRoulette game that you can use to make sure your configuration is correct."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wasp-cli --verbose chain post-request fairroulete placeBet string number int 2\n")),(0,i.kt)("p",null,"For simplicity, here is the full set of commands to configure ",(0,i.kt)("em",{parentName:"p"},"wasp-cli"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wasp-cli init\nwasp-cli set goshimmer.api https://goshimmer.sc.iota.org/api\nwasp-cli request-funds\nwasp-cli set wasp.0.api https://wasp.sc.iota.org/api\nwasp-cli set chains.testchain dCwCC8D2v2MJKtj4gvi8ixVtoerGDp9aVbAxbCyPGSwn\nwasp-cli set chain testchain\n")))}m.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(h,o(o({ref:t},l),{},{components:n})):a.createElement(h,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);