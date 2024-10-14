import type { Meta, StoryObj } from "@storybook/vue3";
import LoginSuccess from "../../components/templates/authModalContents/loginSuccess.vue";

const meta = {
  title: "Template/LoginSuccessModal",
  component: LoginSuccess,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The LoginSuccessModal component is designed to provide feedback to users upon successful login. This modal typically includes a message confirming the successful authentication, along with options to proceed to the application or explore features. By providing immediate feedback, the LoginSuccessModal enhances user experience and assures users that their login was successful. It can be customized with additional elements such as graphics, next steps, or helpful links to guide users in their next actions after logging in.`
      }
    }
  }
} satisfies Meta<typeof LoginSuccess>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
