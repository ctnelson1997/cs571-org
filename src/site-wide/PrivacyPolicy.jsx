import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => (
    <div>
        <div style={{textAlign: "center"}}>
            <h1>Our Privacy Policy</h1>
            <br/>
        </div>
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <h2>Introduction</h2>
                    <p>Welcome to CS571! Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information when you use our website, including our APIs. By using CS571, you agree to the terms of this privacy policy.</p>

                    <h2>Information We Collect</h2>
                    <p>We collect the following information from users of our website and APIs:</p>
                    <p><strong>API Requests</strong>: We collect logs of API requests for completing HWs and In-Class Exercises.</p>
                    <p><strong>Email Addresses</strong>: We collect email addresses when users register or use our APIs.</p>
                    <p><strong>IP Addresses</strong>: We collect IP addresses of users accessing our site and APIs.</p>

                    <h2>How We Use Your Information</h2>
                    <p>The information we collect is used for the following purposes:</p>
                    <p><strong>Providing Services</strong>: We use your email and IP address to provide and improve our educational services, ensuring the functionality of our APIs, and maintaining the security of our site.</p>
                    <p><strong>Analytics</strong>: We analyze the collected information to understand user behavior and improve our website and services.</p>
                    <p><strong>Communication</strong>: We may use your email address to send you important information related to our services. You can opt-out by revoking your Badger ID via <Link to={"/auth"}>the BadgerAuth Center.</Link></p>

                    <h2>How We Protect Your Information</h2>
                    <p>We take the security of your personal information seriously and implement appropriate measures to protect it. These measures include:</p>
                    <p><strong>Data Encryption</strong>: We use encryption to protect data transmitted to and from our site.</p>
                    <p><strong>Access Controls</strong>: We limit access to your personal information to authorized personnel only.</p>

                </Col>
                <Col xs={12} md={6}>
                    <h2>Sharing Your Information</h2>
                    <p>We do not sell, trade, or otherwise transfer your personal information to outside parties, except:</p>
                    <p><strong>Service Providers</strong>: We may share information with trusted third-party service providers who assist us in operating our website, conducting our business, or providing services to you.</p>
                    <p><strong>Legal Requirements</strong>: We may release your information when we believe it is necessary to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.</p>

                    <h2>Cookies</h2>
                    <p>We may use cookies to enhance your experience on our website. Cookies are small files stored on your device that help us remember your preferences and understand how you use our site. You can choose to disable cookies through your browser settings, but doing so may affect your ability to use some features of our website.</p>

                    <h2>Contact Us</h2>
                    <p>If you have any questions about this privacy policy, please contact the current instructors of the course.</p>

                    <h2>Thank You!</h2>
                    <p>Thank you for using CS571! Your privacy is important to us, and we are committed to protecting your personal information.</p>
                </Col>
            </Row>
        </Container>
    </div>
);

export default PrivacyPolicy;