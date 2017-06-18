/*jshint esversion: 6 */
'use strict';
function vaultGenerator() {
   let obj = {};
  function setValue(key, value){

      obj[key]= value;
      return obj;
  }
  function getValue(key){
    if(obj[key]){
      return obj[key];
    } else {
      return null;
    }
    /*if(!key){

      return null;
    } else if(key !== obj[key]){
        console.log("hi");
      return null;

    } else if( key === obj.[key]);

      return obj[key];
    }*/
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
