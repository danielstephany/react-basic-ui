import React from 'react';
import BlockTitle from './blockTitle.js';
import { shallow } from 'enzyme'

describe("tests for blockTitle", function () {

    it("renders without crashing", function () {
        shallow(<BlockTitle />);
    });

    it("renders with added class", function () {
        const wrap = shallow(<BlockTitle className="test" />);
        expect(wrap.hasClass('test')).toBe(true);
    });

    it("renders with added classes and default class", function () {
        const wrap = shallow(<BlockTitle className="test" />);
        expect(wrap.hasClass('rbui-block-title test')).toBe(true);
    });

    it("renders with the child data", function () {
        const wrap = shallow(<BlockTitle>test</BlockTitle>);
        expect(wrap.text()).toBe("test");
    });

});