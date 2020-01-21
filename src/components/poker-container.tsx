import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { fetchPoker } from '../store/poker/actions'
import { AppState } from '../store'
import { PokerCardState } from '../store/poker/types'
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
    gridItem: {
      'box-shadow': '0 2px 12px 0 rgba(0, 0, 0, .1)',
      'border-radius': '5px',
      // transform: 'scale(.8) translateX(4%) rotateZ(calc(-1 * (11 * 1deg)))',
      cursor: 'pointer',
      '&:hover': {
        'box-shadow': '0 2px 12px 0 #B8B8B8',
        // transform: 'scale(.8) translateX(4%)',
      },
    },
  }),
)

type PokerContainerProps = { pokerReducer: PokerCardState } & { fetchPoker: () => void }

const PokerContainerWithRedux: React.FC<PokerContainerProps> = ({ pokerReducer, fetchPoker }) => {
  const classes = useStyles()

  useEffect(() => {
    fetchPoker()
  }, [])

  return (
    <Grid
      container
      className={classes.gridRoot}
      spacing={1}
    >
      {pokerReducer.list.map((poker, index) => (
        <Grid
          container
          alignItems="center"
          item xs={12} sm={6} md={3}
          className={classes.gridItem}
          key={index}
        >
          <PokerItem poker={poker} />
        </Grid>
      ))}
    </Grid>
  )
}

const PokerContainer = connect((
  { pokerReducer }: AppState) => ({ pokerReducer }),
  { fetchPoker }
)(PokerContainerWithRedux)

export default PokerContainer
