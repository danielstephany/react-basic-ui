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

    it("renders with proper alignItems classes ", function () {
        const wrap = shallow(<FlexRow alignItems="stretch" />);
        expect(wrap.hasClass('flex-row--align-items-stretch')).toBe(true);
    });

    it("renders with proper justifyContent classes ", function () {
        const wrap = shallow(<FlexRow justifyContent="center" />);
        expect(wrap.hasClass('flex-row--justify-contenet-stretch')).toBe(true);
    });

    it("renders with proper alignContent classes ", function () {
        const wrap = shallow(<FlexRow alignContent="center" />);
        expect(wrap.hasClass('flex-row--align-content-stretch')).toBe(true);
    });

    it("renders with proper justifyContent classes ", function () {
        const wrap = shallow(<FlexRow spacing="8" />);
        expect(wrap.hasClass('flex-row--spacing-8')).toBe(true);
    });

    it("renders with the child data", function () {
        const wrap = shallow(<FlexRow>test</FlexRow>);
        expect(wrap.text()).toBe("test");
    });

});