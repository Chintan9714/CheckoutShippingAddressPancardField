define([
    'jquery',
    'mage/utils/wrapper',
    'Magento_Checkout/js/model/quote'
], function ($, wrapper,quote) {
    'use strict';

    return function (setShippingInformationAction) {
        return wrapper.wrap(setShippingInformationAction, function (originalAction, messageContainer) {

            if (messageContainer.customAttributes != undefined) {
                $.each(messageContainer.customAttributes , function( key, value ) {
                    messageContainer['customAttributes'][key] = {'attribute_code':key,'value':value};
                });
            }

            return originalAction(messageContainer);
        });
    };
});
