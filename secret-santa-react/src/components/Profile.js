import React,{Component} from 'react';

const Profile= () => {
    return (
        <div>
            <h1>My profile</h1>
            <div className="contentHome">
                <div className='editProfile'>
                    <a href="/editprofile">Edit my profile</a>
                </div>
                <div className='flexProfile'>
                    <div className='groups'>
                        <span>
                            Groupe 1 - <a href="">voir</a>
                        </span>
                        <span>
                            Groupe 2 - <a href="">voir</a>
                        </span>
                        <span>
                            Groupe 3 - <a href="">voir</a>
                        </span>
                    </div>
                    <div className='profile'>
                        <div className='userInfos'>
                            <div class="userName">
                                <span>Nom</span> Prénom
                            </div>
                            <div class="userEmail">Email</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;
