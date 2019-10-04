import React from 'react';
import Textbox from './Textbox.js';
import { shallow } from 'enzyme'

describe("tests for Textbox", function () {
    const changeHandler = function () { };

    it("renders without crashing", function () {
        shallow(<Textbox onChange={changeHandler} />);
    });

    it("renders with added class", function () {
        const wrap = shallow(<Textbox className="test" onChange={changeHandler} />);
        expect(wrap.hasClass('test')).toBe(true);
    });

    it("renders with added classes and default class", function () {
        const wrap = shallow(<Textbox className="test" onChange={changeHandler} />);
        expect(wrap.hasClass('rbui-textbox test')).toBe(true);
    });

    it("renders with the proper input attributes", function () {
        const wrap = shallow(<Textbox 
            className="test"
            id={"testID"}
            name={"testName"}
            type={"testType"}
            value={"testValue"}
            onChange={changeHandler} />);
        expect(wrap.find('input').html()).toBe("<input type=\"testType\" id=\"testID\" name=\"testName\" value=\"testValue\"/>");
    });

    it('render with the rbui-form-item--fullwidth class', function(){
        const wrap = shallow(<Textbox fullwidth/>);
        expect(wrap.hasClass('rbui-form-item--fullwidth')).toBe(true);
    });

    it('render with the rbui-form-item--error class', function(){
        const wrap = shallow(<Textbox errMessage="this is a error"/>);
        expect(wrap.hasClass('rbui-form-item--error')).toBe(true);
    });
});