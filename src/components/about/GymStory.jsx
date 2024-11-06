import { gymStoryData } from "../../data/data";

import styles from "./about.module.css";

const GymStory = () => {
  return (
    <div
      className={`${styles["gym-story"]} container sections-padding`}
      data-aos="fade-right">
      <div className={styles["section-one"]}>
        {gymStoryData.slice(0, 2).map((ele) => {
          return (
            <div key={ele.id}>
              {ele?.welcome && <p>Welcome</p>}
              <h2>{ele.title}</h2>
              <p>
                Our journey began with a simple mission: to empower individuals to embrace fitness and transform their lives. From day one, we have focused on creating an inclusive and motivating environment where everyone can thrive.

              </p>
              {ele?.image && <img src={ele.image} alt="" />}
            </div>
          );
        })}
      </div>

      <div className={styles["section-two"]}>
        {gymStoryData.slice(2).map((ele) => {
          return (
            <div key={ele.id}>
              <h2>{ele.title}</h2>
              <p>
                Over the years, we've built a community of passionate fitness enthusiasts and expert trainers who share a common goal: to inspire and support each other on the path to wellness. Together, we celebrate every achievement, big or small, and foster an atmosphere of positivity and growth.

              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GymStory;
