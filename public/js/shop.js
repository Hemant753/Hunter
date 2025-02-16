
angular.module('popupApp', [])
    .controller('PopupController', ['$scope', '$timeout', function ($scope, $timeout) {
        $scope.isPopupVisible = false;

        $scope.showPopup = function () {
            $scope.isPopupVisible = true;
        };

        $scope.hidePopup = function () {
            $scope.isPopupVisible = false;
            $timeout(function () {
                $scope.isPopupVisible = false;
            }, 300); // Wait for the animation to complete
        };

        $scope.confirm = function () {
            alert('Confirmed!');
            $scope.hidePopup();
        };

        $scope.cancel = function () {
            $scope.hidePopup();
        };
    }]);






    angular.module('buyPopupApp', [])
    .controller('PopupController', ['$scope', function($scope) {
      $scope.quantity = 1;
      $scope.sizes = ['S', 'M', 'L', 'XL', 'XXL'];
      $scope.selectedSize = null;

      $scope.addToCart = function() {
        alert(`Added ${$scope.quantity} item(s) to cart`);
        $scope.isPopupVisible = false;
      };

      $scope.increaseQuantity = function() {
        $scope.quantity++;
      };

      $scope.decreaseQuantity = function() {
        if ($scope.quantity > 1) $scope.quantity--;
      };

      $scope.selectSize = function(size) {
        $scope.selectedSize = size;
      };
    }]);