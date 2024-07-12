// Array of products
const products = [
    {
      id: 'fc-1888',
      name: "Kindle Paperwhite",
      "avg-rating": 4.5
    },
    {
      id: 'fc-2050',
      name: "Echo Dot (4th Gen)",
      "avg-rating": 4.7
    },
    {
      id: 'fs-1987',
      name: "Fire TV Stick 4K",
      "avg-rating": 3.9
    },
    {
      id: 'ac-2000',
      name: "Microfiber Sheet Set",
      "avg-rating": 3.7
    },
    {
      id: 'jj-1969',
      name: "Hooded Fleece Sweatshirt",
      "avg-rating": 4.3
    }
  ];
  
  // Function to populate Product Name options
  function populateProductOptions() {
      const productNameSelect = document.getElementById('productName');
      products.forEach(product => {
          const option = document.createElement('option');
          option.value = product.id;
          option.text = product.name;
          productNameSelect.appendChild(option);
      });
  }
  
  // Counter for reviews completed
  let reviewsCompleted = localStorage.getItem('reviewsCompleted') || 0;
  
  // Increment counter on form submission
  document.getElementById('reviewForm').addEventListener('submit', function(event) {
      event.preventDefault();
      reviewsCompleted++;
      localStorage.setItem('reviewsCompleted', reviewsCompleted);
      alert(`Thank you for your review! Total reviews completed: ${reviewsCompleted}`);
      this.reset();
  });
  
  // Call function to populate Product Name options
  populateProductOptions();
  