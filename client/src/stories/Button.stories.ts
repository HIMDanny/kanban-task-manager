import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/button/Button';

const meta = {
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const Primary: Story = {
  args: {
    variant: 'primary',
    type: 'button',
    text: 'Add new board',
  },
};

const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: 'secondary',
  },
};

const Destructive: Story = {
  args: {
    ...Primary.args,
    variant: 'destructive',
  },
};

export { Destructive, Primary, Secondary };
