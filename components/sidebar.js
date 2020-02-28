(function(){

    let sidebar = angular.module("sidebar", [
        'ngMaterial',
        'ngMessages', 
        'material.svgAssetsCache'
    ]);

   sidebar.component("sidebar", {
       controller: "sidebarCtrl",
       controllerAs: "sidebar",
       templateUrl: "components/sidebar.html"
   });

    sidebar.controller(
    "sidebarCtrl", function($scope, $timeout, $mdSidenav){
    this.app = $scope.$parent.app;
    let sidebar = this;

    sidebar.toggleLeft = buildToggler('left');
    sidebar.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }

    });

})();