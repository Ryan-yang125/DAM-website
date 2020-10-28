**Tech:**

**Front end:**

- **Client**: html5 + css + js with needed react.js

- **3D loading:** webgl / three.js

**Back end:**

- **Server:** node.js with needed express.js

- **Database:** MongoDB

- **Deploy:** Aliyun / firebase

**功能：**

**客户端**：

**HomePage:**

- 导航栏

- 注册/登录
- 直接进入

**Gif Gallery:**

- 用户页面（简单展示收藏）

- 导航栏

- 分类栏（一个下拉菜单）
- 搜索 🔍
- 预览图.gif（水印）（按收藏数排序）

**3D model**

- 加载完成前的 Login icon
- 导航栏（跳转用户页面）

- 3D model 的加载/观察
- 左右 ↔️ 滑
- 相关信息
- 收藏(login required)
- 下载(login required)

**服务端：**

- 用户信息（username, password, likes）
- 预览图的呈现方式
- 相关信息的获取

- 收藏/下载管理

**分工：**

- zy + cdt + wjj

  3 个单页面静态网页，不用做跳转、分类、检索等功能，只要把对应的 button/链接 🔗 样式放在那里就可以了。用 bootstrap 或者其他你们觉得好看的 css 组件库。

- Lyz + lhc

  3D model 的加载（到浏览器缓存中）和观察功能，能够实现在 3D model 间切换而不用返回上一页面的 gif 再切换（如果很慢就算了）

- yr 其他
