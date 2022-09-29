import { DependencyList, useCallback, useEffect, useState } from 'react';

export type Result<T> = T | Error | undefined;

export function useEffectWithCatch<T>(effect: () => T | Promise<T>, deps: DependencyList): Result<T> {
  const [result, setResult] = useState<Result<T>>();

  // Here we don't want to add `effect` as a dependency of `useCallback`,
  // since that will cause infinite re-renders.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const effectCallback = useCallback(effect, deps);

  useEffect(() => {
    (async () => {
      try {
        setResult(await effectCallback());
      } catch (e) {
        if (e instanceof Error) {
          setResult(e);
        } else {
          setResult(new Error(`${e}`));
        }
      }
    })();
  }, [effectCallback]);

  return result;
}
