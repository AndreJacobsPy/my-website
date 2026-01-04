import styles from "./index.module.css";

const Introduction: React.FC = () => {
  return (
    <>
      <h1 className="text-8xl">Andre Jacobs</h1>
      <h2 className="text-4xl text-blue-500">Software Engineer</h2>

      <p className="my-16 text-gray-400">
        Developer based in Phoenix, AZ. I specialize in data driven web and
        mobile applications.
      </p>

      <button className={styles.contactButton}>Get In Touch</button>
    </>
  );
};

export default Introduction;
