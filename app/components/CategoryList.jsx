import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import uidata from '../constants/uidata';
import { COLORS, SHADOWS } from '../constants/theme';
import CategoryItem from './CategoryItem';

const CategoryList = ({ setSelectedCategory, setSelectedSection, setSelectedValue }) => {
  const [selected, setSelected] = useState(null);
  
  const categories = [1, 2, 3, 4, 5];
  const handleSelectedCategory = (item) => {
    if (selected === item.value) {
      setSelectedCategory(null);
      setSelected(null);
      setSelectedSection(null);
      setSelectedValue(null);
    } else {
      setSelectedCategory(item._id);
      setSelected(item.value);
      setSelectedSection('category');
      setSelectedValue(item.title);
    }
  };
  return (
    <FlatList
      data={uidata.categories}
      showsHorizontalScrollIndicator={false}
      horizontal
      style={{ marginTop: 5 }}
      keyExtractor={(item) => item._id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => handleSelectedCategory(item)}
        >
          <CategoryItem selected={selected} category={item} />
        </TouchableOpacity>
      )}
    />
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  // Define any additional styles here if necessary
});
