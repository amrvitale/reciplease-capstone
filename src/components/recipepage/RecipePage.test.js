import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import RecipePage from './RecipePage'

describe (`RecipePage component`, () => {
    it ('renders a .RecipePage by default', () => {
        const wrapper = shallow( <RecipePage />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
});