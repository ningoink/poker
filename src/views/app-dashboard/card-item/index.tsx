import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  }),
)

const CardItem: React.FC = () => {
  const classes = useStyles()

  return (
    <div>
      card item
    </div>
  )
}

export default CardItem