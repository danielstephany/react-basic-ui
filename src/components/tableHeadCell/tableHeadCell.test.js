import React from 'react';
import TableHeaderCell from './TableHeaderCell.js';
import {shallow} from 'enzyme';

describe('TableRow test suite', function(){
    it('renders without crashing', () => {
        const wrap = shallow(<TableHeaderCell/>);
    });

    it('render with the added class of test-class', () => {
        const wrap = shallow(<TableHeaderCell className="test-class"></TableHeaderCell>);
        expect(wrap.hasClass('test-class')).toBe(true)
    });
});