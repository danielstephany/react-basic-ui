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

    it('renders with the rbui-table--sticky-col-labels when the stickyLabels prop is passed', () => {
        const wrap = shallow(<Table stickyLabels ></Table>);
        expect(wrap.hasClass('rbui-table--sticky-col-labels')).toBe(true);
    });

    it('renders with the rbui-table--sticky-header when the stickyHeader prop is passed', () => {
        const wrap = shallow(<Table stickyHeader ></Table>);
        expect(wrap.hasClass('rbui-table--sticky-header')).toBe(true);
    });

    it('renders with the rbui-table--nowrap when the noWrap prop is passed', () => {
        const wrap = shallow(<Table noWrap ></Table>);
        expect(wrap.hasClass('rbui-table--nowrap')).toBe(true);
    });
});