import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './alert';

const meta = {
  title: 'Demo/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
    },
    title: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Succès',
    children: 'Votre action a été effectuée avec succès.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Erreur',
    children: 'Une erreur est survenue. Veuillez réessayer.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Attention',
    children: 'Veuillez vérifier vos informations avant de continuer.',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    children: 'Voici une information importante à connaître.',
  },
};

export const WithoutTitle: Story = {
  args: {
    variant: 'info',
    children: 'Message d\'information sans titre.',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <Alert variant="success" title="Succès">
        Votre action a été effectuée avec succès.
      </Alert>
      <Alert variant="error" title="Erreur">
        Une erreur est survenue. Veuillez réessayer.
      </Alert>
      <Alert variant="warning" title="Attention">
        Veuillez vérifier vos informations avant de continuer.
      </Alert>
      <Alert variant="info" title="Information">
        Voici une information importante à connaître.
      </Alert>
    </div>
  ),
};

