import React from 'react';
import FormatedInput from './formatedInput.js';
import { shallow } from 'enzyme'

describe("tests for FormatedInput", function () {
    const changeHandler = function () { };

    it("renders without crashing", function () {
        shallow(<FormatedInput onChange={changeHandler} />);
    });

    it("renders with added class", function () {
        const wrap = shallow(<FormatedInput className="test" onChange={changeHandler} />);
        expect(wrap.hasClass('test')).toBe(true);
    });

    it("renders with added classes and default class", function () {
        const wrap = shallow(<FormatedInput className="test" onChange={changeHandler} />);
        expect(wrap.hasClass('form-item test')).toBe(true);
    });

    it("renders with the proper input attributes", function () {
        const wrap = shallow(<FormatedInput 
            className="test"
            id={"testID"}
            name={"testName"}
            type={"testType"}
            value={"testValue"}
            onChange={changeHandler} />);
        expect(wrap.find('input').html()).toBe("<input type=\"testType\" id=\"testID\" name=\"testName\" value=\"testValue\"/>");
    });

});