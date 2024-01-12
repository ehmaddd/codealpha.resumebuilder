import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import data from './data';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textDecoration: 'underline',
  },
  content: {
    fontSize: 14,
    marginBottom: 4,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    color: '#FFF',
    cursor: 'pointer',
    textAlign: 'center',
  },
});

const MyDocument = ({ onClose }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
      <View style={styles.button} onClick={onClose}>
        <Text>Close PDF and Go Back</Text>
      </View>
    </Page>
  </Document>
);

function GeneratePDF() {
  const onClose = () => {
    
  }
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <PDFViewer style={{ width: '100%', height: '100%' }}>
        <MyDocument />
      </PDFViewer>
    </div>
  );
}

export default GeneratePDF;
