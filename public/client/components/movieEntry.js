angular.module('main-app') // copied mostly from ng-cast

.directive('movieEntry', function() {
  return {
    scope: {
      movie: '<'
    },
    restrict: 'E',
    controller: function() {},
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'public/client/templates/movieEntry.html'
  };
});
