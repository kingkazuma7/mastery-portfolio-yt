import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip'

import { AppWrap, MotionWrap } from '../../wrapper';
import "./Skills.scss";
import { urlFor, client } from '../../client'; // リクエスト

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setskills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data.sort((a, b) => a.year - b.year));
    });

    client.fetch(skillsQuery).then((data) => {
      setskills(data);
    });
  }, []);

  if (!experiences || !skills) {
    return null;
  }

  return (
    <>
      {/* <h2 className="head-text">スキル & 経験</h2>
      <a className="my-anchor-element">◕‿‿◕</a>
      <a className="my-anchor-element">◕‿‿◕</a>
      <a className="my-anchor-element">◕‿‿◕</a>
      <Tooltip anchorSelect=".my-anchor-element" place="top">
        Hello world!
      </Tooltip> */}

      <div className="app__skills-container">
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1]}}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience._id}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works"
                key={experience._id}
              >
                {experience.works
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((work) => (
                  <React.Fragment key={work.name}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">◾️{work.company}</p>
                      <p className="p-text">{work.desc}</p>
                    <Tooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      <span>{work.desc}</span>
                    </Tooltip>
                    </motion.div>
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
