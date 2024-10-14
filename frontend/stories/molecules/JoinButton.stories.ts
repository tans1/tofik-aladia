import type { Meta, StoryObj } from "@storybook/vue3";
import JoinButton from "../../components/molecules/JoinButton.vue";

const meta = {
  title: "Organisms/JoinButton",
  component: JoinButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The JoinButton component serves as a call-to-action button that triggers the authentication modal within the application. This component is designed to streamline user access by providing a clear pathway for login, sign-up, or other authentication-related actions. With customizable styles and behaviors, the JoinButton can easily integrate into various layouts and design systems.`
      }
    }
  }
} satisfies Meta<typeof JoinButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
