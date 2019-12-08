import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'

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
      backgroundColor: 'green',
      position: 'absolute',
      textAlign: 'center',
    },
    leftSidebarWrap: {
      height: '100%',
      width: '20%',
      left: 0,
      display: 'inline-block',
      backgroundColor: 'red',
      position: 'absolute',
    },
    rightSidebarWrap: {
      height: '100%',
      width: '20%',
      right: 0,
      display: 'inline-block',
      backgroundColor: 'red',
      position: 'absolute',
    },
    bodyWrap: {
      height: '100%',
      width: '60%',
      display: 'inline-block',
      backgroundColor: 'blue',
      position: 'absolute',
      left: '20%',
    },
    bodyImg: {
      height: '50%',
      width: '100%',
      backgroundColor: 'grey',
    },
    bodyMilestone: {
      height: '25%',
      width: '100%',
      backgroundColor: 'orange',
    },
    bodyQuote: {
      height: '25%',
      width: '100%',
      backgroundColor: 'yellow',
    },
  }),
)

type Props = {
  direction: string
}

const SidebarWrap: React.FC<Props> = ({ direction }) => {
  const classes = useStyles()

  return (
    <div className={direction === "left" ? classes.leftSidebarWrap : classes.rightSidebarWrap}>
      { direction }
    </div>
  )
}

const BodyWrap: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.bodyWrap}>
      <div className={classes.bodyImg}>
        img
      </div>
      <div className={classes.bodyMilestone}>
        minestone
      </div>
      <div className={classes.bodyQuote}>
        quote
      </div>
    </div>
  )
}

const PokerItem: React.FC = () => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Card className={classes.cardWrap}>
        <SidebarWrap direction="left" />
        <BodyWrap />
        <SidebarWrap direction="right" />
      </Card>
    </Card>
  )
}

export default PokerItem