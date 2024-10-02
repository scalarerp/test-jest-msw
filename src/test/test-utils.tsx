import React, { ReactElement } from 'react'
import { render, within } from '@testing-library/react'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from 'store/qc'

type Options = Parameters<typeof render>[1]

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

const customRender = (ui: ReactElement, options?: Options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

const customScreen = within(document.body)

export * from '@testing-library/react'
export { customScreen as screen, customRender as render }
