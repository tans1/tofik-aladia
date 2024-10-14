import type { Meta, StoryObj } from "@storybook/vue3";
import GradientButton from "../../components/atoms/buttons/GradientButton.vue";

const meta = {
  title: "Atoms/GradientButton",
  component: GradientButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The GradientButton component renders a button with a customizable gradient background. It is designed to enhance the visual appeal of the application while providing a flexible way to implement button functionality. The button's text, type, and additional classes can be easily configured, making it adaptable to various use cases."
      }
    }
  }
} as Meta<typeof GradientButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Gradient Button",
    handleClick: () => {},
    buttonType: "button",
    disabled: false,
    buttonClass: "w-40 h-12 text-white"
  }
};
