import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { AboutSection, Title, Text, SubBoldText, SubTitle} from './style';
import { SectionIntro, ContainerLayout, ResumeButton, ButtonDefault } from "../common";
import ParticleImage, {
  Vector,
  forces
} from "react-particle-image";

// Round number up to nearest step for better canvas performance
const round = (n, step = 20) => Math.ceil(n / step) * step;

// Try making me lower to see how performance degrades
const STEP = 30;

const particleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if magnitude < 200 (range 0-255)
    const magnitude = (pixel.r + pixel.g + pixel.b) / 3;
    return magnitude < 200;
  },
  color: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    // Canvases are much more performant when painting as few colors as possible.
    // Use color of pixel as color for particle however round to nearest 30
    // to decrease the number of unique colors painted on the canvas.
    // You'll notice if we remove this rounding, the framerate will slow down a lot.
    return `rgba(
      ${round(pixel.r, STEP)}, 
      ${round(pixel.g, STEP)}, 
      ${round(pixel.b, STEP)}, 
      ${round(pixel.a, STEP) / 255}
    )`;
  },
  radius: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    const magnitude = (pixel.r + pixel.g + pixel.b) / 3;
    // Lighter colors will have smaller radius
    return 3 - (magnitude / 255) * 1.5;
  },
  mass: () => 40,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  }
};

const motionForce = (x, y) => {
  return forces.disturbance(x, y, 7);
};

const src = "about.jpg";

const About = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     placeholderImage: file(relativePath: { eq: "54db13f1deef6bf15ce17127aa98eb33.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 550) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              {/* <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" /> */}
              {/* <ParticleImage
                src={src}
                width="400"
                height="400"
                scale={0.3}
                entropy={2}
                maxParticles={5000}
                particleOptions={particleOptions}
                mouseMoveForce={motionForce}
                touchMoveForce={motionForce}
                backgroundColor={STEP}
              /> */}
              {/* <img src={src} alt="user photo" width={1000} height={500} style={{paddingTop: "40px"}}/> */}
              {/* <SubTitle>Ex-Intern ML @ NVIDIA | Kaggle Grandmaster | Open Source ML Contributor</SubTitle> */}
            </div>
            <div>
              <Title>Hi, I'm Tanay 👋🏻 </Title>
              {/* <SubBoldText>Ex-Intern ML @ NVIDIA | Kaggle Grandmaster | Open Source ML Contributor</SubBoldText> */}
              {/* <Text>A Computer Science Graduate from <b className="text-primary lined-link">India</b>.</Text> */}
              <Text>
                Tanay is recent Computer Science Graduate from <b className="text-primary lined-link">India</b>. 
                He is a self-taught programmer and taught himself Machine learning from Andrew NG's excellent courses on Coursera.
              </Text>

              <Text>
              In summer of 2020, amid the COVID lockdown in India, he started using Kaggle to enhance his skills and be more competitive in Data Science and Machine Learning. 
              Currently, he is a Notebooks Grandmaster, Competitions Expert and Datasets Expert and he ranks among the top-100 in Notebooks category on Kaggle.
              </Text>
              
              <Text>
              Tanay has worked at NVIDIA India as an Applied Research Intern in Machine Learning, working on the NVIDIA's RAPIDS stack. 
              He has also recorded Instructional videos at NVIDIA on RAPIDS, PyTorch and Tensorflow for Internal training.
              </Text>

              <Text>
              He is currently dabbling in the world of Open Source and has made several Open Source contributions. An example would be his <a href="https://github.com/huggingface/transformers/pull/15531"><b className="text-primary lined-link">Add PoolFormer</b></a> Pull Request.
              </Text>
              {/* <ResumeButton href="resume.pdf" target="_blank"> Download resume </ResumeButton> */}
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
