<?php include 'header-smol.html'; ?>
<?php
if (isset($_GET['id'])) {
    $projectId = preg_replace('/[^a-zA-Z0-9_-]/', '', $_GET['id']); // Sanitize input
    $filePath = "projects/{$projectId}.html";

    if (file_exists($filePath)) {
        include $filePath;
    } else {
        echo "Model not found.";
    }
} else {
    echo "No model specified.";
}
?>
<?php include 'footer.html'; ?>