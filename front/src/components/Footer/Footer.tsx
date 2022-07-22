import { FC } from "react"
import {
    Footer,
    PinkBallon,
    Icons,
    Link,
    GreenDoodle,
    YellowBallon,
} from "./Footer.style"
import greenDoodle from "../../assets/greenDoodle.svg"
import pinkBallon from "../../assets/pinkBallon.svg"
import yellowBallon from "../../assets/yellowBallon2.svg"
import {
    FaLinkedinIn,
    FaTwitter,
    FaFacebookF,
    FaPinterestP,
} from "react-icons/fa"

interface FooterProps {}

export const MainFooter: FC<FooterProps> = () => {
    return (
        <Footer>
            <PinkBallon src={pinkBallon} />
            <Icons>
                <Link href="https://www.linkedin.com/in/carlos-e-souza2653/">
                    <FaLinkedinIn width={16} height={16} />
                </Link>
                <Link href="https://twitter.com/home">
                    <FaTwitter width={16} height={16} />
                </Link>
                <Link href="https://facebook.com/">
                    <FaFacebookF width={16} height={16} />
                </Link>
                <Link href="https://www.pinterest.com/">
                    <FaPinterestP width={16} height={16} />
                </Link>
            </Icons>
            <GreenDoodle src={greenDoodle} />
            <YellowBallon src={yellowBallon} />
        </Footer>
    )
}
