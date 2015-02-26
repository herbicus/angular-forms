angular.module('site', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'navigationModule', 'home', 'about', 'contact']);

angular.module('site').config(function ($stateProvider, $urlRouterProvider) {

  /* Add New States Above */
  $urlRouterProvider.otherwise('/contact');

});

angular.module('site').value('appTitle', 'My Angular Application');


angular.module('site').run(function ($rootScope) {

  $rootScope.safeApply = function (fn) {
    var phase = $rootScope.$$phase;
    if (phase === '$apply' || phase === '$digest') {
      if (fn && (typeof(fn) === 'function')) {
        fn();
      }
    } else {
      this.$apply(fn);
    }
  };

});
