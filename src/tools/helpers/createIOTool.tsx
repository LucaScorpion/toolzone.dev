import { Tool } from '../Tool';
import { useState } from 'react';
import { useEffectWithCatch } from '../../hooks/useEffectWithCatch';
import { TextArea } from '../../components/input/TextArea';
import { ToolOption } from '../toolOptions';
import { classNames } from '../../utils/classNames';
import { OptionValues, ToolOptions } from '../../components/ToolOptions';
import { IOField } from '../../components/input/IOField';

type Value = string | ArrayBuffer;

export type IOFn<T> = (input: string, options: T) => Value | Promise<Value>;

export function createIOTool<T>(
  name: string,
  additionalTags: string,
  toolFn: IOFn<T>,
  inputExample: string,
  outputExample: string,
  toolOptions?: ToolOption[]
): Tool {
  if (toolOptions) {
    for (const opt of toolOptions) {
      if (opt.name.toLowerCase() !== opt.name) {
        throw new Error(`Error in tool: ${name}, option name should be all lowercase for: ${opt.name}`);
      }
    }
  }

  return {
    name,
    additionalTags,
    Component: () => {
      const [value, setValue] = useState('');
      const [options, setOptions] = useState<OptionValues>(() => {
        const opts: OptionValues = {};
        toolOptions?.forEach((opt) => {
          opts[opt.name] = opt.defaultValue;
        });
        return opts;
      });
      const result = useEffectWithCatch(() => toolFn(value, options as T), [value, options]);

      return (
        <div className="tool two-panels">
          <div className="input-output">
            <TextArea value={value} onChange={setValue} placeholder={inputExample} />
            <IOField
              value={result instanceof Error ? undefined : result}
              placeholder={outputExample}
              className={classNames(result instanceof Error && 'error')}
            />
          </div>
          {toolOptions && <ToolOptions toolOptions={toolOptions} value={options} onChange={setOptions} />}
        </div>
      );
    },
  };
}
