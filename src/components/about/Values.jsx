import { useNavigate } from "react-router";
import { valuesBoxes, valuesNumbers } from "../../data/data";

import styles from "./about.module.css";

const Values = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles["values-image"]}></div>
      <div className={`${styles["values-content"]} sections-padding`}>
        <div className={`${styles.values} container`}>
          <div>
            <p className="paragraph">Values</p>
            <h2>My Core Work Values</h2>
          </div>
          <button onClick={() => navigate("/contact")}>Book a Class</button>
        </div>
        {/* Boxes */}
        <div className={`${styles["values-boxes"]} container`}>
          {valuesBoxes.map((ele) => {
            return (
              <div key={ele?.id} data-aos="fade-right">
                <i className={ele?.icon}></i>
                <h3>{ele?.title}</h3>
                <p>
                  {ele.id === 1 && "Expert trainers guide you to achieve your fitness goals."}
                  {ele.id === 2 && "Personalized nutrition plans to support your journey."}
                  {ele.id === 3 && "Innovative programs tailored to our members' needs."}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={`${styles.numbers} container`}>
        {valuesNumbers.map((ele) => {
          return (
            <div key={ele?.id}>
              <h3>{ele?.number}</h3>
              <p>
                {ele.number === "10+" && "Over 10 successful fitness programs launched, reflecting our commitment to excellence and continuous improvement."}
                {ele.number === "500+" && "More than 500 satisfied members have transformed their lives through our dedicated support and personalized training."}
                {ele.number === "50+" && "We have partnered with over 50 local businesses to foster a supportive community focused on health and wellness."}
                {ele.number === "15k" && "A thriving community of 15,000+ fitness enthusiasts who inspire each other to achieve their personal goals."}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Values;
