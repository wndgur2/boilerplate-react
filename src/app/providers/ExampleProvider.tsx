import { createContext } from 'react';

const ExampleContext = createContext(null);

export default function ExampleProvider() {
  return <ExampleContext.Provider value={null}></ExampleContext.Provider>;
}
