export interface Logger {
  debug: (msg: string) => void;
  error: (error: Error) => void;
}

export const getLogger = (component: string): Logger => {
  return {
    debug: (msg: string) => {
      console.debug(`[${component}]: ${msg}`);
    },
    error: (error: Error) => {
      console.error(`[${component}]: ${error.name}: ${error.message}`);
    },
  };
};
