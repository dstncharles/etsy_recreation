(function(){
  'use strict';



var buffaloBills = rawData.results;

  $(document).ready(function(){

  var $list = $('.items-list');
  buffaloBills.forEach(function(title){
    var titleText = renderTemplate('title-item', {
      name: title.name
      });
    $list.append(titleText);
  });




  //
  // buffaloBills.forEach(function(item){
  //   console.log(item.title);
  // });
  // buffaloBills.forEach(function(item){
  //   console.log(item.Images);
  // });







});();
