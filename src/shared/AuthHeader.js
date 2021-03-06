import React from "react"
import { NavLink } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import { authLogout } from "../store/actions/auth";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
}))

const AuthHeader = (props) => {
  const classes = useStyles();

  const handleLogOut = () => {
    props.logout()
  }

  return (
    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          <Link variant="button" color="textPrimary" className={classes.link} component={NavLink} to="/">
            APP
          </Link>
        </Typography>
        <nav>
          <Link variant="button" color="textPrimary" className={classes.link} component={NavLink} to="/dashboard">
            Dashboard
          </Link>
          <Link variant="button" color="textPrimary" className={classes.link} component={NavLink} to="/" onClick={handleLogOut}>
            Logout
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(authLogout())
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(AuthHeader)
