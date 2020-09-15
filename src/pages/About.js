import React from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from '../components/Firebase';
import { firestore } from 'firebase';
import User from '../components/User';

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            feedbacks : [],
        }
    }

    componentDidMount () {
        
        firestore().collection('Feedback')
        .onSnapshot(snapshot => {
            const feedbacks = snapshot.docs
                .map(feedback => {
                    return {
                        ...feedback?.data(),
                        key: feedback.id
                    }
                })
                this.setState({feedbacks: feedbacks});
        })
    }


    render(){
        return (
            <div className="MainDiv">
                <div class="jumbotron text-center bg-sky">
                    <h3>Users Feedback</h3>
                </div>
                <div className="container">
                    <table id="userList" class="display table">
                        <thead class="thead-dark">
                            <tr>
                                <th>Email</th>
                                <th>Feedback</th>

                                {/* <th>IC</th> */}
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.feedbacks.map (feedback => {
                            return (
                                <tr>
                                <td>{feedback.email}</td>
                                <td>{feedback.feedback}</td>
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

export default About;