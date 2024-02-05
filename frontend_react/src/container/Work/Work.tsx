import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Modal from 'react-modal';

import { AppWrap, MotionWrap } from '../../wrapper';
import "./Work.scss";
import { urlFor, client } from '../../client'; // リクエスト



const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('全て');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  }
  const closeModal = () => {
    setModalIsOpen(false);
  }
  const handleWorkModal = () => {
    console.log('handleWorkModal');
    openModal();
  }

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === '全て') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">ギャラリー集</h2>

      <div className="app__work-filter">
        {['仕事', '個人開発', '全て'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <button onClick={handleWorkModal}>モーダル</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="my modal"
      >
        <button onClick={closeModal}>close</button>
      </Modal>

      <div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={urlFor(work.imgUrl)} alt={work.name} className={work.blurEffect ? 'blur-effect' : ''} />
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text">{work.year ? `${work.year}〜` : ''}</p>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
              <div className="app__work-pj">
                {work.projectLink && <a className='app__work-pjLink' target='_blank' href={work.projectLink} rel="noreferrer"><AiFillEye />Image</a>}
                {work.codeLink && <a className='app__work-pjLink' target='_blank' href={work.codeLink} rel="noreferrer"><AiFillGithub />GitHub</a>}
              </div>
            </div>
          </div>
        ))}
      </div>

    </>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);
