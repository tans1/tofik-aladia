import type { Meta, StoryObj } from "@storybook/vue3";
import CustomIcon from "../../components/atoms/CustomIcon.vue";

const meta = {
  title: "Atoms/CustomIcon",
  component: CustomIcon,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "This component is used to render an icon with customizable styles and classes. The CustomIcon component is designed to be reusable and flexible, allowing developers to easily integrate icons throughout the application. The icon can be styled using various CSS classes, enabling easy customization to fit the design requirements."
      }
    }
  }
} satisfies Meta<typeof CustomIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconClass: "fas fa-user text-white text-2xl"
  }
};
