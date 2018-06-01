import React from 'react';
import ReactDOM from 'react-dom';
import {
    expect
} from 'chai'
import {
    mount
} from 'enzyme'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter()
});

import User from './User';

it('rendering the form', () => {
    const div = document.createElement('div');
    ReactDOM.render( < User / > , div);
    ReactDOM.unmountComponentAtNode(div);
});


it('renders with test form', () => {
    const wrapper = mount( < User / > );
    it("can set first name", () => expect(wrapper.ref('name').get(0).value).to.equal("David"));
});