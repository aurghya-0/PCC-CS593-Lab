// Wandbox OpenJDK Runtime Service
export async function executeWithWandbox({ code, stdin = '', files = [] }) {
  const WANDBOX_URL = 'https://wandbox.org/api/compile.json';

  const startTime = performance.now();

  // Code preprocessing:
  // Convert 'public class' to 'class' so default prog.java compilation succeeds
  let processedCode = code.replace(/\bpublic\s+class\s+/g, 'class ');
  // Strip package statements for single-file live execution
  processedCode = processedCode.replace(/^\s*package\s+[\w.]+;\s*/gm, '// package stripped for live execution\n');

  const payload = {
    compiler: 'openjdk-jdk-21+35',
    code: processedCode,
    stdin: stdin || ''
  };

  if (files && files.length > 0) {
    payload.codes = files.map((f) => ({
      file: f.name || 'Extra.java',
      code: (f.content || '')
        .replace(/\bpublic\s+class\s+/g, 'class ')
        .replace(/^\s*package\s+[\w.]+;\s*/gm, '// package stripped for live execution\n')
    }));
  }

  const response = await fetch(WANDBOX_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const durationMs = Math.round(performance.now() - startTime);

  if (!response.ok) {
    throw new Error(`Execution server HTTP ${response.status}`);
  }

  const data = await response.json();

  const stdout = data.program_output || '';
  const stderr = (data.compiler_error ? `[Compiler Error]\n${data.compiler_error}\n` : '') + (data.program_error || '');
  const exitCode = parseInt(data.status, 10) || 0;

  return {
    stdout,
    stderr,
    exitCode,
    durationMs,
    engine: 'OpenJDK 21 Wasm/Cloud Runner'
  };
}
