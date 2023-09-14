import { Tabs, Progress } from "antd";

import "../style/Home.css";

import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import jsImg from "../assets/js.png";
import reactImg from "../assets/react.png";

const { TabPane } = Tabs;

const HomeP = () => {
  const skills = [
    {
      language: "HTML",
      percentage: 90,
      about: "HyperText Markup Language",
      aboutLang: "With HTML you can create your own Website.",
      aboutLang2: "HTML is easy to learn - You will enjoy it!",
      aboutImg: htmlImg,
    },
    {
      language: "CSS",
      percentage: 85,
      about: "Cascading Style Sheets",
      aboutLang: "CSS is the language we use to style an HTML document.",
      aboutLang2: "CSS describes how HTML elements should be displayed.",
      aboutImg: cssImg,
    },
    {
      language: "JS",
      percentage: 75,
      about: "JavaScript",
      aboutLang: "JavaScript is the world's most popular programming language.",
      aboutLang2: "JavaScript is the programming language of the Web.",
      aboutImg: jsImg,
    },
    {
      language: "React",
      percentage: 80,
      about: "ReactJS",
      aboutLang: "React is a JavaScript library for building user interfaces.",
      aboutLang2: "React is used to build single-page applications.",
      aboutImg: reactImg,
    },
  ];

  const getIconForLanguage = (language) => {
    switch (language) {
      case "HTML":
        return <i className="fa-brands fa-html5"></i>;
      case "CSS":
        return <i className="fa-brands fa-css3-alt"></i>;
      case "JS":
        return <i className="fa-brands fa-js"></i>;
      case "React":
        return <i className="fa-brands fa-react"></i>;
      default:
        return null;
    }
  };

  return (
    <main>
      <div className="container-2">
        <div className="home-box-header">
          <div className="home-box-header-left">
            <h1>
              About <span>- Xojaniyazov Mukam</span>
            </h1>
            <p>
              Hello. I am Mukam Xojaniyazov Full-stack developer. <br />
            </p>
            <p>I have been in this field since 2021.</p>
            <div className="about-mukam-me">
              <h3>
                <i className="fa-sharp fa-solid fa-child-reaching"></i>
                <span> | Age: 17</span>
              </h3>
              <h3>
                <i className="fa-solid fa-code"></i>
                <span> | Job: Programming </span>
              </h3>
              <h3>
                <i className="fa-regular fa-futbol"></i>
                <span> | Hobby: Football</span>
              </h3>
            </div>
          </div>
          <div className="home-box-header-right">
            <img
              src="https://t4.ftcdn.net/jpg/01/35/92/85/360_F_135928597_xU5EzKq6vpOeXPX5vsbI48zfVVkSRlrF.jpg"
              alt="me"
            />
          </div>
        </div>
        <div className="level-language">
          <Tabs defaultActiveKey="1">
            {skills.map((skill, index) => (
              <TabPane
                key={String(index + 1)}
                tab={
                  <div>
                    {getIconForLanguage(skill.language)}
                    <h3>{skill.language}</h3>
                  </div>
                }
              >
                <div className="progress-about-language">
                  <div className="progress-about-txt">
                    <h1>{skill.about}</h1>
                    <p>{skill.aboutLang}</p>
                    <p>{skill.aboutLang2}</p>
                  </div>
                  <div className="percentage-circle">
                    <Progress
                      type="circle"
                      percent={skill.percentage}
                      width={120}
                    />
                  </div>
                  <div className="progress-img">
                    <img src={skill.aboutImg} />
                  </div>
                </div>
              </TabPane>
            ))}
          </Tabs>
        </div>
      </div>
    </main>
  );
};

export default HomeP;
