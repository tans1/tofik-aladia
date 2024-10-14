import type { Meta, StoryObj } from "@storybook/vue3";
import SignUpForm from "../../components/templates/authModalContents/signUp.vue";

const meta = {
  title: "Template/SignUpFormModal",
  component: SignUpForm,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The SignUpFormModal component is designed to render a user registration form within a modal interface. This component typically includes input fields for user information such as name, email, and password, as well as options for agreeing to terms and conditions. By presenting the sign-up functionality in a modal format, it allows potential users to register for the application without leaving their current page. The SignUpFormModal can also include features such as validation messages, password strength indicators, and links for existing users to log in, enhancing user experience during the registration process.`
      }
    }
  }
} satisfies Meta<typeof SignUpForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
