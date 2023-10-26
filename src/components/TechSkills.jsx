import SideNav from "./SideNav";
import skillIcons from "../data/skillIcons.json";
import SkillItem from "./SkillItem";

function TechSkills() {
  return (
    <div className="vh-100">
      TechSkills
      <div className="d-flex">
        <h2>Mein Tech-Stack</h2>
        <span className="dots">...</span>
      </div>
      <div className="d-flex">
        <h2>Technologien im Einsatz</h2>
        <span className="dots1">...</span>
      </div>
      <ul className="d-flex flex-wrap  list-unstyled">
        {skillIcons.map((skill) => (
          <SkillItem skill={skill} key={skill.name} />
        ))}
      </ul>
      <SideNav />
    </div>
  );
}

export default TechSkills;
