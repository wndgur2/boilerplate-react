/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Allow importing JSON files
declare module '*.json' {
  const value: Record<string, string>;
  export default value;
}
