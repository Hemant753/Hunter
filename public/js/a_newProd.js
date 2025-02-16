const app = angular.module('adminApp', []);

app.controller('adminCtrl', ['$scope', function ($scope) {
    $scope.product = {
        name: '',
        price: '',
        disPrice: '',
        finalPrice: '' ,
        panelColor: '#ffffff',
        bottompanel: '#ffffff',
        textColor: '#000000',
        disColor: '#101010'
    };

    $scope.$watchGroup(['product.price', 'product.disPrice'], function (newValues) {
        const [price, disPrice] = newValues;
        $scope.discount = (price/100)*disPrice;
        $scope.product.finalPrice = price - $scope.discount ;
    });

    $scope.publishProduct = function () {
        console.log('Product Published:', $scope.product);
        alert('Product published successfully!');
    };
}]);



document.getElementById('fileInput').addEventListener('change', function (event) {
    const file = event.target.files[0];

    if (file) {
        const validExtensions = ['image/png'];
        if (!validExtensions.includes(file.type)) {
            alert('Please upload a PNG file.');
            return;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
            const previewImage = document.getElementById('previewImage');
            previewImage.src = e.target.result;
            previewImage.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

