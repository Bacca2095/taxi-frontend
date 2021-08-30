import { createStyles, makeStyles } from '@material-ui/core/styles';
import background from '../../../../assets/img/background.jpg';

export const useStyles = makeStyles(() =>
  createStyles({
    card: {
      paddingTop: '64px',
      paddingBottom: '64px',
      padding: '16px',
    },
    container: {
      height: '100vh',
      width: '100vw',
      margin: '0px',
      padding: 'opx',
    },
    containerItem: {
      width: '50vw',
      margin: '0px',
      padding: '0px',
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
    backgroundImg: {
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      width: '50vw',
      height: '100vh',
    },
  }),
);
