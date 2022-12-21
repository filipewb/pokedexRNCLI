import React, { Component } from 'react';

import { SafeAreaView, View, Text, TextInput, Button, Alert, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios'
import pokemon from 'pokemon';
import Pokemon from './components/Pokemon'

const POKE_API_BASE_URL = 'https://pokeapi.co/api/v2';

export default class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            searchInput: '',
            name: '',
            pic: '',
            types: [],
            desc: ''
        }
    }

    render() {

        const { name, pic, types, desc, searchInput, isLoading } = this.state

        return (
            <SafeAreaView>
                <View>
                    <View>
                        <View>
                            <TextInput
                                placeholder='Procurar Pokemon'
                            />
                        </View>
                        <View>
                            <Button 
                                title='Procurar'
                                color='#0064e1'
                            />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }

    searchPokemon = async () => {
        try {
            const pokemonID = pokemon.getId(this.state.searchInput)
        } catch (err) {
            Alert.alert('Erro', 'Pokemon nao encontrado');
        }
    }
}