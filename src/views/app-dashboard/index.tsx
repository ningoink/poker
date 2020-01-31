import React from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { EN, CN, POKER_CODER, POKER_SECOND } from '../../interfaces'
import { AppState } from '../../store'
import { I18nState } from '../../store/i18n/types'
import { toggleLanguage } from '../../store/i18n/actions'
import { toggleCollection } from '../../store/poker/actions'
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

type AppDashboardProps = { i18nReducer: I18nState } & { toggleLanguage: (lng: string) => void } & { toggleCollection: (collection: string) => void }

const WrappedAppDashboard: React.FC<AppDashboardProps> = ({ i18nReducer, toggleLanguage, toggleCollection }) => {
  const classes = useStyles()
  const { t, i18n } = useTranslation()

  const changeCollection = (collection: string) => {
    toggleCollection(collection)
  }

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    toggleLanguage(lng)
  }

  return (
    <Container className={classes.root}>
      <div>
        <button onClick={() => changeLanguage(EN)}>{t('Language.EN')}</button>
        <button onClick={() => changeLanguage(CN)}>{t('Language.CN')}</button>
      </div>
      <div>
        <button onClick={() => changeCollection(POKER_CODER)}>{t('Collection.POKER_CODER')}</button>
        <button onClick={() => changeCollection(POKER_SECOND)}>{t('Collection.POKER_SECOND')}</button>
      </div>
      <PokerContainer />
    </Container>
  )
}

const AppDashboard = connect((
  { i18nReducer }: AppState) => ({ i18nReducer }),
  { toggleLanguage, toggleCollection },
)(WrappedAppDashboard)

export default AppDashboard
