<style>
    body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex; /* Centering */
    justify-content: center;
    align-items: center;
    height: 100vh; /* Full height */
  }

  .card {
    background: white;
    border-radius: 15px;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.2);
    padding: 20px;
    text-align: center;
    width: 250px;
    transition: transform 0.3s ease;
  }

  .card:hover {
    transform: scale(1.05);
  }

  .card img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }

  .social-links a {
    margin: 0 5px;
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }

  .social-links a:hover {
    color: #007BFF;
  }
  
</style>