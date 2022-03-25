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
    console.log(categories)

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
                        <View style={{justifyContent:'center', alignSelf:'center', height:120, width:100}}>
                            <Image source={{uri: item.avatar}} style={{height:100, width:100, backgroundColor:'#fff'}} resizeMode={'stretch'}  />
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
                    </View> : categories == item.category ?
                        <View>
                            <View style={{justifyContent:'center', alignSelf:'center', height:120, width:100}}>
                                <Image source={{uri: item.avatar}} style={{height:100, width:100, backgroundColor:'#fff'}} resizeMode={'stretch'}  />
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
                        </View> :
                        <View>

                        </View>
                }
            </View>
        );
    }

    return(
        <SafeAreaView style={styles.container}>
            <CategoriesSlider showAll={true} updateCategories={setCategories} color={categories}/>
            <View style={styles.productView}>
                <FlatList
                    numColumns={2}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    extraData={categories}
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
        marginHorizontal: 10,
    },
    productContainer: {
        backgroundColor:'#FFF',
        flex:1,
        borderRadius: 10,
        width: '50%',
        marginVertical: 10,
        marginHorizontal: 5,
    },
    button: {
        right: 24,
        bottom: 23,
        zIndex: 10,
        position:'absolute',
        borderRadius: 20,
        backgroundColor:'#FFF'
    }
})
