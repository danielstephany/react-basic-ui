import React from 'react';
import MainContainer from './mainContainer.js';
import { shallow } from 'enzyme'

describe("tests for MainContainer", function () {

    it("renders without crashing", function () {
        shallow(<MainContainer />);
    });

    it("renders with added class", function () {
        const wrap = shallow(<MainContainer className="test" />);
        expect(wrap.hasClass('test')).toBe(true);
    });

    it("renders with default class and added classes ", function () {
        const wrap = shallow(<MainContainer className="test" />);
        expect(wrap.hasClass('main-container test')).toBe(true);
    });


    it("renders with the the no gutter class", function () {
        const wrap = shallow(<MainContainer gutters={false}>test</MainContainer>);
        expect(wrap.hasClass('main-container main-containers--no-gutters')).toBe(true);
    });

    it("renders with the child data", function () {
        const wrap = shallow(<MainContainer>test</MainContainer>);
        expect(wrap.text()).toBe("test");
    });

});