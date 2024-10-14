import type { Meta, StoryObj } from "@storybook/vue3";
import LoginIntro from "../../components/organisms/LoginIntro.vue";

const meta = {
  title: "Organisms/LoginIntro",
  component: LoginIntro,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The LoginIntro component is designed to provide an introductory section within the login modal. This component typically contains a welcome message, brief instructions, or motivational text that guides users through the login process. By setting the right tone, it enhances the user experience and encourages users to proceed with their login or registration. This component can be styled to align with the overall branding of the application and can include imagery or icons to further engage users.`
      }
    }
  }
} satisfies Meta<typeof LoginIntro>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
