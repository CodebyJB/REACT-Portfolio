function SkillItem({ skill }) {
  const { icon, name } = skill;

  const isSvg = icon.endsWith("svg");

  return (
    <li className="skill_item text-center ">
      {isSvg ? (
        <img src={icon} alt={name} className="mx-auto" />
      ) : (
        <i className={icon}></i>
      )}
      <p className="pt-3 fs-6">{name}</p>
    </li>
  );
}

export default SkillItem;
