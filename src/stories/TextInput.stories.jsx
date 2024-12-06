import { useState } from "react";
import TextInput from "../components/TextInput";

export default {
  title: "TextInput",
  component: TextInput,

  args: {
    // onSubmit: { control: "submit" },
    // placeholder: { control: "text" },
    // value: { control: { disabled: true } },
  },
};

const RenderComponent = ({ placeholder, value, onChange, onSubmit }) => {
  const [v, setV] = useState(value ?? "");

  const handleOnChange = (event) => {
    setV(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setV("");
  };

  return (
    <TextInput
      value={v}
      placeholder={placeholder}
      onSubmit={handleOnSubmit}
      onChange={handleOnChange}
    />
  );
};

export const TextInputDemo = RenderComponent.bind({});

TextInputDemo.args = { placeholder: "Enter text here..." };

export const TextInputDemo2 = RenderComponent.bind({});

TextInputDemo2.args = { placeholder: "Enter here..." };
