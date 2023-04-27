import { useParam } from './useParam';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export function useToolNav(): [string, (tool: string) => void] {
  const currentTool = decodeURIComponent(useParam('tool'));
  const navigate = useNavigate();
  const navigateToolFunc = useCallback(
    (to: string) => navigate(`/tools/${encodeURIComponent(to)}`),
    [navigate]
  );

  return [currentTool, navigateToolFunc];
}
