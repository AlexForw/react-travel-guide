import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  header:{
      backgroundColor: '#333333',
      margin: 0,
  },
  typography: {
      display: 'none',
      transition: 'all 1s ease',
      '&:hover': { transform: "scale(1.1)",
      userSelect: 'none',
    },
    [theme.breakpoints.up('xs')]: {
        display: 'block',
    },
},
searchBox: {
    transition: 'all 1s ease',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%', 
    position: 'absolute',
    pointerEvents: 'none', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
  },
inputInput: {
    color: 'white',
    padding: theme.spacing(1, 1, 1, 0), 
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, 
    transition: theme.transitions.create('width'), 
    width: '100%', 
    [theme.breakpoints.up('md')]: { width: '20ch' },
  },
  toolbar: {
    display: 'flex', 
    justifyContent: 'space-between',
  },
}));