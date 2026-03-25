import { IconLeaf } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { SectionMotion } from '../common/motion/Section';

export const About = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'A short story of me';
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconLeaf />}
        label="About"
        description={sectionDescription}
      />
      <div className="flex gap-2 text-md lg:text-xl font-medium">
        <h2 className="font-semibold">Hello, I'm Upendra</h2>
        <div className="ml-1 animate-waving-hand">👋</div>
      </div>
      <p>
        I'm a Software Engineer with 4 years of experience building scalable
        frontend applications. My expertise includes React.js, TypeScript,
        Redux Toolkit, GraphQL, REST APIs, and modern tooling like Vite and
        Module Federation. I enjoy designing maintainable code, collaborating
        across teams, and delivering performant user experiences.
      </p>
      <p>
        I have experience working in hybrid environments and across full
        project lifecycles—from prototyping and frontend architecture to
        deployment and observability. I'm always open to learning new
        technologies and contributing to impactful projects.
      </p>
    </motion.section>
  );
};
