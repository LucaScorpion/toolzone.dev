import { useService } from '../hooks/useService';
import { TemperatureService } from '../services/TemperatureService';
import { Tool } from './Tool';

export const TemperatureConverter: Tool = {
  name: 'Temperature converter',
  Component: () => {
    const service = useService(TemperatureService);
    return <div>Temperature converter!</div>;
  },
};
