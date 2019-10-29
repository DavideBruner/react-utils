import { renderHook } from '@testing-library/react-hooks';

import useAnimatedNumber from './useAnimatedNumber';

jest.useFakeTimers();

describe('useAnimatedNumber', () => {
  it('should return a positive value', () => {
    const duration = 1000;
    const to = 6000;
    const { result } = renderHook(() => useAnimatedNumber(to, { duration }));
    setTimeout(() => {
      expect(result.current).toEqual(to);
    }, duration);
  });

  it('should return a negative value', () => {
    const duration = 1000;
    const to = -6000;
    const { result } = renderHook(() => useAnimatedNumber(to, { duration }));
    setTimeout(() => {
      expect(result.current).toEqual(to);
    }, duration);
  });

  it('should return the correct value with a fast duration', () => {
    const duration = 10;
    const to = 1234567777;
    const { result } = renderHook(() => useAnimatedNumber(to, { duration }));
    setTimeout(() => {
      expect(result.current).toEqual(to);
    }, duration);
  });
});
