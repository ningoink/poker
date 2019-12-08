import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import PokerContainer from './poker-container'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '16px 0',
      [theme.breakpoints.up('sm')]: {
        padding: '24px 0',
      },
      [theme.breakpoints.up('md')]: {
        padding: '32px 0',
      },
    },
  }),
)

const AppDashboard: React.FC = () => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <PokerContainer />
    </Container>
  )
}

export default AppDashboard