import { executeWithWandbox } from './wandbox.js';
import { executeWithCheerpJ } from './cheerpj.js';

export async function executeJavaCode({ code, stdin = '', files = [], engine = 'wandbox' }) {
  if (!code || !code.trim()) {
    throw new Error('Source code cannot be empty.');
  }

  if (engine === 'cheerpj') {
    try {
      return await executeWithCheerpJ({ code, stdin });
    } catch (err) {
      console.warn('Wasm engine fallback to OpenJDK runner:', err.message);
      const res = await executeWithWandbox({ code, stdin, files });
      return {
        ...res,
        engineNotice: `Executed via OpenJDK Cloud Runner (${err.message})`
      };
    }
  }

  // Default: OpenJDK Wandbox Runner
  return await executeWithWandbox({ code, stdin, files });
}
