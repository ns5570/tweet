import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import './login.css';
import Logo from './tw.png'
import { Link } from 'react-router-dom';

// import { useHistory } from 'react-router-dom'; // Import useHistory hook

const styles = {
    textField: {
        width: '100%',
        marginBottom: 30,
        backgroundColor:'white',
    },
    btnBlock: {
        textAlign: 'center',
        marginBottom: 40,
        marginTop: 20,
        backgroundColor: 'green',
        color: '#fff',
        boxShadow: '2px 3px 2px grey',
    },
   logo: {
    maxWidth: '10%', 
    marginBottom: 20,
  },
}; 

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData);
  }

  render() {
    const { classes } = this.props;
    const { errors } = this.state;
    return (
        <Paper className={`paper-container ${classes.paper}`}>
            
            <img
          src={Logo}
          alt="Logo"
          className={classes.logo}
        />


        <form onSubmit={this.handleSubmit}>
          <TextField
            type="email"
            label="Email"
            className={classes.textField}
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
            helperText={errors.email ? errors.email : ''}
            error={errors.email ? true : false}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            className={classes.textField}
            helperText={errors.password ? errors.password : ''}
            error={errors.password ? true : false}
          />
          <div className={`btnBlock ${classes.btnBlock}`}>
            <Button type="submit">
              Submit
            </Button>
          </div>
            </form>
             <Link to="/register" style={{ textDecoration: 'none', color: 'blue', fontSize: '28px' }} >Don't have an account? Register Here!!</Link>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

// Remove the withRouter and use useHistory hook in your component
export default connect(mapStateToProps, { loginUser })(withStyles(styles)(Login));
