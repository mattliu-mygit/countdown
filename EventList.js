import React, { useState, useEffect } from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import EventCard from './EventCard';
import ActionButton from 'react-native-action-button';
import { getEvents } from './api';

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F3F3F3',
  },
});

class EventList extends React.Component {
  state = {
    events: [],
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        events: this.state.events.map((evt) => ({
          ...evt,
          timer: Date.now(),
        })),
      });
    }, 1000);

    // getEvents().then((events) => events.map((e) => this.setState({ events })));
    const events = require('./db.json').events.map((e) => ({
      ...e,
      date: new Date(e.date),
    }));
    this.setState({ events });
  }

  handleAddEvent = () => {
    this.props.navigation.navigate('Add');
  };

  render() {
    return (
      <>
        <FlatList
          key="flatlist"
          data={this.state.events}
          style={styles.list}
          keyExtractor={(item) => item.id}
          renderItem={({ item, separators }) => {
            console.log(this.state.events);
            return <EventCard key={item.id} event={item} />;
          }}
        />
        <ActionButton
          key="fab"
          onPress={this.handleAddEvent}
          buttonColor="rgba(231, 76, 60, 1)"
        />
      </>
    );
  }
}
export default EventList;
