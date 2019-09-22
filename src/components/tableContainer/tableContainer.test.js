import React from 'react';
import TableContainer from './TableContainer.js';
import {shallow} from 'enzyme';

describe('table test suite', function(){
    it('renders without crashing', () => {
        const wrap = shallow(<TableContainer/>);
    });

    it('render with the added class of test-class', () => {
        const wrap = shallow(<TableContainer className="test-class"></TableContainer>);
        expect(wrap.hasClass('test-class')).toBe(true);
    });
});