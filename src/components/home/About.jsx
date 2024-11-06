import styles from "./home.module.css";

import photo1 from "../../assets/home5.png";
import photo2 from "../../assets/home6.png";
import photo3 from "../../assets/home7.jpg";
import { useNavigate } from "react-router";

const FourthSection = () => {
  const navigate = useNavigate();

  return (
    <div className={`${styles.about} container sections-padding`}>
      <div
        className={styles.text}
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
        <p className="paragraph">About Us</p>
        <h2>
          Elevate Your Fitness,
          <br />
          Transform Your Life
        </h2>
        <p>
          At Energifit, we believe that fitness is not just a hobby but a way of life. Our state-of-the-art facilities and supportive community empower you to achieve your fitness goals.
        </p>
        <div className={styles.text_one}>
          <div>
            <h3>Stay Motivated</h3>
            <p>
              Join our energetic classes and find the motivation you need to push through your limits and reach new heights.
            </p>
          </div>
          <img src={photo1} alt="Motivation" />
        </div>
        <div className={styles.text_two}>
          <img src={photo2} alt="Inspiration" />
          <div>
            <h3>Inspire Yourself</h3>
            <p>Surround yourself with like-minded individuals who inspire you to keep moving forward.</p>
          </div>
        </div>
      </div>
      <div
        className={styles["img-container"]}
        data-aos="fade-up"
        data-aos-duration="3000">
        <img src={photo3} alt="Man Exercising" />
        <button onClick={() => navigate("/schedule")}>Join Us Today</button>
      </div>
    </div>
  );
};

export default FourthSection;
