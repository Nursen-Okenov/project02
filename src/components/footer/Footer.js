import All__Products from "./footer__components/All__Products";
import Connect from "./footer__components/Connect";
import Follow__Us from "./footer__components/Follow__Us";
import Footer__Logo from "./footer__components/Footer__Logo";
import Support from "./footer__components/Support";

function Footer() {
    return (
        <footer>
            < Footer__Logo />
            < All__Products />
            < Connect />
            < Support />
            < Follow__Us />
        </footer>
    )
}
export default Footer;