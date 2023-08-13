import React from 'react';
import Banner from '@/components/Banner';
import Footer from '@/layouts/Footer';
import Faq from '@/components/Home/Faq'
import CourseProgram from '@/components/Home/CourseProgram'
import  CourseFees  from '@/components/Home/CourseFees';
import  CourseExpectations  from '@/components/Home/CourseExpectations'

const Home = () => {
  return (
    <>
  <Banner />
  <CourseProgram/>
  <CourseExpectations/>
  <CourseFees/>
  <Faq/>
  <Footer/>
  </>
  );
};

export default Home;
