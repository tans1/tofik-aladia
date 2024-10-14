import type { Meta, StoryObj } from "@storybook/vue3";
import CustomText from "../../components/atoms/CustomText.vue";

const meta = {
  title: "Atoms/CustomText",
  component: CustomText,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The Text component is designed to render styled text elements within the application. It provides a flexible way to display text with customizable classes, making it easy to adjust the appearance based on design requirements. This component supports various text sizes, colors, and styles, enhancing the readability and aesthetics of the user interface."
      }
    }
  }
} satisfies Meta<typeof CustomText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    class: "text-white text-2xl",
    text: "Hello World"
  }
};
