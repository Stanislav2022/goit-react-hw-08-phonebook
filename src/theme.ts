import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold', 
      },
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
      variants: {
        sm: {
          bg: 'teal.500',
          fontSize: 'md',
          _hover:{ bg: 'teal.400' },
        },
      },
      defaultProps: {
        size: 'md', 
        variant: 'sm', 
      },
    },
    Text: {
      baseStyle: {
        fontWeight: 'bolder', 
        color: 'gray.800',
        pr: '8px',
        fontSize: 'lg',
      },
      variants: { 
        sm: {
          fontWeight: 'normal' ,
          fontSize: 'sm',
        },
        nav: {
          pr: '12px',
        },
      },
    },
    Spinner: {
      baseStyle: {
        thickness: '5px',
        speed:'0.65s',
        emptyColor:'gray.200',
        color:'teal.500',
      },
      defaultProps: {
        size: 'xl', 
      },

    }
  },
})

export default theme