import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    dataGrid: {
      width: '100%',
      height: '400px',
    },
    dataGridHeader: {
      fontSize: '1.5rem',
    },
  }),
);
