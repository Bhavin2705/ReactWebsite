import styles from "./home.module.css";

const ourPlansData = [
  {
    id: 1,
    title: "Beginner's Package",
    offer: "Start Your Fitness Journey",
    description: "Perfect for those new to fitness, this plan introduces you to our essential classes.",
    icon: "fas fa-dumbbell",
    facilities: [
      "1 Day Free Trial",
      "Introductory Fitness Assessment",
      "Access to Basic Classes",
      "20 minutes of heart-pumping spin",
      "20 minutes of strength training",
    ],
  },
  {
    id: 2,
    title: "Intermediate Package",
    offer: "Take Your Skills Further",
    description: "Designed for those with some experience, this plan offers more challenging workouts.",
    icon: "fas fa-running",
    facilities: [
      "1 Day Free Trial",
      "Personalized Workout Plan",
      "Access to Intermediate Classes",
      "20 minutes of heart-pumping spin",
      "20 minutes of strength training",
      "20 minutes of invigorating yoga",
    ],
  },
  {
    id: 3,
    title: "Advanced Package",
    offer: "Push Your Limits",
    description: "For fitness enthusiasts looking to maximize their performance and reach new heights.",
    icon: "fas fa-trophy",
    facilities: [
      "1 Day Free Trial",
      "Customized Nutrition Plan",
      "Access to Advanced Classes",
      "20 minutes of heart-pumping spin",
      "30 minutes of strength training",
      "30 minutes of invigorating yoga",
      "1-on-1 Coaching Sessions",
    ],
  },
];

const OurPlans = () => {
  return (
    <div className={`${styles["our-plans"]} container sections-padding`}>
      <div>
        <p className="paragraph">Our Plans</p>
        <h2>Choose the Right Program for You</h2>
      </div>
      <div className={styles.plans}>
        {ourPlansData.map((ele) => {
          return (
            <div key={ele.id} className={styles.plan} data-aos="flip-up">
              <h3>
                <i className={ele.icon}></i>
                {ele.title}
              </h3>
              <div>
                <h4>{ele.offer}</h4>
                <p>{ele.description}</p>
              </div>
              <ul>
                {ele.facilities.map((facility, index) => (
                  <li key={index}>{facility}</li>
                ))}
              </ul>
              <button>Get Started</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurPlans;
