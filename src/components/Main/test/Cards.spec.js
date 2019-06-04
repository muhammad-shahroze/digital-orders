import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Cards } from '../Cards'

Enzyme.configure({ adapter: new Adapter() });

describe('<Cards />', () => {
  let wrapper;
  let instance
  beforeEach(() => {
    wrapper = mount(<Cards />)
    instance = wrapper.instance();
  });

  test('Snapshot is correct', () => {
    expect(wrapper).toMatchSnapshot();
  })


  test('onCardHover', () => {
    const card = { id: 1, hovered: false };

    instance.onCardHover(card);

    expect(instance.state.blurCard).toEqual(true);
    instance.state.cardData.forEach((stateCard) => {
      if (stateCard.id === 1) {
        expect(stateCard.hovered).toEqual(true);
      }
      else {
        expect(stateCard.hovered).toEqual(false);
      }
    });
  });
});
