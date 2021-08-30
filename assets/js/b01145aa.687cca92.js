(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[4751],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return u}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),d=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=d(e.components);return o.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=d(t),u=r,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||a;return t?o.createElement(h,i(i({ref:n},l),{},{components:t})):o.createElement(h,i({ref:n},l))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7171:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return l},default:function(){return m}});var o=t(2122),r=t(9756),a=(t(7294),t(3905)),i=["components"],s={},p="How to run a Wasp node",d={unversionedId:"misc/runwasp",id:"misc/runwasp",isDocsHomePage:!1,title:"How to run a Wasp node",description:"Here we describe step by step instructions how to run Wasp nodes on a Goshimmer network.",source:"@site/docs/misc/runwasp.md",sourceDirName:"misc",slug:"/misc/runwasp",permalink:"/docs/misc/runwasp",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/misc/runwasp.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The `_default` contract",permalink:"/docs/contract_core/default"},next:{title:"Using `wasp-cli` to deploy a chain and a contract",permalink:"/docs/misc/deploy"}},l=[{value:"Step 1: Compile &amp; install",id:"step-1-compile--install",children:[]},{value:"Step 2: Run Goshimmer",id:"step-2-run-goshimmer",children:[]},{value:"Run Wasp",id:"run-wasp",children:[{value:"Wasp settings",id:"wasp-settings",children:[]}]},{value:"Now what?",id:"now-what",children:[]}],c={toc:l};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-run-a-wasp-node"},"How to run a Wasp node"),(0,a.kt)("p",null,"Here we describe step by step instructions how to run Wasp nodes on a Goshimmer network."),(0,a.kt)("h2",{id:"step-1-compile--install"},"Step 1: Compile & install"),(0,a.kt)("p",null,"You will need the ",(0,a.kt)("inlineCode",{parentName:"p"},"wasp"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"wasp-cli")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"goshimmer")," commands installed in\nthe system."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"goshimmer")," command must be compiled from the Goshimmer repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git clone https://github.com/iotaledger/goshimmer.git\n$ cd goshimmer\n$ go install -tags rocksdb\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"wasp")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"wasp-cli")," commands can be installed from this repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git clone https://github.com/iotaledger/wasp.git\n$ cd wasp\n$ go install -tags rocksdb ./...\n")),(0,a.kt)("h2",{id:"step-2-run-goshimmer"},"Step 2: Run Goshimmer"),(0,a.kt)("p",null,"Create an empty working directory for Goshimmer, and download the ",(0,a.kt)("inlineCode",{parentName:"p"},"snapshot.bin")," file needed for bootstrap:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ mkdir goshimmer-node\n$ cd goshimmer-node\n$ curl 'https://raw.githubusercontent.com/iotaledger/goshimmer/master/snapshot.bin' -O\n")),(0,a.kt)("p",null,"Start the Goshimmer node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ goshimmer \\\n        --skip-config=true \\\n        --analysis.client.serverAddress=ressims.iota.cafe:21888 \\\n        --autopeering.port=14626 \\\n        --dashboard.bindAddress=0.0.0.0:8081 \\\n        --gossip.port=14666 \\\n        --webapi.bindAddress=0.0.0.0:8080 \\\n        --profiling.bindAddress=0.0.0.0:6061 \\\n        --networkdelay.originPublicKey=9DB3j9cWYSuEEtkvanrzqkzCQMdH1FGv3TawJdVbDxkd \\\n        --fpc.bindAddress=0.0.0.0:10895 \\\n        --prometheus.bindAddress=0.0.0.0:9311 \\\n        --autopeering.entryNodes=2PV5487xMw5rasGBXXWeqSi4hLz7r19YBt8Y1TGAsQbj@ressims.iota.cafe:15626,5EDH4uY78EA6wrBkHHAVBWBMDt7EcksRq6pjzipoW15B@entryshimmer.tanglebay.com:14646 \\\n        --node.disablePlugins= \\\n        --node.enablePlugins=remotelog,networkdelay,spammer,prometheus,faucet,txstream \\\n        --faucet.seed=7R1itJx5hVuo9w9hjg5cwKFmek4HMSoBDgJZN8hKGxih \\\n        --logger.level=info \\\n        --logger.disableEvents=false \\\n        --logger.remotelog.serverAddress=ressims.iota.cafe:5213 \\\n        --drng.pollen.instanceId=1 \\\n        --drng.pollen.threshold=3 \\\n        --drng.pollen.committeeMembers=AheLpbhRs1XZsRF8t8VBwuyQh9mqPHXQvthV5rsHytDG,FZ28bSTidszUBn8TTCAT9X1nVMwFNnoYBmZ1xfafez2z,GT3UxryW4rA9RN9ojnMGmZgE2wP7psagQxgVdA4B9L1P,4pB5boPvvk2o5MbMySDhqsmC2CtUdXyotPPEpb7YQPD7,64wCsTZpmKjRVHtBKXiFojw7uw3GszumfvC4kHdWsHga \\\n        --drng.xteam.instanceId=1339 \\\n        --drng.xteam.threshold=4 \\\n        --drng.xteam.committeeMembers=GUdTwLDb6t6vZ7X5XzEnjFNDEVPteU7tVQ9nzKLfPjdo,68vNzBFE9HpmWLb2x4599AUUQNuimuhwn3XahTZZYUHt,Dc9n3JxYecaX3gpxVnWb4jS3KVz1K1SgSK1KpV1dzqT1,75g6r4tqGZhrgpDYZyZxVje1Qo54ezFYkCw94ELTLhPs,CN1XLXLHT9hv7fy3qNhpgNMD6uoHFkHtaNNKyNVCKybf,7SmttyqrKMkLo5NPYaiFoHs8LE6s7oCoWCQaZhui8m16,CypSmrHpTe3WQmCw54KP91F5gTmrQEL7EmTX38YStFXx\n")),(0,a.kt)("p",null,"Note: argument values are adapted from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/goshimmer/wiki/Setup-up-a-GoShimmer-node-%28Joining-the-pollen-testnet%29"},"these instructions"),".\nWe do not provide Docker images yet."),(0,a.kt)("p",null,"Note: by default the TXStream plugin will be listening for Wasp connections on port ",(0,a.kt)("inlineCode",{parentName:"p"},"5000"),".\nTo change this setting you can add the argument ",(0,a.kt)("inlineCode",{parentName:"p"},"--txstream.port: 12345"),"."),(0,a.kt)("h2",{id:"run-wasp"},"Run Wasp"),(0,a.kt)("p",null,'Note: it is possible to run a "committee" composed of a single Wasp node, and\nthis may be fine for testing purposes. However, in normal operation the idea is\nto have multiple Wasp nodes in order to run the smart contracts in a\ndistributed fashion. If you want to run a committee of several nodes on the\nsame machine, ensure that each Wasp instance runs in separate directory with\nits own ',(0,a.kt)("inlineCode",{parentName:"p"},"config.json")," and database. Ports and other settings must be adjusted\naccordingly."),(0,a.kt)("p",null,"Also, for testing purposes, all Wasp nodes can be connected to the same\nGoshimmer instance.  In normal operation, it is recommended for each Wasp node\nto connect to a different Goshimmer instance."),(0,a.kt)("p",null,"Create an empty working directory for the Wasp node, copy the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/master/config.json"},(0,a.kt)("inlineCode",{parentName:"a"},"config.json")),"\nfile, and change it as needed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ mkdir wasp-node\n$ cp config.json wasp-node\n$ <edit wasp-node/config.json>\n")),(0,a.kt)("p",null,"Finally, start the Wasp node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ cd wasp-node\n$ wasp\n")),(0,a.kt)("p",null,"You can check that your node is running by opening the dashboard with a web\nbrowser at ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:7000"),"."),(0,a.kt)("p",null,"That's it! Repeat this process to launch as many nodes as you want for your\ncommittee."),(0,a.kt)("h3",{id:"wasp-settings"},"Wasp settings"),(0,a.kt)("p",null,"Below we explain some settings in ",(0,a.kt)("inlineCode",{parentName:"p"},"config.json")," you may need to adjust. You\nwill need to adjust ports especially if you plan to run several nodes in the\nsame host."),(0,a.kt)("h4",{id:"peering"},"Peering"),(0,a.kt)("p",null,"Wasp nodes connect to other Wasp peers to form committees. There is exactly one\nTCP connection between two Wasp nodes participating in the same committee. Each\nnode uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"peering.port")," setting to specify the port for peering."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"peering.netid")," must have the form ",(0,a.kt)("inlineCode",{parentName:"p"},"host:port"),", with ",(0,a.kt)("inlineCode",{parentName:"p"},"port")," equal to\n",(0,a.kt)("inlineCode",{parentName:"p"},"peering.port"),", and where ",(0,a.kt)("inlineCode",{parentName:"p"},"host")," must resolve to the machine where the node is\nrunning, and must be reachable by other nodes in the committee. Each node in a\ncommittee must have a unique ",(0,a.kt)("inlineCode",{parentName:"p"},"netid"),"."),(0,a.kt)("h4",{id:"goshimmer-connection-settings"},"Goshimmer connection settings"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"nodeconn.address")," specifies the Goshimmer host and port (exposed by the TXStream plugin) to\nconnect to."),(0,a.kt)("h4",{id:"publisher"},"Publisher"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"nanomsg.port")," specifies the port for the Nanomsg event publisher. Wasp nodes\npublish important events happening in smart contracts, such as state\ntransitions, incoming and processed requests and similar.  Any Nanomsg client\ncan subscribe to these messages. More about the Publisher ",(0,a.kt)("a",{parentName:"p",href:"/docs/misc/publisher"},"here"),"."),(0,a.kt)("h4",{id:"web-api"},"Web API"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"webapi.bindAddress")," specifies the bind address/port for the Web API, used by\n",(0,a.kt)("inlineCode",{parentName:"p"},"wasp-cli")," and other clients to interact with the Wasp node."),(0,a.kt)("h4",{id:"dashboard"},"Dashboard"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dashboard.bindAddress")," specifies the bind address/port for the node dashboard,\nwhich can be accessed with a web browser."),(0,a.kt)("h2",{id:"now-what"},"Now what?"),(0,a.kt)("p",null,"Now that you have one or more Wasp nodes you can use the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/tree/master/tools/wasp-cli"},(0,a.kt)("inlineCode",{parentName:"a"},"wasp-cli"))," tool to ",(0,a.kt)("a",{parentName:"p",href:"/docs/misc/deploy"},"deploy a chain and smart\ncontracts"),"."))}m.isMDXComponent=!0}}]);