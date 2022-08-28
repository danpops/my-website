import {
  Grid,
  CardMedia,
  CardContent,
  Card,
  Typography,
  CardActions,
  Button
} from '@mui/material'

function ProjectTile (): JSX.Element {
  return (
    <Grid container spacing={4}>
      <Grid item key={1} xs={12} sm={6} md={4}>
        <Card
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <CardMedia
            component='img'
            sx={{
              // 16:9
              pt: '56.25%'
            }}
            image='https://source.unsplash.com/random'
            alt='random'
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant='h5' component='h2'>
              Heading
            </Typography>
            <Typography>
              This is a media card. You can use this section to describe the
              content.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>View</Button>
            <Button size='small'>Edit</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ProjectTile
