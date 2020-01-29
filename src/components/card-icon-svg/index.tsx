import React from "react"
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    svg: {
      transform: 'rotate(180deg)',
    },
  }),
)

const CardIconSvgSwitcher: React.FC<{cardType: string, cardKey: string}> = ({ cardType, cardKey }) => {
  const renderSvg = () => {
    switch(cardType) {
      case 'Spades':
        return <SpadesIconSvg />
      case 'Hearts':
        return <HeartsIconSvg />
      case 'Clubs':
        return <ClubsIconSvg />
      case 'Diamonds':
        return <DiamondsIconSvg />
      case 'Jokers':
        return (cardKey === 'BigJoker')
          ? <BigJokersIconSvg />
          : <LittleJokersIconSvg />
      default:
        return <div>{cardKey}</div>
    }
  }

  return (
    <span>{ renderSvg() }</span>
  )
}

const BigJokersIconSvg: React.FC = () => {
  const classes = useStyles()

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px" y="0px"
      width="30" height="30"
      viewBox="0 0 172 172"
      style={{fill: '#000000'}}
      className={classes.svg}
    >
      <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}>
        <path d="M0,172v-172h172v172z" fill="none"></path>
        <g fill="#e74c3c">
          <path d="M136.36263,62.82031c0.89583,5.03906 5.26302,8.84635 10.55403,8.84635c5.9349,0 10.75,-4.8151 10.75,-10.75c0,-5.9349 -4.8151,-10.75 -10.75,-10.75c-3.30338,0 -6.21484,1.51172 -8.17448,3.83528c-6.77474,-3.49935 -16.54492,-5.51497 -29.75847,-0.83984c-9.43424,3.33138 -15.87304,9.37826 -20.21224,16.85286c-3.55534,-11.8138 -9.1543,-20.85612 -16.93685,-26.81901c-14.19336,-10.88997 -29.84245,-7.30664 -30.51433,-7.16667l-5.68294,1.42774c-0.92383,-5.01107 -5.29101,-8.79037 -10.55403,-8.79037c-5.9349,0 -10.75,4.8151 -10.75,10.75c0,5.9349 4.8151,10.75 10.75,10.75c3.91927,0 7.27865,-2.09961 9.18229,-5.20703c2.71549,1.0638 5.23503,2.23958 6.49479,3.30338c1.87565,1.56771 2.1836,2.6875 3.63933,7.16667c1.84765,5.68294 2.6875,19.42839 -12.56967,47.56315c-5.26302,9.71419 -5.9069,21.94792 -1.73567,32.72591c0.08399,0.22396 0.22396,0.41992 0.30794,0.61589c-5.03906,0.89583 -8.90235,5.26302 -8.90235,10.58203c0,5.9349 4.8151,10.75 10.75,10.75h107.5c5.9349,0 10.75,-4.8151 10.75,-10.75c0,-5.79492 -4.61914,-10.49805 -10.35807,-10.72201c3.80729,-11.08594 2.77148,-26.875 -7.11068,-40.78841c-19.03646,-26.84701 -7.97851,-32.30599 3.33138,-32.58594zM44.42774,109.82357c13.38151,-24.66341 18.02865,-44.20378 13.82942,-58.14518c1.65169,0.72786 3.35938,1.70768 5.01107,3.02344c9.57422,7.5026 14.97722,23.34765 15.5651,45.63151v35.83333h-32.16601c-1.23177,-1.56771 -2.35156,-3.44336 -3.19141,-5.62695c-2.6875,-6.91472 -2.32356,-14.64128 0.95183,-20.71615z"></path>
        </g>
      </g>
    </svg>
  )
}

const LittleJokersIconSvg: React.FC = () => {
  const classes = useStyles()

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px" y="0px"
      width="30" height="30"
      viewBox="0 0 172 172"
      style={{fill: '#000000'}}
      className={classes.svg}
    >
      <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}>
        <path d="M0,172v-172h172v172z" fill="none"></path>
        <g fill="#666666">
          <path d="M136.36263,62.82031c0.89583,5.03906 5.26302,8.84635 10.55403,8.84635c5.9349,0 10.75,-4.8151 10.75,-10.75c0,-5.9349 -4.8151,-10.75 -10.75,-10.75c-3.30338,0 -6.21484,1.51172 -8.17448,3.83528c-6.77474,-3.49935 -16.54492,-5.51497 -29.75847,-0.83984c-9.43424,3.33138 -15.87304,9.37826 -20.21224,16.85286c-3.55534,-11.8138 -9.1543,-20.85612 -16.93685,-26.81901c-14.19336,-10.88997 -29.84245,-7.30664 -30.51433,-7.16667l-5.68294,1.42774c-0.92383,-5.01107 -5.29101,-8.79037 -10.55403,-8.79037c-5.9349,0 -10.75,4.8151 -10.75,10.75c0,5.9349 4.8151,10.75 10.75,10.75c3.91927,0 7.27865,-2.09961 9.18229,-5.20703c2.71549,1.0638 5.23503,2.23958 6.49479,3.30338c1.87565,1.56771 2.1836,2.6875 3.63933,7.16667c1.84765,5.68294 2.6875,19.42839 -12.56967,47.56315c-5.26302,9.71419 -5.9069,21.94792 -1.73567,32.72591c0.08399,0.22396 0.22396,0.41992 0.30794,0.61589c-5.03906,0.89583 -8.90235,5.26302 -8.90235,10.58203c0,5.9349 4.8151,10.75 10.75,10.75h107.5c5.9349,0 10.75,-4.8151 10.75,-10.75c0,-5.79492 -4.61914,-10.49805 -10.35807,-10.72201c3.80729,-11.08594 2.77148,-26.875 -7.11068,-40.78841c-19.03646,-26.84701 -7.97851,-32.30599 3.33138,-32.58594zM44.42774,109.82357c13.38151,-24.66341 18.02865,-44.20378 13.82942,-58.14518c1.65169,0.72786 3.35938,1.70768 5.01107,3.02344c9.57422,7.5026 14.97722,23.34765 15.5651,45.63151v35.83333h-32.16601c-1.23177,-1.56771 -2.35156,-3.44336 -3.19141,-5.62695c-2.6875,-6.91472 -2.32356,-14.64128 0.95183,-20.71615z"></path>
        </g>
      </g>
    </svg>
  )
}

const SpadesIconSvg: React.FC = () => {
  const classes = useStyles()

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px" y="0px"
      width="30" height="30"
      viewBox="0 0 172 172"
      style={{fill: '#000000'}}
      className={classes.svg}
    >
      <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}>
        <path d="M0,172v-172h172v172z" fill="none"></path>
        <g fill="#1abc9c">
          <path d="M86,14.33333c0,0 -64.5,50.95052 -64.5,79.61719c0,19.12044 16.125,35.04948 35.4694,35.04948c9.54622,0 16.6569,-4.36719 21.86393,-7.16667l-16.32097,25.47526c-2.37956,4.75911 1.0918,10.35807 6.41081,10.35807h34.15365c5.31901,0 8.79036,-5.59896 6.41081,-10.35807l-16.32097,-25.47526c4.78711,2.51953 11.42188,7.16667 21.86393,7.16667c19.3444,0 35.4694,-15.92903 35.4694,-35.04948c0,-28.66667 -64.5,-79.61719 -64.5,-79.61719z"></path>
        </g>
      </g>
    </svg>
  )
}

const HeartsIconSvg: React.FC = () => {
  const classes = useStyles()

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px" y="0px"
      width="30" height="30"
      viewBox="0 0 172 172"
      style={{fill: '#000000'}}
      className={classes.svg}
    >
      <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}>
        <path d="M0,172v-172h172v172z" fill="none"></path>
        <g fill="#e74c3c">
          <path d="M86,152.38125l-2.19031,-1.81406c-3.44,-2.84875 -8.0625,-5.99312 -13.39719,-9.63469c-21.19094,-14.45875 -53.2125,-36.30812 -53.2125,-71.15156c0,-21.40594 17.53594,-38.82094 39.08969,-38.82094c11.52938,0 22.31969,5.01219 29.71031,13.61219c7.39063,-8.6 18.19438,-13.61219 29.71031,-13.61219c21.55375,0 39.08969,17.415 39.08969,38.82094c0,34.84344 -32.02156,56.69281 -53.2125,71.15156c-5.34812,3.64156 -9.95719,6.78594 -13.39719,9.63469z"></path>
        </g>
      </g>
    </svg>
  )
}

const ClubsIconSvg: React.FC = () => {
  const classes = useStyles()

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px" y="0px"
      width="30" height="30"
      viewBox="0 0 172 172"
      style={{fill: '#000000'}}
      className={classes.svg}
    >
      <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}>
        <path d="M0,172v-172h172v172z" fill="none"></path>
        <g fill="#1abc9c">
          <path d="M129,64.5c-8.17448,0 -21.30403,9.57422 -32.08203,18.84049c8.11849,-13.35351 17.74869,-31.1582 17.74869,-40.34049c0,-15.84505 -12.82161,-28.66667 -28.66667,-28.66667c-15.84505,0 -28.66667,12.82162 -28.66667,28.66667c0,9.18229 9.63021,26.98698 17.7487,40.34049c-10.778,-9.26627 -23.90756,-18.84049 -32.08203,-18.84049c-15.84505,0 -28.66667,12.82162 -28.66667,28.66667c0,15.84506 12.82162,28.66667 28.66667,28.66667c8.34245,0 21.77995,-5.96289 32.66992,-11.58984c5.96289,-2.07162 3.16341,4.42317 3.16341,4.42317l-16.32097,32.64193c-2.37956,4.75911 1.0918,10.35807 6.41081,10.35807h34.15365c5.31901,0 8.79036,-5.59896 6.41081,-10.35807l-16.32097,-32.64193c0,0 -2.35156,-6.60677 3.16341,-4.42317c10.88998,5.62695 24.32748,11.58984 32.66992,11.58984c15.84506,0 28.66667,-12.82161 28.66667,-28.66667c0,-15.84505 -12.82161,-28.66667 -28.66667,-28.66667z"></path>
        </g>
      </g>
    </svg>
  )
}

const DiamondsIconSvg: React.FC = () => {
  const classes = useStyles()

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px" y="0px"
      width="30" height="30"
      viewBox="0 0 172 172"
      style={{fill: '#000000'}}
      className={classes.svg}
    >
      <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}>
        <path d="M0,172v-172h172v172z" fill="none"></path>
        <g fill="#e74c3c">
          <path d="M79.92513,154.58724l-47.8711,-59.18099c-4.50716,-5.57097 -4.50716,-13.46549 0,-19.03646l47.8711,-59.18099c3.10742,-3.80729 8.95833,-3.80729 12.03776,0l47.89909,59.18099c4.50716,5.57097 4.50716,13.46549 0,19.03646l-47.89909,59.18099c-3.07942,3.80729 -8.93033,3.80729 -12.03776,0z"></path>
        </g>
      </g>
    </svg>
  )
}

export default CardIconSvgSwitcher
