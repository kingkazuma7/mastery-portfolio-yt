// First, we must import the schema creator

// Then import schema types from any plugins that might expose them
import works from './works'
import brands from './brands'
import experiences from './experiences'
import skills from './skills'
import workExperience from './workExperience'
import contact from './contact'
import {createSchema} from 'sanity'

export const schemaTypes = [works, brands, skills, workExperience, experiences, contact]

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    works,
    brands,
    skills,
    workExperience,
    experiences,
    contact,
    /* Your types here! */
  ]),
})
