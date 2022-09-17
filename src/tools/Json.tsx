import { jsonMinify, jsonPrettyPrint } from '../services/json';
import { createStringTool } from './createStringTool';

export const JsonMinify = createStringTool(
  'JSON minify',
  jsonMinify,
  '{\n  "type": "json",\n  "pretty": true\n}',
  '{"type":"json","pretty":true}'
);

export const JsonPrettyPrint = createStringTool(
  'JSON pretty print',
  jsonPrettyPrint,
  '{"type":"json","pretty":true}',
  '{\n  "type": "json",\n  "pretty": true\n}',
  [
    {
      name: 'Spaces',
      type: 'number',
      defaultValue: 2,
      min: 1,
      max: 10,
    },
  ]
);
