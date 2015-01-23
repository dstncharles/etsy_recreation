(function(){
  'use strict';



var buffaloBillsListings = rawData.results;

  $(document).ready(function(){

    var $list = $('.items-list');
    buffaloBillsListings.forEach(function(billsListing){
      var titleText = renderTemplate('billsListing', {
        name: "The Name"
      });
      $list.append(titleText);
    });

  });

  function renderTemplate(name, data) {
    var $template = $('[data-template-name=' + name + ']').text();
    $.each(data, function(prop, value) {
      $template = $template.replace('<% ' + prop + ' %>', value);
    });
    return $template;
  }







})();
