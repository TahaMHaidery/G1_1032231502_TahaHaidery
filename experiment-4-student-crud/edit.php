<?php
include 'db.php';

$id = $_GET['id'];
$data = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM student WHERE id=$id"));

if (isset($_POST['update'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $dept = $_POST['department'];

    mysqli_query($conn, "UPDATE student SET 
        name='$name',
        email='$email',
        mobile='$mobile',
        department='$dept'
        WHERE id=$id");

    header("Location: index.php");
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Edit Student</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">

<h2>Edit Student</h2>

<form method="POST">
    Name: <input type="text" name="name" value="<?php echo $data['name']; ?>">
    Email: <input type="text" name="email" value="<?php echo $data['email']; ?>">
    Mobile: <input type="text" name="mobile" value="<?php echo $data['mobile']; ?>">
    Department: <input type="text" name="department" value="<?php echo $data['department']; ?>">
    <button name="update">Update</button>
</form>

</div>

</body>
</html>