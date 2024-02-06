import Suitelet from "SuiteScripts/Suitelet";

import record from "N/record";
import Record from "N/record/instance";

jest.mock("N/record");
jest.mock("N/record/instance");

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

        record.load.mockReturnValue(Record);
        Record.save.mockReturnValue(1352);

        // when
        Suitelet.onRequest(context);

        // then
        expect(record.load).toHaveBeenCalledWith({id: 1352});
        expect(Record.setValue).toHaveBeenCalledWith({fieldId: 'memo', value: 'foobar'});
        expect(Record.save).toHaveBeenCalledWith({enableSourcing: false});
    });
});