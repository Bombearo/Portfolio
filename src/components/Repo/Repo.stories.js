import Repo from './Repo';

export default {
  title: 'Github/Repo',
  component: Repo,
};

const Template = (args) => ({
  components: { Repo },
  setup() {
    return { args };
  },
  template: '<Repo v-bind="args"/>',
});

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};