import {View, TouchableOpacity, Text,StyleSheet} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getCategories} from "../store/actions/categoriesAction";
import {AppState} from "../store";


const CategoriesSlider = (props:any) => {
    const {data, loading, error} = useSelector((state: AppState) => state.categories)
    const dispatch = useDispatch()

    const setUpdateCategories = props.updateCategories
    const showAll= props.showAll

    useEffect(() => {
        dispatch(getCategories())
    },[])

    return (
        <View style={{flexDirection:'row'}}>
            { showAll == true ?
                <TouchableOpacity
                    onPress={() => setUpdateCategories('')}
                    style={[styles.categoriesButton, {backgroundColor: props.color == '' ? '#fff': '#000000'}]}
                >
                    <Text style={[styles.categoriesText, {color: props.color == '' ? '#000000': '#fff'}]}>All</Text>
                </TouchableOpacity>
                : null
            }
            {data?.map((item:any) => (
                <TouchableOpacity
                    onPress={() => setUpdateCategories(item.name)}
                    key={item.id}
                    style={[styles.categoriesButton, {backgroundColor: props.color == item.name ? '#fff': '#000000'}]}
                >
                    <Text style={[styles.categoriesText, {color: props.color == item.name ? '#000000': '#fff' }]} key={item?.id}>{item.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles=StyleSheet.create({
    categoriesButton: {
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius:5,
        backgroundColor:'#000000'
    },
    categoriesText: {
        color:'#fff',
        padding: 10
    }

})

export default CategoriesSlider;
