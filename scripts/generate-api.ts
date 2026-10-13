import { rm } from 'node:fs/promises';
import { generateFiles } from 'fumadocs-openapi';
import { openapi } from '../lib/openapi';

const output = './content/docs/api-reference/generated';

// Remove stale endpoints when the source schema changes.
await rm(output, { recursive: true, force: true });
await generateFiles({ input: openapi, output, groupBy: 'tag' });
