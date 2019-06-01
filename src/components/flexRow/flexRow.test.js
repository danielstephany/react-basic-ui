import React from 'react';
import FlexRow from './flexRow.js';
import { shallow } from 'enzyme'

describe("tests for flexRow", function () {

    it("renders without crashing", function () {
        shallow(<FlexRow />);
    });

    it("renders with added class", function () {
        const wrap = shallow(<FlexRow className="test" />);
        expect(wrap.hasClass('test')).toBe(true);
    });

    it("renders with default class and added classes ", function () {
        const wrap = shallow(<FlexRow className="test" />);
        expect(wrap.hasClass('flex-row test')).toBe(true);
    });

    it("renders with the child data", function () {
        const wrap = shallow(<FlexRow>test</FlexRow>);
        expect(wrap.text()).toBe("test");
    });

});