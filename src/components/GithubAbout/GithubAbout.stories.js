import GithubAbout from './GithubAbout';

export default {
  title: 'HomePage/GithubAbout',
  component: GithubAbout,
};

const Template = (args) => ({
  components: { GithubAbout },
  setup() {
    return { args };
  },
  template: '<GithubAbout v-bind="args"/>',
});

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};