import React, { Suspense } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import GithubCorner from '../components/github-corner'
import AppDashboard from './app-dashboard'
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
        <GithubCorner />
        <AppDashboard />
      </Suspense>
    </div>
  )
}

export default App
