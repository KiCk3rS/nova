import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './card';
import { Settings, User, Bell } from 'lucide-react';

const meta = {
  title: 'Demo/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Titre de la carte',
    children: (
      <p className="text-neutral-600 dark:text-neutral-400">
        Ceci est le contenu de la carte. Vous pouvez y placer n'importe quel élément React.
      </p>
    ),
  },
};

export const WithIcon: Story = {
  args: {
    title: 'Paramètres',
    icon: <Settings className="w-4 h-4" />,
    children: (
      <div className="space-y-2">
        <p className="text-neutral-600 dark:text-neutral-400">
          Gérer vos paramètres de compte et vos préférences.
        </p>
        <button className="text-blue-600 dark:text-blue-400 hover:underline">
          Modifier les paramètres
        </button>
      </div>
    ),
  },
};

export const WithUserIcon: Story = {
  args: {
    title: 'Profil utilisateur',
    icon: <User className="w-4 h-4" />,
    children: (
      <div className="space-y-4">
        <div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Email</p>
          <p className="text-neutral-900 dark:text-white">user@example.com</p>
        </div>
        <div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Rôle</p>
          <p className="text-neutral-900 dark:text-white">Administrateur</p>
        </div>
      </div>
    ),
  },
};

export const WithNotificationIcon: Story = {
  args: {
    title: 'Notifications',
    icon: <Bell className="w-4 h-4" />,
    children: (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-neutral-600 dark:text-neutral-400">
            Notifications par email
          </span>
          <input type="checkbox" defaultChecked className="rounded" />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-neutral-600 dark:text-neutral-400">
            Notifications push
          </span>
          <input type="checkbox" className="rounded" />
        </div>
      </div>
    ),
  },
};

export const MultipleCards: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
      <Card title="Carte 1" icon={<Settings className="w-4 h-4" />}>
        <p className="text-neutral-600 dark:text-neutral-400">
          Contenu de la première carte
        </p>
      </Card>
      <Card title="Carte 2" icon={<User className="w-4 h-4" />}>
        <p className="text-neutral-600 dark:text-neutral-400">
          Contenu de la deuxième carte
        </p>
      </Card>
      <Card title="Carte 3" icon={<Bell className="w-4 h-4" />}>
        <p className="text-neutral-600 dark:text-neutral-400">
          Contenu de la troisième carte
        </p>
      </Card>
      <Card title="Carte 4">
        <p className="text-neutral-600 dark:text-neutral-400">
          Contenu de la quatrième carte sans icône
        </p>
      </Card>
    </div>
  ),
};

