<?php include 'db.php'; ?>

<!DOCTYPE html>
<html>
<head>
    <title>Student CRUD</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">

<h2>Add Student</h2>

<form method="POST">
    Name: <input type="text" name="name" required>
    Email: <input type="text" name="email" required>
    Mobile: <input type="text" name="mobile" required>
    Department: <input type="text" name="department" required>
    <button type="submit" name="save">Save</button>
</form>

<?php
if (isset($_POST['save'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $dept = $_POST['department'];

    mysqli_query($conn, "INSERT INTO student(name,email,mobile,department) 
    VALUES('$name','$email','$mobile','$dept')");
}
?>

<h2>Student List</h2>

<table>
<tr>
    <th>ID</th>
    <th>Name</th>
    <th>Email</th>
    <th>Mobile</th>
    <th>Department</th>
    <th>Action</th>
</tr>

<?php
$result = mysqli_query($conn, "SELECT * FROM student");

while ($row = mysqli_fetch_assoc($result)) {
?>
<tr>
    <td><?php echo $row['id']; ?></td>
    <td><?php echo $row['name']; ?></td>
    <td><?php echo $row['email']; ?></td>
    <td><?php echo $row['mobile']; ?></td>
    <td><?php echo $row['department']; ?></td>
    <td>
        <a href="edit.php?id=<?php echo $row['id']; ?>">Edit</a>
        <a href="delete.php?id=<?php echo $row['id']; ?>">Delete</a>
    </td>
</tr>
<?php } ?>

</table>

</div>

</body>
</html>