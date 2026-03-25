import { motion } from 'framer-motion';
import {
  IconCodeCircle,
  IconBrandReact,
} from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { SkillCard } from '../components/SkillCard';

export const Skills = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'List of my skills';
  // mockup skills data
  const skills = [
    { label: 'React.js', icon: <IconBrandReact /> },
    { label: 'JavaScript', icon: <IconCodeCircle /> },
    { label: 'TypeScript', icon: <IconCodeCircle /> },
    { label: 'Redux Toolkit', icon: <IconCodeCircle /> },
    { label: 'GraphQL', icon: <IconCodeCircle /> },
    { label: 'REST APIs', icon: <IconCodeCircle /> },
    { label: 'OKTA', icon: <IconCodeCircle /> },
    { label: 'Microservices', icon: <IconCodeCircle /> },
    { label: 'Module Federation', icon: <IconCodeCircle /> },
    { label: 'Vite', icon: <IconCodeCircle /> },
    { label: 'Firebase', icon: <IconCodeCircle /> },
    { label: 'Git', icon: <IconCodeCircle /> },
    { label: 'Jira', icon: <IconCodeCircle /> },
    { label: 'Jenkins', icon: <IconCodeCircle /> },
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconCodeCircle />}
        label="Skills"
        description={sectionDescription}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
        {skills.map((skill) => (
          <SkillCard key={skill.label} icon={skill.icon} label={skill.label} />
        ))}
      </div>
    </motion.section>
  );
};
