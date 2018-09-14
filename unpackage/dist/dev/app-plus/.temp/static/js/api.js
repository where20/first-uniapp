//域名地址 请替换成自己的域名或IP
var prefix = 'https://xcpt.gzxmyy.com';

/*接口地址开始*/
//授权获取微信用户信息url
const oauthurl = prefix + '/wcsp/oauth';
//颜值分析url
const faceurl = prefix+'/rest/face/detect';
//文字识别url
const ocrurl = prefix + '/rest/detect';
//菜品识别url
const dishurl = prefix + '/rest/detect?apiType=dish';
//车型识别url
const carurl = prefix + '/rest/detect?apiType=car';
//植物识别url
const planturl = prefix + '/rest/detect?apiType=plant';
//动物识别url
const animalurl = prefix + '/rest/detect?apiType=animal';
//logo识别url
const logourl = prefix + '/rest/detect?apiType=logo';
//通用物体识别url
const generalurl = prefix + '/rest/detect?apiType=general';

function getOauthUrl() {
  return oauthurl;
}
function getFaceUrl(){
  return faceurl;
}
function getOcrUrl(){
  return ocrurl;
}
function getDishUrl() {
  return dishurl;
}
function getCarUrl(){
  return carurl;
}
function getPlantUrl(){
  return planturl;
}
function getAnimalUrl(){
  return animalurl;
}
function getLogoUrl(){
  return logourl;
}
function getGeneralUrl(){
  return generalurl;
}

/*暴露常量函数*/
module.exports.getOauthUrl = getOauthUrl;
module.exports.getFaceUrl = getFaceUrl;
module.exports.getOcrUrl = getOcrUrl;
module.exports.getDishUrl = getDishUrl;
module.exports.getCarUrl = getCarUrl;
module.exports.getPlantUrl = getPlantUrl;
module.exports.getAnimalUrl = getAnimalUrl;
module.exports.getLogoUrl = getLogoUrl;
module.exports.getGeneralUrl = getGeneralUrl;