import { createStringDecodeEncodeTools } from './helpers/createStringDecodeEncodeTools';

export const Percent = createStringDecodeEncodeTools(
  'Percent',
  decodeURIComponent,
  encodeURIComponent,
  'some%20value%3Fthing%3D3%25',
  'some value?thing=3%'
);
