import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '../../../app/providers/ThemeProvider';
import { PageError } from './PageError';
import ThemeDecorator from '../../../shared/config/storybook/ThemeDecorator';

const meta: Meta<typeof PageError> = {
    title: 'pages/PageError',
    component: PageError,
    parameters: {
        layout: 'fullscreen',
    },

    tags: ['autodocs'],

} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
