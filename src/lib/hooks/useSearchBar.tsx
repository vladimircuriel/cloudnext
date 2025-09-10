import type { SearchBarProperties } from '@components/search/SearchBar'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  query: z
    .string()
    .min(0, { message: 'Query must be at least 1 character' })
    .max(100, { message: 'Query must be at most 100 characters' }),
})

export function useSearchBar({ setQuery }: SearchBarProperties) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setQuery(values.query)
  }

  return { form, onSubmit }
}
