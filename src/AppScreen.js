import React from 'react';
import {View,Text,Image} from 'react-native';
import {Header,Button,Card,CardItem,Input,MessageInput} from './';
import axios from 'axios';
import {Toast} from 'native-base';
import Spinner from './Spinner';

export default class AppScreen extends React.Component {
  state = { from :'+1 (202) 796-7492',text :'+1 (202) 852-3908' , message :'',loading:false,result:false};

//getit method
getit(){
  const {text,from,message,loading} = this.state;

  const formData = new FormData();

  formData.append('to',text);
  formData.append('from',from);
  formData.append('message',message);

  //loading is true to show request is being done
  this.setState({loading:true});
  axios.post('https://app.apprehensiveness68.hasura-app.io/input',formData)
  .then(response =>
   this.setState({
    from :'+1 (202) 796-7492',
    text :'+1 (202) 852-3908',
    message :'',
    loading: false,result:true })

 )
 .catch(error =>
   this.setState({loading: false })
 );

while (this.state.loading)
{}

 //to show toast message
 if (this.state.result){

        Toast.show({
                    text: 'Message Sent Successfully',
                    buttonText: 'Okay',
                    duration: 3000,
                    type: "success"
                  });

 }
 else {
   Toast.show({
               text: 'Something Went Wrong',
               buttonText: 'Retry',
               duration: 3000,
               type: "warning"
             });
    }


}
//getit end

//try 2

// getit(){
//   var bodyFormData = new FormData();
//   bodyFormData.set('+1 (202) 796-7492', '+1 (202) 852-3908','hi');
//   axios({
//     method: 'post',
//     url: 'https://app.belladonna92.hasura-app.io/input',
//     data: bodyFormData,
//     config: { headers: {'Content-Type': 'multipart/form-data' }}
// })
//     .then(function (response) {
//         //handle success
//         console.log(response);
//     })
//     .catch(function (response) {
//         //handle error
//         console.log(response);
//     });
//   }


  //try 1



renderButton(){
if (this.state.loading){
  return <Spinner/>;
  }
return(
  <Button
  whenPressed={this.getit.bind(this)}>
   Send Message
  </Button>
);
}


  render() {
    const { viewStyle,labelStyle,containerStyle,labelStyle2} = styles;
    return(
      <View>
        <Header title='EasySms' />
        <Card>

        <CardItem>
          <Button
          whenPressed={this.props.logoutCallback}>
           Log Out
          </Button>
        </CardItem>

        <CardItem>
          <Text style={labelStyle}>Compose A Message:</Text>
        </CardItem>

        <CardItem style={containerStyle}>
         <Text style={labelStyle}>From </Text>
         <Text style={labelStyle2}> +1 (202) 796-7492</Text>
        </CardItem>

        <CardItem>
         <Input
          style={{ height: 20, width:100}}
          label='To'
          value={this.state.text}
          onChangeText={text => this.setState( {text})}
          />
        </CardItem>

        <CardItem>
        <Text style={labelStyle}>Message :</Text>
        </CardItem>

        <View style={{ height:250, width:350,backgroundColor: '#fff'}}>
        <MessageInput
        style={{ height: 250, width:300}}
        label='To'
        value={this.state.message}
        onChangeText={message => this.setState( {message})}
        />
        </View>

        <CardItem>
          {this.renderButton()}
        </CardItem>

        </Card>
      </View>
    );

  }
}

  const styles={
    viewStyle: {
      backgroundColor: '#f8f8f8',
      alignItems: 'center',
      justifyContent: 'center',
      height: 60,
      paddingTop: 15,
      elevation: 2,
      position: 'relative'
    },
    textStyle: {
      fontSize: 25,
      color: '#000'
    },
    labelStyle: {
      fontSize: 18,
      paddingLeft: 20,
      flex: 1
    },
    labelStyle2: {
      fontSize: 18,
      paddingLeft: 20,
      flex: 4

    },
    containerStyle: {
      height: 40,
      flex: 1,
      flexDirection: 'row',
      padding:10
       }

  };
