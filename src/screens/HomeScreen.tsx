import React, {FC, useEffect, useState} from "react";
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
} from "react-native";
import {getProduct} from "../store/actions/productAction";
import {useSelector, useDispatch} from "react-redux";

import { FontAwesome } from '@expo/vector-icons';
import {AppState} from "../store";
import CategoriesSlider from "../components/CategoriesSlider";

const HomeScreen: FC = ({navigation}: any) => {

    const [categories, setCategories] = useState('')

    const {data, loading, error} = useSelector((state:AppState) => state?.products)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProduct())
    },[])

    const renderItem = ({item}:any) => {
        return(
            <View style={styles.productContainer}>
                { categories == '' ?
                    <View>
                        <View style={styles.imageBorder}>
                            <Image source={{uri: item.avatar}} style={styles.image} resizeMode={'stretch'}  />
                        </View>
                        <View style={styles.informationBorder}>
                            <View>
                                <Text style={styles.text}>{item.name}</Text>
                                <Text style={styles.text}>{item.price} $</Text>
                            </View>
                            <View style={{alignSelf:'center'}}>
                                <TouchableOpacity onPress={() => (navigation.navigate('DetailScreen', {item: item}))}>
                                    <FontAwesome name="pencil-square" size={24} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    :
                    categories == item.category ?
                        <View>
                            <View style={styles.imageBorder}>
                                <Image source={{uri: item.avatar}} style={styles.image} resizeMode={'stretch'}  />
                            </View>
                            <View style={styles.informationBorder}>
                                <View>
                                    <Text style={styles.text}>{item.name}</Text>
                                    <Text style={styles.text}>{item.price} $</Text>
                                </View>
                                <View style={{alignSelf:'center'}}>
                                    <TouchableOpacity onPress={() => (navigation.navigate('DetailScreen', {item: item}))}>
                                        <FontAwesome name="pencil-square" size={24} color="white" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View> :
                        <View>

                        </View>
                }
            </View>
        );
    }

    return(
        <SafeAreaView style={styles.container}>
            <CategoriesSlider
                showAll={true}
                changeCategories={setCategories}
                updateCategories={setCategories}
                color={categories}
            />
            <View style={styles.productView}>
                <FlatList
                    numColumns={2}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    extraData={categories}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProductScreen')}>
                <FontAwesome name="plus" size={40} color="black" />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    productView: {
        flex: 1,
    },
    productContainer: {
        backgroundColor:'#FFF',
        flex:1,
        borderRadius: 10,
        width: 200,
        marginHorizontal: 5,
    },
    button: {
        right: 24,
        bottom: 23,
        zIndex: 10,
        position:'absolute',
        borderRadius: 20,
        backgroundColor:'#FFF'
    },
    text: {
        color: '#fff',
        fontWeight: '700',
        fontSize:12
    },
    imageBorder: {
        justifyContent:'center',
        alignSelf:'center',
        height:120,
        width:100
    },
    image:{
        height:100,
        width:100,
        backgroundColor:'#fff'
    },
    informationBorder: {
        backgroundColor: '#000000',
        borderRadius: 10,
        paddingHorizontal: 5,
        flexDirection:'row',
        justifyContent:'space-between'
    }
})
