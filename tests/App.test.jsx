import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import App from '../client/components/App';
import Play from '../client/components/Play';

describe('Unit Tests', () => {
  describe('Render Tests', () => {
    test('it should render the play button on load', () => {
      const wrapper = shallow(App);
      expexct(wrapper.exists(Play).toBe(true));
    });
    test('it should not render the pause button on load', () => {
      const wrapper = shallow(App);
      expect(wrapper.exists(Pause).toBe(false));
    })
  });
});
