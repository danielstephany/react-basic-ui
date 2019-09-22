import React from 'react';
import TableCell from './Table.js';
import {shallow} from 'enzyme';

describe('table test suite', function(){
    it('renders without crashing', () => {
        const wrap = shallow(<TableCell/>);
    });

    it('render with the added class of test-cell', () => {
        const wrap = shallow(<TableCell className="test-cell"></TableCell>);
        expect(wrap.hasClass('test-cell')).toBe(true)
    });
});