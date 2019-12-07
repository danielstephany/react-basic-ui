import React from 'react';
import {shallow} from 'enzyme';
import BaseTextarea from './BaseTextarea.js';

describe('BaseTextarea test suit', () => {
    it('renders without crashing', () => {
        const wrap = shallow(<BaseTextarea></BaseTextarea>);
    });

    it('renders without with extra classes', () => {
        const wrap = shallow(<BaseTextarea className="my-class"></BaseTextarea>);
        expect(wrap.hasClass("my-class")).toBe(true);
    });
});