import { Box } from "@mui/material";
import { useState } from "react";
import { BackgroundImage } from "./components/BackgroundImage";
import { Footer } from "./components/Footer";
import { MoviesList } from "./components/MoviesList";

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <div>
      <BackgroundImage setSearchQuery={setSearchQuery}/>
      <Box 
        sx = {{
          margin: '20px',
          padding: '20px',
        }}
      >
      <MoviesList searchQuery={searchQuery}/>
      </Box>
      <Footer />
    </div>
  )
}

export default App
