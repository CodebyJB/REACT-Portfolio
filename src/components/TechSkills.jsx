import skillIcons from "../data/skillIcons.json";
import SkillItem from "./SkillItem";

function TechSkills() {
  return (
    <div className="container-md m-auto my-5">
      <div className="d-flex pt-5">
        <h2 className="fs-1">Mein Tech-Stack</h2>
        <span className="dots">...</span>
      </div>
      {/* <div className="d-flex">
        <h2>Technologien im Einsatz</h2>
        <span className="dots1">...</span>
      </div> */}
      <ul className="d-flex flex-wrap  list-unstyled justify-content-evenly gap-3 py-5">
        {skillIcons.map((skill) => (
          <SkillItem skill={skill} key={skill.name} />
        ))}
      </ul>
    </div>
  );
}

export default TechSkills;
