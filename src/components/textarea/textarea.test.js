import React from 'react';
import {shallow} from 'enzyme';
import Textarea from './Textarea.js';

describe('Textarea unit test suite', () => {
    it('renders without crashing', () => {
        const wrap = shallow(<Textarea></Textarea>);
    });

    it('renders with extra classes', () => {
        const wrap = shallow(<Textarea className="my-class"></Textarea>);
        expect(wrap.hasClass('my-class')).toBe(true);
    });

    it('renders with proper classes when passed fullWidth prop', () => {
        const wrap = shallow(<Textarea fullWidth ></Textarea>);
        expect(wrap.dive().hasClass('rbui-form-item--full-width')).toBe(true);
    });

    it('renders with proper label text when passed a label prop', () => {
        const wrap = shallow(<Textarea label="my label"></Textarea>);
        expect(wrap.childAt(0).text()).toBe("my label");
    });

    it('renders with an error message when passed the errMessage prop with a falsy value', () => {
        const wrap = shallow(<Textarea errMessage=""></Textarea>);
        expect(wrap.exists('.inline-error')).toBe(false);
    });

    it('renders with an error message with the correct value when passed the errMessage prop with a truthy value', () => {
        const wrap = shallow(<Textarea errMessage="you have an error"></Textarea>);
        expect(wrap.childAt(2).text()).toBe('you have an error');
    });

    it('renders without an error message when passed the errMessage prop with a falsy value', () => {
        const wrap = shallow(<Textarea errMessage=""></Textarea>);
        expect(wrap.exists('.inline-error')).toBe(false);
    });
});