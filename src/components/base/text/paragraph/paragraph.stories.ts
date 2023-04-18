import type { Meta, StoryObj } from '@storybook/react';

import Paragraph  from './paragraph';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Paragraph> = {
  title: 'text/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const DefaultParagraph: Story = {
  args: {
    size: "md",
    element:"p",
    children: 'just a paragraph',
  },
};
