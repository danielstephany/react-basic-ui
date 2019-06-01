import React from 'react';
import MainCol from './mainCol.js';
import { shallow } from 'enzyme'

describe("tests for FormItem", function () {

    it("renders without crashing", function () {
        shallow(<MainCol />);
    });

    it("renders with added class", function () {
        const wrap = shallow(<MainCol className="test" />);
        expect(wrap.hasClass('test')).toBe(true);
    });

    it("renders with sm size class", function () {
        const wrap = shallow(<MainCol sm="2" />);
        expect(wrap.hasClass('main-col-sm-2')).toBe(true);
    });

    it("renders with md size class", function () {
        const wrap = shallow(<MainCol md="2" />);
        expect(wrap.hasClass('main-col-md-2')).toBe(true);
    });

    it("renders with lg size class", function () {
        const wrap = shallow(<MainCol lg="2" />);
        expect(wrap.hasClass('main-col-lg-2')).toBe(true);
    });

    it("renders with xl size class", function () {
        const wrap = shallow(<MainCol xl="2" />);
        expect(wrap.hasClass('main-col-xl-2')).toBe(true);
    });

    it("renders with sm offset class", function () {
        const wrap = shallow(<MainCol offset-sm="2" />);
        expect(wrap.hasClass('offset-col-sm-2')).toBe(true);
    });

    it("renders with md offset class", function () {
        const wrap = shallow(<MainCol offset-md="2" />);
        expect(wrap.hasClass('offset-col-md-2')).toBe(true);
    });

    it("renders with xl offset class", function () {
        const wrap = shallow(<MainCol offset-lg="2" />);
        expect(wrap.hasClass('offset-col-lg-2')).toBe(true);
    });

    it("renders with xl offset class", function () {
        const wrap = shallow(<MainCol offset-xl="2" />);
        expect(wrap.hasClass('offset-col-xl-2')).toBe(true);
    });

    it("renders with sm offset class and extra className", function () {
        const wrap = shallow(<MainCol sm="2" className="test" />);
        expect(wrap.hasClass('main-col-sm-2 test')).toBe(true);
    });

    it("renders with the child data", function () {
        const wrap = shallow(<MainCol>test</MainCol>);
        expect(wrap.text()).toBe("test");
    });

});