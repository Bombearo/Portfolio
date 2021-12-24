import About from "./About.vue";

export default {
  title: "Home/About",
  component: About,
};

const Template = (args) => ({
  components: { About },
  setup() {
    return { args };
  },
  template: '<About v-bind="args"/>',
});

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};
