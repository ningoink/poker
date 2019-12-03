import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      height: 0,
      width: '100%',
      paddingBottom: '140%',
    },
  }),
)

const PokerItem: React.FC = () => {
  const classes = useStyles()

  return (
    <Paper className={classes.paper} />
  )
}

export default PokerItem