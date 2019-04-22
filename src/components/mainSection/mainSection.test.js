import React from 'react';
import MainSection from './mainSection.js';
import { shallow } from 'enzyme'

describe("tests for MainSection", function () {

    it("renders without crashing", function () {
        shallow(<MainSection />);
    });

    it("renders with added class", function () {
        const wrap = shallow(<MainSection className="test" />);
        expect(wrap.hasClass('test')).toBe(true);
    });

    it("renders with default class and added classes ", function () {
        const wrap = shallow(<MainSection className="test" />);
        expect(wrap.hasClass('main-section test')).toBe(true);
    });

    it("renders with the child data", function () {
        const wrap = shallow(<MainSection>test</MainSection>);
        expect(wrap.text()).toBe("test");
    });

});