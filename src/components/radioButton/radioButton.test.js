import React from 'react';
import {shallow} from 'enzyme';
import RadioButton from './RadioButton.js';

describe('test suite for RadioButton', function(){
    it('renders without crashing', function() {
        const wrap = shallow(<RadioButton/>);
    });

    it('renders with the proper label text', function(){
        const wrap = shallow(<RadioButton label="my label" />);
        expect(wrap.dive().find('.rbui-radio__label').text()).toBe("my label");
    });

    it('renders with extra classes', function(){
        const wrap = shallow(<RadioButton className="test-class"/>);
        expect(wrap.dive().hasClass('test-class')).toBe(true);
    });

    it('when passed the "labelLeft" prop, it has the "rbui-radio--label-left"', function(){
        const wrap = shallow(<RadioButton label="test" labelLeft/>);
        expect(wrap.dive().hasClass('rbui-radio--label-left')).toBe(true);
    });
});