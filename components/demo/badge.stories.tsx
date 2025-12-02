import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';

const meta = {
  title: 'Demo/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error', 'info'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'md',
    children: 'Badge',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    size: 'md',
    children: 'Succès',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    size: 'md',
    children: 'Attention',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    size: 'md',
    children: 'Erreur',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    size: 'md',
    children: 'Information',
  },
};

export const Small: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    children: 'Petit badge',
  },
};

export const Large: Story = {
  args: {
    variant: 'default',
    size: 'lg',
    children: 'Grand badge',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <Badge variant="default">Default</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
        <Badge variant="info">Info</Badge>
      </div>
      <div className="flex gap-2 items-center">
        <Badge size="sm">Small</Badge>
        <Badge size="md">Medium</Badge>
        <Badge size="lg">Large</Badge>
      </div>
    </div>
  ),
};

