import { createDecodeEncodeTools } from './helpers/createDecodeEncodeTools';

export const Base64 = createDecodeEncodeTools(
  'Base64',
  '',
  atob,
  btoa,
  'U29tZSB0ZXh0IQ==',
  'Some text!'
);
