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
                let salesOrderRecord = record.load({id: salesOrderId});
                salesOrderRecord.setValue({fieldId: 'memo', value: "foobar"});
                salesOrderRecord.save({enableSourcing: false});
            }
        }
    };
});