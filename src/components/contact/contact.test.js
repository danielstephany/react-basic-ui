import React from 'react';
import Contact from './contact.js';
import { shallow } from 'enzyme'

describe("tests for Contact", function () {

    it("renders without crashing", function () {
        shallow(<Contact fullName="test-name" email="test-email" phone="test-phone"/>);
    });

    it("renders with added class", function () {
        const wrap = shallow(<Contact className="test" fullName="test-name" email="test-email" phone="test-phone"/>);
        expect(wrap.hasClass('test')).toBe(true);
    });

    it("renders with added classes and default class", function () {
        const wrap = shallow(<Contact className="test" fullName="test-name" email="test-email" phone="test-phone"/>);
        expect(wrap.hasClass('contact test')).toBe(true);
    });

    it("renders with the fullName prop passed to the right spot in the markup", function () {
        const wrap = shallow(<Contact fullName="test-name" email="test-email" phone="test-phone">test</Contact>);
        expect(wrap.childAt(0).children().text()).toBe("test-name");
    });

    it("renders with the email prop passed to the right spot in the markup", function () {
        const wrap = shallow(<Contact fullName="test-name" email="test-email" phone="test-phone">test</Contact>);
        expect(wrap.childAt(1).childAt(2).text()).toBe("test-email");
    });

    it("renders with the email prop passed to the right spot in the markup", function () {
        const wrap = shallow(<Contact fullName="test-name" email="test-email" phone="test-phone">test</Contact>);
        expect(wrap.childAt(1).childAt(6).text()).toBe("test-phone");
    });

});