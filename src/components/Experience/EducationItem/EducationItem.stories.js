import EducationItem from "./EducationItem";

export default {
  title: "Experience/EducationItem",
  component: EducationItem,
};

const Template = (args) => ({
  components: { EducationItem },
  setup() {
    return { args };
  },
  template: '<EducationItem v-bind="args"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  dateRange: "2021-2025 (Expected)",
  qualification: "BSc Computer Science",
  subText: "University of Edinburgh",
};

export const Secondary = Template.bind({});
Secondary.args = {};
