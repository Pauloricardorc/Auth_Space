import { styled, globalCss } from '@stitches/react'
// @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

export const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    fontFamily: 'Roboto',
    outline: 'none',
  },
  'select, textarea, button': {
    cursor: 'pointer'
  }
})