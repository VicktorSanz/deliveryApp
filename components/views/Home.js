import React, { useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";
import { icons, images, SIZES, COLORS, FONTS } from '../../constants';
import { restaurantsData } from '../../adapters'
import { gpsUtils } from '../../utils'

const Home = () => {
    let categoryData = restaurantsData.getCategoryData()
    let location = gpsUtils.getUserCurrentLocation()
    const [currentLocation, setCurrentLocation] = useState(location)
    const [categories, setCategories] = useState(categoryData)
    const [selectedCategory, setselectedCategory] = useState(null)

    const onSelectCategory = (category) => {
        setselectedCategory(category)
    }


    const headerIcon = (icon, paddingLeft, paddingRight) => {
        return (
            <TouchableOpacity style={{
                width: 50,
                paddingLeft: paddingLeft,
                paddingRight: paddingRight,
                justifyContent: 'center'
            }}>
                <Image
                    source={icon}
                    resizeMode='contain'
                    style={{
                        width: 30,
                        height: 30
                    }}
                />
            </TouchableOpacity>
        )
    }

    const renderHeader = () => {
        return (
            <View style={{ flexDirection: 'row', height: 50, paddingTop: 10 }}>
                {headerIcon(icons.nearby, SIZES.padding * 2, 0)}
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '70%',
                            height: '100%',
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>
                            {currentLocation.streetName}
                        </Text>
                    </View>
                </View>
                {headerIcon(icons.basket, 0, SIZES.padding * 2)}
            </View>
        )
    }

    const renderMainCategories = () => {
        console.log(selectedCategory?.id)
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        primary: COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray,
                        }}>
                        <Image
                            source={item.icon}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                            }}
                        />
                    </View>
                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                            ...FONTS.body5
                        }}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ padding: SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h1 }}>Categorias</Text>
                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View >
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Home;