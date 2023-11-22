import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '../../../app/providers/ThemeProvider';
import { Modal } from './Modal';
import ThemeDecorator from '../../../shared/config/storybook/ThemeDecorator';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'fullscreen',
    },

    tags: ['autodocs'],

} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        isOpen: true,
        children: 'Lorem12345',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Lorem12345',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
