import type { Doc } from '@convex/_generated/dataModel'
import { Select, SelectItem } from '@heroui/select'

type FyleTypeSelectorProperties = {
  type: Doc<'files'>['type'] & 'all'
  setType: (type: Doc<'files'>['type'] & 'all') => void
}

export default function FileTypeSelector({ type, setType }: FyleTypeSelectorProperties) {
  return (
    <Select
      selectedKeys={[type]}
      label="Select a type of file"
      onSelectionChange={(selectedKeys) => {
        if (selectedKeys.currentKey) {
          setType(selectedKeys.currentKey as Doc<'files'>['type'] & 'all')
        }
      }}
    >
      <SelectItem key="all">All</SelectItem>
      <SelectItem key="image">Image</SelectItem>
      <SelectItem key="csv">CSV</SelectItem>
      <SelectItem key="pdf">PDF</SelectItem>
    </Select>
  )
}
