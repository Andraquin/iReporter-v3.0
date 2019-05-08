/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jest-localstorage-mock');

// React I6 Enzyme Adapter
Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
