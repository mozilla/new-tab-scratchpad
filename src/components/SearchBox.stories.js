import SearchBox from './SearchBox.svelte';

export default {
  title: "SearchBox",
  component: SearchBox,
  argTypes: {
    placeholder: { control: 'text' }
  }
};

const Template = ({ ...args }) => ({
  Component: SearchBox,
  props: args,
});

export const Default = Template.bind({});
