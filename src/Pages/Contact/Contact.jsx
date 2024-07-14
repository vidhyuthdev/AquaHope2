import React, { useContext,useState } from 'react'
import styles from './Contact.module.css'
import {NavContext} from '../../Components/NavContext'
import NavPopUp from '../../Components/NavPopUp/NavPopUp.jsx'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
const Contact = () => {
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
                <h1>Contact Us</h1>
            </div>
        </div>
        <div className={styles.main}>
            <h2>Reach Out to AquaHope Foundation!</h2>
            <div className={styles.grid}>
                <div className={styles.details}>
                    <h4>Address</h4>
                    <div className={styles.address}>
                        <span>AquaHope Foundation</span>
                        <span>123 Waterway Street</span>
                        <span>Seaside City, CA 98765</span>
                        <span>United States</span>
                    </div>
                </div>
                <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d74402.75325995954!2d-121.89066577363114!3d36.6234967095322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808de4be65ff0527%3A0x70474dfe0823980!2sSeaside%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1720943015578!5m2!1sen!2sin" width="100%" height="300px" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className={styles.grid}>
                <div className={styles.email}>
                    <img height='150px' width='150px' src="https://cdn.pixabay.com/photo/2016/06/13/17/30/mail-1454731_640.png" alt="" />
                    <div>
                        <a style={{textDecoration:'none',color:'white'}} href="mailto:info@aquahopefoundation.org">Email: info@aquahopefoundation.org</a>
                    </div>
                </div>
                <div className={styles.email}>
                    <img height='150px' width='150px' src="https://png.pngtree.com/png-vector/20231004/ourmid/pngtree-telephone-green-glossy-icon-on-white-background-cellular-png-image_10073141.png" alt="" />
                    <div>
                        <a style={{textDecoration:'none',color:'white'}} href="tel:+1 1234567890">Phone: +1 (123) 456-7890</a>
                    </div>
                </div>

            </div>
            <div className={styles.socials}>
                <h4>Don't Forget to Follow us on our Socials!</h4>
                <div className={styles.logos}>
                    <img src="https://seeklogo.com/images/T/twitter-icon-square-logo-108D17D373-seeklogo.com.png" alt="" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" alt="" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHHQ1tYDFw8In3ArE11fy-HfaGgjkh5fxd_w&s" alt="" />
                </div>
            </div>
            <h3 style={{textAlign:'center'}}>Leave us a message!!</h3>
            <div className={styles.fcont}>
                <form onSubmit={handleSubmit}  action="" id='form1'>
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
                        <label htmlFor="help">Your message/ Query</label>
                        <textarea placeholder='Your message' required name="help" id="help"></textarea>
                    </div>
                    <div className={styles.buttoncontainer}>
                        <button form='form1' type='submit'>Submit</button>
                    </div>          
                </form>
            </div>
        </div>
        
        {nav&& <NavPopUp/>}
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Thank you for expressing contacting us. Our team will get in touch with you shortly.
            </Alert>
        </Snackbar>
    </>
  )
}

export default Contact
