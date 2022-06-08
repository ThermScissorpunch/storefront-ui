
import SearchBase from '../../components/Search/SearchBase.vue';
import SearchWithoutButton from '../../components/Search/SearchWithoutButton.vue';
import ButtonPrimaryIcons from '../../components/Button/Primary/Icon/ButtonPrimaryIcons.vue';
import { focus } from '../../utils/focus-directive.js';

export default {
  title: 'SFUI Components/Search',
  component: SearchBase,
  parameters: {
    docs: {
      description: {
        component:
          'The search component. [link to component docs on the page]'
      }
    }
  },
  argTypes: {
    value: {
      control: 'text',
      defaultValue: '',
      table: {
        category: 'Props',
        defaultValue: {
          summary: ''
        }
      },
      description: 'Input value'
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      table: {
        category: 'Props'
      },
      description:
        'Native input disabled attribute'
    }
  }
};

const Template = (args, { argTypes }) => ({
  components: { SearchBase },
  props: Object.keys(argTypes),
  template: `
    <SearchBase 
      :value="value"
      :disabled="disabled"
    />
    `
});

export const Base = Template.bind({});

const WithIconButton = (args, { argTypes }) => ({
  components: { SearchBase, ButtonPrimaryIcons },
  props: Object.keys(argTypes),
  template: `
    <SearchBase
      :value="value"
      :disabled="disabled"
    >
      <ButtonPrimaryIcons
        aria-label="search"
        class="px-2 rounded-l-none !shadow-none hover:!shadow-none fill-white disabled:fill-gray-500"
        @click="$emit('click', inputValue)"
        :disabled="disabled"        
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.2998 18.5C7.09977 18.5 3.99977 16.6 2.69977 13.5C1.79977 11.5 1.79977 9.20001 2.59977 7.20001C3.39977 5.10001 4.99977 3.50001 6.99977 2.70001C8.99977 1.80001 11.2998 1.80001 13.2998 2.60001C15.3998 3.40001 16.9998 5.00001 17.7998 7.00001C19.5998 11.2 17.5998 16 13.3998 17.8C12.3998 18.3 11.2998 18.5 10.2998 18.5ZM10.2998 4.00001C9.39977 4.00001 8.59977 4.20001 7.79977 4.50001C4.59977 5.80001 3.09977 9.50001 4.49977 12.7C5.79977 15.9 9.49977 17.4 12.6998 16C15.8998 14.7 17.3998 11 15.9998 7.80001C15.2998 6.30001 14.0998 5.10001 12.5998 4.40001C11.7998 4.20001 10.9998 4.00001 10.2998 4.00001Z" />
          <path d="M21.0004 21.9999C20.7004 21.9999 20.5004 21.8999 20.3004 21.6999L14.7004 16.0999C14.3004 15.6999 14.3004 15.0999 14.7004 14.6999C15.1004 14.2999 15.7004 14.2999 16.1004 14.6999L21.7004 20.2999C22.1004 20.6999 22.1004 21.2999 21.7004 21.6999C21.5004 21.8999 21.3004 21.9999 21.0004 21.9999Z" />
          <path d="M10.2998 18.5C7.09977 18.5 3.99977 16.6 2.69977 13.5C1.79977 11.5 1.79977 9.20001 2.59977 7.20001C3.39977 5.10001 4.99977 3.50001 6.99977 2.70001C8.99977 1.80001 11.2998 1.80001 13.2998 2.60001C15.3998 3.40001 16.9998 5.00001 17.7998 7.00001C19.5998 11.2 17.5998 16 13.3998 17.8C12.3998 18.3 11.2998 18.5 10.2998 18.5ZM10.2998 4.00001C9.39977 4.00001 8.59977 4.20001 7.79977 4.50001C4.59977 5.80001 3.09977 9.50001 4.49977 12.7C5.79977 15.9 9.49977 17.4 12.6998 16C15.8998 14.7 17.3998 11 15.9998 7.80001C15.2998 6.30001 14.0998 5.10001 12.5998 4.40001C11.7998 4.20001 10.9998 4.00001 10.2998 4.00001Z" />
          <path d="M21.0004 21.9999C20.7004 21.9999 20.5004 21.8999 20.3004 21.6999L14.7004 16.0999C14.3004 15.6999 14.3004 15.0999 14.7004 14.6999C15.1004 14.2999 15.7004 14.2999 16.1004 14.6999L21.7004 20.2999C22.1004 20.6999 22.1004 21.2999 21.7004 21.6999C21.5004 21.8999 21.3004 21.9999 21.0004 21.9999Z" />
        </svg>
      </ButtonPrimaryIcons>
      </SearchBase>
    `
});

export const BaseWithIcon = WithIconButton.bind({});

const NoButton = (args, { argTypes }) => ({
  components: { SearchWithoutButton },
  props: Object.keys(argTypes),
  template: `
    <SearchWithoutButton 
      :value="value"
      :disabled="disabled"
    />
    `
});

export const WithoutButton = NoButton.bind({});

const NoButtonWithRightSearchIcon = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      inputValue: this.value
    };
  },
  directives: {
    focus
  },
  template: `
    <div
      class="relative flex h-10 w-80"
    >      
      <input
        v-model="inputValue"
        v-focus
        :disabled="disabled"
        type="search"
        class="h-10 pl-4 text-gray-900 border border-gray-200 rounded-md w-80 peer hover:border-primary-500 disabled:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 active:border-2 active:-mx-px remove-default-styling outline-violet"
        placeholder="search text"
      >
      <span
        class="absolute hidden fill-gray-500 top-2 right-12"
        :class="{ '!flex': !!inputValue }"
        @click="inputValue = ''"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM16.295 14.885C16.6844 15.2744 16.6844 15.9056 16.295 16.295C15.9056 16.6844 15.2744 16.6844 14.885 16.295L12 13.41L9.115 16.295C8.72564 16.6844 8.09436 16.6844 7.705 16.295C7.31564 15.9056 7.31564 15.2744 7.705 14.885L10.59 12L7.705 9.115C7.31564 8.72564 7.31564 8.09436 7.705 7.705C8.09436 7.31564 8.72564 7.31564 9.115 7.705L12 10.59L14.885 7.705C15.2744 7.31564 15.9056 7.31564 16.295 7.705C16.6844 8.09436 16.6844 8.72564 16.295 9.115L13.41 12L16.295 14.885Z" />
          <path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM16.295 14.885C16.6844 15.2744 16.6844 15.9056 16.295 16.295C15.9056 16.6844 15.2744 16.6844 14.885 16.295L12 13.41L9.115 16.295C8.72564 16.6844 8.09436 16.6844 7.705 16.295C7.31564 15.9056 7.31564 15.2744 7.705 14.885L10.59 12L7.705 9.115C7.31564 8.72564 7.31564 8.09436 7.705 7.705C8.09436 7.31564 8.72564 7.31564 9.115 7.705L12 10.59L14.885 7.705C15.2744 7.31564 15.9056 7.31564 16.295 7.705C16.6844 8.09436 16.6844 8.72564 16.295 9.115L13.41 12L16.295 14.885Z" />
        </svg>
      </span>
      <span
        class="absolute pointer-events-none fill-gray-500 top-2 right-4"
        :class="{ 'opacity-50': disabled }"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.2998 18.5C7.09977 18.5 3.99977 16.6 2.69977 13.5C1.79977 11.5 1.79977 9.20001 2.59977 7.20001C3.39977 5.10001 4.99977 3.50001 6.99977 2.70001C8.99977 1.80001 11.2998 1.80001 13.2998 2.60001C15.3998 3.40001 16.9998 5.00001 17.7998 7.00001C19.5998 11.2 17.5998 16 13.3998 17.8C12.3998 18.3 11.2998 18.5 10.2998 18.5ZM10.2998 4.00001C9.39977 4.00001 8.59977 4.20001 7.79977 4.50001C4.59977 5.80001 3.09977 9.50001 4.49977 12.7C5.79977 15.9 9.49977 17.4 12.6998 16C15.8998 14.7 17.3998 11 15.9998 7.80001C15.2998 6.30001 14.0998 5.10001 12.5998 4.40001C11.7998 4.20001 10.9998 4.00001 10.2998 4.00001Z" />
          <path d="M21.0004 21.9999C20.7004 21.9999 20.5004 21.8999 20.3004 21.6999L14.7004 16.0999C14.3004 15.6999 14.3004 15.0999 14.7004 14.6999C15.1004 14.2999 15.7004 14.2999 16.1004 14.6999L21.7004 20.2999C22.1004 20.6999 22.1004 21.2999 21.7004 21.6999C21.5004 21.8999 21.3004 21.9999 21.0004 21.9999Z" />
          <path d="M10.2998 18.5C7.09977 18.5 3.99977 16.6 2.69977 13.5C1.79977 11.5 1.79977 9.20001 2.59977 7.20001C3.39977 5.10001 4.99977 3.50001 6.99977 2.70001C8.99977 1.80001 11.2998 1.80001 13.2998 2.60001C15.3998 3.40001 16.9998 5.00001 17.7998 7.00001C19.5998 11.2 17.5998 16 13.3998 17.8C12.3998 18.3 11.2998 18.5 10.2998 18.5ZM10.2998 4.00001C9.39977 4.00001 8.59977 4.20001 7.79977 4.50001C4.59977 5.80001 3.09977 9.50001 4.49977 12.7C5.79977 15.9 9.49977 17.4 12.6998 16C15.8998 14.7 17.3998 11 15.9998 7.80001C15.2998 6.30001 14.0998 5.10001 12.5998 4.40001C11.7998 4.20001 10.9998 4.00001 10.2998 4.00001Z" />
          <path d="M21.0004 21.9999C20.7004 21.9999 20.5004 21.8999 20.3004 21.6999L14.7004 16.0999C14.3004 15.6999 14.3004 15.0999 14.7004 14.6999C15.1004 14.2999 15.7004 14.2999 16.1004 14.6999L21.7004 20.2999C22.1004 20.6999 22.1004 21.2999 21.7004 21.6999C21.5004 21.8999 21.3004 21.9999 21.0004 21.9999Z" />
        </svg>
      </span>
    </div>
    `
});

export const WithoutButtonAndWithRightIcon = NoButtonWithRightSearchIcon.bind({});

