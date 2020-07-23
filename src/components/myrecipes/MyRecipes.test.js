import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import MyRecipes from './MyRecipes'

describe (`MyRecipes component`, () => {
    it ('renders a .MyRecipes by default', () => {
        const wrapper = shallow( <MyRecipes recipes={[]}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
});