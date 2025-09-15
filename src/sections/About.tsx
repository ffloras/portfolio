import aboutMeImg from "../assets/aboutMe.png";

const About = () => {
  return (
    <div className="about-container">
      <img src={aboutMeImg} width={300} alt="About Me Image" />
      <div className="about-text-container">
        <h1 className="about-name">Flora Su</h1>
        <p>
          I enjoying designing and creating, and I am always looking forward to
          taking on challenges and learning new skills. Projects I have worked
          on, or am currently working on, include web apps, mobile apps and
          browser games.
        </p>
      </div>
    </div>
  );
};

export default About;
