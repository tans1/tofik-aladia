import type { Meta, StoryObj } from "@storybook/vue3";
import CustomImage from "../../components/atoms/CustomImage.vue";

const meta = {
  title: "Atoms/CustomImage",
  component: CustomImage,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The Image component is designed to render an image with customizable source URLs and styling. This component is flexible and can be used to display images from various sources while allowing developers to easily apply CSS classes for styling purposes. The Image component supports responsive design, making it suitable for different screen sizes."
      }
    }
  }
} as Meta<typeof CustomImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://develop.aladia.io/_nuxt/image.ChQ3biW9.png",
    class: "border border-gray-300"
  }
};
