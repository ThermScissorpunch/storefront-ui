import {
  SfFooter,
  SfHeader,
  SfList,
  SfImage,
  SfButton,
  SfMenuItem,
  SfInput,
  SfLink,
} from "@storefront-ui/vue";

export default {
  title: "Components/Organisms/Footer",
  component: SfFooter,
  argTypes: {
    open: {
      control: "array",
      table: {
        category: "Props",
      },
    },
    column: {
      control: "number",
      defaultValue: 4,
      table: {
        category: "Props",
      },
      description: "Number of columns in footer",
    },
    multiple: {
      control: "boolean",
      table: {
        category: "Props",
      },
    },
    logo: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    title: {
      control: "text",
      table: {
        category: "Props",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: {
    SfFooter,
    SfHeader,
    SfList,
    SfImage,
    SfButton,
    SfMenuItem,
    SfInput,
    SfLink,
  },
  props: Object.keys(argTypes),
  data() {
    return {
      columns: [
        {
          title: "About us",
          items: ["Who we are", "Quality in the details", "Customer Reviews"],
        },
        {
          title: "Departments",
          items: ["Women fashion", "Men fashion", "Kidswear", "Home"],
        },
        {
          title: "Help",
          items: ["Customer service", "Size guide", "Contact us"],
        },
        {
          title: "Payment & delivery",
          items: ["Purchase terms", "Guarantee"],
        },
      ],
      social: {
        title: "Social",
        pictures: ["facebook", "pinterest", "twitter", "google", "youtube"],
      },
    };
  },
  template: `
    <SfFooter
      :column="column"
      :multiple="multiple"
      :open="open"
      :logo="logo"
      :title="title"
    >
      <SfFooterColumn v-for="column in columns" :key="column.title" :title="column.title">        
        <SfList>
          <SfListItem v-for="item in column.items" :key="item">
            <SfMenuItem :label="item"/>
          </SfListItem>
        </SfList>      
      </SfFooterColumn>
      <SfFooterColumn :title="social.title" class="desktop-only">
        <SfImage v-for="picture in social.pictures" :key="picture" :src="'/assets/storybook/SfFooter/'+picture+'.svg'" :alt="picture" style="width: 32px; height: 32px;"/>
      </SfFooterColumn> 
      <SfFooterColumn title="Language" class="desktop-only">
        <SfButton class="sf-button--pure" style="display: flex; justify-content: space-between; ">
          <SfImage
            src="/assets/storybook/SfFooter/flag.png"
            alt="flag of the USA"
          />
          English
        </SfButton>
      </SfFooterColumn>
      <SfFooterColumn class="desktop-only">
        <template>
          <div class="sb-footer__input">
            <SfInput class="sf-input--outline" type="text" placeholder="Type your email address"/>
            <SfButton>Subscribe</SfButton>
          </div>
        </template>
      </SfFooterColumn>
      <div class="sf-footer-column smartphone-only">
        <div style="display: flex; flex-direction: column; jusify-content: space-around; align-items:center; width: 100%;">
          <div class="sf-footer-column__title" style="align-self: flex-start; width: auto;">
            Social
          </div>
          <div class="sb-footer__bottom-social" style="display: flex; justfy-content: space-around; width: 100%;">
            <SfImage v-for="picture in social.pictures" :key="picture" :src="'/assets/storybook/SfFooter/'+picture+' Icon.svg'" :alt="picture" class="sb-social-icon"/>
          </div>
          <div style="display: flex; align-items: center; justify-content: center;">
            <SfInput class="sf-input--outline" type="text" placeholder="Type your email address" style="min-height: 32px; width: 242px;"/>
            <SfButton style="width: 116px;">Subscribe</SfButton>
          </div>
          <SfLink link="#" class="smartphone-only">
            <SfImage
              :src="logo"
              :alt="title"
              class="sf-footer__bottom-logo"
            />            
          </SfLink>
        </div>  
      </div>  
    </SfFooter>`,
});

export const Common = Template.bind({});
Common.args = {
  open: ["About us", "Help", "Social"],
  title: "Storefront UI",
  logo: "/assets/logo.svg",
};
