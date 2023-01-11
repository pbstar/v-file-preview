## v-file-preview 官方文档

v-file-preview 是一个文件在线预览工具。

### 安装

```
npm i v-file-preview
```

### 引入
```
// main.js

import vFilePreview from "v-file-preview";
import "v-file-preview/lib/v-file-preview.css";
Vue.use(vFilePreview);
```

### 使用

```
<vFilePreview src="http%3A%2F%2Foss.mcweb.club%2F1.doc&type=8888" />
```