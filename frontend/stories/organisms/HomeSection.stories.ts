import type { Meta, StoryObj } from "@storybook/vue3";
import HomeSection from "../../components/organisms/HomeSection.vue";

const meta = {
  title: "Organisms/HomeSection",
  component: HomeSection,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The HomeSection component serves as a key part of the application's homepage layout. It typically includes various content elements, such as promotional banners, featured products or services, and call-to-action buttons, aimed at engaging users and guiding them through the initial steps of interaction with the application. This component is designed to be visually appealing and informative, helping to create an inviting user experience.`
      }
    }
  }
} satisfies Meta<typeof HomeSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
