import React from 'react';
import {shallow} from 'enzyme';
import FieldSet from './FieldSet.js';

describe('test suite for FieldSet', function(){
    it('mounts without crashing', function(){
        const wrap = shallow(<FieldSet></FieldSet>);
    });

    it('has proper value for the legend', function(){
        const wrap = shallow(<FieldSet legend="my legend"></FieldSet>);
        expect(wrap.dive().find("legend").text()).toBe("my legend");
    });

    it('renders with passed children', function(){
        const wrap = shallow(<FieldSet>child text</FieldSet>);
        expect(wrap.dive().find('.rbui-fieldset__container').text()).toBe("child text");
    });
});
