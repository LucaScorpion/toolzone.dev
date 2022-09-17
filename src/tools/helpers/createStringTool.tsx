import { Tool } from '../Tool';
import { useState } from 'react';
import { useEffectWithCatch } from '../../hooks/useEffectWithCatch';
import { TextAreaInput } from '../../components/input/TextAreaInput';
import { ToolOption } from '../toolOptions';
import { ToolOptionItem } from '../../components/ToolOptionItem';
import { upperCaseFirst } from '../../utils/upperCaseFirst';
import { classNames } from '../../utils/classNames';

export type StringFn<T> = (input: string, options: T) => string;

export function createStringTool<T>(
  name: string,
  toolFn: StringFn<T>,
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
    Component: () => {
      const [value, setValue] = useState('');
      const [options, setOptions] = useState<Record<string, unknown>>(() => {
        const opts: Record<string, unknown> = {};
        toolOptions?.forEach((opt) => {
          opts[opt.name] = opt.defaultValue;
        });
        return opts;
      });
      const result = useEffectWithCatch(() => toolFn(value, options as T), [value, options]);

      return (
        <div className="panels-options">
          <div className="panels">
            <TextAreaInput value={value} onChange={setValue} placeholder={inputExample} />
            <TextAreaInput
              value={result?.toString()}
              placeholder={outputExample}
              className={classNames(result instanceof Error && 'error')}
            />
          </div>
          {toolOptions && (
            <div className="options">
              {toolOptions?.map((opt) => (
                <div key={opt.name}>
                  {upperCaseFirst(opt.name)}
                  <ToolOptionItem
                    option={opt}
                    value={options[opt.name]}
                    setValue={(newVal) =>
                      setOptions((prevState) => ({
                        ...prevState,
                        [opt.name]: newVal,
                      }))
                    }
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      );
    },
  };
}
