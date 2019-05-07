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
        const wrap = shallow(<Drawer isOpen={false} />);
        const instance = wrap.instance();
        instance.toggleDrawer();
        expect(instance.state.open).toBe(true);
    });

    //TODO: finish testing setDrawerStyles
    test("when setDrawerStyles is called", function () {
        const wrap = shallow(<Drawer isOpen={false} />);
        const instance = wrap.instance();
        const styleSetting = {
            slideFrom: "right",
            transitionTime: 400,
            maxWidth: 400
        }
        const output = {
            left: "auto",
            right: "0",
            transform: "translateX(100%)",
            transitionDuration: "0.4s",
            maxWidth: "400px",
        }
        const styles = instance.setDrawerStyles(styleSetting);
        expect(styles).toEqual(output);
    });

    test("when setDrawerStyles is called with slideFrom set to 'left' and isOpen set to 'true'", function () {
        const wrap = shallow(<Drawer isOpen={true} />);
        const instance = wrap.instance();
        const styleSetting = {
            slideFrom: "left",
            transitionTime: 400,
            maxWidth: 400
        }
        const output = {
            transitionDuration: "0.4s",
            maxWidth: "400px",
            transform: "translateX(0)"
        }
        const styles = instance.setDrawerStyles(styleSetting);
        expect(styles).toEqual(output);
    });

    test("when setOverlayStyles is called", function () {
        const wrap = shallow(<Drawer isOpen={true} />);
        const instance = wrap.instance();
        const output = {
            transform: "translateX(0)",
            opacity: "1"
        }
        const styles = instance.setOverlayStyles();
        expect(styles).toEqual(output);
    });

    test("when setOverlayStyles is called", function () {
        const wrap = shallow(<Drawer isOpen={false} />);
        const instance = wrap.instance();
        const output = {}
        const styles = instance.setOverlayStyles();
        expect(styles).toEqual(output);
    });
    

});