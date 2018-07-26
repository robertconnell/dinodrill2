import React from 'react';
import SkillList from './SkillList';
import Profile from './Profile';

function returnProfiles(profiles) {
    return profiles.map(profile => {
        return <Profile data={profile}/>
    })
}

const Profiles = (props) =>
    {return (
        <section>
        {returnProfiles(props.profiles)}
        </section>)
    }



// const JobList = (props) =>
// {console.log(props.jobArray)
//     return (<section>
// <h2>Job Listings</h2>
// <ul id="job-listings">
//     {returnJobs(props.jobArray)}
// </ul>
// </section>)}

export default Profiles;