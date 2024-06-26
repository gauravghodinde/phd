import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { image, homeData } from "@/consts/data";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mt-20">
        <div className="mainn  md:flex align-middle justify-center" style={{paddingRight:"48px", paddingLeft:"48px"}}>
          <div className="images flex md:block justify-center">
            <img
              src={image}
              style={{
                border: "0",
                width: "100%",
                height: "auto",
                // display: "block",
                
                // margin: "-0% 0 -0% -0.2604183607%",
              }}
              class="p-3"
              alt=" face"
            />
          </div>
          <div className="maininfo">
            <div className="nameinfo px-4 py-2">
              <div
                className="name"
                style={{
                  fontFamily: " Georgia, Arial",
                  fontWeight: "700",
                  fontSize: "20px",
                  lineHeight: "26px",
                  color: "rgb(105, 115, 53",
                }}
              >
                {homeData.name}
              </div>
              <div
                className="post"
                style={{
                  fontFamily: " Georgia, Arial",
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "22px",
                  color: "rgb(105, 115, 53",
                }}
              >
                {homeData.post}
              </div>
              <div
                className="department"
                style={{
                  fontFamily: " Georgia, Arial",
                  fontWeight: "400",
                  fontSize: "15px",
                  lineHeight: "20px",
                  color: "rgb(105, 115, 53",
                }}
              >
                {homeData.department}
              </div>
              <div
                className="college"
                style={{
                  fontFamily: " Georgia, Arial",
                  fontWeight: "400",
                  fontSize: "15px",
                  lineHeight: "20px",
                  color: "rgb(105, 115, 53",
                }}
              >
                {homeData.college}
              </div>
            </div>
            <div className="bio px-4 py-2">
              <div
                className="biography"
                style={{
                  fontFamily: " Georgia, Arial",
                  fontWeight: "400",
                  fontSize: "16x",
                  lineHeight: "22px",
                  color: "rgb(105, 115, 53",
                }}
              >
                <b>Biography -</b> {homeData.bio}
              </div>
            </div>
            <div
              className="afterbio flex flex-wrap px-4 py-2"
              style={{
                fontFamily: " Georgia, Arial",
                fontWeight: "700",
                fontSize: "13px",
                lineHeight: "18px",
                color: "rgb(105, 115, 53",
              }}
            >
              <div className="someNo">{homeData.orc}</div>
              <div className="someNo">{homeData.scorpus}</div>
              <div className="someNo">{homeData.ResearcherID}</div>
            </div>
            <div className="links px-4 py-2">
              <a href={homeData.ResearchGateLink} style={{ color: "blue" }}>
                Research Gate
              </a>
              <a
                href={homeData.googleScholar}
                style={{ color: "rgb(255, 102, 0)" }}
              >
                Google Scholar
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
