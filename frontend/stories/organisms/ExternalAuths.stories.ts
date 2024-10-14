import type { Meta, StoryObj } from "@storybook/vue3";
import ExternalAuths from "../../components/organisms/ExternalAuths.vue";

const meta = {
  title: "Organisms/ExternalAuths",
  component: ExternalAuths,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The ExternalAuths component is designed to facilitate authentication through third-party services. This component typically presents buttons or links for users to log in or sign up using popular platforms such as Google, Facebook, or Twitter. By offering external authentication options, it enhances user experience by simplifying the login process and allowing users to access the application using their existing accounts on these platforms.`
      }
    }
  }
} satisfies Meta<typeof ExternalAuths>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
