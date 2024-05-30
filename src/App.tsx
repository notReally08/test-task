import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { FormulaInput } from './FormulaInput';

const queryClient = new QueryClient()

export const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <FormulaInput/>
    </QueryClientProvider>
  )
}
