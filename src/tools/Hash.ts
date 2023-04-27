import { createIOTool } from './helpers/createIOTool';
import { hash } from '../services/hash';

export const Hash = createIOTool(
  'Hash',
  'crypto digest sha1 sha-1 sha256 sha-256 sha384 sha-384 sha512 sha-512',
  hash,
  'Hello world!',
  'd3486ae9136e7856bc42212385ea797094475802',
  [
    {
      name: 'algorithm',
      type: 'enum',
      options: {
        'SHA-1': 'SHA-1',
        'SHA-256': 'SHA-256',
        'SHA-384': 'SHA-384',
        'SHA-512': 'SHA-512',
      },
      defaultValue: 'SHA-512',
    },
  ]
);
