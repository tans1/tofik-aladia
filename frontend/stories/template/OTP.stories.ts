import type { Meta, StoryObj } from "@storybook/vue3";
import OTP from "../../components/templates/authModalContents/OTP.vue";

const meta = {
  title: "Template/OTP",
  component: OTP,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The OTP (One-Time Password) component is designed to render a modal for user verification via a one-time password. This modal typically includes input fields for the user to enter the OTP sent to their registered email or phone number. The OTP component plays a crucial role in enhancing security during the authentication process, ensuring that only users with access to the designated communication channel can proceed. It can also include features such as resending the OTP and visual feedback for successful or failed verification attempts.`
      }
    }
  }
} satisfies Meta<typeof OTP>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
