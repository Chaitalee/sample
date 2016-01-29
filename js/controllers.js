angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.mySlides = [
    'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
  ];
})

.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
})


.controller('SliderCtrl', function($scope, TemplateService, NavigationService, $timeout, $http) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("slider");
  $scope.menutitle = NavigationService.makeactive("slider");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.mySlides = [];
  $scope.sld = function() {
    NavigationService.getSlider(function(data) {
      $scope.mySlides = data;
      console.log($scope.mySlides);
    });
  };


  $scope.sld();
})



.controller('DividerCtrl', function($scope, TemplateService, NavigationService, $timeout, $http) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("divider");
  $scope.menutitle = NavigationService.makeactive("divider");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.category = [];
  $scope.subcat = [];
  $scope.ctg = function() {
    NavigationService.getctg(function(data) {
      $scope.category = data;
      console.log($scope.category);
    });
  };
  $scope.det = function(val) {
    $scope.maincategory = val;
    NavigationService.getcatdet(val, function(data) {
      $scope.detail = data.data.queryresult;
      console.log($scope.detail);
      var data2 = _.chunk(data.data.queryresult, 4);
      console.log(data2);
      $scope.detail = data2;
    });
  };

  $scope.scat = function(id1) {
    NavigationService.getsubctg(id1, function(data) {
      $scope.subcat = data;
      console.log($scope.subcat);
    });
  };

  $scope.scat1 = function(sid) {
    NavigationService.getsub($scope.maincategory, sid, function(data) {
      $scope.subcat = data.data.queryresult;
      console.log($scope.subcat);
    });
  };
  $scope.ctg();

})

;
