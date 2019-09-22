import React from 'react';
import TableHeader from './TableHeader.js';
import {shallow} from 'enzyme';

describe('TableRow test suite', function(){
    it('renders without crashing', () => {
        const wrap = shallow(<TableHeader/>);
    });

    it('render with the added class of test-class', () => {
        const wrap = shallow(<TableHeader className="test-class"></TableHeader>);
        expect(wrap.hasClass('test-class')).toBe(true)
    });
});