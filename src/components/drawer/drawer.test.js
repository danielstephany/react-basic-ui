import React from 'react';
import Drawer from './drawer.js';
import { shallow } from 'enzyme'

describe("tests for Drawer", function () {

    it("renders without crashing", function () {
        shallow(<Drawer />);
    });

    it("renders with added class", function () {
        const wrap = shallow(<Drawer className="test" />);
        expect(wrap.find('.drawer').hasClass('test')).toBe(true);
    });

    it("renders with added classes and default class", function () {
        const wrap = shallow(<Drawer className="test" />);
        expect(wrap.find('.drawer').hasClass('drawer test')).toBe(true);
    });

    test("when toggleDrawer is called the state.open boolean switches to its inverse", function () {
        const wrap = shallow(<Drawer className="test" isOpen={false} />);
        const instance = wrap.instance();
        instance.toggleDrawer();
        expect(instance.state.open).toBe(true);
    });

    //TODO: finish testing setDrawerStyles
    test("when setDrawerStyles is called", function () {
        const wrap = shallow(<Drawer className="test" isOpen={false} />);
        const instance = wrap.instance();
        instance.toggleDrawer();
        expect(instance.state.open).toBe(true);
    });

});