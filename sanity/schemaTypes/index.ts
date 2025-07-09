import { type SchemaTypeDefinition } from 'sanity'
import idea from './idea'
import testimonial from './testimonial'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [idea, testimonial],
}
