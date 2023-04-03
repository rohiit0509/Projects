import { FooterWrapper , Link, LinkWrapper} from "../../styles/components/Footer"
import { NavLogo } from "../../styles/components/Navbar"
const Footer = () => {
  return (
   <FooterWrapper>
    <NavLogo>EasyDownload</NavLogo>
    <LinkWrapper>
    <Link>Photos</Link>
    <Link>Videos</Link>
    <Link>Reels</Link>
    <Link>Stories</Link>
    <Link>DP</Link>
    </LinkWrapper>

   </FooterWrapper>
  )
}

export default Footer