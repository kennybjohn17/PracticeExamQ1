<?php
// Establish a connection to the database
$servername = "localhost";
$dbname = "database.sql";

$conn = new mysqli($servername, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process the form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $description = $_POST["description"];

    // Prepare the SQL statement
    $sql = "INSERT INTO items (name, description) VALUES ('$name', '$description')";

    // Execute the SQL statement
    if ($conn->query($sql) === TRUE) {
        echo "Item added successfully.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the database connection
$conn->close();
?>
