import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.textCenter}>NAMA SAYA EKA RAHMANA PUTRI</Text>
      
      {/* Dua kotak */}
      <View style={styles.boxContainer}>
        <View style={styles.box1} />
        <View style={styles.box2} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3', // Latar belakang abu-abu terang
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCenter: {
    fontSize: 24, // Ukuran font 24
    color: 'blue', // Warna teks biru
    fontWeight: 'bold', // Gaya teks tebal
    marginBottom: 20, // Jarak bawah ke kotak
  },
  boxContainer: {
    flexDirection: 'row', // Tata letak horizontal
    justifyContent: 'space-between', // Jarak merata di antara kotak
    width: '80%', // Lebar total kontainer kotak
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'red', // Warna kotak bebas
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'green', // Warna kotak bebas
  },
});
