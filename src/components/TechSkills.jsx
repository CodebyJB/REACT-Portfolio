import SideNav from "./SideNav";
import skillIcons from "../data/skillIcons.json";
import SkillItem from "./SkillItem";

function TechSkills() {
  return (
    <div className="vh-100">
      TechSkills
      <ul>
        {skillIcons.map((skill) => (
          <SkillItem skill={skill} key={skill.name} />
        ))}
      </ul>
      <SideNav />
    </div>
  );
}

export default TechSkills;
