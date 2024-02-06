import Suitelet from "SuiteScripts/Suitelet-2";
import record from "N/record";

jest.mock("N/record");

beforeEach(() => {
    jest.clearAllMocks();
});


describe("Suitelet Test", () => {
    it("Sales Order memo field has been updated", () => {
        // given
        const context = {
            request: {
                method: 'GET',
                parameters: {
                    salesOrderId: 1352
                }
            }
        };

        record.submitFields = jest.fn();

        // when
        Suitelet.onRequest(context);

        // then
        expect(record.submitFields).toHaveBeenCalledWith({
            type: record.Type.SALES_ORDER,
            id: 1352,
            values: {
                'memo': 'foobar'
            },
            options: {
                enableSourcing: false,
                ignoreMandatoryFields : true
            }
        });
    });
});
