import { createStringDecodeEncodeTools } from './helpers/createStringDecodeEncodeTools';

export const Base64 = createStringDecodeEncodeTools('Base64', '', atob, btoa, 'U29tZSB0ZXh0IQ==', 'Some text!');
