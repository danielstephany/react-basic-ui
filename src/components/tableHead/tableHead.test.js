import React from 'react';
import TableHead from './TableHead.js';
import {shallow} from 'enzyme';

describe('TableHead test suit', function(){
    it("mounts without crashing", function(){
        const wrap = shallow(<TableHead></TableHead>);
    });
    it("mounts with extra classes", function(){
        const wrap = shallow(<TableHead className="test-class"></TableHead>);
        expect(wrap.hasClass("test-class")).toBe(true);
    });
    it("mounts with children", function () {
        const wrap = shallow(<TableHead className="test-class">child text</TableHead>);
        expect(wrap.text()).toBe("child text");
    });
});