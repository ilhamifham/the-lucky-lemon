import "./PictureAbout.css";
import { useWindowSize } from "/src/hooks/useWindowSize";
import AboutMobilePNG1 from "/src/assets/about-mobile-1.png";
import AboutMobileWEBP1 from "/src/assets/about-mobile-1.webp";
import AboutMobilePNG2 from "/src/assets/about-mobile-2.png";
import AboutMobileWEBP2 from "/src/assets/about-mobile-2.webp";
import AboutDesktopPNG1 from "/src/assets/about-desktop-1.png";
import AboutDesktopWEBP1 from "/src/assets/about-desktop-1.webp";
import AboutDesktopPNG2 from "/src/assets/about-desktop-2.png";
import AboutDesktopWEBP2 from "/src/assets/about-desktop-2.webp";

function PictureAbout() {
    const screenSize = useWindowSize();

    return (
        <>
            {screenSize < 768 ? (
                <>
                    <picture>
                        <source srcSet={AboutMobileWEBP1} type="image/webp" />
                        <img
                            src={AboutMobilePNG1}
                            alt="chef adrian and marcelo"
                            width={420}
                            height={404}
                        />
                    </picture>
                    <picture>
                        <source srcSet={AboutMobileWEBP2} type="image/webp" />
                        <img
                            src={AboutMobilePNG2}
                            alt="chef adrian and marcelo"
                            width={420}
                            height={404}
                        />
                    </picture>
                </>
            ) : (
                <>
                    <picture>
                        <source srcSet={AboutDesktopWEBP1} type="image/webp" />
                        <img
                            src={AboutDesktopPNG1}
                            alt="chef adrian and marcelo"
                            width={334}
                            height={321}
                        />
                    </picture>
                    <picture>
                        <source srcSet={AboutDesktopWEBP2} type="image/webp" />
                        <img
                            src={AboutDesktopPNG2}
                            alt="chef adrian and marcelo"
                            width={334}
                            height={321}
                        />
                    </picture>
                </>
            )}
        </>
    );
}

export default PictureAbout;
