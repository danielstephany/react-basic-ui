import React from 'react';
import { shallow, mount} from 'enzyme';
import AppHeader from './AppHeader.js';

describe('AppHeader test suit', () => {
    it('mounts without crashing', () => {
        const wrap = shallow(<AppHeader></AppHeader>);
    });

    it('it renders with proper classes for fixed to top', () => {
        const wrap = mount(<AppHeader fixed="top"></AppHeader>);
        expect(wrap.find('header').hasClass('rbui-app-header rbui-app-header--fixed-top')).toBe(true);
    });
});

