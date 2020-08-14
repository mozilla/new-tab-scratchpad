import TopSite from "./TopSite.svelte";

export default {
  title: "Top Site Card",
  component: TopSite,
  argTypes: {
    bgColor: { control: "text" },
    url: { control: "text" },
    title: { control: "text" },
    icon: {cotrol: "text"}
  },
};

const Template = ({ ...args }) => ({
  Component: TopSite,
  props: args,
});

export const Default = Template.bind({});
