import type { Meta, StoryObj } from "@storybook/vue3";
import SignUpIntro from "../../components/organisms/SignUpIntro.vue";

const meta = {
  title: "Organisms/SignUpIntro",
  component: SignUpIntro,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The SignUpIntro component is designed to provide an introductory section within the sign-up modal. This component typically includes a welcoming message, brief instructions, or motivational text that encourages users to create an account. By presenting relevant information upfront, it enhances the user experience and guides users through the sign-up process. The component can be styled to align with the overall branding of the application and can include imagery or icons to make it more engaging.`
      }
    }
  }
} satisfies Meta<typeof SignUpIntro>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
