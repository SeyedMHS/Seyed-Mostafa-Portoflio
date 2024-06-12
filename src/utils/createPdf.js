// src/utils/createPdf.js
import { PDFDocument, rgb } from 'pdf-lib';

export async function createPdf() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 400]);
  const { width, height } = page.getSize();

  page.drawText('Hello, this is a PDF document!', {
    x: 50,
    y: height / 2 + 200,
    size: 30,
    color: rgb(0, 0.53, 0.71),
  });

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}
