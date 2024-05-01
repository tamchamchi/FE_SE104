import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { teal } from '@mui/material/colors'
import { cyan } from '@mui/material/colors'
import { deepOrange } from '@mui/material/colors'
import { orange } from '@mui/material/colors'


// A custom theme for this app
const theme = extendTheme({
  trello: {
    appBarHeight: '48px',
    dashBarHeight: '58px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        seacondary: deepOrange
      }
    },
    dark: {
      palette: {
        primary: cyan,
        seacondary: orange

      }
    }
  }
})

export default theme