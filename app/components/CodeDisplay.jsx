"use client";
import styled from "styled-components";
import { FaCopy, FaCheck } from "react-icons/fa";
import { useState } from "react";

const CodeContainer = styled.div`
  background: #1e1e1e;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 2rem 0;
  position: relative;
  overflow-x: auto;
`;

const CodeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const CodeTitle = styled.div`
  color: #94a3b8;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const CopyButton = styled.button`
  background: ${props => props.$copied ? '#22c55e' : 'rgba(255, 255, 255, 0.1)'};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s;
  
  &:hover {
    background: ${props => props.$copied ? '#22c55e' : 'rgba(255, 255, 255, 0.2)'};
  }
`;

const CodeBlock = styled.pre`
  margin: 0;
  color: #e2e8f0;
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
  overflow-x: auto;
  
  .keyword {
    color: #c678dd;
  }
  
  .string {
    color: #98c379;
  }
  
  .function {
    color: #61afef;
  }
  
  .prop {
    color: #e5c07b;
  }
  
  .comment {
    color: #5c6370;
    font-style: italic;
  }
`;

export default function CodeDisplay({ code, title = "Usage Example" }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Simple syntax highlighting
    const highlightCode = (code) => {
        return code
            .replace(/import|export|default|const|from|function/g, '<span class="keyword">$&</span>')
            .replace(/"([^"]*)"/g, '<span class="string">"$1"</span>')
            .replace(/\'([^\']*)\'/g, '<span class="string">\'$1\'</span>')
            .replace(/<([A-Z][a-zA-Z]*)/g, '<span class="function"><$1</span>')
            .replace(/([a-z]+)=/g, '<span class="prop">$1</span>=')
            .replace(/\/\/(.*)/g, '<span class="comment">//$1</span>');
    };

    return (
        <CodeContainer>
            <CodeHeader>
                <CodeTitle>{title}</CodeTitle>
                <CopyButton onClick={handleCopy} $copied={copied}>
                    {copied ? (
                        <>
                            <FaCheck /> Copied!
                        </>
                    ) : (
                        <>
                            <FaCopy /> Copy Code
                        </>
                    )}
                </CopyButton>
            </CodeHeader>
            <CodeBlock dangerouslySetInnerHTML={{ __html: highlightCode(code) }} />
        </CodeContainer>
    );
}
