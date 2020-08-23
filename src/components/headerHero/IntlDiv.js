import React from "react"
import Button from "@material-ui/core/Button"
import { changeLocale } from "gatsby-plugin-react-intl"
import { makeStyles } from "@material-ui/core/styles"
import { useIntl } from "gatsby-plugin-react-intl"

const useStyles = makeStyles(theme => ({
  navBtn: {
    color: "#fff",
    fontWeight: 700,
  },
}))

function IntlDiv() {
  const classes = useStyles()
  const intl = useIntl()

  const handleEnClick = () => changeLocale("en")

  const handleJpClick = () => changeLocale("jp")

  return (
    <div>
      <Button className={classes.navBtn} onClick={handleEnClick}>
        {intl.formatMessage({ id: "en" })}
      </Button>
      <Button className={classes.navBtn} onClick={handleJpClick}>
        {intl.formatMessage({ id: "jp" })}
      </Button>
    </div>
  )
}

export default IntlDiv