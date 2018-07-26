import React from 'react';

function getSkills(skills) {
    return skills.map(skill => {
        return <li>{skill}</li>
    })
}


const SkillList = (props) =>
<section className="skills-container">
    <h4>Skills</h4>
    <ul className="skills-list">
        {getSkills(props.skills)}
    </ul>
</section>

export default SkillList;