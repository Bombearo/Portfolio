import SectionContainer from "./SectionContainer.vue";

export default {
  title: "Home/SectionContainer",
  component: SectionContainer,
};

const Template = (args) => ({
  components: { SectionContainer },
  setup() {
    return { args };
  },
  template:
    '<SectionContainer v-bind="args"><template v-slot:content>Hi</template><template v-slot:media> 123</template></SectionContainer>',
});

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = { alignedRight: true };
