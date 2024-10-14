import type { Meta, StoryObj } from "@storybook/vue3";
import Header from "../../components/templates/Header.vue";

const meta = {
  title: "Template/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The Header component serves as a key structural element in the application’s layout. It typically includes branding elements such as the application logo, navigation links, and potentially user account options (like login/logout) or notifications. The Header enhances the user experience by providing a consistent place for navigation and branding across different pages of the application. Additionally, it can be styled to align with the application's overall design language and responsiveness for various screen sizes.`
      }
    }
  }
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
