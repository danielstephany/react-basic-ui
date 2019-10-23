import React from 'react';
import {shallow} from 'enzyme';
import BaseRadio from './BaseRadio.js';

describe('test suite for BaseRadio', function(){
    it('renders without crashing', function() {
        const wrap = shallow(<BaseRadio/>);
    });

    it('renders with the proper label text', function(){
        const wrap = shallow(<BaseRadio label="my label" />);
        expect(wrap.dive().find('.rbui-radio__label').text()).toBe("my label");
    });

    it('renders with extra classes', function(){
        const wrap = shallow(<BaseRadio className="test-class"/>);
        expect(wrap.dive().hasClass('test-class')).toBe(true);
    });

    it('when passed the "labelLeft" prop, it has the "rbui-radio--label-left"', function(){
        const wrap = shallow(<BaseRadio label="test" labelLeft/>);
        expect(wrap.dive().hasClass('rbui-radio--label-left')).toBe(true);
    });
});