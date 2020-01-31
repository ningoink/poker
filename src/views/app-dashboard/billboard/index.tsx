import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Alert, AlertTitle } from '@material-ui/lab'
import Grid from '@material-ui/core/Grid'
import { useTranslation } from 'react-i18next'

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
    alertRoot: {
      width: '100%',
    },
  }),
)

const BillboardContainer: React.FC = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Grid container className={classes.gridRoot}>
      <Alert severity="warning" className={classes.alertRoot}>
        <AlertTitle>{t('billboard.appWarningTitle')}</AlertTitle>
        {t('billboard.appWarningBody')}
      </Alert>
    </Grid>
  )
}

export default BillboardContainer