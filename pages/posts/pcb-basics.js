import fs from 'fs';
import path from 'path';
import React from 'react';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'posts', 'pcb-basics.md');
  const content = fs.readFileSync(filePath, 'utf-8');
  return { props: { content } };
}

export default function PCBArticle({ content }) {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>PCB基础知识</h1>
      <pre>{content}</pre>
    </div>
  );
}
