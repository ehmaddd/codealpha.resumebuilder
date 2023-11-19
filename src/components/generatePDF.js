import jsPDF from 'jspdf';
import data from './data';

const GeneratePdf = () => {
  const pdf = new jsPDF();

  // Add personal information
  pdf.text(`Full Name: ${data[0].personalinfo.fullName}`, 10, 10);
  pdf.text(`Contact Number: ${data[0].personalinfo.contactNumber}`, 10, 20);
  pdf.text(`Email Address: ${data[0].personalinfo.emailAddress}`, 10, 30);
  // Add more personal information fields as needed

  // Add summary
  pdf.text(`Summary: ${data[1].summary}`, 10, 40);

  // Add work experiences
  pdf.text('Work Experiences:', 10, 50);
  data[2].workExperiences.forEach((experience, index) => {
    const yPosition = 60 + index * 20;
    pdf.text(`Company: ${experience.company}`, 10, yPosition);
    pdf.text(`Job Title: ${experience.jobTitle}`, 10, yPosition + 10);
    // Add more work experience fields as needed
  });

  // Add education
  pdf.text('Education:', 10, 90);
  data[3].education.forEach((edu, index) => {
    const yPosition = 100 + index * 20;
    pdf.text(`Institution: ${edu.institutionName}`, 10, yPosition);
    pdf.text(`Degree: ${edu.degreeEarned}`, 10, yPosition + 10);
    // Add more education fields as needed
  });

  // Add skills
  pdf.text('Technical Skills:', 10, 130);
  data[4].skills.technicalSkills.forEach((skill, index) => {
    const yPosition = 140 + index * 10;
    pdf.text(skill, 10, yPosition);
  });
  // Add soft skills
  pdf.text('Soft Skills:', 10, 160);
  data[4].skills.softSkills.forEach((skill, index) => {
    const yPosition = 170 + index * 10;
    pdf.text(skill, 10, yPosition);
  });

  // Add certifications
  pdf.text('Certifications:', 10, 200);
  data[5].certifications.forEach((cert, index) => {
    const yPosition = 210 + index * 20;
    pdf.text(`Name: ${cert.name}`, 10, yPosition);
    pdf.text(`Issuing Organization: ${cert.issuingOrganization}`, 10, yPosition + 10);
    // Add more certification fields as needed
  });

  pdf.save('resume.pdf');
};

export default GeneratePdf;
