import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia'
import CardIconSvgSwitcher from './card-icon-svg'
import { PokerCard, CardKeyAlias, CardSuitAlias } from '../interfaces'

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
      width: '17%',
      left: 0,
      display: 'inline-block',
      backgroundColor: '#fff',
      position: 'absolute',
      writingMode: 'vertical-lr',
      transform: 'rotate(180deg)',
    },
    rightSidebarWrap: {
      height: '100%',
      width: '17%',
      right: 0,
      display: 'inline-block',
      backgroundColor: '#fff',
      position: 'absolute',
      writingMode: 'vertical-lr',
    },
    iconWrap: {
      position: 'absolute',
      bottom: '5%',
    },
    keyText: {
      fontSize: '26px',
      margin: '2px 0',
      display: 'inline-block',
      transform: 'rotate(90deg)',
    },
    sidebarText: {
      fontSize: '20px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.up('xs')]: {
        fontSize: '16px',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '20px',
      },
    },
    coderTitle: {
      bottom: '15px',
      position: 'relative',
    },
    bodyWrap: {
      height: '100%',
      width: '66%',
      backgroundColor: '#fff',
      position: 'absolute',
      left: '17%',
      display: 'flex',
      flexFlow: 'column',
    },
    bodyImg: {
      flex: '1 1 auto',
      width: '100%',
      backgroundColor: '#fff',
      display: 'flex',
      alignItems: 'center',
    },
    bodyMedia: {
      flex: 1,
      height: '77%',
      margin: '0 10px',
      backgroundColor: 'bisque',
    },
    bodyMilestone: {
      flex: '0 1 auto',
      width: '100%',
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: '48px',
      marginBottom: '10px',
    },
    bodyGridWrap: {
      width: '100%',
      display: 'table',
    },
    year: {
      fontWeight: 'bold',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
    bodyQuote: {
      flex: '0 1 auto',
      width: '100%',
      backgroundColor: '#fff',
      display: 'flex',
      alignItems: 'center',
      minHeight: '36px',
      marginBottom: '10px',
      fontStyle: 'italic',
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
    <div className={direction === SidebarType.Left
      ? `${classes.leftSidebarWrap}`
      : `${classes.rightSidebarWrap}`
    }>
      <h1 className={classes.sidebarText}>
        <span className={classes.coderTitle}>{poker.coder}</span>
        <span className={classes.iconWrap}>
          <CardIconSvgSwitcher cardType={CardSuitAlias[poker.type]} cardKey={CardKeyAlias[poker.key]}/>
          {
            CardSuitAlias[poker.type] === 'Jokers'
              ? null
              : <span className={classes.keyText}>{CardKeyAlias[poker.key]}</span>
          }
        </span>
      </h1>
    </div>
  )
}

const BodyWrap: React.FC<PokerItemProps> = ({ poker }) => {
  const classes = useStyles()

  return (
    <div className={classes.bodyWrap}>
      <div className={classes.bodyImg}>
        <CardMedia
          className={classes.bodyMedia}
          image={poker.picture}
          title={poker.coder}
        />
      </div>
      <div className={classes.bodyMilestone}>
        <div className={classes.bodyGridWrap}>
          {poker.milestone.map((ms, index) => (
            <Grid container spacing={1} key={index}>
              <Grid item xs={3} className={`${classes.textRight} ${classes.year}`}>
                {ms.year}:
              </Grid>
              <Grid item xs={9} className={classes.textLeft}>
                <span>{ms.event}</span>
              </Grid>
            </Grid>
          ))}
        </div>
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
