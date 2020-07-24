import { useEffect, useLayoutEffect } from 'react';
import { EffectType } from './interfaces';

export const useVariedEffect = (type: EffectType, effectHandler: () => void) => {
  const useEffectHook = type === 'regular' ? useEffect : useLayoutEffect;
  useEffectHook(effectHandler);
};
