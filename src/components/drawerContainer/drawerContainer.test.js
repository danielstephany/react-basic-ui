import React from 'react';
import DrawerContainer from './DrawerContainer.js';
import { shallow, mount} from 'enzyme'

describe('DrawerContainer test suite', function(){

    it('renders without crashing', function(){
        shallow(<DrawerContainer />);
    });
    
    it('renders with added classes', function(){
        const wrap = shallow(<DrawerContainer className="test" />);
        expect(wrap.find('.drawer-container').hasClass('test'))
    });

    it('renders with its default class and added classes', function () {
        const wrap = shallow(<DrawerContainer className="test" />);
        expect(wrap.find('.drawer-container').hasClass('drawer-container test')).toBe(true);
    });   

});