import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
      <Grid>
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         Saurabh charkan
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          charjan@gmail.com
        </Typography>
        <Typography variant="body2" component="p">
         IT dept
        </Typography>
        <Typography variant="h5" component="h2">
          sal
        </Typography>
      </CardContent>
      <CardActions>
        <Button>update del</Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
    <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
       Saurabh charkan
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        charjan@gmail.com
      </Typography>
      <Typography variant="body2" component="p">
       IT dept
      </Typography>
      <Typography variant="h5" component="h2">
        sal
      </Typography>
    </CardContent>
    <CardActions>
      <Button>update del</Button>
    </CardActions>
  </Card>
  </Grid>
  );
}