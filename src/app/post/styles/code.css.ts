// styles/code.css.ts
import { style } from '@vanilla-extract/css';

export const codeBlock = style({
  backgroundColor: '#282c34', // 배경색
  color: '#abb2bf',           // 글자색
  padding: '1.5rem',         // 내부 여백
  borderRadius: '0.5rem',    // 모서리 둥글게
  overflowX: 'auto',          // 가로 스크롤
  fontSize: '1rem',           // 글자 크기
  lineHeight: 1.6,            // 줄 간격
  fontFamily: 'monospace',     // 코드 폰트
  whiteSpace: 'pre-wrap',      // 코드 줄바꿈
  marginBottom: '1.5rem',
});

export const pre = style({
  padding: 0,
  margin: 0,
});

export const codeLine = style({
  display: 'block',
});