import React from 'react';
import TableCell from './TableCell.js';
import {shallow} from 'enzyme';

describe('table test suite', function(){
    it('renders without crashing', () => {
        const wrap = shallow(<TableCell/>);
    });

    it('render with the added class of test-cell', () => {
        const wrap = shallow(<TableCell className="test-cell"></TableCell>);
        expect(wrap.hasClass('test-cell')).toBe(true);
    });

    it('renders with children', () => {
        const wrap = shallow(<TableCell>content</TableCell>);
        expect(wrap.text()).toBe("content");
    });
});