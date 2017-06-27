# react-native-imagebase64-plugin

目前只支持svg，其他格式可以同样方法增加

## 用法
* 移除默认assets格式，没有找到可配置的参数，--assetExts是会push进去，只能增加格式，不能减少格式，所以更改源代码，更改 ./node_modules/react-native/packager/defaults.js 内 assets 内的格式，比如需要转svg格式，就移除svg格式，一旦更改，就是全局性的，所有该格式的都会生效   
* 把移除的格式加入--sourceExts, 比如 --sourceExts 'svg,png', 发现 config文件内配置无效，只能命令行配置    
* 命令行启动，比如 node-debug  node_modules/react-native/local-cli/cli.js start  --transformer $(pwd)/transform-plugin.js  --sourceExts 'js,svg' 

## 效果
```javascript
  <Image source={require('./xxxx.svg')}/>
  <Image source={{uri:"data:image/svg+xml;base64,......"}}>
```

