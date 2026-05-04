/**
 * lib/env.js
 *
 * Loads .env from the project root exactly once, regardless of which lib
 * file imports it first. Safe to import from any entry point (server,
 * CLI, standalone scripts, tests).
 */
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';
import { existsSync } from 'fs';

// Resolve the .env path robustly whether this module is run as a file or inline.
// 1. Try the directory of this file (lib/../.env = project root .env)
// 2. Fall back to process.cwd()/.env
const __dirname = dirname(fileURLToPath(import.meta.url));
const candidates = [
  join(__dirname, '../.env'),   // works when imported as lib/env.js
  resolve(process.cwd(), '.env'), // works when CWD is the project root
];
const envPath = candidates.find(p => existsSync(p));
if (envPath) config({ path: envPath, override: true });
