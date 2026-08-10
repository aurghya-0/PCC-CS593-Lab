export const utilities = {
  slug: 'utilities',
  title: 'Utility Scripts',
  scripts: [
    {
      name: 'compile_all.sh',
      path: 'compile_all.sh',
      description: 'Batch-compile and run all lab programs from the repository root.',
      usage: [
        './compile_all.sh        # Run all labs (0 through 6)',
        './compile_all.sh 0      # Lab 0 only',
        './compile_all.sh 1      # Lab 1 only',
        './compile_all.sh 2      # Lab 2 only',
        './compile_all.sh 3      # Lab 3 only',
        './compile_all.sh 4      # Lab 4 only',
        './compile_all.sh 5      # Lab 5 only',
        './compile_all.sh 6      # Lab 6 only (compile only)',
      ],
      behavior: [
        { lab: '0, 1, 2, 3, 5', compile: 'javac each Program*.java', run: 'Runs immediately after compile' },
        { lab: '4', compile: 'cd into each Program*/ subfolder', run: 'Compiles all .java files, runs main class' },
        { lab: '6', compile: 'Compiles GUI programs', run: 'Prints run command (does not auto-launch windows)' },
      ],
      requirements: ['javac and java on PATH', 'chmod +x compile_all.sh'],
    },
  ],
};
