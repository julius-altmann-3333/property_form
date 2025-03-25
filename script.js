 function displayResults() {
        // Get values from the form
        const title = document.getElementById('title').value;
        const price = document.getElementById('price').value;
        const address = document.getElementById('address').value;
        const yearBuilt = document.getElementById('yearBuilt').value;
        const lotSize = document.getElementById('lotSize').value;
        const squareFootage = document.getElementById('squareFootage').value;
        const bedrooms = document.getElementById('bedrooms').value;
        const bathrooms = document.getElementById('bathrooms').value;
        const flooring = document.getElementById('flooring').value;
        const appliances = document.getElementById('appliances').value;
        const pool = document.getElementById('pool').value;
        const hoa = document.getElementById('hoa').value;
        const description = document.getElementById('description').value;

        // Display results
        document.getElementById('resultTitle').textContent = title;
        document.getElementById('resultPrice').textContent = price;
        document.getElementById('resultAddress').textContent = address;
        document.getElementById('resultYearBuilt').textContent = yearBuilt;
        document.getElementById('resultLotSize').textContent = lotSize;
        document.getElementById('resultSquareFootage').textContent = squareFootage;
        document.getElementById('resultBedrooms').textContent = bedrooms;
        document.getElementById('resultBathrooms').textContent = bathrooms;
        document.getElementById('resultFlooring').textContent = flooring;
        document.getElementById('resultAppliances').textContent = appliances;
        document.getElementById('resultPool').textContent = pool;
        document.getElementById('resultHOA').textContent = hoa;
        document.getElementById('resultDescription').textContent = description;

        // Show results section
        document.getElementById('results').style.display = 'block';
    }

    function generatePDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Get data from results section
        doc.text('Real Estate Property Listing', 10, 10);
        doc.text('Property Title: ' + document.getElementById('resultTitle').textContent, 10, 20);
        doc.text('Listing Price: $' + document.getElementById('resultPrice').textContent, 10, 30);
        doc.text('Address: ' + document.getElementById('resultAddress').textContent, 10, 40);
        doc.text('Year Built: ' + document.getElementById('resultYearBuilt').textContent, 10, 50);
        doc.text('Lot Size: ' + document.getElementById('resultLotSize').textContent + ' sq ft', 10, 60);
        doc.text('Square Footage: ' + document.getElementById('resultSquareFootage').textContent + ' sq ft', 10, 70);
        doc.text('Bedrooms: ' + document.getElementById('resultBedrooms').textContent, 10, 80);
        doc.text('Bathrooms: ' + document.getElementById('resultBathrooms').textContent, 10, 90);
        doc.text('Flooring: ' + document.getElementById('resultFlooring').textContent, 10, 100);
        doc.text('Appliances: ' + document.getElementById('resultAppliances').textContent, 10, 110);
        doc.text('Pool/Hot Tub: ' + document.getElementById('resultPool').textContent, 10, 120);
        doc.text('HOA Fees: $' + document.getElementById('resultHOA').textContent, 10, 130);
        doc.text('Description: ' + document.getElementById('resultDescription').textContent, 10, 140);

        // Download PDF
        doc.save('property_listing.pdf');
    }