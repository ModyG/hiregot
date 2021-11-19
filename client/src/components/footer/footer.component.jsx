import React from 'react'
import Footer from './footer.component.styles';
import * as TiIcons from 'react-icons/ti';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as GiIcons from 'react-icons/gi';
import * as BiIcons from 'react-icons/bi';

const FooterContainer = () => (
    <Footer>
        <Footer.Wrapper>
        <Footer.Row>
            <Footer.Column>
            <Footer.Title>About Us</Footer.Title>
                <Footer.Link href="/">Home</Footer.Link>
                <Footer.Link href="/blog">Blogs</Footer.Link>
                <Footer.Link href="/shop">Shop</Footer.Link>
                <Footer.Link href="/contact">Contacts</Footer.Link>
            </Footer.Column>
            <Footer.Column>
            <Footer.Title>Shop</Footer.Title>
                <Footer.Link href="/shop/men">Men</Footer.Link>
                <Footer.Link href="/shop/women">Women</Footer.Link>
                <Footer.Link href="/shop/kids">Kids</Footer.Link>
                <Footer.Link href="/shop/walkers">Walkers</Footer.Link>
                <Footer.Link href="/shop/random">Random</Footer.Link>
            </Footer.Column>
            <Footer.Column>
            <Footer.Title>Contact Us</Footer.Title>
                <Footer.Link href="https://en.wikipedia.org/wiki/United_States#"><FaIcons.FaFlagUsa/> USA</Footer.Link>
                <Footer.Link href="https://en.wikipedia.org/wiki/United_Kingdom"><GiIcons.GiEuropeanFlag/> France</Footer.Link>
                <Footer.Link href="https://en.wikipedia.org/wiki/Egypt"><GiIcons.GiEgyptianWalk/> Egypt</Footer.Link>
                <Footer.Link href="https://en.wikipedia.org/wiki/Canada"><SiIcons.SiAircanada/> Canada</Footer.Link>
                <Footer.Link href="/contact"><BiIcons.BiSupport/> Support</Footer.Link>
            </Footer.Column>
            <Footer.Column>
            <Footer.Title>Social</Footer.Title>
                <Footer.Link href="#"><TiIcons.TiSocialFacebook/> Facebook</Footer.Link>
                <Footer.Link href="#"><TiIcons.TiSocialInstagram/> Instagram</Footer.Link>
                <Footer.Link href="#"><TiIcons.TiSocialYoutube/> Youtube</Footer.Link>
                <Footer.Link href="#"><TiIcons.TiSocialTwitter/> Twitter</Footer.Link>
                <Footer.Link href="#"><TiIcons.TiSocialLinkedin/> LinkedIn</Footer.Link>
            </Footer.Column>
        </Footer.Row>
        </Footer.Wrapper>
    </Footer>
);

export default FooterContainer;