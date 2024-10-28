import about from "../../../assets/About1.svg";
import about1 from "../../../assets/about2.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const About = () => {
    const navigate = useNavigate();

    return (
        <div className="md:px-14 p-4 max-w-s mx-auto space-y-8" id="about">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }}
                    className="md:w-1/2"
                >
                    <img src={about} alt="" />
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }}
                    className="md:w-2/5"
                >
                    <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
                        Optimize{" "}
                        <span className="text-secondary">
                            operational processes.
                        </span>
                    </h2>
                    <p className="text-tartiary text-lg mb-7">
                        Our restaurant management platform optimizes the
                        ordering process, minimizes errors, and boosts business
                        efficiency.
                    </p>
                    <button
                        className="btnHome"
                        onClick={() => navigate("/signUp")}
                    >
                        Get Started
                    </button>
                </motion.div>
            </div>

            <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }}
                    className="md:w-1/2"
                >
                    <img src={about1} alt="" />
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }}
                    className="md:w-2/5"
                >
                    <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
                        Continuously improving to{" "}
                        <span className="text-secondary">
                            enhance customer experience.
                        </span>
                    </h2>
                    <p className="text-tartiary text-lg mb-7">
                        With a user-friendly interface and advanced features
                        like meal customization and real-time order tracking,
                        customers enjoy a convenient and efficient in-house
                        dining experience.
                    </p>
                    <button
                        className="btnHome"
                        onClick={() => navigate("/signUp")}
                    >
                        Get Started
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
