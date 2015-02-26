angular.module('navigationModule').controller('navigationController', ['$scope', 'appTitle', 'navigationService',
  function ($scope, appTitle, navigationService) {

    var ctrl = this;

    ctrl.appTitle = appTitle + '!';

    ctrl.getNavItems = function() {
      navigationService.getNavItems().then(function (items) {
        ctrl.items = items.list || [];
      })
        .catch(function (error) {
          console.log('error: ', error);
        });
    };

    ctrl.getNavItems();


    // this should work?????
    ctrl.submitForm = function(isValid) {

      if (isValid) {
        alert('Wheres the backend?!?!');
        console.log('where is anything');
      }

    };

  }]);
