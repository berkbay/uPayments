import React, {FC, useState} from "react";
import {StyleSheet, TextInput, TouchableOpacity, View, Text, Platform} from "react-native";
import CategoriesSlider from "../components/CategoriesSlider";
import {ProductForm} from "../types/product";
import {addProducts} from "../store/actions/productAction";
import {useDispatch} from "react-redux";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

const ProductScreen: FC = ({navigation}:any) => {
    const keyboardType = Platform.OS === 'android' ? 'name-phone-pad' : 'numeric';

    const [categories, setCategories] = useState('')

    const changeCategories: FC = (comenCategory) => {
        setAddProduct({...addProduct, category: comenCategory})
    }

    const emptyForm: ProductForm = {
        name: "",
        avatar: "",
        description: "",
        price: null,
        category: "",
        personEmail: ""
    }

    const [addProduct, setAddProduct] = useState(emptyForm)
    const dispatch = useDispatch()

    return(
        <KeyboardAwareScrollView extraHeight={300} style={{flex:1}}>
            <TextInput
                onChangeText={ (text) => {
                    setAddProduct({...addProduct, name: text})
                }}
                autoCorrect={false}
                value={addProduct.name}
                placeholder={'Product Title'}
                style={styles.input}
            />
            <TextInput
                onChangeText={ (price:number) => {
                    setAddProduct({...addProduct, price: price})
                }}
                autoCorrect={false}
                value={addProduct.price}
                placeholder={'Price'}
                style={styles.input}
                keyboardType={keyboardType}
            />
            <TextInput
                onChangeText={ (text) => {
                    setAddProduct({...addProduct, description: text})
                }}
                autoCorrect={false}
                value={addProduct.description}
                multiline={true}
                placeholder={'Description'}
                style={[styles.input,{height: 150, textAlignVertical:'top'}]}
            />
            <TextInput
                onChangeText={ (text) => {
                    setAddProduct({...addProduct, avatar: text})
                }}
                autoCorrect={false}
                value={addProduct.avatar}
                placeholder={'Image Link'}
                style={styles.input}
            />
            <TextInput
                onChangeText={ (text) => {
                    setAddProduct({...addProduct, personEmail: text})
                }}
                autoCorrect={false}
                value={addProduct.personEmail}
                placeholder={'Developer E-mail'}
                style={styles.input}
                keyboardType={'email-address'}
            />
            <View style={{marginVertical: 5}}>
                <Text style={{
                    marginHorizontal: 20,
                    marginVertical:5,
                    fontWeight: '500'
                }}>Selected Category</Text>
                <CategoriesSlider
                    changeCategories={changeCategories}
                    updateCategories={setCategories}
                    color={categories}
                />
            </View>
            <View style={{flexDirection: 'row', marginVertical: 5,marginHorizontal: 10, justifyContent:'space-between'}}>
                <TouchableOpacity
                    onPress={() => {
                    dispatch(addProducts(addProduct))
                    navigation.navigate('HomeScreen')
                }}
                    style={[styles.button, {backgroundColor:'green'}]}
                >
                    <Text style={styles.text}> Confirm </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setAddProduct(emptyForm)
                    navigation.navigate('HomeScreen')
                }}
                    style={[styles.button, {backgroundColor:'red'}]}
                >
                    <Text style={styles.text}> Cancel </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    );
}

export default ProductScreen;

const styles= StyleSheet.create({
    input: {
        alignContent:'flex-start',
        borderWidth:2,
        marginHorizontal:20,
        borderRadius: 5,
        marginVertical:10,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    button: {
        borderRadius: 10
    },
    text: {
        color: '#fff',
        fontWeight: '700',
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 20
    },
    continueButtons: {

    }
})

