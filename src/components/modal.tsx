import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import UserImg from '../assets/images/modal-img.png';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const CustomDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: '#2B2C28',
    padding: '30px',
    [theme.breakpoints.down('sm')]: {
      padding: '20px',
    },
  },

  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    textAlign: 'center',
    '& .MuiDialogTitle-root': {
      fontSize: '1.25rem',
      color: 'white',
      fontWeight: 900,
      marginBottom: 5,
    },
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiDialogTitle-root': {
    fontSize: '1.875rem',
  },
  '& .MuiTypography-root': {
    color: 'rgba(255, 255, 255, 0.60)',
  },
  '& .ModalButton': {
    borderRadius: '14px',
    backgroundColor: '#C4C4C4',
    color: 'black',
    padding: '1rem 0.75rem',
    textTransform: 'none',
    width: '100%',
    maxWidth: '445px',
    border: 'none',
    fontSize: '14px',
    fontWeight: 500,
  },
  '& .Icon': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
    width: '36px',
    height: '36px',
    backgroundColor: 'white',
    borderRadius: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '26px',
      height: '26px',
    },
    '& svg': {
      width: '20px',
      height: '20px',
    },
  },
  '& .MuiDialog-container': {
    '& .MuiPaper-root': {
      maxWidth: '992px',
      width: '100%',
    },
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function CustomDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <CustomDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <CustomDialogTitle id="customized-dialog-title" onClose={handleClose}></CustomDialogTitle>
        <DialogContent>
          <Box
            component="img"
            src={UserImg}
            alt="image"
            sx={{
              maxWidth: '100%',
              margin: 'auto',
              display: 'block',
            }}
          />
          <CustomDialogTitle id="customized-dialog-title" onClose={handleClose}>
            Айнур Жунусова, Финансист
          </CustomDialogTitle>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 3,
              gap: 2,
            }}
          >
            <Box className="Icon" component="a" href="/#">
              <FacebookOutlinedIcon />
            </Box>
            <Box className="Icon" component="a" href="/#">
              <TwitterIcon />
            </Box>
            <Box className="Icon" component="a" href="/#">
              <LinkedInIcon />
            </Box>
            <Box className="Icon" component="a" href="/#">
              <YouTubeIcon />
            </Box>
            <Box className="Icon" component="a" href="/#">
              <InstagramIcon />
            </Box>
            <Box className="Icon" component="a" href="/#">
              <SendIcon />
            </Box>
            <Box className="Icon" component="a" href="/#">
              <WhatsAppIcon />
            </Box>
          </Box>
          <Typography mb={5}>I’m going to show you how to pay less in taxes, sometimes $0.</Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            <Button className="ModalButton" variant="contained">
              Как стать бухгалтером за 2 месяца
            </Button>
            <Button className="ModalButton" variant="contained">
              Быть клиентом Go4Profit
            </Button>
            <Button className="ModalButton" variant="contained">
              Как предпринимателю начать контролировать свои деньги
            </Button>
            <Button className="ModalButton" variant="contained">
              Top 100 Tax Deductions 🤝
            </Button>
          </Box>
          <Box
            sx={{
              marginTop: '3rem',
              color: 'white',
            }}
          >
            © 2023 A. Zhunussova All rights reserved.{' '}
          </Box>
        </DialogContent>
      </CustomDialog>
    </div>
  );
}
