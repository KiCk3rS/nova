import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

const meta = {
  title: 'Demo/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    error: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Nom',
    placeholder: 'Entrez votre nom',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'exemple@email.com',
    error: 'Veuillez entrer une adresse email valide',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Champ désactivé',
    placeholder: 'Ce champ est désactivé',
    disabled: true,
  },
};

export const Password: Story = {
  args: {
    label: 'Mot de passe',
    type: 'password',
    placeholder: 'Entrez votre mot de passe',
  },
};

export const Email: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'exemple@email.com',
  },
};

export const WithoutLabel: Story = {
  args: {
    placeholder: 'Champ sans label',
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-full max-w-md">
      <Input
        label="État normal"
        placeholder="Texte d'exemple"
      />
      <Input
        label="État avec erreur"
        placeholder="Texte d'exemple"
        error="Ce champ contient une erreur"
      />
      <Input
        label="État désactivé"
        placeholder="Texte d'exemple"
        disabled
      />
      <Input
        label="Mot de passe"
        type="password"
        placeholder="Entrez votre mot de passe"
      />
    </div>
  ),
};

