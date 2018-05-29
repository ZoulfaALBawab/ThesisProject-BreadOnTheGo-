import React from 'react';
import Image from './Image.jsx'


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user:[]
    }
  }

  componentDidMount() {
    var that = this;
    var user = this.props.userName
    console.log(user);
    $.ajax({
      url: '/Profile',
      method: 'GET',
    })
    .done (function (data) {
      console.log(data)
      that.setState({
        user: data
      });
    })
    .fail(function( jqXHR, textStatus ) {
      alert( "No user Found");
    });
  }

  render(){
  	var user = this.state.user;
  	var userName = user.userName;
  	var imgUrl=user.imgUrl
  	var email=user.email
    var password=user.password
    var image=user.image
  	return(
 		<div className="row">
        <div className="col-md-3" >
         <Image image={image}/>
        
        <div className='col-md-9'>
          <h1> {userName} Profile</h1>
          <p>{email}</p>

          </div>
        </div>
  		</div>
  		
  	)
  }

}
export default Profile;