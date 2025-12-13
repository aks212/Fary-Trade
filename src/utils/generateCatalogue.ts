import jsPDF from "jspdf";

interface Product {
  name: string;
  description: string;
  benefits: string;
  use: string;
  ingredients: string;
}

export const generateProductCatalogue = (products: Product[]) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  let yPosition = margin;

  // Brand colors (converted to RGB)
  const brandOrange = [230, 126, 34];
  const brandBrown = [139, 90, 43];
  const brandGreen = [141, 190, 79];
  const brandCream = [243, 232, 215];

  // Cover Page
  doc.setFillColor(brandCream[0], brandCream[1], brandCream[2]);
  doc.rect(0, 0, pageWidth, pageHeight, "F");

  // Header bar
  doc.setFillColor(brandBrown[0], brandBrown[1], brandBrown[2]);
  doc.rect(0, 0, pageWidth, 60, "F");

  // Company name
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont("helvetica", "bold");
  doc.text("Fary's Ginger Company", pageWidth / 2, 35, { align: "center" });

  // Subtitle
  doc.setFontSize(14);
  doc.setFont("helvetica", "normal");
  doc.text("Premium Organic Ginger Products", pageWidth / 2, 48, { align: "center" });

  // Decorative line
  doc.setDrawColor(brandOrange[0], brandOrange[1], brandOrange[2]);
  doc.setLineWidth(3);
  doc.line(margin + 40, 75, pageWidth - margin - 40, 75);

  // Title
  doc.setTextColor(brandBrown[0], brandBrown[1], brandBrown[2]);
  doc.setFontSize(36);
  doc.setFont("helvetica", "bold");
  doc.text("Product Catalogue", pageWidth / 2, 110, { align: "center" });

  // Year
  doc.setFontSize(18);
  doc.setFont("helvetica", "normal");
  doc.text(new Date().getFullYear().toString(), pageWidth / 2, 125, { align: "center" });

  // Mission statement box
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(margin, 145, pageWidth - 2 * margin, 50, 5, 5, "F");
  
  doc.setTextColor(brandBrown[0], brandBrown[1], brandBrown[2]);
  doc.setFontSize(11);
  doc.setFont("helvetica", "italic");
  const missionText = "To harness the natural power of ginger to create products that energize, nourish, and inspire healthier living. We are committed to delivering authentic, nature-driven experiences made from real ingredients, crafted with honesty and care.";
  const splitMission = doc.splitTextToSize(missionText, pageWidth - 2 * margin - 20);
  doc.text(splitMission, pageWidth / 2, 162, { align: "center" });

  // Footer
  doc.setFillColor(brandGreen[0], brandGreen[1], brandGreen[2]);
  doc.rect(0, pageHeight - 25, pageWidth, 25, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("Pure. Organic. Powerful.", pageWidth / 2, pageHeight - 10, { align: "center" });

  // Product Pages
  doc.addPage();

  // Products header
  doc.setFillColor(brandCream[0], brandCream[1], brandCream[2]);
  doc.rect(0, 0, pageWidth, pageHeight, "F");

  doc.setFillColor(brandBrown[0], brandBrown[1], brandBrown[2]);
  doc.rect(0, 0, pageWidth, 35, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.text("Our Products", pageWidth / 2, 23, { align: "center" });

  yPosition = 50;

  products.forEach((product, index) => {
    // Check if we need a new page
    if (yPosition > pageHeight - 80) {
      doc.addPage();
      doc.setFillColor(brandCream[0], brandCream[1], brandCream[2]);
      doc.rect(0, 0, pageWidth, pageHeight, "F");
      doc.setFillColor(brandBrown[0], brandBrown[1], brandBrown[2]);
      doc.rect(0, 0, pageWidth, 35, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(20);
      doc.setFont("helvetica", "bold");
      doc.text("Our Products (continued)", pageWidth / 2, 23, { align: "center" });
      yPosition = 50;
    }

    // Product card background
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(margin, yPosition, pageWidth - 2 * margin, 65, 4, 4, "F");

    // Product number badge
    doc.setFillColor(brandOrange[0], brandOrange[1], brandOrange[2]);
    doc.circle(margin + 12, yPosition + 12, 8, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text((index + 1).toString(), margin + 12, yPosition + 15, { align: "center" });

    // Product name
    doc.setTextColor(brandBrown[0], brandBrown[1], brandBrown[2]);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(product.name, margin + 28, yPosition + 15);

    // Description
    doc.setTextColor(80, 80, 80);
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.text(product.description, margin + 28, yPosition + 25);

    // Benefits
    doc.setTextColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    doc.text("Benefits:", margin + 10, yPosition + 38);
    doc.setTextColor(80, 80, 80);
    doc.setFont("helvetica", "normal");
    const benefitsText = doc.splitTextToSize(product.benefits, pageWidth - 2 * margin - 60);
    doc.text(benefitsText, margin + 35, yPosition + 38);

    // How to use
    doc.setTextColor(brandOrange[0], brandOrange[1], brandOrange[2]);
    doc.setFont("helvetica", "bold");
    doc.text("Usage:", margin + 10, yPosition + 50);
    doc.setTextColor(80, 80, 80);
    doc.setFont("helvetica", "normal");
    const useText = doc.splitTextToSize(product.use, pageWidth - 2 * margin - 60);
    doc.text(useText, margin + 35, yPosition + 50);

    // Ingredients
    doc.setTextColor(brandBrown[0], brandBrown[1], brandBrown[2]);
    doc.setFont("helvetica", "bold");
    doc.text("Ingredients:", margin + 10, yPosition + 60);
    doc.setTextColor(80, 80, 80);
    doc.setFont("helvetica", "normal");
    doc.text(product.ingredients, margin + 45, yPosition + 60);

    yPosition += 75;
  });

  // Contact Page
  doc.addPage();
  doc.setFillColor(brandCream[0], brandCream[1], brandCream[2]);
  doc.rect(0, 0, pageWidth, pageHeight, "F");

  doc.setFillColor(brandBrown[0], brandBrown[1], brandBrown[2]);
  doc.rect(0, 0, pageWidth, 35, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.text("Contact Us", pageWidth / 2, 23, { align: "center" });

  yPosition = 60;

  // Contact info box
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(margin, yPosition, pageWidth - 2 * margin, 80, 5, 5, "F");

  doc.setTextColor(brandBrown[0], brandBrown[1], brandBrown[2]);
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("Get in Touch", pageWidth / 2, yPosition + 20, { align: "center" });

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("Email: info@farysginger.com", pageWidth / 2, yPosition + 40, { align: "center" });
  doc.text("Phone: +234 XXX XXX XXXX", pageWidth / 2, yPosition + 52, { align: "center" });
  doc.text("Location: Lagos, Nigeria", pageWidth / 2, yPosition + 64, { align: "center" });

  // Certifications
  yPosition += 100;
  doc.setTextColor(brandBrown[0], brandBrown[1], brandBrown[2]);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Certifications", pageWidth / 2, yPosition, { align: "center" });

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const certs = ["HACCP Certified", "FDA Certified", "Halal Certified"];
  certs.forEach((cert, i) => {
    doc.setFillColor(brandGreen[0], brandGreen[1], brandGreen[2]);
    doc.circle(pageWidth / 2 - 50, yPosition + 15 + i * 15, 3, "F");
    doc.setTextColor(80, 80, 80);
    doc.text(cert, pageWidth / 2 - 40, yPosition + 18 + i * 15);
  });

  // Footer with tagline
  doc.setFillColor(brandGreen[0], brandGreen[1], brandGreen[2]);
  doc.rect(0, pageHeight - 30, pageWidth, 30, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(12);
  doc.setFont("helvetica", "italic");
  doc.text('"This is the beginning of something good."', pageWidth / 2, pageHeight - 12, { align: "center" });

  // Save the PDF
  doc.save("Farys_Ginger_Company_Catalogue.pdf");
};
