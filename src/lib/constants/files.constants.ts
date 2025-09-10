import type { Doc } from '@convex/_generated/dataModel'

const FILE_TYPES = {
  'image/png': 'image',
  'image/jpeg': 'image',
  'image/jpg': 'image',
  'image/webp': 'image',
  'application/pdf': 'pdf',
  'text/csv': 'csv',
} as Record<string, Doc<'files'>['type']>

export default FILE_TYPES
