import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import PokerItem from './poker-item'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridRoot: {
      margin: 0,
      padding: '0',
      width: '100%',
      flexGrow: 1,
      [theme.breakpoints.up('xs')]: {
        padding: '0 8px',
      },
      [theme.breakpoints.up('sm')]: {
        padding: '0 16px',
      },
      [theme.breakpoints.up('md')]: {
        padding: '0 24px',
      },
      [theme.breakpoints.up('lg')]: {
        padding: '0 32px',
      },

    },
  }),
)

const PokerCards = Array.from(Array(8).keys())

const PokerContainer: React.FC = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      className={classes.gridRoot}
      spacing={1}
    >
      {PokerCards.map((value) => (
        <Grid
          container
          alignItems="center"
          item xs={6} sm={4} md={3} lg={2}
          key={value}
        >
          <PokerItem />
        </Grid>
      ))}
    </Grid>
  )
}

export default PokerContainer