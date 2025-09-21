import puppeteer from "puppeteer";
import fs from "fs";
import { PDFDocument } from "pdf-lib";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Your SPA base URL
const baseDomain = "http://localhost:5173/#"; // Change to your live site if needed

// ✅ Define your SPA routes manually
const routes = [
    "",          // Home
    "about-us",
    "faqs",
    "our-team",
    "quality-safety",
    "blog",
    "personal-care",
    "domestic-help",
    "transportation",
    "meal-preparation",
    "assist-life-stage-transition",
    "assist-personal-activities",
    "daily-tasks-shared-living",
    "innovative-community-participation",
    "development-life-skills",
    "household-tasks",
    "participate-community",
    "group-centre-activities",
    "get-started",
    "ndis-calculator",
    "referrals",
    "contact-us",
    "appointment"
];

const pdfBuffers = [];

// Scroll to load lazy content
async function scrollPage(page) {
    await page.evaluate(async () => {
        await new Promise((resolve) => {
            let totalHeight = 0;
            const distance = 200;
            const timer = setInterval(() => {
                const scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;
                if (totalHeight >= scrollHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
    await new Promise((resolve) => setTimeout(resolve, 2000));
}

// Generate PDF for a single route
async function generatePDFForRoute(page, route) {
    const url = `${baseDomain}${route}`;
    await page.goto(url, { waitUntil: "networkidle0" });
    await scrollPage(page);

    const pdfBuffer = await page.pdf({
        printBackground: true,
        preferCSSPageSize: true,
        width: `${await page.evaluate(() => document.body.scrollWidth)}px`,
        height: `${await page.evaluate(() => document.body.scrollHeight)}px`,
    });


    pdfBuffers.push(pdfBuffer);
    console.log(`✅ PDF generated for: ${url}`);
}

// Merge all route PDFs
async function mergePDFs(buffers) {
    const mergedPdf = await PDFDocument.create();
    for (const pdfBytes of buffers) {
        const pdf = await PDFDocument.load(pdfBytes);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
    }

    const outputPath = join(__dirname, "SPA_CompleteWebsite.pdf");
    const mergedPdfBytes = await mergedPdf.save();
    fs.writeFileSync(outputPath, mergedPdfBytes);
    console.log(`🎉 All SPA routes merged into ${outputPath}`);
}

// Main
(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    for (const route of routes) {
        await generatePDFForRoute(page, route);
    }

    await mergePDFs(pdfBuffers);
    await browser.close();
})();
