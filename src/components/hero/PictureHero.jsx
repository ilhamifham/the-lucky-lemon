import "./PictureHero.css";
import { useWindowSize } from "/src/hooks/useWindowSize";
import HeroMobilePNG from "/src/assets/hero-mobile.png";
import HeroMobileWEBP from "/src/assets/hero-mobile.webp";
import HeroDesktopPNG from "/src/assets/hero-desktop.png";
import HeroDesktopWEBP from "/src/assets/hero-desktop.webp";

function PictureHero() {
    const screenSize = useWindowSize();

    return (
        <picture>
            {screenSize < 768 ? (
                <>
                    <source srcSet={HeroMobileWEBP} type="image/webp" />
                    <img src={HeroMobilePNG} alt="" width={735} height={735} />
                </>
            ) : (
                <>
                    <source srcSet={HeroDesktopWEBP} type="image/webp" />
                    <img src={HeroDesktopPNG} alt="" width={584} height={450} />
                </>
            )}
        </picture>
    );
}

export default PictureHero;