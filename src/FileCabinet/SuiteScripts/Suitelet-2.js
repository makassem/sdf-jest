/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 * @NModuleScope SameAccount
*/

define(["N/record"], function(record) {
    return {
        onRequest: function(context) {
            if (context.request.method === 'GET') {
                const salesOrderId = context.request.parameters.salesOrderId;
                record.submitFields({
                    type: record.Type.SALES_ORDER,
                    id: salesOrderId,
                    values: {
                        memo: "foobar"
                    },
                    options: {
                        enableSourcing: false,
                        ignoreMandatoryFields: true // Optional: Set to true if you want to bypass mandatory field checks
                    }
                });
            }
        }
    };
});

