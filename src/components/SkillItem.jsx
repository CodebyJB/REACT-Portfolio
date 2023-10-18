function SkillItem({ skill }) {
  const { icon, name } = skill;

  const isSvg = icon.endsWith("svg");

  return (
    <li>
      {isSvg ? (
        <img src={icon} alt={name} className="svg" />
      ) : (
        <i className={icon}></i>
      )}
      <span>{name}</span>
    </li>
  );
}

export default SkillItem;

