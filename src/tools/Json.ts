import { jsonMinify, jsonPrettyPrint } from '../services/json';
import { createStringTool } from './helpers/createStringTool';

export const JsonMinify = createStringTool(
  'JSON minify',
  'uglify',
  jsonMinify,
  '{\n  "type": "json",\n  "pretty": true\n}',
  '{"type":"json","pretty":true}'
);

export const JsonPrettyPrint = createStringTool(
  'JSON pretty print',
  'beautify format prettify',
  jsonPrettyPrint,
  '{"type":"json","pretty":true}',
  '{\n  "type": "json",\n  "pretty": true\n}',
  [
    {
      name: 'spaces',
      type: 'number',
      defaultValue: 2,
      min: 1,
      max: 10,
    },
  ]
);
