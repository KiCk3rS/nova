import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from './input-field';

const meta = {
  title: 'Demo/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    helpText: {
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
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Nom',
    placeholder: 'Entrez votre nom',
  },
};

export const WithHelpText: Story = {
  args: {
    label: 'Email',
    placeholder: 'exemple@email.com',
    helpText: 'Nous ne partagerons jamais votre email',
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

export const WithoutLabel: Story = {
  args: {
    placeholder: 'Champ sans label',
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-full max-w-md">
      <InputField
        label="État normal"
        placeholder="Texte d'exemple"
        helpText="Ceci est un texte d'aide"
      />
      <InputField
        label="État avec erreur"
        placeholder="Texte d'exemple"
        error="Ce champ contient une erreur"
      />
      <InputField
        label="État désactivé"
        placeholder="Texte d'exemple"
        disabled
      />
    </div>
  ),
};

