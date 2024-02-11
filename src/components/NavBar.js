import { Typography, Toolbar } from "@mui/material"
import DragHandleIcon from '@mui/icons-material/DragHandle'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { SearchBar } from './SearchBar';

function NavBar ({ setSearchQuery }) {

  return (
    <Toolbar>
      <LiveTvIcon style={{ color: 'red' }}/>
        <Typography variant="h6" sx={{ color: 'white', marginX: '8px' }}>
        MovieBox
        </Typography>

        <SearchBar setSearchQuery={setSearchQuery} />

        <Typography variant="h6" sx={{ color: 'white', marginX: '8px' }}>
          SignIn
        </Typography>
        <DragHandleIcon style={{ color: 'red' }}/>
    </Toolbar>
  )
}

export { NavBar }