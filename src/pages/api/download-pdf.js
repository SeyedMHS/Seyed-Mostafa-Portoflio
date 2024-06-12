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
    console.error('خطأ في توليد PDF:', error);
    console.error('تفاصيل الخطأ:', error.stack);
    return new Response('خطأ داخلي في الخادم', { status: 500 });
  }
}



