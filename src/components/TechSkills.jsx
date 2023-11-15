import SkillItem from "./SkillItem";

import skillIcons from "../data/skillIcons.json";

function TechSkills() {
  return (
    <div className="container-md m-auto my-5">
      <div className="d-flex pt-5 border-bottom">
        <h2 className="fs-1">Meine Werkzeuge und Technologien</h2>
        {/* <h2 className="fs-1">Mein Tech-Stack</h2> */}
        <span className="dots">...</span>
      </div>
      <ul
        className="d-flex flex-wrap  list-unstyled justify-content-evenly gap-3 py-5"
        data-aos="fade-right"
      >
        {skillIcons.map((skill) => (
          <SkillItem skill={skill} key={skill.name} />
        ))}
      </ul>
    </div>
  );
}

export default TechSkills;
