# 微前端实践
基于qiankun(https://github.com/umijs/qiankun)

主要细化qiankun example，希望我踩过的坑大家能跳过去，节省时间~

***根据qiankun更新进度不定时修改完善***

有帮助的话别忘了start(https://github.com/CHU295/Micro-Frontends-practice)

# 目录介绍
项目目前编写了vue、react两种实现方式

根项目:main_react / main_vue

子项目:react_ / react_eject / vue / react_webpack

五个项目独立存在

请先运行子项目，再运行父项目

- ## 一、main_react 
> 根项目 create-react-app版本
1. 安装qiankun，`yarn add qiankun  # or npm i qiankun -S`
> 可选isomorphic-fetch
2. 修改src/App.js创建qiankun主框架
- ## 二、main_vue 
> 根项目 vue-cli搭建版本
1. 安装qiankun，`yarn add qiankun  # or npm i qiankun -S`
> 可选isomorphic-fetch
2. 修改src/main.js创建qiankun主框架

- ## 三、react_ 
**子项目 create-react-app版本**
>采用react-app-rewired修改webpack相关配置
1. 安装react-app-rewired 

`npm install react-app-rewired --save-dev`

2. 修改package.josn文件scripts命令，替换react-scripts为react-app-rewired
```
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test",
  "eject": "react-scripts eject"
},
```
3. 添加 config-overrides.js 文件到根目录
> 可添加.env配置端口等等
4. 修改src/index.js导入生命周期

- ## 四、react_eject
**子项目  create-react-app版本**
>与上一个不同，本项目使用eject命令展开了默认配置

1. 修改src/index.js导入生命周期
2. 修改config/webpack.config.js，output新增参数。注意参数写法
```
library: `${appPackageJson.name}-[name]`,
libraryTarget: 'umd',
jsonpFunction: `webpackJsonp_${appPackageJson.name}`,
```
3. 按需修改config/webpackDevServer.config.js，一般只需添加header允许跨域等等
```
headers: {
  'Access-Control-Allow-Origin': '*',
},
```

- ## 五、vue 
**子项目  vue-cli搭建版本**

1. vue-cli生成后根目录添加vue.config.js文件
2. 修改src/main.js导入生命周期

- ## 六、react_webpack
**子项目  webpack 简易搭建的react项目**


# 特殊说明
1. 注意挂载的节点id，子父不得同名。
例：子父皆为react项目，同时挂在到#root
2. `__webpack_public_path__` 相关报错是eslint配置，可以忽略或者备注下

---
## 雷点
1. 运行过程中修改create-react-app子项目，强刷根项目可能会报错缺少生命周期，重启子项目即可
