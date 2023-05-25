import React, { useEffect, useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import "./Testimonial.scss";

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, settesTimonials] = useState([])
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const query = '*[_type == "testimonial"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query)
      .then((data) => {
        settesTimonials(data);
    });

    client.fetch(brandsQuery)
    .then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    <>
      Testimonials
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'app__testimonial',
  'app__primarybg',
);
