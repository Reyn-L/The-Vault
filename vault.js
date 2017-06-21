/*jshint esversion: 6 */
'use strict';
function vaultGenerator() {
 let obj = {};
 function setValue(key, value){

  obj[key]= value;
}

function getValue(key){
  if(obj.hasOwnProperty(key)){
    return obj[key];
  } else{
    return null;
  }
}

return{
  getValue : getValue,
  setValue : setValue
};
}








module.exports = vaultGenerator;
var vault = vaultGenerator();
vault.setValue("cat", "meow");

vault.setValue("dog", "ruff");
console.log(vault.getValue("cat"));
