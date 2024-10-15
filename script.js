// Script for handling form submission and donation button
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Your message has been sent!');
});

document.getElementById('donateBtn').addEventListener('click', function () {
    // Set the path to your QR code image
    const qrCodePath = 'images/qr.jpg'; // Use the new QR code filename

    // Display the QR code
    document.getElementById('qrCode').src = qrCodePath;
    document.getElementById('paymentLink').style.display = 'block'; // Show the QR code section

    alert('Thank you for your interest in donating! Scan the QR code to make a payment.');
});

