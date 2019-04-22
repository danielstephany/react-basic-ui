import React from 'react';
import MainRow from './mainRow.js';
import { shallow } from 'enzyme'

describe("tests for MainRow", function () {

    it("renders without crashing", function () {
        shallow(<MainRow />);
    });

    it("renders with added class", function () {
        const wrap = shallow(<MainRow className="test" />);
        expect(wrap.hasClass('test')).toBe(true);
    });

    it("renders with default class and added classes ", function () {
        const wrap = shallow(<MainRow className="test" />);
        expect(wrap.hasClass('main-row test')).toBe(true);
    });

    it("renders with the child data", function () {
        const wrap = shallow(<MainRow>test</MainRow>);
        expect(wrap.text()).toBe("test");
    });

});