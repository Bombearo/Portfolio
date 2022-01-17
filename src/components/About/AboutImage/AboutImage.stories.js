import AboutImage from "./AboutImage";

export default {
  title: "Components/AboutImage",
  component: AboutImage,
};

const Template = (args) => ({
  components: { AboutImage },
  setup() {
    return { args };
  },
  template: '<AboutImage v-bind="args"/>',
});

export const Primary = Template.bind({});
Primary.args = { src: "../../assets/temp/PFP.jpg" };

export const Secondary = Template.bind({});
Secondary.args = {};
