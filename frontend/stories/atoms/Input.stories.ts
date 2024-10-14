import type { Meta, StoryObj } from "@storybook/vue3";
import CustomInput from "../../components/atoms/CustomInput.vue";

const meta = {
  title: "Atoms/CustomInput",
  component: CustomInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The Input component is designed to render a versatile text input field. It supports various input types, making it suitable for gathering user input in forms. This component allows for customizable placeholders, styles, and states (like disabled), providing developers with the flexibility to create intuitive user interfaces."
      }
    }
  }
} satisfies Meta<typeof CustomInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Enter text here",
    value: "",
    class: "border p-2 rounded",
    disabled: false
  }
};
