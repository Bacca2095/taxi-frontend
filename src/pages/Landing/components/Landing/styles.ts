import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: '10px',
      paddingRight: '10px',
    },
    containerImg: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '50px',
    },
    img: {
      width: '50%',
      height: '50%',
    },
    title: {
      marginTop: '40px',
      marginBottom: '20px',
      fontWeight: 800,
      lineHeight: 1.1,
      fontSize: '1.7rem',
      letterSpacing: '0',
      opacity: 1,
      color: '#000',
    },
    input: {
      marginTop: '30px',
      marginBottom: '20px',
    },
    button: {
      color: '#fff',
    },
  }),
);
