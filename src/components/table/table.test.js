import React from 'react';
import Table from './Table.js';
import {shallow} from 'enzyme';

describe('table test suite', function(){
    it('renders without crashing', () => {
        const wrap = shallow(<Table/>);
    });

    it('render with the added class of test-table', () => {
        const wrap = shallow(<Table className="test-table"></Table>);
        expect(wrap.hasClass('test-table')).toBe(true)
    });
});