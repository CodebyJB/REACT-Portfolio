import propTypes from "prop-types";

function SkillItem({ skill }) {
  const { icon, name } = skill;

  const isImage = !icon.startsWith("fa");

  return (
    <div>
      <li>
        {isImage ? <img src={icon} alt={name} /> : <i className={icon}></i>}
      </li>
    </div>
  );
}

SkillItem.propTypes = {
  skill: propTypes.shape({
    icon: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
  }).isRequired,
};

export default SkillItem;
