import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '../../../app/providers/ThemeProvider';
import ThemeDecorator from '../../../shared/config/storybook/ThemeDecorator';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'fullscreen',
    },

    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'text',
    },
};

// Primary.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.CLEAR,
    },
};

export const OutlineDark: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlineLight: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.OUTLINE,
    },
};

export const BackgroundTheme: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.BACKGROUND,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const BackgroundInvertedTheme: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareSizeM: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareSizeL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareSizeXL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlineSizeL: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};

export const OutlineSizeXL: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
};
