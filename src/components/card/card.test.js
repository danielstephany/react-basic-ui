import React from 'react';
import Card from './card.js';
import { shallow } from 'enzyme'

describe("tests for card", function () {

    it("renders without crashing", function () {
        shallow(<Card />);
    });

    it("renders with added class", function () {
        const wrap = shallow(<Card className="test" />);
        expect(wrap.hasClass('test')).toBe(true);
    });

    it("renders with added classes and default class", function () {
        const wrap = shallow(<Card className="test" />);
        expect(wrap.hasClass('card test')).toBe(true);
    });

    it("renders with the child data", function () {
        const wrap = shallow(<Card>test</Card>);
        expect(wrap.text()).toBe("test");
    });

});