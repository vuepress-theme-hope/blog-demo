function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as o,aa as a}from"./app-BN-AvEq2.js";const i=async()=>{try{const{pageviewCount:e}=await o(()=>import("./app-BN-AvEq2.js").then(r=>r.ab),__vite__mapDeps([])),t=a();return e({serverURL:t.serverURL})}catch{console.error("@waline/client is not installed!")}};export{i as updatePageview};
