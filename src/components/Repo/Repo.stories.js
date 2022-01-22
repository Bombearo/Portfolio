import Repo from "./Repo";

export default {
  title: "Github/Repo",
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
    description: "An api that contains my online presence",
    name: "bombearoAPI",
    languages_url:
      "https://api.github.com/repos/Bombearo/bombearoAPI/languages",
    languages: [
      {
        name: "C#",
        chars: 9762,
        percentage: "100.00%",
      },
    ],
    fork: false,
    html_url: "https://github.com/Bombearo/bombearoAPI",
    node_id: "MDEwOlJlcG9zaXRvcnkzODI4NzI4MDc=",
    clone_url: "https://github.com/Bombearo/bombearoAPI.git",
    ssh_url: "git@github.com:Bombearo/bombearoAPI.git",
    git_url: "git://github.com/Bombearo/bombearoAPI.git",
    stargazers_count: 0,
    watchers_count: 0,
    created_at: "2021-07-04T14:31:39Z",
    pushed_at: "2022-01-02T22:39:50Z",
    updated_at: "2021-12-10T00:05:40Z",
    time_from_creation: "Created 4 months, and 40 days ago",
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  repoData: {
    description: null,
    name: "Portfolio",
    languages_url: "https://api.github.com/repos/Bombearo/Portfolio/languages",
    languages: [
      {
        name: "Vue",
        chars: 3862,
        percentage: "71.06%",
      },
      {
        name: "JavaScript",
        chars: 962,
        percentage: "17.70%",
      },
      {
        name: "HTML",
        chars: 611,
        percentage: "11.24%",
      },
    ],
    fork: false,
    html_url: "https://github.com/Bombearo/Portfolio",
    node_id: "R_kgDOGd0W7A",
    clone_url: "https://github.com/Bombearo/Portfolio.git",
    ssh_url: "git@github.com:Bombearo/Portfolio.git",
    git_url: "git://github.com/Bombearo/Portfolio.git",
    stargazers_count: 0,
    watchers_count: 0,
    created_at: "2021-12-01T17:20:18Z",
    pushed_at: "2022-01-04T22:49:03Z",
    updated_at: "2021-12-24T22:55:07Z",
    time_from_creation: "Created 4 months, and 34 days ago",
  },
};
