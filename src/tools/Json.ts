import { jsonMinify, jsonPrettyPrint } from '../services/json';
import { createIOTool } from './helpers/createIOTool';

export const JsonMinify = createIOTool(
  'JSON minify',
  'uglify',
  jsonMinify,
  '{\n  "type": "json",\n  "pretty": true\n}',
  '{"type":"json","pretty":true}'
);

export const JsonPrettyPrint = createIOTool(
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
