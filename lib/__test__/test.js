"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _1 = require("../");
describe("it", () => {
    it("tests sync function", () => {
        expect(_1.foo()).toEqual("foo!");
    });
    it("tests async function", (done) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        expect(yield _1.fooAsync()).toEqual('foo!?');
        done();
    }));
});
