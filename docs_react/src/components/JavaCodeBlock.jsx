import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './JavaCodeBlock.css';

export default function JavaCodeBlock({ code, showLineNumbers = true }) {
  return (
    <SyntaxHighlighter
      language="java"
      style={oneDark}
      showLineNumbers={showLineNumbers}
      wrapLongLines
      customStyle={{
        margin: 0,
        padding: '1rem 0',
        borderRadius: 0,
        fontSize: '0.82rem',
        lineHeight: 1.7,
        background: '#1e293b',
      }}
      lineNumberStyle={{
        minWidth: '2.5em',
        paddingRight: '1em',
        color: '#64748b',
        userSelect: 'none',
      }}
      codeTagProps={{
        className: 'java-code',
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
}
