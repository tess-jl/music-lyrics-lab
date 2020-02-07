import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import SongView from './SongView';

describe('SongView component', () => {
  it('renders an Song View', () => {
    const wrapper = shallow(<MemoryRouter><SongView /></MemoryRouter>);
    expect(wrapper).toMatchSnapshot();
  });
});
