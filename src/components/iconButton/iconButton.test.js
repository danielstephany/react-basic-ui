import React from 'react';
import IconButton from './iconButton.js';
import { shallow } from 'enzyme';

describe('unit test for IconButton', function(){
    it('mounts without crashing', function(){
        shallow(<IconButton />);
    });

    it('renders with passed classes', function(){
        const mount = shallow(<IconButton className='test' />);
        expect(mount.hasClass('test')).toBe(true);
    });

    it('renders with the passed children value', function(){
        const mount = shallow(<IconButton >test</IconButton>);
        expect(mount.text()).toEqual('test');
    })
});