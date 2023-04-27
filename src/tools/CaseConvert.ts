import { createIOTool } from './helpers/createIOTool';
import { convertCase } from '../services/convertCase';

export const CaseConvert = createIOTool(
  'Case conversion',
  'casing convert lowercase randomcase text uppercase',
  convertCase,
  'something',
  'SOMETHING',
  [
    {
      name: 'casing',
      type: 'enum',
      defaultValue: 'lower',
      options: {
        lower: 'lower',
        upper: 'UPPER',
        random: 'rAnDOm',
      },
    },
  ]
);
