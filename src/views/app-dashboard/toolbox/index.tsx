import React from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { AppState } from '../../../store'
import { I18nState } from '../../../store/i18n/types'
import { toggleLanguage } from '../../../store/i18n/actions'
// import { toggleLayout } from '../../../store/layout/actions'
import { toggleCollection } from '../../../store/poker/actions'
import { EN, CN, POKER_CODER, POKER_SECOND } from '../../../interfaces'

type ToolboxContainerProps = { i18nReducer: I18nState } & { toggleLanguage: (lng: string) => void } & { toggleCollection: (collection: string) => void }

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
    btnRoot: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
)

const WrappedToolboxContainer: React.FC<ToolboxContainerProps> = ({
  toggleLanguage, toggleCollection, // toggleLayout
}) => {
  const classes = useStyles()
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    toggleLanguage(lng)
  }

  // const changeLayout = (layout: string) => {
  //   toggleLayout(layout)
  // }

  const changeCollection = (collection: string) => {
    toggleCollection(collection)
  }

  return (
    <Grid
      container
      className={classes.gridRoot}
      spacing={1}
    >
      <Grid container item xs={12}>
        <div className={classes.btnRoot}>
          <Button onClick={() => changeLanguage(EN)} variant="contained" color="primary">
            {t('Language.EN')}
          </Button>
          <Button onClick={() => changeLanguage(CN)} variant="contained" color="primary">
            {t('Language.CN')}
          </Button>
        </div>
      </Grid>
      {/* <Grid container item xs={12}>
        <div className={classes.btnRoot}>
          <Button onClick={() => changeLayout(POKER_LAYOUT)} variant="contained" color="primary">
            {t('Layout.POKER_CODER')}
          </Button>
          <Button onClick={() => changeLayout(POSTER_LAYOUT)} variant="contained" color="primary">
            {t('Language.CN')}
          </Button>
        </div>
      </Grid> */}
      <Grid container item xs={12}>
        <div className={classes.btnRoot}>
          <Button onClick={() => changeCollection(POKER_CODER)} variant="contained" color="primary">
            {t('Collection.POKER_CODER')}
          </Button>
          <Button onClick={() => changeCollection(POKER_SECOND)} variant="contained" color="primary">
            {t('Collection.POKER_SECOND')}
          </Button>
        </div>
      </Grid>
    </Grid>
  )
}

const ToolboxContainer = connect((
  { i18nReducer }: AppState) => ({ i18nReducer }),
  { toggleLanguage, toggleCollection, }, // toggleLayout
)(WrappedToolboxContainer)

export default ToolboxContainer