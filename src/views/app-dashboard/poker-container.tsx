import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import PokerItem from './poker-item'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridRoot: {
      margin: 'auto',
      flexGrow: 1,
      flexDirection: 'row',
      justifyContent: 'left',
      alignItems: 'center',
      [theme.breakpoints.up('xs')]: {
        width: '320px',
      },
      [theme.breakpoints.up('sm')]: {
        width: '480px',
      },
      [theme.breakpoints.up('md')]: {
        width: '640px',
      },
      [theme.breakpoints.up('lg')]: {
        width: '960px',
      },
    },
  }),
)

const PokerCards = Array.from(Array(54).keys())

const PokerContainer: React.FC = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      className={classes.gridRoot}
      spacing={2}
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