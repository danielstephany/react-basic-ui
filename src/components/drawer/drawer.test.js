import React from 'react';
import Drawer from './drawer.js';
import { shallow, mount } from 'enzyme';

describe("tests for Drawer", function () {

    it("renders without crashing", function () {
        shallow(<Drawer />);
    });

    it("renders with added class", function () {
        const wrap = mount(<Drawer className="test" />);
        expect(wrap.find('.drawer').hasClass('test')).toBe(true);
    });

    it("renders with added classes and default class", function () {
        const wrap = mount(<Drawer className="test" />);
        expect(wrap.find('.drawer').hasClass('drawer test')).toBe(true);
    });

    test("when setDrawerStyles is called", function () {
        const wrap = shallow(<Drawer isOpen={false} />);
        const instance = wrap.dive().instance();
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
        const instance = wrap.dive().instance();
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
        const instance = wrap.dive().instance();
        const output = {
            transform: "translateX(0)",
            opacity: "1"
        }
        const styles = instance.setOverlayStyles();
        expect(styles).toEqual(output);
    });

    test("when setOverlayStyles is called", function () {
        const wrap = shallow(<Drawer isOpen={false} />);
        const instance = wrap.dive().instance();
        const output = {}
        const styles = instance.setOverlayStyles();
        expect(styles).toEqual(output);
    });
    

});