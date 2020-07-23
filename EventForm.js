import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  StyleSheet,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { formatDateTime, saveEvent } from './api';

const styles = StyleSheet.create({
  fieldContainer: { marginTop: 20, marginBottom: 20, backgroundColor: '#fff' },
  text: { height: 40, margin: 0, marginRight: 7, paddingLeft: 10 },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    alignSelf: 'stretch',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  borderTop: { borderColor: '#edeeef', borderTopWidth: 0.5 },
});

const EventForm = (props) => {
  const [input, setInput] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState('');

  const handleAddPress = () => {
    // saveEvent({ title: input, date }).then(() => props.navigation.goBack());
    props.navigation.navigate('Add');
  };

  const handleChangeTitle = (value) => {
    setInput(value);
  };

  const handleDatePress = () => {
    setShowDatePicker(true);
  };

  const handleDatePicked = (date) => {
    setDate(date);
    handleDatePickerHide();
  };

  const handleDatePickerHide = () => {
    setShowDatePicker(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.fieldContainer}>
        <TextInput
          style={styles.text}
          placeholder="Event title"
          spellCheck={false}
          value={input}
          onChangeText={handleChangeTitle}
        />
        <TextInput
          style={[styles.text, styles.borderTop]}
          placeholder="Event date"
          spellCheck={false}
          value={formatDateTime(date.toString())}
          editable={!showDatePicker}
          onFocus={handleDatePress}
        />
        <DateTimePicker
          isVisible={showDatePicker}
          mode="datetime"
          onConfirm={handleDatePicked}
          onCancel={handleDatePickerHide}
        />
      </View>
      <TouchableHighlight onPress={handleAddPress} style={styles.button}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableHighlight>
    </View>
  );
};

export default EventForm;
