import { Link } from "react-router-dom";

import styles from "./classes.module.css";
import { allOurTrainersData } from "../../data/data";

const AllOurTrainers = () => {
  return (
    <div className={`${styles["all-trainers"]} container sections-padding`}>
      <div className={styles["trainers-text"]}>
        <p className="paragraph">Our Trainers</p>
        <h2>We Train You to Gain</h2>
      </div>
      <div className={styles.classes}>
        {allOurTrainersData.map((ele) => {
          return (
            <div key={ele.id} data-aos="fade-right">
              <img src={ele.image} alt={ele.title} />
              <h3>{ele.title}</h3>
              <p>
                {ele.id === 1 && "A fitness professional with over 10 years of experience, specializing in Pilates, strength training, and rehabilitation techniques."}
                {ele.id === 2 && "A dedicated CrossFit instructor who emphasizes functional movements and community engagement to help clients reach their fitness potential."}
                {ele.id === 3 && "A certified nutritionist focused on developing personalized meal plans that enhance performance and support overall health goals."}
                {ele.id === 4 && "A passionate yoga therapist promoting mindfulness and holistic well-being through therapeutic yoga practices tailored to individual needs."}
                {ele.id === 5 && "An experienced boxing coach who customizes workout programs for both beginners and advanced athletes, enhancing skills and fitness levels."}
                {ele.id === 6 && "A former athlete specializing in dance and sports-specific training, aimed at improving agility, strength, and overall performance."}
              </p>
              <Link to={ele.ti}>Read More</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllOurTrainers;
