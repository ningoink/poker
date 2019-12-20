import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import { PokerCard } from '../interface'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 0,
      width: '100%',
      paddingBottom: '140%',
      position: 'relative',
    },
    cardWrap: {
      height: '100%',
      width: '100%',
      backgroundColor: '#fff',
      position: 'absolute',
      textAlign: 'center',
    },
    leftSidebarWrap: {
      height: '100%',
      width: '20%',
      left: 0,
      display: 'inline-block',
      backgroundColor: '#fff',
      position: 'absolute',
    },
    rightSidebarWrap: {
      height: '100%',
      width: '20%',
      right: 0,
      display: 'inline-block',
      backgroundColor: '#fff',
      position: 'absolute',
    },
    bodyWrap: {
      height: '100%',
      width: '60%',
      display: 'inline-block',
      backgroundColor: '#fff',
      position: 'absolute',
      left: '20%',
    },
    bodyImg: {
      height: '50%',
      width: '100%',
      backgroundColor: '#fff',
    },
    bodyMilestone: {
      height: '25%',
      width: '100%',
      backgroundColor: '#fff',
    },
    bodyQuote: {
      height: '25%',
      width: '100%',
      backgroundColor: '#fff',
    },
  }),
)

interface PokerItemProps {
  poker: PokerCard
}

enum SidebarType {
  Left, Right
}

interface SidebarProps {
  direction: SidebarType
}

const SidebarWrap: React.FC<PokerItemProps & SidebarProps> = ({ poker, direction }) => {
  const classes = useStyles()

  return (
    <div className={direction === SidebarType.Left ? classes.leftSidebarWrap : classes.rightSidebarWrap}>
      {JSON.stringify(poker.key)}
      {JSON.stringify(poker.type)}
    </div>
  )
}

const BodyWrap: React.FC<PokerItemProps> = ({ poker }) => {
  const classes = useStyles()

  return (
    <div className={classes.bodyWrap}>
      <div className={classes.bodyImg}>
        {JSON.stringify(poker.avatar)}
      </div>
      <div className={classes.bodyMilestone}>
        {JSON.stringify(poker.milestone)}
      </div>
      <div className={classes.bodyQuote}>
        {JSON.stringify(poker.quote)}
      </div>
    </div>
  )
}

const PokerItem: React.FC<PokerItemProps> = ({ poker }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Card className={classes.cardWrap}>
        <SidebarWrap poker={poker} direction={SidebarType.Left} />
        <BodyWrap poker={poker}/>
        <SidebarWrap poker={poker} direction={SidebarType.Right} />
      </Card>
    </Card>
  )
}

export default PokerItem