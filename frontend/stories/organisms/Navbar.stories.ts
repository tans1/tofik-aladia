import type { Meta, StoryObj } from "@storybook/vue3";
import Navbar from "../../components/organisms/Navbar.vue";

const meta = {
  title: "Organisms/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The Navbar component serves as the primary navigation interface for the application. It typically contains links or buttons that allow users to navigate to different sections or features of the app, such as Home, About, Services, Contact, and User Profile. The Navbar enhances user experience by providing clear and accessible navigation options. It can be styled to reflect the application's branding and can include responsive design elements to ensure usability across various screen sizes.`
      }
    }
  }
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
