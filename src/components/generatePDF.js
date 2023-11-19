import data from './data';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';  // Fix the typo here
import jsPDF from 'jspdf';

// Add content to the PDF
const addContentToPDF = (pdf) => {
  // Add personal information
  pdf.text(`Full Name: ${data[0].personalinfo.fullName}`, 10, 10);
  pdf.text(`Contact Number: ${data[0].personalinfo.contactNumber}`, 10, 20);
  pdf.text(`Email Address: ${data[0].personalinfo.emailAddress}`, 10, 30);

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
};

const GeneratePdf = () => {
  const [pdfPreview, setPdfPreview] = useState('');
  const [pdfNumPages, setPdfNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const generatePDF = () => {
    const pdf = new jsPDF();

    // Add content to the PDF
    addContentToPDF(pdf);

    // Convert the PDF content to a data URI
    const pdfDataUri = pdf.output('datauristring');
    setPdfNumPages(1);
    setPageNumber(1);

    setPdfPreview(pdfDataUri);
  };

  const handleSavePdf = () => {
    const pdf = new jsPDF();

    // Add content to the PDF (same content as in generatePDF function)
    addContentToPDF(pdf);

    // Save the PDF
    pdf.save('resume.pdf');
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setPdfNumPages(numPages);
  };

  return (
    <div>
      <button onClick={generatePDF}>Generate PDF Preview</button>

      {pdfPreview && (
        <div>
          {/* Use react-pdf components for the PDF viewer */}
          <Document file={pdfPreview} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} width={800} />
          </Document>

          <p>
            Page {pageNumber} of {pdfNumPages}
          </p>

          <button onClick={handleSavePdf}>Save PDF</button>
        </div>
      )}
    </div>
  );
};

export default GeneratePdf;
