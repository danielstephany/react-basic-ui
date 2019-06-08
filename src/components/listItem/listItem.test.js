import React from 'react';
import ListItem from './listItem.js';
import { shallow } from 'enzyme';

describe('ListItem unit tests', function(){
    it('mounts without crashing', function(){
        shallow(<ListItem />);
    });

    it('mounts with proper classes', function(){
        const mount = shallow(<ListItem className="test" />);
        expect(mount.hasClass('list-item test')).toBe(true);
    });

    it('mounts with children', function () {
        const mount = shallow(<ListItem>test</ListItem>);
        expect(mount.text()).toBe('test');
    })
});