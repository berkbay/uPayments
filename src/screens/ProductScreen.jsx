import React, {FC, useState} from "react";
import {StyleSheet, TextInput, TouchableOpacity, View, Text} from "react-native";
import CategoriesSlider from "../components/CategoriesSlider";
import {ProductForm} from "../types/product";

const ProductScreen: FC = () => {
    const [categories, setCategories] = useState('')
    const emptyForm: ProductForm = {
        createdAt: "",
        name: "string",
        avatar: "",
        id: 5,
        description: "",
        price: 10,
        category: "",
        personEmail: ""
    }

    return(
        <View style={{flex:1}}>
            <TextInput placeholder={'Product Title'} style={styles.input}/>
            <TextInput placeholder={'Price'} style={styles.input}/>
            <TextInput multiline={true} placeholder={'Description'} style={[styles.input,{height: 150, textAlignVertical:'top'}]}/>
            <TextInput placeholder={'Image Link'} style={styles.input}/>
            <TextInput placeholder={'Developer E-mail'} style={styles.input}/>
            <View>
                <Text style={{marginHorizontal: 20}}>Selected Category</Text>
                <TouchableOpacity>
                    <CategoriesSlider updateCategories={setCategories} color={categories}/>
                </TouchableOpacity>
            </View>
        </View>
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
    }
})

