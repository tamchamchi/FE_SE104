import { Box } from '@mui/material'

function BoardBar() {
  return (
    <Box sx={{
      backgroundColor: 'primary.dark',
      width: '100%',
      height: (theme) => theme.trello.dashBarHeight,
      display: 'flex',
      alignItems: 'center'
    }}>
          Dash bar
    </Box>
  )
}

export default BoardBar
