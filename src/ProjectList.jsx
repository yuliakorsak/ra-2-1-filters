import Masonry from 'react-responsive-masonry'

export default function ProjectList({ projects }) {
  const projectsList = projects.map(project => <img src={project.img} alt="Portfolio image" />);
  return (
    <Masonry columnsCount={3} gutter="16px">
      {projectsList}
    </Masonry>
  );
}