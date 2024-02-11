import { TextField, Container, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

function SearchBar({ setSearchQuery }) {
  const handleSearch = (event) => {
    setSearchQuery(event.target.value)
  };

  return (
    <Container>
      <TextField
        id="search"
        type="search"
        label="What do you want to watch?"
        onChange={handleSearch}
        sx={{
          color: 'white',
          width: '500px',
          align: "center",

        // Root class for the input field
        "& .MuiOutlinedInput-root": {
          color: "white",
          // Class for the border around the input field
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
        },
        // Class for the label of the input field
        "& .MuiInputLabel-outlined": {
          color: "white",
        },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" color="inherit">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
     /> 
     </Container>
  )
}

export { SearchBar }