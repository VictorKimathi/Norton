import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { COLORS, SIZES } from "../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import pages from './page.style'
import uidata from "../constants/uidata";
import HomeHeader from "../components/HomeHeader";
import CategoryList from "../components/CategoryList";

import { useState } from "react";
import ChoicesList from "../components/ChoicesList";
import Heading from "../components/Heading";
import NearByRestaurants from "../components/NearbyResturant";
const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState(null);

console.log(selectedChoice);



  return (
    <SafeAreaView>
      <View style={pages.viewOne}>
        <View style={pages.viewTwo}>
          <HomeHeader />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ borderBottomEndRadius: 30, borderBottomStartRadius: 30 }}>
            <CategoryList
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedSection={selectedSection}
              setSelectedSection={setSelectedSection}
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
            />
            <ChoicesList selectedChoice={selectedChoice} setSelectedSection={setSelectedSection}/>
<View>
  <Heading heading={'Nearby resturants'}/>
  <NearByRestaurants />
</View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({

});
