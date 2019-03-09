import React from 'react';
import { ScrollView, StyleSheet, Text, Button } from 'react-native';
import {connect} from 'react-redux'
import {createHabit} from '../store/habits'

class CreateHabitScreen extends React.Component {
  constructor(){
      super()
      this.state = {
          habitName: '',
          color: ''
      }
  }
  
static navigationOptions = {
    title: 'CreateHabit',
  };

handleSubmit(){
    
}

  render() {
    return (
      <ScrollView style={styles.container}>
       
      </ScrollView>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
    newHabit: (name, color) => {
        dispatch(createHabit(name, color))
    }
})

export default connect(null, mapDispatchToProps)(CreateHabitScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
