import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  
  const [items, setItems] = useState([
    {
      name: 'Espada Élfica',
      description: 'Uma espada forjada pelos elfos',
      image: { uri: 'https://www.crosster.com.br/image/cache/catalog/UC3100%20(2)-1000x1000.jpg' }
    },
    {
      name: 'Varinha de Ouro',
      description: 'Uma varinha poderosa',
      image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCCcTLTjdGfTUyvZS1eQLt_WRWEm-5V8bOJA&usqp=CAU' }
    },
    {
      name: 'Amuleto de Proteção',
      description: 'Um amuleto que protege seu portador',
      image: { uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fblue-phoenix-rpg.fandom.com%2Fpt-br%2Fwiki%2FAmuletos_dos_Oito&psig=AOvVaw1NYxgvuaOmO0LQXEi778y8&ust=1682396157703000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJjDjK3Uwf4CFQAAAAAdAAAAABAD' }
    }
  ]);

  const handlePress = (index) => {
    // Lógica para trocar o item de RPG
  }

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View style={styles.card} key={index}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Button title="Trocar" onPress={() => handlePress(index)} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  description: {
    textAlign: 'center',
    marginBottom: 5,
  }
});