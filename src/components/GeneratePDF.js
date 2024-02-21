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
  jobDetails: {
    fontSize: 12,
    marginBottom: 4,
    marginTop: 4,
    marginLeft: 12,
  },
  expDateContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 5,
  },
  expDate: {
    fontSize: 12,
  },
  detailContent : {
    fontSize: 12,
    marginBottom: 4,
    marginTop: 8,
  },
  designation : {
    fontSize: 11,
    marginBottom: 4,
    marginTop: 0,
    marginLeft: 8,
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
    backgroundColor: 'black',
    fontSize: 14,
    padding: 5,
    textAlign: 'center',
    borderRadius: 8,
    fontWeight: 'heavy',
    color: 'white',
  },
  header2: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  header3: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 4,
    marginLeft: 8,
  },
  icon: {
    marginRight: 5,
    marginBottom: 2,
    width: 12,
    height: 12,
  },
  expDetails: {
    marginTop: 5,
    height: 15,
  },
  skillContainer: {
    marginTop: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '25%',
    marginBottom: 5,
    fontSize: 12,
  },
  bullet: {
    marginRight: 5,
  },
});

const MyDocument = () => {
  const { personalinfo } = data[0];
  const { summary } = data[1];
  const { workExperiences } = data[2];
  const { educations } = data[3];
  const { skills } = data[4];
  const technicalSkills = skills.technicalSkills;
  const softSkills = skills.softSkills;
  const { certifications } = data[5];
  console.log(certifications);
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
          <View style={{ marginTop: 5, marginBottom: 5 }} />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Summary</Text>
        <Text style={styles.detailContent}>{summary}</Text>
      </View>
      {workExperiences.length > 0 && (
      <View style={styles.section}>
          <Text style={styles.header}>Experience</Text>
          {workExperiences.map((experience, index) => (
            <View key={experience.id}>
              <View style={styles.expDateContainer}>
                <Text style={styles.header2}>• {experience.company.toUpperCase()}</Text>
                <Text style={styles.expDate}>{new Date(experience.startDate).toLocaleDateString('en-GB') } - {new Date(experience.endDate).toLocaleDateString('en-GB') }</Text>
              </View>
              <Text style={styles.header3}>{experience.jobTitle}</Text>
              <Text style={styles.jobDetails}>{experience.responsibilities}</Text>
            </View>
          ))}
        </View>
      )}
        <View style={styles.section}>
          { <Text style={styles.header}>Education</Text>}
          {educations.map((education, index) => (
            <View key={education.id}>
              <View style={styles.expDateContainer}>
                <Text style={styles.header2}>• {education.institution.toUpperCase()}</Text>
                <Text style={styles.content}>{new Date(education.graduationDate).toLocaleDateString('en-GB')}</Text>
              </View>
              <Text style={styles.designation}>{education.degree}</Text>
              <Text style={styles.designation}>{education.major}</Text>
            </View>
          ))}
        </View>
        <View style={styles.section}>
         <Text style={styles.header}>Tech Skills</Text>
         <View style={styles.skillContainer}>
           {technicalSkills.map((techSkill, index) => (
             <View key={techSkill.id} style={styles.skillItem}>
               <Text style={styles.bullet}>•</Text>
               <Text>{techSkill}</Text>
             </View>
           ))}
         </View>
        </View>
        <View style={styles.section}>
         <Text style={styles.header}>Soft Skills</Text>
         <View style={styles.skillContainer}>
           {softSkills.map((softSkill, index) => (
             <View key={softSkill.id} style={styles.skillItem}>
               <Text style={styles.bullet}>•</Text>
               <Text>{softSkill}</Text>
             </View>
           ))}
         </View>
        </View>
        <View style={styles.section}>
         <Text style={styles.header}>Certifications</Text>
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
