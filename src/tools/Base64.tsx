import { createStringDecodeEncodeTool } from './createStringDecodeEncodeTool';

export const Base64 = createStringDecodeEncodeTool('Base64', atob, btoa, 'U29tZSB0ZXh0IQ==', 'Some text!');
