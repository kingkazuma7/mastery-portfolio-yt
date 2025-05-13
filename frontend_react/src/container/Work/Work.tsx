import React, { useState, useEffect } from 'react';
import { AiOutlineLink, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Work.scss';
import { urlFor, client } from '../../client'; // リクエスト
import DetailModal from '../../components/DetailModal/DetailModal';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('全て');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedWorkDetails, setSelectedWorkDetails] = useState(null);

  const handleCardClick = async (workItem, event) => {
    // aタグのクリックの場合はモーダルを開かない
    if (event.target.tagName.toLowerCase() === 'a') {
      return;
    }

    if (workItem.details && workItem.details !== '') {
      setSelectedWorkDetails({
        details: workItem.details,
        previewImages: workItem.previewImages,
      });
      openModal();
    } else {
      console.log('案件の説明が空です');
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const query = '*[_type == "works"]';
      try {
        const query = '*[_type == "works"]';
        const data = await client.fetch(query);
        // console.log('Fetched data:', data);
        const sortedData = [...data].sort((a, b) => {
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return 0;
        });
        setWorks(sortedData); // 下の作品リスト更新: 保存
        setFilterWork(sortedData); // 表示する作品リストを更新 : 画面の表示
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === '全て') {
        const publishedWorks = works.filter(
          (work) => !work._id.startsWith('drafts.'),
        );
        const sortedWorks = [...publishedWorks].sort((a, b) => {
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return 0;
        });
        setFilterWork(sortedWorks);
      } else {
        const publishedWorks = works.filter(
          (work) => !work._id.startsWith('drafts.'),
        );
        const filteredWorks = publishedWorks.filter((work) =>
          work.tags.includes(item),
        );
        const sortedWorks = [...filteredWorks].sort((a, b) => {
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return 0;
        });
        setFilterWork(sortedWorks);
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
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? 'item-active' : ''
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <DetailModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Work Details"
        selectedWorkDetails={selectedWorkDetails}
        previewImages={selectedWorkDetails?.previewImages}
      />

      <div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div
            className="app__work-item app__flex"
            key={index}
            onClick={(e) => handleCardClick(work, e)}
          >
            <div className="app__work-img app__flex">
              <img
                src={urlFor(work.imgUrl)}
                alt={work.name}
                className={work.blurEffect ? 'blur-effect' : ''}
              />
              {work.isNew && !modalIsOpen && (
                <div className="app__work-new-tag">NEW</div>
              )}
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text">{work.year ? `${work.year}〜` : ''}</p>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
              <div className="app__work-pj">
                {work.projectLink && (
                  <a
                    className="app__work-pjLink"
                    target="_blank"
                    href={work.projectLink}
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <AiOutlineLink />
                    ページ
                  </a>
                )}
                {work.codeLink && (
                  <a
                    className="app__work-pjLink"
                    target="_blank"
                    href={work.codeLink}
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <AiFillGithub />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);
