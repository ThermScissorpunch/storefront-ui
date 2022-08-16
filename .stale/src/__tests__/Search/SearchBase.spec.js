import { shallowMount } from '@vue/test-utils';
import SearchBase from '../../components/Search/SearchBase.vue';
let wrapper;

describe('SearchBase.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SearchBase);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
