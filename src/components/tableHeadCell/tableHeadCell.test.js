import React from 'react';
import TableHeadCell from './TableHeadCell.js';
import {shallow} from 'enzyme';

describe('TableRow test suite', function(){
    it('renders without crashing', () => {
        const wrap = shallow(<TableHeadCell/>);
    });

    it('render with the added class of test-class', () => {
        const wrap = shallow(<TableHeadCell className="test-class"></TableHeadCell>);
        expect(wrap.hasClass('test-class')).toBe(true)
    });
});