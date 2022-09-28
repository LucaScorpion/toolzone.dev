import { createStringTool } from './helpers/createStringTool';
import { hash } from '../services/hash';

export const Hash = createStringTool(
  'Hash',
  'digest sha1 sha-1 sha256 sha-256 sha384 sha-384 sha512 sha-512',
  hash,
  'Hello world!',
  'd3486ae9136e7856bc42212385ea797094475802',
  [
    // TODO: algorithm option.
  ]
);
