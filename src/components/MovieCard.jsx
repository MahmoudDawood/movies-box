import { Card, CardMedia, CardContent, Typography, Box, Grid } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

function MovieCard({ movie }) {
  return (
    <Card style={{ maxWidth: 240, border: 'none', boxShadow: 'none' }}>
      <CardMedia
        component="img"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <CardContent>
        <Typography gutterBottom variant="subtitile1">
          USA, {movie.release_date.split('-')[0]}
        </Typography>

        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>

        <Typography gutterBottom variant="subtitle2">
          <Grid container spacing={12}>
            <Grid item>
              {(movie.vote_average).toFixed(1) * 10}.0 / 100
            </Grid>

            <Grid item>
              {(movie.vote_average).toFixed(1) * 10}%
            </Grid>
          </Grid>
        </Typography>
      </CardContent>
    </Card>
  );
}

export { MovieCard }