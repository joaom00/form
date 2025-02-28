// @ts-check

import { defineConfig } from 'rollup'
import { buildConfigs } from '../../scripts/getRollupConfig.js'

export default defineConfig(
  buildConfigs({
    name: 'form-core',
    outputFile: 'index',
    entryFile: './src/index.ts',
  }),
)
