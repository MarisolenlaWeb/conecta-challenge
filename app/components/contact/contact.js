(function(){
    'use strict'
    
    var contact = {
        controller: contactCtrl,
        templateUrl: 'app/components/contact/contact.html' 
    };

    function contactCtrl(){
        var asController = this;
 
  };

    angular
      .module('conectaApp')
      .component('contact', contact); 
})();