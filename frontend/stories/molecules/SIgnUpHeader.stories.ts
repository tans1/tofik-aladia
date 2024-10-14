import type { Meta, StoryObj } from "@storybook/vue3";
import SignUpHeader from "../../components/molecules/SignUpHeader.vue";

const meta = {
  title: "Molecules/SignUpHeader",
  component: SignUpHeader,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The SignUpHeader component is designed to serve as the header section of the signup modal. It provides context and branding for the signup process, typically including the title and potentially other informational elements to guide the user. This component is crucial for enhancing user experience by making the signup modal visually appealing and informative.`
      }
    }
  }
} satisfies Meta<typeof SignUpHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
