let fs = require('fs');
let origTransformer = require('./node_modules/react-native/packager/transformer');


function getSvgBase64(src) {
  var buf = new Buffer(src);
  var result = buf.toString('base64');
  return 'module.exports =  {uri: "data:image/svg+xml;base64,'+  result + '"}';
}

function transform(src, fileName, options) {

  if (/svg$/.test(fileName)) {
    //src为utf-8格式，需要重新读取
    var src = fs.readFileSync(fileName);
    var code = getSvgBase64(src);
    // console.log('svg...........',code, src ,fileName,options);
    try{
      return origTransformer.transform(code, fileName, options);
    }catch(e) {
      //git图片有bug
      return {
        ast: null,
        code: code,
        fileName: fileName,
        map: null
      }
    }
  }else {
    return origTransformer.transform(src, fileName, options);
  }
}
function getCacheKey(options) {
  return origTransformer.getCacheKey(options);
}
module.exports = {
  transform: transform,
  getCacheKey: getCacheKey
};
