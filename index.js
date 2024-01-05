import PDFMerger from 'pdf-merger-js';

var merger = new PDFMerger();

export const merge = async (pdfFiles) => {
    for (let file of pdfFiles) {
        await merger.add(`${file.path}`);
    }
    let filename = `./public/merged-${new Date().getTime()}.pdf`;
    await merger.save(`${filename}`);
    return filename;
};