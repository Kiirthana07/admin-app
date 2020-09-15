import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { auth} from "./../components/Firebase";
import { useHistory } from "react-router-dom";
import { useAlert } from 'react-alert';
import * as yup from 'yup';

// import bgimage from './images/bgimage.jpg'

const LoginForm = ()=>{

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });

  const history = useHistory();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler = (event,email, password) => {
        event.preventDefault();
        // schema.validate(this.state).then(valid => {
        //   console.log(valid);
        auth.signInWithEmailAndPassword(email, password).then(res=>{
          console.log(res);
          history.push("/home");
        }).catch(error => {
          console.log('Incorrect email or password')
        //   setError.show(
        //     "Alert Title",
        //     "Sorry! Unable to Login!!",
        //     [
        //         { text: "OK", onClick: () => console.log("OK Pressed") }
        //     ],
        //     { cancelable: false }
        // );
        });
        
    //   }).catch(err => {
    //     console.log(err);
    //     // Alert.alert(
    //     //     "Alert Title",
    //     //     err.errors[0],
    //     //     [
    //     //         { text: "OK", onPress: () => console.log("OK Pressed") }
    //     //     ],
    //     //     { cancelable: false }
    //     // );
    // });

     
      };

      const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;
      
        if(name === 'userEmail') {
            setEmail(value);
        }
        else if(name === 'userPassword'){
          setPassword(value);
        }
    };

    // const updateUser = (dRequests) => {
    //   firestore()
    //       .collection('DonationRequest')
    //       .doc(dRequests.key)
    //       .delete()
    //       .then(() => {
    //           console.log('Donation Request deleted!');
    //       });
    // }

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        e-Feed
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: "url(" + "https://source.unsplash.com/QVNyCllG2GQ" + ")",
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#1c313a"
  },
}));

//export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="userEmail"
              value= {email} 
              type="email"
              label="Email Address"
              name="userEmail"
              autoComplete="email"
              onChange = {(event) => onChangeHandler(event)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="userPassword"
              label="Password"
              type="password"
              id="userPassword"
              autoComplete="current-password"
              onChange = {(event) => onChangeHandler(event)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Keep me signed in"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}
            >
              Sign In
            </Button>



            {/* <Grid container>

 auth.signInWithEmailAndPassword(email, password)
 .then(user=>{
   log(user)
 })
 .catch(error => {
        setError("Error signing in with password and email!");
          console.error("Error signing in with password and email", error);
        });


auth.createUserWithEmailAndPassword(email, password).then(res=>{

}).catch(err=>{

})

              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
//}
};

export default LoginForm;