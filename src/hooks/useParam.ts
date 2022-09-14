import { useParams } from 'react-router-dom';

export function useParam(name: string): string {
  const param = useParams()[name];
  return param || '';
}
