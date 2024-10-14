import type { Meta, StoryObj } from "@storybook/vue3";
import EmailSubmit from "../../components/organisms/EmailSubmit.vue";

const meta = {
  title: "Organisms/EmailSubmit",
  component: EmailSubmit,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The EmailSubmit component is designed to handle the submission of an email address to the backend for verification. This component facilitates the process of checking whether a user already has an account associated with the submitted email. By providing a user-friendly interface, it enhances the overall experience during the signup or account recovery process. It can integrate seamlessly into various workflows where email validation is required.`
      }
    }
  }
} satisfies Meta<typeof EmailSubmit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
