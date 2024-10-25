// env.d.ts
interface EnvVariables {
  VITE_APP_NAME: string;
  VITE_API_URL: string;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface ImportMetaEnv extends EnvVariables {}

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

export {};
