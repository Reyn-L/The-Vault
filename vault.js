/*jshint esversion: 6 */
'use strict';
function vaultGenerator() {
   let obj = {};
  function setValue(key, value){

      obj[key]= value;
      return obj;
  }
  function getValue(key){
    //if no key is used, return null
    if(!key){
      return null;
    //setting my value from setValue function to null
    } else if (obj[key] === undefined) {
      return null;
    } else {
      //if those don't apply return value
      return obj[key];
    }
/*  if(obj[key]){
      return obj[key];
    } else {
      return null;
    }*/

 }
  return{
    getValue : getValue,
    setValue : setValue
  };
}

/*Did not understand why this worked, can I get an explanation?
Willing to redo all of this to get a better understanding
or find out better ways to solve this*/








module.exports = vaultGenerator;
var vault = vaultGenerator();
vault.setValue("cat", "meow");

vault.setValue("dog", "ruff");
console.log(vault.getValue("cat"));
