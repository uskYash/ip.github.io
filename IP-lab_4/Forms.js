function validateForm() {
  // Validation logic here
  var tagline = document.getElementById("tagline").value;
  var phone = document.getElementById("phone").value;
  var quantity = document.getElementById("quantity").value;

  // Check if tagline length is less than or equal to 100 characters
  if (tagline.length > 100) {
    alert("Tagline should be less than or equal to 100 characters.");
    return false;
  }

  // Check if quantity is more than 0
  if (quantity < 1) {
    alert("Minimum quantity is 1.");
    return false;
  }

  // Check if phone number has 9 digits
  if (!/^\d{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return false;
  }

  // If validation passes, you can proceed to generate the receipt
  generateReceipt();
  return false; // Prevent form submission for now
}

function generateReceipt() {
  var receiptDate = new Date().toLocaleDateString();
  var receipt = `
    Order Receipt
    Date: ${receiptDate}
    Tagline: ${document.getElementById("tagline").value}
    Color: ${document.getElementById("color").value}
    Size: ${document.getElementById("size").value}
    Quantity: ${document.getElementById("quantity").value}
    Delivery Date: ${document.getElementById("delivery_date").value}
    Contact No: ${document.getElementById("phone").value}
    Address: ${document.getElementById("delivery_details").value}
  `;

  // Display the receipt
  alert(receipt);
}