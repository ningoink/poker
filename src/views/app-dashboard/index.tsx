import React from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { AppState } from '../../store'
import { I18nState } from '../../store/i18n/types'
import { toggleLanguage } from '../../store/i18n/actions'
import PokerContainer from '../../components/poker-container'

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

type AppDashboardProps = { i18nReducer: I18nState } & { toggleLanguage: (lng: string) => void }

const WrappedAppDashboard: React.FC<AppDashboardProps> = ({ i18nReducer, toggleLanguage }) => {
  const classes = useStyles()
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    toggleLanguage(lng)
  }

  return (
    <Container className={classes.root}>
      <button onClick={() => changeLanguage('cn')}>cn</button>
      <button onClick={() => changeLanguage('en')}>en</button>
      <PokerContainer />
    </Container>
  )
}

const AppDashboard = connect((
  { i18nReducer }: AppState) => ({ i18nReducer }),
  { toggleLanguage },
)(WrappedAppDashboard)

export default AppDashboard
