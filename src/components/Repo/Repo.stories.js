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
Primary.args = {
  repoData: {
    "description": "An api that contains my online presence",
    "name": "bombearoAPI",
    "languages_url": "https://api.github.com/repos/Bombearo/bombearoAPI/languages",
    "languages": [
      {
        "name": "C#",
        "chars": 9762,
        "percentage": "100.00%"
      }
    ],
    "fork": false,
    "html_url": "https://github.com/Bombearo/bombearoAPI",
    "node_id": "MDEwOlJlcG9zaXRvcnkzODI4NzI4MDc=",
    "clone_url": "https://github.com/Bombearo/bombearoAPI.git",
    "ssh_url": "git@github.com:Bombearo/bombearoAPI.git",
    "git_url": "git://github.com/Bombearo/bombearoAPI.git",
    "stargazers_count": 0,
    "watchers_count": 0,
    "created_at": "2021-07-04T14:31:39Z",
    "pushed_at": "2021-12-10T00:05:37Z",
    "updated_at": "2021-12-10T00:05:40Z"
  }
};

export const Secondary = Template.bind({});
Secondary.args = {
  repoData: {
    "description": "A Vue Application that integrates PokeAPI v2",
    "name": "VueDex",
    "languages_url": "https://api.github.com/repos/Bombearo/VueDex/languages",
    "languages": [
      {
        "name": "Vue",
        "chars": 11609,
        "percentage": "86.86%"
      },
      {
        "name": "JavaScript",
        "chars": 1065,
        "percentage": "7.97%"
      },
      {
        "name": "HTML",
        "chars": 691,
        "percentage": "5.17%"
      }
    ],
    "fork": false,
    "html_url": "https://github.com/Bombearo/VueDex",
    "node_id": "MDEwOlJlcG9zaXRvcnkzNjM5MDIwMzE=",
    "clone_url": "https://github.com/Bombearo/VueDex.git",
    "ssh_url": "git@github.com:Bombearo/VueDex.git",
    "git_url": "git://github.com/Bombearo/VueDex.git",
    "stargazers_count": 0,
    "watchers_count": 0,
    "created_at": "2021-05-03T11:06:43Z",
    "pushed_at": "2021-06-04T13:34:34Z",
    "updated_at": "2021-06-04T13:34:36Z"
  }
};