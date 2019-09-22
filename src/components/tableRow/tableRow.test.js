import React from 'react';
import TableRow from './TableRow.js';
import {shallow} from 'enzyme';

describe('TableRow test suite', function(){
    it('renders without crashing', () => {
        const wrap = shallow(<TableRow/>);
    });

    it('render with the added class of test-row', () => {
        const wrap = shallow(<TableRow className="test-row"></TableRow>);
        expect(wrap.hasClass('test-row')).toBe(true)
    });
});