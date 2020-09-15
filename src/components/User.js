import React from 'react';
// import firebase from '../components/Firebase';
// import { storage } from 'firebase';

const User = ({ user }) => {

    // const [uri, setUri] = useState()
    // useEffect(() => {
    //     storage()
    //         .ref(ic.img)
    //         .getDownloadURL().then(url => {
    //             setUri(url)
    //         })
    // });

    return (
        <div className="container">
            <table id="userList" class="display table">
                <thead class="thead-dark">
                    <tr>
                        <th>User Type</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        {/* <th>IC</th> */}
                    </tr>
                </thead>
                <tbody>
                    {/* {this.state.users.map (data => {
                            return ( */}
                    <tr>
                        <td>{user.type}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.contact}</td>
                    </tr>
                    {/*      );
                        })} */}
                </tbody>
            </table>
        </div>
    )

};


export default User;




