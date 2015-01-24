(function(){
  'use strict';

var buffaloBillsListings = rawData.results;

  $(document).ready(function(){

    var $list = $('.items-list');

    buffaloBillsListings.forEach(function(billsListing){
      var titleText = renderTemplate('billsListing', {
        title: billsListing.title,
        price: billsListing.price,
        images: billsListing.Images[0].url_170x135,
        pictureLink: billsListing.url,
        shop: billsListing.Shop.shop_name
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



  var sortByPrice = function(array) {
    return _.sortBy(array, "price").reverse();
  };

    console.log(sortByPrice(buffaloBillsListings));




})();
