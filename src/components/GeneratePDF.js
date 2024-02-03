import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';
import data from './data';
import contactIcon from '../img/contact.png';
import emailIcon from '../img/email.png';
import linkedInIcon from '../img/linkedin.png';
import locationIcon from '../img/location.png';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 30,
  },
  name : {
    fontSize: 22,
    color: '#8a0202',
    fontWeight: 'bold',
  },
  title : {
    fontSize: 15,
    color: '#f96b07',
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    textDecoration: 'underline',
  },
  content: {
    fontSize: 12,
    marginBottom: 4,
  },
  expDateContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    border: 1,
  },
  expDate: {
    fontSize: 12,
    marginBottom: 4,
  },
  detailContent : {
    fontSize: 12,
    marginBottom: 4,
    marginTop: 8,
  },
  contactAndEmail: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 12,
    marginTop: 10,
    marginBottom: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 50,
  },
  location: {
    fontSize: 12,
    marginBottom: 4,
    marginTop: 5,
    marginLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    backgroundColor: "grey",
    fontSize: 12,
    padding: 5,
    textAlign: 'center',
    borderRadius: 8,
  },
  header2: {
    fontSize: 13,
    color: '#8a0202',
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 5,
    marginBottom: 2,
    width: 12,
    height: 12,
  },
});

const MyDocument = () => {
  const { personalinfo } = data[0];
  const { summary } = data[1];
  const { workExperiences } = data[2];
  // const { education } = data[3];
  // const { skills } = data[4];
  // const { certifications } = data[5];
  // console.log(personalinfo);
  // console.log(summary);
  // console.log(workExperiences);
  // console.log(education);
  // console.log(skills);
  // console.log(certifications);
  return (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <View>
          <Text style={styles.name}>{personalinfo.fullName.toUpperCase()}</Text>
          <Text style={styles.title}>{personalinfo.userTitle}</Text>
          <View style={styles.contactAndEmail}>
            <View style={styles.iconContainer}>
              <Image style={styles.icon} source={contactIcon} />
              <Text style={styles.content}>{personalinfo.contactNumber}</Text>
            </View>
            <View style={styles.iconContainer}>
              <Image style={styles.icon} source={emailIcon} />
              <Text style={styles.content}>{personalinfo.emailAddress}</Text>
            </View>
            <View style={styles.iconContainer}>
              <Image style={styles.icon} source={linkedInIcon} />
              <Text style={styles.content}>{personalinfo.linkedIn}</Text>
            </View>
          </View>
          <View style={styles.iconContainer}>
            <Image style={styles.icon} source={locationIcon} />
            <Text style={styles.location}>{personalinfo.physicalAddress}</Text>
          </View>
          <View style={{ borderBottom: 1, borderBottomColor: 'grey', marginTop: 5, marginBottom: 5 }} />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Summary</Text>
        <Text style={styles.detailContent}>{summary}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Experience</Text>
        <Text style={styles.detailContent}>
        {workExperiences.map((experience) => {
          // Assuming experience.startDate and experience.endDate are in a format that can be parsed by the Date object
          const formattedStartDate = new Date(experience.startDate).toLocaleDateString('en-GB');
          const formattedEndDate = new Date(experience.endDate).toLocaleDateString('en-GB');

          return (
            <React.Fragment key={experience.id}>
              <View style={styles.expDateContainer}>
                <Text style={styles.header2}>{experience.company}</Text>
                <Text style={styles.expDate}>{formattedStartDate}</Text>
                <Text style={styles.expDate}> - {formattedEndDate}</Text>
              </View>
              <Text style={styles.content}>{experience.jobTitle}</Text>
              <Text style={styles.content}>{experience.responsibilities}</Text>
            </React.Fragment>
          );
        })}
      </Text>

      </View>
    </Page>
  </Document>
)};

function GeneratePDF() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <PDFViewer style={{ width: '100%', height: '100%' }}>
        <MyDocument />
      </PDFViewer>
    </div>
  );
}

export default GeneratePDF;
