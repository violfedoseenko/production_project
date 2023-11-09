import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '../../../../app/providers/ThemeProvider';
import { SideBar } from './SideBar';
import ThemeDecorator from '../../../../shared/config/storybook/ThemeDecorator';

const meta: Meta<typeof SideBar> = {
    title: 'widgets/SideBar',
    component: SideBar,
    parameters: {
        layout: 'fullscreen',
    },

    tags: ['autodocs'],

} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
