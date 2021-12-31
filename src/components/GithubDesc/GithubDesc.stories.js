import GithubDesc from './GithubDesc';

export default {
  title: 'Home/GithubDesc',
  component: GithubDesc,
};

const Template = (args) => ({
  components: { GithubDesc },
  setup() {
    return { args };
  },
  template: '<GithubDesc v-bind="args"/>',
});

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};