import SkillItem from "./SkillItem";

import skillIcons from "../data/skillIcons.json";

function TechSkills() {
  return (
    <div className="container-md m-auto my-5 techskills">
      <div className="pt-5 border-bottom">
        <h2>
          Meine Werkzeuge und Technologien<span className="dots">...</span>
        </h2>
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
