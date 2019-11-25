# 微前端实践
采用qiankun(https://github.com/umijs/qiankun)

主要细化qiankun demo操作，踩过的坑希望大家少浪费点时间~

***根据qiankun更新进度不定时修改完善***

有帮助的话别忘了start()

# 目录介绍
五个项目独立存在

请先运行子项目，然后运行父项目

- ## main_react 
> 根项目 create-react-app版本
1. 安装qiankun，`yarn add qiankun  # or npm i qiankun -S`
> 可选isomorphic-fetch
2. 修改src/App.js创建qiankun主框架
- ## main_vue 
> 根项目 vue-cli搭建版本
1. 安装qiankun，`yarn add qiankun  # or npm i qiankun -S`
> 可选isomorphic-fetch
2. 修改src/main.js创建qiankun主框架

- ## react_  子项目 create-react-app版本
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

- ## react_eject
** 子项目  create-react-app版本**
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

- ## vue 
**子项目  vue-cli搭建版本**

1. vue-cli生成后根目录添加vue.config.js文件
2. 修改src/main.js导入生命周期

# 特殊说明
注意挂载的节点id，子父不得同名，例：子父结尾react项目，同时挂在到#root