import React from 'react';

const Footer = () => {
    return (

        <footer style="background-color: #48afff; color: white;">
            <div class="container">
                <div class="row">
                    <div style={{ marginTop: "20px", fontSize: "16px" }} class="col-md-4">
                        <h4 style={{ fontSize: "16px", marginBottom: "20px" }} ><img src="po-footer-logo-white.svg" width={100} alt="" /></h4>
                        <h6>About Us</h6>
                        <h6>FAQs</h6>
                        <h6>Contact Us</h6>
                        <h6>Careers</h6>
                        <h6>Press & Blog</h6>
                        <h6>Terms & Conditions</h6>



                    </div>
                    <div style={{ marginTop: "20px" }} class="col-md-4">
                        <h4 style={{ fontSize: "16px", marginBottom: "20px" }} >Customer Service</h4>
                        <h6>Help Center</h6>
                        <h6>Privacy Policy</h6>
                        <h6>Installment Plan</h6>
                        <h6>E-Wanrranty Activation</h6>

                    </div>
                    <div class="col-md-4">
                        <div style={{ marginTop: "20px" }}>
                            <h4 style={{ fontSize: "16px", marginBottom: "20px" }}>Secure Payment Methods </h4>

                            <p><img src="https://static.priceoye.pk/images/payment_method.svg" width="250px" alt="" /></p>
                            <p><img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" height={80} width={200} alt="" /></p>
                        </div>
                    </div>

                </div>
            </div>
        </footer>









    );
}

export default Footer;