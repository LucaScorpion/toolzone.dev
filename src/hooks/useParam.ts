import { useParams } from 'react-router-dom';

export function useParam(name: string): string {
  const params: Record<string, string> = useParams();
  return params[name];
}
