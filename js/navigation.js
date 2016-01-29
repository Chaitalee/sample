
var adminurl="http://192.168.0.117/selfbackend/index.php/json/";
var iurl="http://192.168.0.117/selfbackend/uploads";
var navigationservice = angular.module('navigationservice', [])



.factory('NavigationService', function($http) {
  var navigation = [{
    name: "Home",
    classis: "active",
    link: "#/home",
    subnav: [{
      name: "Subnav1",
      classis: "active",
      link: "#/home"
    }]
  }];

  return {

    getSlider: function (callback) {
      $http.get(adminurl + 'getSlide').success(callback);
    },

        getctg: function (callback) {
          $http.get(adminurl + 'getCategory').success(callback);
        },

        getcatdet: function (cat,callback) {
          $http.get(adminurl + 'getProductsByCategory?categoryid='+cat).success(callback);
        },
        getsubctg: function (idd,callback) {
          $http.get(adminurl + 'getSubCategory?id='+idd).success(callback);
        },


        getsub: function (cid,sid,callback) {
          $http.get(adminurl + 'getProductsByCategory?categoryid='+cid+'&subcategories='+sid).success(callback);
        },


    getnav: function() {
      return navigation;
    },
    makeactive: function(menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },

  };
});
