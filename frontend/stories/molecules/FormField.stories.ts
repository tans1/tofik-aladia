import type { Meta, StoryObj } from "@storybook/vue3";
import FormField from "../../components/molecules/FormField.vue";

const meta = {
  title: "Molecules/FormField",
  component: FormField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The FormField component is designed to render a form input field accompanied by an icon. This component provides a consistent layout for form elements, enhancing user experience by visually associating the input with its function. It supports various input types and can be easily customized with different icons and placeholder texts, making it suitable for diverse forms within applications.`
      }
    }
  }
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "",
    placeholder: "Email Address",
    iconClass: "fa-solid fa-envelope",
    updateValue: (value: string) => {
      console.log(value);
    },
    inputType: "text"
  }
};

export const PasswordInput: Story = {
  args: {
    value: "",
    placeholder: "Password",
    iconClass: "fa-solid fa-envelope",
    inputType: "password",
    updateValue: (value: string) => {
      console.log(value);
    }
  }
};

export const DisabledState: Story = {
  args: {
    value: "",
    placeholder: "Email Address",
    iconClass: "fa-solid fa-envelope",
    inputType: "text",
    disabled: true
  }
};

export const FilledState: Story = {
  args: {
    value: "john.doe@example.com",
    placeholder: "Email Address",
    iconClass: "fa-solid fa-envelope",
    inputType: "text",
    updateValue: (value: string) => {
      console.log(value);
    }
  }
};

export const FilledPassword: Story = {
  args: {
    value: "password123",
    placeholder: "Password",
    iconClass: "fa-solid fa-lock",
    inputType: "password",
    updateValue: (value: string) => {
      console.log(value);
    }
  }
};
