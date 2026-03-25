import { motion } from 'framer-motion';
import { IconClockPlay } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { CommonCard } from '../components/CommonCard';

export const Experience = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'My proffesional career journey';
  // mockup experience data
  const experiences = [
    {
      id: 1,
      image: '/vite.svg',
      name: 'DATAECONOMY',
      position: 'Software Engineer',
      startDate: 'Jun 2024',
      endDate: 'Present',
      duration: '1 yr 8 mos',
      location: 'Hyderabad, Telangana, India',
    },
    {
      id: 2,
      image: '/vite.svg',
      name: 'Tata Consultancy Services',
      position: 'Associate System Engineer',
      startDate: 'Feb 2022',
      endDate: 'Jun 2024',
      duration: '2 yrs 5 mos',
      location: 'Bhubaneswar, Odisha, India',
    },
    {
      id: 3,
      image: '/vite.svg',
      name: 'JSpiders - Training & Development Center',
      position: 'Student (Internship)',
      startDate: 'Aug 2021',
      endDate: 'Jan 2022',
      duration: '6 mos',
      location: 'Bangalore Urban, Karnataka, India',
    },
    {
      id: 4,
      image: '/vite.svg',
      name: 'Foxlink',
      position: 'Plant Engineer',
      startDate: 'Jan 2021',
      endDate: 'Jul 2021',
      duration: '7 mos',
      location: 'Tirupati Urban, Andhra Pradesh, India',
    },
    {
      id: 5,
      image: '/vite.svg',
      name: 'Indo-MIM Pvt. Ltd.',
      position: 'Graduate Engineering Trainee',
      startDate: 'Aug 2020',
      endDate: 'Jan 2021',
      duration: '6 mos',
      location: 'Tirupati Urban, Andhra Pradesh, India',
    },
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconClockPlay />}
        label="Experience"
        description={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {experiences.map((experience) => (
          <CommonCard key={experience.id} {...experience} />
        ))}
      </div>
    </motion.section>
  );
};
