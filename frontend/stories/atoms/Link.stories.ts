import type { Meta, StoryObj } from "@storybook/vue3";
import CustomLink from "../../components/atoms/CustomLink.vue";

const meta = {
  title: "Atoms/CustomLink",
  component: CustomLink,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The CustomLink component is designed to create navigable links within the application. It provides an easy way to specify link destinations, text, and styles. This component supports various attributes such as target and rel, enabling developers to customize how links behave, making it suitable for both internal and external navigation."
      }
    }
  }
} satisfies Meta<typeof CustomLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    endpoint: "https://develop.aladia.io/",
    target: "_blank",
    text: "Aladia",
    linkClass: "text-1xl underline text-white"
  }
};
