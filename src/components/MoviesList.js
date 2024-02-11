import { Grid } from "@mui/material"
import { MovieCard } from "./MovieCard"
import { useMovies } from "../services/useMovies";

function MoviesList({ searchQuery }) {
  const { isPending, error, data: movies } = useMovies(searchQuery)

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;
    return (
        <>
            <h1>Featured Movie</h1>
            <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {movies.results.map((movie) => (
                    <Grid item key={movie.id} xs={12} sm={6} md={3}>
                        <MovieCard movie={movie} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export { MoviesList } 