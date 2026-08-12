import { useRef, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './JavaCodeEditor.css';

export default function JavaCodeEditor({
  value,
  onChange,
  onKeyDown,
  textareaRef,
  placeholder = 'Write Java code here...'
}) {
  const backdropRef = useRef(null);
  const internalTextareaRef = useRef(null);
  const activeRef = textareaRef || internalTextareaRef;

  const handleScroll = (e) => {
    if (backdropRef.current) {
      backdropRef.current.scrollTop = e.target.scrollTop;
      backdropRef.current.scrollLeft = e.target.scrollLeft;
    }
  };

  useEffect(() => {
    if (backdropRef.current && activeRef.current) {
      backdropRef.current.scrollTop = activeRef.current.scrollTop;
      backdropRef.current.scrollLeft = activeRef.current.scrollLeft;
    }
  }, [value]);

  return (
    <div className="java-editor-wrapper">
      {/* Background layer: Syntax Highlighted Code */}
      <div ref={backdropRef} className="java-editor-backdrop" aria-hidden="true">
        <SyntaxHighlighter
          language="java"
          style={oneDark}
          showLineNumbers
          customStyle={{
            margin: 0,
            padding: '1rem',
            background: 'transparent',
            fontSize: '0.88rem',
            lineHeight: '1.6',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
            minHeight: '100%',
            boxSizing: 'border-box'
          }}
          lineNumberStyle={{
            minWidth: '2.5em',
            paddingRight: '1em',
            color: '#475569',
            userSelect: 'none',
            textAlign: 'right'
          }}
          codeTagProps={{
            className: 'java-editor-code'
          }}
        >
          {value || ' '}
        </SyntaxHighlighter>
      </div>

      {/* Foreground layer: Transparent Editable Textarea */}
      <textarea
        ref={activeRef}
        className="java-editor-textarea"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        onScroll={handleScroll}
        placeholder={placeholder}
        spellCheck="false"
        autoCapitalize="off"
        autoComplete="off"
      />
    </div>
  );
}
