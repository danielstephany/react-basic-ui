import React from 'react';
import {shallow} from 'enzyme';
import Checkbox from './Checkbox.js';

describe('checkbox test suit', () => {
    it('renders without crashing', () => {
        const wrap = shallow(<Checkbox />);
    });

    it('renders with a label when passed a label prop', () => {
        const wrap = shallow(<Checkbox label="my label"/>);
        expect(wrap.find('.rbui-checkbox__label').text()).toBe("my label");
    });

    it('renders with the label on the left when passed the labelLeft prop', () => {
        const wrap = shallow(<Checkbox labelLeft />);
        expect(wrap.hasClass("rbui-checkbox--label-left")).toBe(true);
    });
});