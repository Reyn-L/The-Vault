/*jshint esversion: 6 */
'use strict';
function vaultGenerator() {
   var test = {};
  function setValue(key, value){

      //test[key]= value;
      //return test;
  }
  function getValue(key){
    if(!key){
      return null;
    } else if( key !== test.key){
      return null;
    }

  }
  return{
    getValue: getValue,
    setValue : setValue
  };
}

module.exports = vaultGenerator;
var vault = vaultGenerator();
vault.setValue("cat", "meow");

vault.setValue("dog", "ruff");
console.log(vault.getValue("cat"));
