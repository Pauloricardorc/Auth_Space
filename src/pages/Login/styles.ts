import type * as Stitches from '@stitches/react';
import { styled, css } from '@stitches/react'

// export const Button = css({ //// a estilização pode ser feito dessa maneira também
//   backgroundColor: '#222',
//   padding: '10px 15px',
//   border: 0,
//   borderRadius: '5px',
//   color: '#FFF',
//   fontSize: '1rem',
//   cursor: 'pointer',
//   transition: '0.2s linear',
//   '&:hover': {
//     backgroundColor: '#555'
//   },
//   '&:active': {
//     backgroundColor: '#222'
//   }
// })


export const Container = styled('div', {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#10101e'
})

export const ContainerLogin = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  paddingBottom: '20px',
  width: '500px',
  height: '600px',
  borderRadius: '10px',
  backgroundColor: '#0022',
  boxShadow: '5px 5px 5px #0004',
  'hr': {
    borderWidth: '1px',
    borderColor: '#DDD1'
  }
})

export const Image = styled('img', {
  width: '100%',
  height: '50%',
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px'
})

export const ContainerInput = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 20px',
  'input': {
    margin: '10px 0',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#222224',
    padding: '12px',
    width: '350px',
    fontSize: 17,
    color: '#F1F1F1',
    borderRadius: '5px',
    backgroundColor: '#3332',
    transition: '.2s ease-in',
    '&:focus': {
      borderColor: '#e22e2e',
    }
  },
  'input::placeholder': {
    fontSize: 17,
    color: '#FFF2'
  },
  'div': {
    display: 'flex',
    justifyContent: 'end',
    width: '100%',
    padding: '7px 55px',
  },
  'p': {
    fontSize: 14,
    color: '#F2F2F2',
    fontWeight: '400',
    '&:hover': {
    },
    'span': {
      color: '#3549b1',
      '&:hover': {
        cursor: 'pointer',
        filter: 'brightness(85%)'
      }
    }
  }
})

export const ContainerButton = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  'button': {
    backgroundColor: '#2233',
    width: '200px',
    height: '40px',
    color: '#F1F1F1',
    fontSize: 'medium',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#FFF3',
    borderRadius: 4,
    transition: '.2s linear',
    '&:hover': {
      filter: 'brightness(70%)'
    },
    '&:focus': {
      borderColor: '#e22e2e',
    }
  },
})