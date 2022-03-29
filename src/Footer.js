import React from 'react'
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles"

const Footer = () => {
    return (
        <Box>
            <h1 style={{
                color: "green",
                textAlign: "center",
                marginBottom: "5px"
            }}>
                MVP-APPS
            </h1>
            <Container>
                <Row>
                    <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="#">App Development</FooterLink>
                        <FooterLink href="#">Web Development</FooterLink>
                        <FooterLink href="#">Designing</FooterLink>
                        <FooterLink href="#">SEO</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">Riyadh</FooterLink>
                        <FooterLink href="#">Jeddah</FooterLink>
                        <FooterLink href="#">Dammam</FooterLink>
                        <FooterLink href="#">Abha</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">Facebook</FooterLink>
                        <FooterLink href="#">Instagram</FooterLink>
                        <FooterLink href="#">Twitter</FooterLink>
                        <FooterLink href="#">Youtube</FooterLink>
                    </Column>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">Aim</FooterLink>
                        <FooterLink href="#">Vision</FooterLink>
                        <FooterLink href="#">Testimonials</FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    )
}

export default Footer