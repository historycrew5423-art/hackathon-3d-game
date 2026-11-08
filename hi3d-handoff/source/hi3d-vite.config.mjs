import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=path.dirname(fileURLToPath(import.meta.url));
export default {
 root,base:'./',publicDir:false,
 resolve:{alias:{three:path.join(root,'vendor','three.module.js')}},
 server:{host:'127.0.0.1',open:'/hi3d-index.html'},
 build:{outDir:'dist',emptyOutDir:true,assetsDir:'assets',rollupOptions:{input:path.join(root,'hi3d-index.html'),output:{entryFileNames:'assets/hi3d-[name]-[hash].js',chunkFileNames:'assets/hi3d-[name]-[hash].js',assetFileNames:'assets/hi3d-[name]-[hash][extname]'}}}
};
