import { Button } from '@/shared/ui';
import { useCounter } from '../model/useCounter';

/**
 * Counter component demonstrating Feature Sliced Design
 * This is the UI layer that uses the model layer (useCounter hook)
 */
export const Counter = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h3 className="mb-4 text-xl font-semibold text-gray-800">
        Counter Example
      </h3>
      <div className="mb-4 text-center">
        <span className="text-5xl font-bold text-indigo-600">{count}</span>
      </div>
      <div className="flex justify-center gap-2">
        <Button onClick={decrement} variant="secondary" size="sm">
          -
        </Button>
        <Button onClick={reset} variant="outline" size="sm">
          Reset
        </Button>
        <Button onClick={increment} variant="primary" size="sm">
          +
        </Button>
      </div>
    </div>
  );
};
