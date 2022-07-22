import { FC } from "react"
import { Footer, PinkBallon, Icons, Link, GreenDoodle } from "./Footer.style"
import greenDoodle from "../../assets/greenDoodle.svg"
import pinkBallon from "../../assets/pinkBallon.svg"
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
                <Link href="#">
                    <FaLinkedinIn />
                </Link>
                <Link href="#">
                    <FaTwitter />
                </Link>
                <Link href="#">
                    <FaFacebookF />
                </Link>
                <Link href="#">
                    <FaPinterestP />
                </Link>
            </Icons>
            <GreenDoodle src={greenDoodle} />
        </Footer>
    )
}
