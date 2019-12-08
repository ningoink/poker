import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  }),
)

const AppDashboard: React.FC = () => {
  const classes = useStyles()

  return (
    <div>
      app dashboard
    </div>
  )
}

export default AppDashboard