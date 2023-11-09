import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '../../../app/providers/ThemeProvider';
import { NotFoundPage } from './NotFoundPage';
import ThemeDecorator from '../../../shared/config/storybook/ThemeDecorator';

const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    parameters: {
        layout: 'fullscreen',
    },

    tags: ['autodocs'],

} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
