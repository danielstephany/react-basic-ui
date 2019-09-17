import React from 'react';
import ListItem from './listItem.js';
import ListItemSecondary from '../listItemSecondary/listItemSecondary.js';
import { shallow, mount } from 'enzyme';

describe('ListItem unit tests', function(){
    it('mounts without crashing', function(){
        shallow(<ListItem />);
    });

    it('mounts with added classes', function(){
        const mount = shallow(<ListItem className="test" />);
        expect(mount.hasClass('list-item test')).toBe(true);
    });

    it('mounts with children', function () {
        const mount = shallow(<ListItem>test</ListItem>);
        expect(mount.text()).toBe('test');
    })

    it('mounts with the right classes when passed hasAction', () => {
        const wrap = shallow(<ListItem hasAction></ListItem>);
        expect(wrap.hasClass("list-item--action")).toBe(true);
    });

    it('mounts without the "list-item--with-secondary class', () => {
        const wrap = shallow(<ListItem></ListItem>);
        expect(wrap.hasClass('list-item--with-secondary')).toBe(false);
    });
});

describe('listItem integration test suit', () => {
    it('mounts with the "list-item--with-secondary', () => {
        const wrap = shallow(<ListItem><ListItemSecondary>test</ListItemSecondary></ListItem>);
        expect(wrap.hasClass('list-item--with-secondary')).toBe(true);
    });
});