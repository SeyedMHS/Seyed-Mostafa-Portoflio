// src/pages/api/download-pdf.js
import { createPdf } from '../../utils/createPdf';

export async function get({ request }) {
  try {
    const pdfBytes = await createPdf();

    return new Response(pdfBytes, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="seyedmostafa-cv.pdf"',
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    console.error('Error details:', error.stack);
    return new Response('Internal Server Error', { status: 500 });
  }
}
