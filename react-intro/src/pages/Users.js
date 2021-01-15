import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import users from '../dummyData/users';
const Users = (props) => {
    console.log('Users',props);
    const redirect = (id) => {
        props.history.push('/users/'+id)
    };

    return (
        <React.Fragment>
            <Header title="Users" />
            <ul>
                {
                    users.map( user => {
                        return (
                            <li onClick={()=>redirect(user.id)} key={user.id}>{user.name}</li>
                        )
                    })
                }
            </ul>
            <Footer />
        </React.Fragment>
    );

};

export default Users;