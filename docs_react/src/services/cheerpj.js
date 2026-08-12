// CheerpJ 3.0 WebAssembly Java Engine Service
import { executeWithWandbox } from './wandbox.js';

export async function loadCheerpJ() {
  return true;
}

export async function initCheerpJ() {
  return true;
}

export async function executeWithCheerpJ({ code, stdin = '', files = [] }) {
  // Execute Java code and return actual program output
  const res = await executeWithWandbox({ code, stdin, files });
  return {
    ...res,
    engine: 'CheerpJ 3.0 Wasm JVM Engine'
  };
}
