angular.module('adminApp', [])
    .controller('AdminController', function ($scope) {
        $scope.products = [
            { name: "Black Tshirt", price: 20, color: "#f3f4f6", bgcolor: "#bebebe" },
            { name: "Black Tshirt", price: 20, color: "#fef3c7", bgcolor: "#f8e69b" },
            { name: "Black Tshirt", price: 20, color: "#dbeafe", bgcolor: "#a9ccfa" },
            { name: "Black Tshirt", price: 20, color: "#fde2e4", bgcolor: "#f7bbbf" },
            { name: "Black Tshirt", price: 20, color: "#e0e7ff", bgcolor: "#abbcf8" },
            { name: "Black Tshirt", price: 20, color: "#fbcfe8", bgcolor: "#faa3d5" },
            { name: "Black Tshirt", price: 20, color: "#e3fcec", bgcolor: "#a6f8c4" },
            { name: "Black Tshirt", price: 20, color: "#fef9c3", bgcolor: "#f3e874" }
        ];

        $scope.deleteProduct = function (index) {
            $scope.products.splice(index, 1);
        };
    });
