import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import ArtistView from './ArtistView';

describe('AlbumView component', () => {
  it('renders an Artist View', () => {
    const wrapper = shallow(<MemoryRouter><ArtistView /></MemoryRouter>);
    expect(wrapper).toMatchSnapshot();
  });
});
