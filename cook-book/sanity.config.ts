import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {vercelDeployTool} from 'sanity-plugin-vercel-deploy'

export default defineConfig({
  name: 'default',
  title: 'Cook Book',

  projectId: 'a0leql2n',
  dataset: 'production',

  plugins: [deskTool(), vercelDeployTool()],

  schema: {
    types: schemaTypes,
  },
})
