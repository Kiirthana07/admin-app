//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { db, functions } from '../firebase';



class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users : [],
        }
    }

    
      componentDidMount () {
        db.collection('Users').onSnapshot(snapshot => {
            const users = snapshot.docs
                .map(user => {
                    return {
                        ...user?.data(),
                        key: user.id
                    }
                })
                this.setState({users: users});
        })
    }

    disableUser = (user) => {
        const disableUser = functions.httpsCallable('disableUser');
        disableUser(user.uid).then(function(result) {
            var message = result.data.text;
        console.log('Message: ', message);
            // ...
          }).catch(err=>{
              console.log('err, ', err);
          });
     }

    


    render(){
        return (
            <div className="MainDiv">
                <div class="jumbotron text-center bg-sky">
                    <h3>Users List</h3>
                </div>
                <div className="container" style={{width:'100%'}}>
                    <table id="userList" class="display table">
                        <thead class="thead-dark" style={{textAlign:'center'}}>
                            <tr style={{width:'100%'}}>
                                <th>User Type</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact</th>
                                <th>IC/Passport</th>
                                <th>Orphanage Name</th>
                                <th>Orphanage Home Licence</th>
                                <th>Account Holder Name</th>
                                <th>Status</th>
                                {/* <th>IC</th> */}
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.users.map ((user,i) => {
                            console.log("user",user)
                            return (
                                <tr key={i}>
                                <td>{user.type}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.contact}</td>
                                <td>
                                    <div className="table-img">
                                        <img src={user.ic.uri} />
                                    </div>
                                </td>
                                <td>{user.oName}</td>
                                <td>
                                    <div className="table-img">
                                        <img src={user.licence.uri} />
                                    </div>
                                </td>
                                <td>{user.accountHolder}</td>
                                <td><button className="btn btn-info" type='button'
                                 onClick={()=>this.disableUser(user)}
                                >Terminate
                               
                                </button></td>
                                </tr>
                             );
                        })} 
                        </tbody>
                    </table> 
                </div>

            </div>
        );
    }


}
// const Home = ()=>{
//     return(
//         <div className="home">
//             <h1>this is home</h1>
//         </div>
//     )
// }

export default Home;