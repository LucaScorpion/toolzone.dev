import { createDecodeEncodeTools } from './helpers/createDecodeEncodeTools';

export const Percent = createDecodeEncodeTools(
  'Percent',
  'uri url',
  decodeURIComponent,
  encodeURIComponent,
  'some%20value%3Fthing%3D3%25',
  'some value?thing=3%'
);
