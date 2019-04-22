import React from 'react';
import BlockContent from './blockContent.js';
import { shallow } from 'enzyme'

describe("tests for BlockContent",function(){

    it("renders without crashing", function () {
        shallow(<BlockContent />);
    });

    it("renders with added class",function(){
        const wrap = shallow(<BlockContent className="test"/>);
        expect(wrap.hasClass('test')).toBe(true);
    });

    it("renders with added classes and default class", function () {
        const wrap = shallow(<BlockContent className="test" />);
        expect(wrap.hasClass('block-content test')).toBe(true);
    });

    it("renders with the child data", function () {
        const wrap = shallow(<BlockContent>test</BlockContent>);
        expect(wrap.text()).toBe("test");
    });

});