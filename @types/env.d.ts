export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DEVTO_API_KEY: string
    }
  }
}
