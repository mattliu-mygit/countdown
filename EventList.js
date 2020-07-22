import React from 'react';
import { Text, FlatList } from 'react-native';

const EventList = () => {
  return (
    <>
      <FlatList
        data={[{ name: 'a' }, { name: 'b' }]}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </>
  );
};
export default EventList;
