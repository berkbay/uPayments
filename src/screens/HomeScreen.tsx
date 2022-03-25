import React, {FC, useEffect, useState} from "react";
import {Text, View, SafeAreaView, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView} from "react-native";
import {getProduct} from "../store/actions/productAction";
import {useSelector, useDispatch} from "react-redux";

import { FontAwesome } from '@expo/vector-icons';
import {AppState} from "../store";
import CategoriesSlider from "../components/CategoriesSlider";

const HomeScreen: FC = ({navigation}: any) => {

    const [categories, setCategories] = useState('')
    console.log(categories)

    const {data, loading, error} = useSelector((state:AppState) => state?.products)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProduct())
    },[])

    const renderItem = ({item}:any) => {
        return(
            <View style={styles.productContainer}>
                <View style={{alignSelf:'center'}}>
                    <Image source={{uri: item.avatar}} style={{height:200, width:150}} />
                </View>
                <View style={{ backgroundColor: '#000000', borderRadius: 10, paddingHorizontal: 5, flexDirection:'row', justifyContent:'space-between'}}>
                    <View>
                        <Text style={{color: '#fff', fontWeight: '700', fontSize:12}}>{item.name}</Text>
                        <Text style={{color: '#fff',fontWeight: '700',fontSize:12}}>{item.price} $</Text>
                    </View>
                    <View style={{alignSelf:'center'}}>
                        <TouchableOpacity onPress={() => (navigation.navigate('DetailScreen', {item: item}))}>
                            <FontAwesome name="pencil-square" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    return(
        <SafeAreaView style={styles.container}>
            <CategoriesSlider updateCategories={setCategories} color={categories}/>
            <View style={styles.productView}>
                <FlatList
                    numColumns={2}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
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
        marginHorizontal: 10,
    },
    productContainer: {
        backgroundColor:'#FFF',
        flex:1,
        borderRadius: 10,
        width: '50%',
        marginVertical: 10,
        marginHorizontal: 5,
    }
})
