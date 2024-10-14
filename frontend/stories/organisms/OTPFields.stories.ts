import type { Meta, StoryObj } from "@storybook/vue3";
import OTPFields from "../../components/organisms/OTPFields.vue";

const meta = {
  title: "Organisms/OTPFields",
  component: OTPFields,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The OTPFields component is designed to facilitate the input of one-time passwords (OTP) during user authentication processes. This component typically includes multiple input fields, allowing users to enter each digit of the OTP separately. By providing a clear and user-friendly interface for OTP input, it enhances the security and usability of the login or verification process. The component can also include features like auto-focus on the next field upon input completion and validation feedback.`
      }
    }
  }
} satisfies Meta<typeof OTPFields>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
