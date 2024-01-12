import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import ReactDOM from 'react-dom';
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
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
    <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

function GeneratePDF() {
  return (
    <PDFViewer>
      <MyDocument />
    </PDFViewer>
  )
}

export default GeneratePDF;
