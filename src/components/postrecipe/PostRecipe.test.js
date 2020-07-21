import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import PostRecipe from './PostRecipe'

describe (`PostRecipe component`, () => {
    it ('renders a .PostRecipe by default', () => {
        const wrapper = shallow( <PostRecipe />)
        expect (toJson(wrapper)).toMatchSnapshot()
    })
});