angular.module('popupApp', [])
.controller('PopupController', ['$scope', '$timeout', function ($scope, $timeout) {
  $scope.isPopupVisible = false;
  $scope.quantity = 1;
  $scope.sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  $scope.selectedSize = null;

  $scope.showPopup = function () {
    $scope.isPopupVisible = true;
  };

  $scope.hidePopup = function () {
    $scope.isPopupVisible = false;
  };

  $scope.addToCart = function () {
    alert(`Added ${$scope.quantity} item(s) of size ${$scope.selectedSize} to cart`);
    $scope.hidePopup();
  };

  $scope.increaseQuantity = function () {
    $scope.quantity++;
  };

  $scope.decreaseQuantity = function () {
    if ($scope.quantity > 1) $scope.quantity--;
  };

  $scope.selectSize = function (size) {
    $scope.selectedSize = size;
  };
}]);




let imgZoom = document.getElementById("img-zoom");

if (imgZoom) {
  imgZoom.addEventListener("mousemove", (event) => {
    imgZoom.style.cursor = "zoom-in"; // Change cursor type

    imgZoom.style.setProperty("--display", "block");

    let pointer = {
      x: (event.offsetX * 100) / imgZoom.offsetWidth,
      y: (event.offsetY * 100) / imgZoom.offsetHeight,
    };

    imgZoom.style.setProperty("--zoox-x", pointer.x + "%");
    imgZoom.style.setProperty("--zoox-y", pointer.y + "%");
  });

  imgZoom.addEventListener("mouseout", () => {
    imgZoom.style.setProperty("--display", "none");
  });
}
