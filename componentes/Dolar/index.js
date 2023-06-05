import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const DolarScreen = () => {
  const [taxaDolar, setTaxaDolar] = useState(null);

  useEffect(() => {
    const obterTaxaDolar = async () => {
      try {
        const response = await axios.get(
          'https://economia.awesomeapi.com.br/last/USD-BRL'
        );
        const data = response.data;
        const taxa = data.rates.USD;
        setTaxaDolar(taxa);
      } catch (error) {
        console.log(error);
      }
    };

    obterTaxaDolar();
  }, []);

  return (
    <View>
      {taxaDolar ? (
        <Text>Taxa de câmbio do dólar: {taxaDolar}</Text>
      ) : (
        <Text>Carregando...</Text>
      )}
    </View>
  );
};

export default DolarScreen;




