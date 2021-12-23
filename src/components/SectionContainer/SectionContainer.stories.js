import SectionContainer from './SectionContainer';

export default {
  title: 'Home/SectionContainer',
  component: SectionContainer,
};

const Template = (args) => ({
  components: { SectionContainer },
  setup() {
    return { args };
  },
  template: '<SectionContainer v-bind="args"><div>Hi</div><div> 123</div>  </SectionContainer>',
});

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = { alignedRight: true };