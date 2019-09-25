import React from 'react';
import TableBody from './TableBody.js';
import {shallow} from 'enzyme';

describe('TableBody test suit', () => {
    it('mounts without crashing', () => {
        const wrap = shallow(<TableBody></TableBody>);
    });
    
    it('renders with children', () => {
        const wrap = shallow(<TableBody>content</TableBody>);
        expect(wrap.text()).toBe('content');
    });

    it('renders with children', () => {
        const wrap = shallow(<TableBody className="test-class" ></TableBody>);
        expect(wrap.hasClass("test-class")).toBe(true);
    });
});