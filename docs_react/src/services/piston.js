// Piston Cloud Execution API Service
export async function executeWithPiston({ code, stdin = '' }) {
  const PISTON_URL = 'https://emkc.org/api/v2/piston/execute';

  // Extract public class name
  let filename = 'Main.java';
  const match = code.match(/public\s+class\s+([A-Za-z0-9_$]+)/);
  if (match && match[1]) {
    filename = `${match[1]}.java`;
  }

  const payload = {
    language: 'java',
    version: '15.0.2',
    files: [
      {
        name: filename,
        content: code
      }
    ],
    stdin: stdin || ''
  };

  const startTime = performance.now();
  
  const response = await fetch(PISTON_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const durationMs = Math.round(performance.now() - startTime);

  if (!response.ok) {
    throw new Error(`Execution server responded with HTTP ${response.status}`);
  }

  const data = await response.json();

  if (data.message) {
    throw new Error(data.message);
  }

  const run = data.run || {};
  const compile = data.compile || {};

  const stdout = run.stdout || '';
  const stderr = (compile.stderr ? `[Compilation Output]\n${compile.stderr}\n` : '') + (run.stderr || '');
  const exitCode = run.code !== undefined ? run.code : (compile.code !== undefined && compile.code !== 0 ? compile.code : 0);

  return {
    stdout,
    stderr,
    exitCode,
    durationMs,
    engine: 'Cloud Execution API'
  };
}
