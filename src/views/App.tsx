import React, { Suspense } from 'react'
import AppDashboard from './app-dashboard'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import './App.css'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontSize: '12px',
    },
  }),
)

const App: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={ classes.root }>
      <Suspense fallback="loading">
        <AppDashboard />
      </Suspense>
    </div>
  )
}

export default App