import React, {Component} from 'react';
import SkillList from './SkillList';


class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            amIHidden: true
        }
        this.showSkill = this.showSkill.bind(this);
    }
        showSkill(event) {
            this.setState({amIHidden: !this.state.amIHidden})
        }

render() {
    return (
<li>
    <div className="profile-card" onClick={this.showSkill}>
    <header className="profile-header">
            <img src={this.props.data.image}/>
            <h2>{this.props.data.name}</h2>
        </header>
        <section className={this.state.amIHidden? "skills-container hidden":"skills-container"}>
        <SkillList skills={this.props.data.skills}/>
        </section>
        </div>
</li>
)}
}

export default Profile;