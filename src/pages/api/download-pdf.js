import { createPdf } from '../../utils/createPdf';

export async function get({ request }) {
  const pdfBytes = await createPdf();

  return new Response(pdfBytes, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="seyedmostafa-cv.pdf"',
    },
  });
}