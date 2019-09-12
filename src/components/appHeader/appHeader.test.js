import React from 'react';
import { shallow, mount} from 'enzyme';
import AppHeader from './AppHeader.js';

describe('AppHeader test suit', () => {
    it('mounts without crashing', () => {
        const wrap = shallow(<AppHeader></AppHeader>);
    });

    it('it renders with proper added classes', () => {
        const wrap = mount(<AppHeader className="testClass" fixed="top"></AppHeader>);
        expect(wrap.find('header').hasClass('rbui-app-header testClass')).toBe(true);
    });

    it('it renders with proper classes for fixed to top', () => {
        const wrap = mount(<AppHeader fixed="top"></AppHeader>);
        expect(wrap.find('header').hasClass('rbui-app-header rbui-app-header--fixed-top')).toBe(true);
    });

    it('it renders with proper classes for fixed to bottom', () => {
        const wrap = mount(<AppHeader fixed="bottom"></AppHeader>);
        expect(wrap.find('header').hasClass('rbui-app-header rbui-app-header--fixed-bottom')).toBe(true);
    });

    it('renders without the spacer element when it is not passed the fixed spacer prop', () => {
        const wrap = mount(<AppHeader fixed="bottom" ></AppHeader>);
        expect(wrap.find('.rbui-app-header__spacer').exists()).toBe(false);
    });

    it('renders with the spacer element when passed the fixed spacer prop', () => {
        const wrap = mount(<AppHeader fixed="bottom" fixedSpacer></AppHeader>);
        expect(wrap.find('.rbui-app-header__spacer').exists()).toBe(true);
    });

});
