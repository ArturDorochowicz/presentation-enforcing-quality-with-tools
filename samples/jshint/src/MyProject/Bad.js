(function (window) {
    'use strict';
   
    function calculateCost(order) {
        return
            order.getProductsCost() +
            order.getShippingCost();
    }

    window.calculateCost = calculateCost;

}(window));
