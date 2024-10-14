import type { Meta, StoryObj } from "@storybook/vue3";
import Login from "../../components/templates/authModalContents/Login.vue";

const meta = {
  title: "Template/LoginModal",
  component: Login,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The LoginModal component is designed to render the login interface within a modal. This component facilitates user authentication by providing fields for entering credentials, such as email and password, along with options for password recovery and registration. By presenting the login functionality in a modal format, it allows users to quickly access their accounts without navigating away from their current context. The LoginModal can be styled to align with the overall branding of the application and can include additional features like validation messages, error handling, and social login options to enhance user experience.`
      }
    }
  }
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
