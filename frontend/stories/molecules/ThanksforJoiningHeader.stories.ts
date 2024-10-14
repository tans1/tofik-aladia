import type { Meta, StoryObj } from "@storybook/vue3";
import ThanksforJoiningHeader from "../../components/molecules/ThanksforJoiningHeader.vue";

const meta = {
  title: "Molecules/ThanksforJoiningHeader",
  component: ThanksforJoiningHeader,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The ThanksforJoiningHeader component is intended to be displayed when a user has successfully joined the Aladai platform. This component serves as a confirmation message, enhancing the user experience by acknowledging their successful registration. It typically includes a positive message and can be styled to fit within various layouts, reinforcing the brand's identity and user satisfaction.`
      }
    }
  }
} satisfies Meta<typeof ThanksforJoiningHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
