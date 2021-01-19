import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  modal__backdrop,
  filter__container,
  display__container,
  display__title,
  sort__container,
  button__container,
  display__button,
  display__button__active,
  button__image,
} from "./options.module.css";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const Options = ({ showModal, isGridActive, setIsGridActive }) => {
  useEffect(() => {
    console.log(showModal);
  }, [showModal]);
  return (
    <motion.div className={filter__container}>
      <div className={display__container}>
        <h3 className={display__title}>Display Options</h3>
        <div className={button__container}>
          <button
            className={
              isGridActive
                ? `${display__button} ${display__button__active}`
                : display__button
            }
            onClick={() => setIsGridActive(!isGridActive)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M6 6H0V0h6v6zm9-6H9v6h6V0zm9 0h-6v6h6V0zM6 9H0v6h6V9zm9 0H9v6h6V9zm9 0h-6v6h6V9zM6 18H0v6h6v-6zm9 0H9v6h6v-6zm9 0h-6v6h6v-6z" />
            </svg>
          </button>
          <button
            className={
              !isGridActive
                ? `${display__button} ${display__button__active}`
                : display__button
            }
            onClick={() => setIsGridActive(!isGridActive)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                className={button__image}
                d="M24 3H0V1h24v2zm0 3H0v2h24V6zm0 5H0v2h24v-2zm0 5H0v2h24v-2zm0 5H0v2h24v-2z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={sort__container}>
        <h3 className={display__title}>Sort by</h3>
      </div>
    </motion.div>
  );
};

export default Options;
