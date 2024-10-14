import type { Meta, StoryObj } from "@storybook/vue3";
import AttachImage from "../../components/atoms/AttachImage.vue";

const meta = {
  title: "Atoms/AttachImage",
  component: AttachImage,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The AttachImage component allows users to upload and preview an image. Users can click on the displayed image to open the file input dialog, select an image file, and see a preview of the selected image. This component is designed for flexibility and ease of integration within forms or other UI elements."
      }
    }
  }
} satisfies Meta<typeof AttachImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://develop.aladia.io/logo/image.png",
    class: "border rounded-lg p-2 w-30 h-20"
  }
};
