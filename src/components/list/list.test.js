import React from 'react';
import List from './List.js';
import { shallow } from 'enzyme';

describe('unit tests for List', function(){
    it('renders without crashing', function(){
        const mount = shallow(<List/>);
    });

    it('passes it sets classes', function(){
        const mount = shallow(<List className="test"/>);
        expect(mount.hasClass('test')).toBe(true);
    });

});