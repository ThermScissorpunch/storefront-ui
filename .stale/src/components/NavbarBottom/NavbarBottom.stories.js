// eslint-disable-next-line import/no-extraneous-dependencies
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import NavbarBottom from './NavbarBottom.vue';

export default {
  title: 'SFUI Components/NavbarBottom',
  component: NavbarBottom,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: '300px',
      description: {
        component:
          'The Navbar Bottom component. [link to component docs on the page]',
      },
    },
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  },
  argTypes: {
    type: {
      control: 'radio',
      defaultValue: 'primary',
      options: ['primary', 'secondary'],
      table: {
        category: 'Props',
        defaultValue: {
          summary: 'primary',
        },
      },
      description: 'Changes layout.',
    },
    withText: {
      control: 'boolean',
      table: {
        category: 'Props',
        defaultValue: {
          summary: true,
        },
      },
      defaultValue: true,
      description: 'Styling layout with or without text under icons.',
    },
    default: {
      table: {
        category: 'Slots',
        type: {
          summary: null,
        },
      },
      description: 'Use this slot to place content inside the NavbarBottom. Content should be wrapped in `<li>` tags',
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { NavbarBottom },
  props: Object.keys(argTypes),
  template: `
    <NavbarBottom
      :type="type"
      :withText="withText"
    />
    `,
});

export const Base = Template.bind({});

const BaseNavbarWithIcon = (args, { argTypes }) => ({
  components: { NavbarBottom },
  props: Object.keys(argTypes),
  template: `
  <NavbarBottom
    :type="type"
  >
  <li class="flex">
    <a
      href="#"
      class="flex flex-col items-center justify-center flex-1 pt-3 pb-1 group hover:bg-primary-100 active:bg-primary-100"
      :class="{ 'hover:!bg-primary-600 active:!bg-primary-600': type === 'secondary', '!px-[26px] !py-[14px]': !withText }"
    >
      <!-- eslint-disable max-len -->
<svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        xmlns="http://www.w3.org/2000/svg"
        class="fill-primary-500 group-hover:fill-primary-600 group-active:fill-primary-600"
        :class="{ '!fill-white': type === 'secondary' }"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.4928 2.29289C11.8834 1.90237 12.5165 1.90237 12.9071 2.29289L21.9071 11.2929C22.2976 11.6834 22.2976 12.3166 21.9071 12.7071C21.5165 13.0976 20.8834 13.0976 20.4928 12.7071L20.2 12.4142V20C20.2 21.1046 19.3045 22 18.2 22H6.19995C5.09538 22 4.19995 21.1046 4.19995 20V12.4142L3.90706 12.7071C3.51653 13.0976 2.88337 13.0976 2.49284 12.7071C2.10232 12.3166 2.10232 11.6834 2.49284 11.2929L11.4928 2.29289ZM6.19995 10.4142V20H9.19995V16C9.19995 14.8954 10.0954 14 11.2 14H13.2C14.3045 14 15.2 14.8954 15.2 16V20H18.2V10.4142L12.2 4.41421L6.19995 10.4142ZM13.2 20V16H11.2V20H13.2Z"
        />
      </svg>
<!-- eslint-enable max-len -->

      <span
        v-if="withText"
        class="text-xs font-medium text-primary-500 mt-[2px] group-hover:text-primary-600 group-active:text-primary-600"
        :class="{ '!text-white': type === 'secondary' }"
      >Home</span>
    </a>
  </li>
  <li class="flex">
    <a
      href="#"
      class="flex flex-col items-center justify-center flex-1 pt-3 pb-1 group hover:bg-primary-100 active:bg-primary-100"
      :class="{ 'hover:!bg-primary-600 active:!bg-primary-600': type === 'secondary', '!px-[26px] !py-[14px]': !withText }"
    >
      <!-- eslint-disable max-len -->
<svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        xmlns="http://www.w3.org/2000/svg"
        class="fill-primary-500 group-hover:fill-primary-600 group-active:fill-primary-600"
        :class="{ '!fill-white': type === 'secondary' }"
      >
        <path
          d="M3.59985 17C3.59985 17.5523 4.04757 18 4.59985 18H20.5999C21.1521 18 21.5999 17.5523 21.5999 17C21.5999 16.4477 21.1521 16 20.5999 16H4.59985C4.04757 16 3.59985 16.4477 3.59985 17ZM3.59985 12C3.59985 12.5523 4.04757 13 4.59985 13H20.5999C21.1521 13 21.5999 12.5523 21.5999 12C21.5999 11.4477 21.1521 11 20.5999 11H4.59985C4.04757 11 3.59985 11.4477 3.59985 12ZM4.59985 6C4.04757 6 3.59985 6.44772 3.59985 7C3.59985 7.55228 4.04757 8 4.59985 8H20.5999C21.1521 8 21.5999 7.55228 21.5999 7C21.5999 6.44772 21.1521 6 20.5999 6H4.59985Z"
        />
        <path
          d="M3.59985 17C3.59985 17.5523 4.04757 18 4.59985 18H20.5999C21.1521 18 21.5999 17.5523 21.5999 17C21.5999 16.4477 21.1521 16 20.5999 16H4.59985C4.04757 16 3.59985 16.4477 3.59985 17ZM3.59985 12C3.59985 12.5523 4.04757 13 4.59985 13H20.5999C21.1521 13 21.5999 12.5523 21.5999 12C21.5999 11.4477 21.1521 11 20.5999 11H4.59985C4.04757 11 3.59985 11.4477 3.59985 12ZM4.59985 6C4.04757 6 3.59985 6.44772 3.59985 7C3.59985 7.55228 4.04757 8 4.59985 8H20.5999C21.1521 8 21.5999 7.55228 21.5999 7C21.5999 6.44772 21.1521 6 20.5999 6H4.59985Z"
        />
      </svg>
<!-- eslint-enable max-len -->

      <span
        v-if="withText"
        class="text-xs font-medium text-primary-500 mt-[2px] group-hover:text-primary-600 group-active:text-primary-600"
        :class="{ '!text-white': type === 'secondary' }"
      >
        Products
      </span>
    </a>
  </li>
  <li class="flex">
    <a
      href="#"
      class="flex flex-col items-center justify-center flex-1 pt-3 pb-1 group hover:bg-primary-100 active:bg-primary-100"
      :class="{ 'hover:!bg-primary-600 active:!bg-primary-600': type === 'secondary', '!px-[26px] !py-[14px]': !withText }"
    >
      <!-- eslint-disable max-len -->
<svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class="fill-primary-500 group-hover:fill-primary-600 group-active:fill-primary-600"
        :class="{ '!fill-white': type === 'secondary' }"
      >
        <path
          d="M10.2998 18.4998C7.09977 18.4998 3.99977 16.5998 2.69977 13.4998C1.79977 11.4998 1.79977 9.19977 2.59977 7.19977C3.39977 5.09977 4.99977 3.49977 6.99977 2.69977C8.99977 1.79977 11.2998 1.79977 13.2998 2.59977C15.3998 3.39977 16.9998 4.99977 17.7998 6.99977C19.5998 11.1998 17.5998 15.9998 13.3998 17.7998C12.3998 18.2998 11.2998 18.4998 10.2998 18.4998ZM10.2998 3.99977C9.39977 3.99977 8.59977 4.19977 7.79977 4.49977C4.59977 5.79977 3.09977 9.49977 4.49977 12.6998C5.79977 15.8998 9.49977 17.3998 12.6998 15.9998C15.8998 14.6998 17.3998 10.9998 15.9998 7.79977C15.2998 6.29977 14.0998 5.09977 12.5998 4.39977C11.7998 4.19977 10.9998 3.99977 10.2998 3.99977Z"
        />
        <path
          d="M21.0004 21.9997C20.7004 21.9997 20.5004 21.8997 20.3004 21.6997L14.7004 16.0997C14.3004 15.6997 14.3004 15.0997 14.7004 14.6997C15.1004 14.2997 15.7004 14.2997 16.1004 14.6997L21.7004 20.2997C22.1004 20.6997 22.1004 21.2997 21.7004 21.6997C21.5004 21.8997 21.3004 21.9997 21.0004 21.9997Z"
        />
        <path
          d="M10.2998 18.4998C7.09977 18.4998 3.99977 16.5998 2.69977 13.4998C1.79977 11.4998 1.79977 9.19977 2.59977 7.19977C3.39977 5.09977 4.99977 3.49977 6.99977 2.69977C8.99977 1.79977 11.2998 1.79977 13.2998 2.59977C15.3998 3.39977 16.9998 4.99977 17.7998 6.99977C19.5998 11.1998 17.5998 15.9998 13.3998 17.7998C12.3998 18.2998 11.2998 18.4998 10.2998 18.4998ZM10.2998 3.99977C9.39977 3.99977 8.59977 4.19977 7.79977 4.49977C4.59977 5.79977 3.09977 9.49977 4.49977 12.6998C5.79977 15.8998 9.49977 17.3998 12.6998 15.9998C15.8998 14.6998 17.3998 10.9998 15.9998 7.79977C15.2998 6.29977 14.0998 5.09977 12.5998 4.39977C11.7998 4.19977 10.9998 3.99977 10.2998 3.99977Z"
        />
        <path
          d="M21.0004 21.9997C20.7004 21.9997 20.5004 21.8997 20.3004 21.6997L14.7004 16.0997C14.3004 15.6997 14.3004 15.0997 14.7004 14.6997C15.1004 14.2997 15.7004 14.2997 16.1004 14.6997L21.7004 20.2997C22.1004 20.6997 22.1004 21.2997 21.7004 21.6997C21.5004 21.8997 21.3004 21.9997 21.0004 21.9997Z"
        />
      </svg>
<!-- eslint-enable max-len -->

      <span
        v-if="withText"
        class="text-xs font-medium text-primary-500 mt-[2px] group-hover:text-primary-600 group-active:text-primary-600"
        :class="{ '!text-white': type === 'secondary' }"
      >
        Search
      </span>
    </a>
  </li>
  <li class="flex">
    <a
      href="#"
      class="flex flex-col items-center justify-center flex-1 pt-3 pb-1 group hover:bg-primary-100 active:bg-primary-100"
      :class="{ 'hover:!bg-primary-600 active:!bg-primary-600': type === 'secondary', '!px-[26px] !py-[14px]': !withText }"
    >
      <span class="relative">
        <!-- eslint-disable max-len -->
<svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          xmlns="http://www.w3.org/2000/svg"
          class="fill-primary-500 group-hover:fill-primary-600 group-active:fill-primary-600"
          :class="{ '!fill-white': type === 'secondary' }"
        >
          <path
            d="M18.1001 22C16.9955 22 16.1001 21.1046 16.1001 20C16.1001 18.8954 16.9955 18 18.1001 18C19.2047 18 20.1001 18.8954 20.1001 20C20.1001 21.1046 19.2047 22 18.1001 22Z"
          />
          <path
            d="M10.1001 22C8.99553 22 8.1001 21.1046 8.1001 20C8.1001 18.8954 8.99553 18 10.1001 18C11.2047 18 12.1001 18.8954 12.1001 20C12.1001 21.1046 11.2047 22 10.1001 22Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.3999 3C1.3999 2.44772 1.84762 2 2.3999 2H4.70663C5.87077 2 6.88084 2.80352 7.14261 3.93785L7.38772 5H19.9787C21.6052 5 22.7986 6.52847 22.4041 8.10634L20.6541 15.1063C20.3759 16.2193 19.3759 17 18.2287 17H10.0932C8.92903 17 7.91896 16.1965 7.65719 15.0621L5.19383 4.38757C5.14148 4.1607 4.93946 4 4.70663 4H2.3999C1.84762 4 1.3999 3.55228 1.3999 3ZM7.84926 7L9.60598 14.6124C9.65833 14.8393 9.86034 15 10.0932 15H18.2287C18.4582 15 18.6582 14.8439 18.7138 14.6213L20.4638 7.62127C20.5427 7.30569 20.304 7 19.9787 7H7.84926Z"
          />
        </svg>
<!-- eslint-enable max-len -->

        <!-- eslint-disable max-len -->
<svg class="absolute -top-2 -right-3" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z" fill="#6131DD" />
        </svg>
<!-- eslint-enable max-len -->

      </span>
      <span
        v-if="withText"
        class="text-xs font-medium text-primary-500 mt-[2px] group-hover:text-primary-600 group-active:text-primary-600"
        :class="{ '!text-white': type === 'secondary' }"
      >
        Cart
      </span>
    </a>
  </li>
  <li class="flex">
    <a
      href="#"
      class="flex flex-col items-center justify-center flex-1 pt-3 pb-1 group hover:bg-primary-100 active:bg-primary-100"
      :class="{ 'hover:!bg-primary-600 active:!bg-primary-600': type === 'secondary', '!px-[26px] !py-[14px]': !withText }"
    >
      <!-- eslint-disable max-len -->
<svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        xmlns="http://www.w3.org/2000/svg"
        class="fill-primary-500 group-hover:fill-primary-600 group-active:fill-primary-600"
        :class="{ '!fill-white': type === 'secondary' }"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.4642 4.99065C17.8242 3.19065 14.5642 4.03065 12.8042 6.09065C11.0442 4.03065 7.78417 3.18065 5.14417 4.99065C3.74417 5.95065 2.86417 7.57065 2.80417 9.28065C2.66417 13.1607 6.10417 16.2707 11.3542 21.0407L11.4542 21.1307C12.2142 21.8207 13.3842 21.8207 14.1442 21.1207L14.2542 21.0207C19.5042 16.2607 22.9342 13.1507 22.8042 9.27065C22.7442 7.57065 21.8642 5.95065 20.4642 4.99065ZM12.9042 19.5507L12.8042 19.6507L12.7042 19.5507C7.94417 15.2407 4.80417 12.3907 4.80417 9.50065C4.80417 7.50065 6.30417 6.00065 8.30417 6.00065C9.84417 6.00065 11.3442 6.99065 11.8742 8.36065H13.7442C14.2642 6.99065 15.7642 6.00065 17.3042 6.00065C19.3042 6.00065 20.8042 7.50065 20.8042 9.50065C20.8042 12.3907 17.6642 15.2407 12.9042 19.5507Z"
        />
      </svg>
<!-- eslint-enable max-len -->

      <span
        v-if="withText"
        class="text-xs font-medium text-primary-500 mt-[2px] group-hover:text-primary-600 group-active:text-primary-600"
        :class="{ '!text-white': type === 'secondary' }"
      >
        List
      </span>
    </a>
  </li>
</NavbarBottom>
`,
});
export const NavbarWithIcon = BaseNavbarWithIcon.bind({});