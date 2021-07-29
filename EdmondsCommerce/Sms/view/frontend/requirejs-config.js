var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/action/set-shipping-information': {
                'EdmondsCommerce_Sms/js/action/set-shipping-information-mixin': true
            },
            'Magento_Checkout/js/action/create-shipping-address': {
                'EdmondsCommerce_Sms/js/action/create-shipping-address-mixin': true
            },
            'Magento_Checkout/js/action/create-billing-address': {
                'EdmondsCommerce_Sms/js/action/set-billing-address-mixin': true
            },
            'Magento_Checkout/js/action/place-order': {
                'EdmondsCommerce_Sms/js/action/set-billing-address-mixin': true
            },
            'Magento_Checkout/js/action/set-billing-address': {
                'EdmondsCommerce_Sms/js/action/set-billing-address-mixin': true
            }
        } 
    }
};