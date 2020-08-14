import App from "./App.svelte";

export default {
  title: "App",
  component: App,
  argTypes: {
    placeholder: { control: "text" },
  },
};

const Template = ({ ...args }) => ({
  Component: App,
  props: args,
});

export const Default = Template.bind({});
