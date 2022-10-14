import { SignIn } from './SignIn';
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Components/SignIn',
    component: SignIn,
} as Meta

export const Default: StoryObj = {
    play: async ({ canvasElement}) => {
        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'email@email.com')
        userEvent.type(canvas.getByPlaceholderText('Digite sua senha'), 'senhafoo')

        userEvent.click(canvas.getByRole('button'))

        await waitFor(() => {
            return expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
        })
    }
}