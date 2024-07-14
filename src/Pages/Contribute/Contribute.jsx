import React, { useContext,useState } from 'react'
import styles from './Contribute.module.css'
import { NavContext } from '../../Components/NavContext'
import NavPopUp from '../../Components/NavPopUp/NavPopUp';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
const Contribute = () => {
    const {nav,setNav}=useContext(NavContext);
    const [open, setOpen] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
  return (
    <>
    <div className={styles.container}>
        <div className={styles.overlay}>
            <div className={styles.volunteer}>
                <h1>Get Involved</h1>
                <p>Support our mission by volunteering your time or making a donation. </p>
                <p>Your contributions help us to achieve our goals and make a lasting impact.</p>
            </div>
        </div>
    </div>
    <div className={styles.donate}>
        <h3>Donate Now</h3>
        <div className={styles.donations}>
            <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/2560px-PayPal_logo.svg.png" alt="" /></a>
            <a href=""><img src="https://1000logos.net/wp-content/uploads/2021/05/Patreon-logo-2013.png" alt="" /></a>
            <a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcNzRJELXH5cCTeArSPNyvykrZ5f8uyQ86ig&s" alt="" /></a>
        </div>
    </div>
    <div className={styles.volunteerform}>
        <h3>Volunteer</h3>
        <div>Volunteering with AquaHope empowers you to directly contribute to cleaner water ecosystems.</div>
        <div>By joining us, you play a vital role in safeguarding aquatic environments and promoting sustainable water management practices for future generations.</div>
        <div><b>Please Fill this form to express your interest in volunteering!</b></div>
        <form onSubmit={handleSubmit} action="" id='form1'>
            <div className={styles.formcontainer}>
                <label htmlFor="name">Name</label>
                <input required placeholder='Name' id='name' type="text" />
            </div>
            <div className={styles.formcontainer}>
                <label htmlFor="email">Email</label>
                <input required placeholder='E-mail' id='email' type="email" />            
            </div>
            <div className={styles.formcontainer}>
                <label htmlFor="tele">Phone</label>
                <input required placeholder='Phone' id='tele' type="tel" />
            </div>
            <div className={styles.formcontainer}>
                <label htmlFor="help">How would you like to help us?</label>
                <textarea required name="help" id="help"></textarea>
            </div>
            <div className={styles.buttoncontainer}>
                <button form='form1' type='submit'>Submit</button>
            </div>         
             
        </form>
    </div>   
    {
        nav&&<NavPopUp/>
    }
    <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Thank you for expressing interest in volunteering. Our team will get in touch with you shortly.
        </Alert>
    </Snackbar>
    </>

  )
}

export default Contribute
