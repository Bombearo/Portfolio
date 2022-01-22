import CloneContainer from "./CloneContainer";

export default {
  title: "Github/CloneContainer",
  component: CloneContainer,
};

const Template = (args) => ({
  components: { CloneContainer },
  setup() {
    return { args };
  },
  template: '<CloneContainer v-bind="args"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  html: "https://github.com/Bombearo/Portfolio.git",
  ssh: "git@github.com:Bombearo/Portfolio.git",
  git: "git://github.com/Bombearo/bombearoAPI.git",
};

export const Secondary = Template.bind({});
Secondary.args = {};
