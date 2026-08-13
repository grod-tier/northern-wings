import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas/index.js';

export default defineConfig({
  name: 'northern-wings',
  title: 'Northern Wings',

  projectId: 'ryf1dyhh',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: { types: schemaTypes },
});
