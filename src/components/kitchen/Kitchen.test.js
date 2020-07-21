import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Kitchen from './Kitchen'

describe (`Kitchen component`, () => {
    it ('renders a .Kitchen by default', () => {
        const wrapper = shallow( <Kitchen />)
        expect (toJson(wrapper)).toMatchSnapshot()
    })
});