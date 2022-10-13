import { TextInput, TextInputRootProps } from './TextInput';
import { Envelope } from 'phosphor-react'
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: (
            <TextInput.Input placeholder="Input Placeholder" />
        )
    },
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
    }
}

export const WithIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: (
            <>
                <TextInput.Icon>
                    <Envelope />
                </TextInput.Icon>
                <TextInput.Input placeholder="Input Placeholder" />
            </>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
    }
}