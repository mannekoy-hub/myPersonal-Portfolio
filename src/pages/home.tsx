import { Header } from "../header/header";
import myPic3 from '../assets/myPic4.png';
import './glitchhomePic.css'

const h3Class = 'm-0 mb-2.5 text-[1.05rem] font-normal leading-[1.7] text-[#c9d0f5]';

// The coloured glitch layers use the photo's own transparent shape as a mask
const maskStyle = {
    WebkitMaskImage: `url("${myPic3}")`,
    maskImage: `url("${myPic3}")`,
};

export function Home() {
    return (
        <div
            className="relative min-h-screen box-border overflow-clip text-[#f4f6ff]
                 bg-[image:radial-gradient(ellipse_at_85%_15%,rgba(59,79,216,0.45),transparent_55%),linear-gradient(135deg,#050a2e_0%,#0a1245_55%,#11209a_100%)]
                 before:content-[''] before:absolute before:z-0 before:rounded-full before:pointer-events-none
                 before:w-[560px] before:h-[560px] before:-right-[180px] before:-bottom-[220px]
                 before:border before:border-[rgba(143,156,240,0.28)]
                 after:content-[''] after:absolute after:z-0 after:rounded-full after:pointer-events-none
                 after:w-[380px] after:h-[380px] after:-right-[90px] after:-bottom-[130px]
                 after:border after:border-[rgba(143,156,240,0.18)]"
        >
            <Header />

            <div
                className="relative z-[1] min-h-screen box-border flex items-center justify-center flex-wrap
                   gap-[60px] pt-[100px] px-10 pb-10
                   max-[700px]:gap-10 max-[700px]:px-6 max-[700px]:pb-12"
            >
                <div
                    className="motion-reveal motion-reveal-left glitch-pic w-[360px] shrink-0
                     max-[700px]:w-[260px]"
                >
                    <div
                        className="glitch-pic__layer glitch-pic__layer--cyan"
                        style={maskStyle}
                        aria-hidden="true"
                    ></div>
                    <div
                        className="glitch-pic__layer glitch-pic__layer--magenta"
                        style={maskStyle}
                        aria-hidden="true"
                    ></div>
                    <img className="glitch-pic__base" src={myPic3} alt="My profile" />
                    <div
                        className="glitch-pic__layer glitch-pic__layer--scan"
                        style={maskStyle}
                        aria-hidden="true"
                    ></div>
                </div>

                <div
                    className="motion-reveal motion-reveal-right max-w-[620px] m-0 pl-8 border-l-[3px] border-[#3b4fd8]
                     max-[700px]:pl-0 max-[700px]:pt-6 max-[700px]:border-l-0 max-[700px]:border-t-[3px]"
                >
                    <h1 className="m-0 mb-5 text-[clamp(1.9rem,4vw,3.1rem)] font-extrabold leading-[1.12] tracking-[0.02em] uppercase text-[#f4f6ff]">
                        <span className="block">FIXING WHAT'S BROKEN &</span>
                        <span className="block text-[#8f9cf0]">BUILDING WHAT'S NEEDED</span>
                    </h1>

                    <span
                        className="block w-[90px] h-[3px] mb-6 rounded-[2px]
                       bg-[image:linear-gradient(90deg,#f4f6ff,#3b4fd8)]"
                        aria-hidden="true"
                    ></span>

                    <h3 className={`${h3Class} !font-semibold !text-[#f4f6ff]`}>
                        I'm a Computer Engineering focused on distributed systems, and developer tooling.
                    </h3>
                    <h3 className={h3Class}>Currently a Computer Engineering student who wants to</h3>
                    <h3 className={h3Class}>build websites/apps that provide practical solutions.</h3>
                    <h3 className={h3Class}>An aspiring software engineer.</h3>
                    <h3 className={h3Class}>
                        currently a Computer Engineering student passionate about building scalable systems.
                    </h3>
                </div>
            </div>
        </div>
    );
}