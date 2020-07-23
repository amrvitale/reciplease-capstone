import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Recipe from './Recipe'
import RecipePage from '../recipepage/RecipePage';

describe (`Recipe component`, () => {
    it ('renders a .Recipe by default', () => {
        const wrapper = shallow( <Recipe />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
});