import type { Meta, StoryObj } from "@storybook/vue3";
import Home from "../../components/templates/authModalContents/Home.vue";

const meta = {
  title: "Template/HomeModal",
  component: Home,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The HomeModal component is designed to render the home page content within a modal interface. This component serves as the initial entry point for users who access the application, providing a welcoming message and key information about the application’s features. It enhances user engagement by presenting essential information in a modal format, allowing users to quickly grasp the purpose and offerings of the application without navigating away from their current context. The HomeModal can be styled to align with the overall branding and design of the application, ensuring a consistent user experience.`
      }
    }
  }
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
