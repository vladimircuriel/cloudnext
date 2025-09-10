import SearchIcon from '@components/icons/SearchIcon'
import { Button } from '@heroui/button'
import { Input } from '@heroui/input'
import { useSearchBar } from '@lib/hooks/useSearchBar'
import type { Dispatch, SetStateAction } from 'react'

export type SearchBarProperties = {
  query: string
  setQuery: Dispatch<SetStateAction<string>>
}

export default function SearchBar({ query, setQuery }: SearchBarProperties) {
  const { form, onSubmit } = useSearchBar({ query, setQuery })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-row items-center justify-center gap-x-4"
    >
      <div>
        <Input
          isClearable
          defaultValue={query}
          placeholder="Type to search..."
          startContent={<SearchIcon />}
          {...register('query')}
        />
        {errors.query && <p className="text-red-500">{errors.query.message}</p>}
      </div>

      <Button
        type="submit"
        color="primary"
        variant="shadow"
        isDisabled={form.formState.isSubmitting}
      >
        Search
      </Button>
    </form>
  )
}
