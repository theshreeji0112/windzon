<?php
/**
 * Windzon Contact Form Handler
 * Configure your email below and ensure your server has PHP mail() or SMTP configured.
 * For static hosting, consider using Formspree (https://formspree.io) or Netlify Forms.
 */

header('Content-Type: application/json');

// Configure: Replace with your email address
$to_email = "info@windzon.com";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = isset($_POST['name']) ? htmlspecialchars(trim($_POST['name'])) : '';
    $email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
    $subject = isset($_POST['subject']) ? htmlspecialchars(trim($_POST['subject'])) : 'Contact Form Submission';
    $message = isset($_POST['message']) ? htmlspecialchars(trim($_POST['message'])) : '';

    if (empty($name) || empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo 'Please fill in all required fields correctly.';
        http_response_code(400);
        exit;
    }

    $email_subject = "Windzon Contact: " . $subject;
    $email_body = "Name: $name\nEmail: $email\nSubject: $subject\n\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

    if (mail($to_email, $email_subject, $email_body, $headers)) {
        echo 'Thank you! Your message has been sent successfully.';
    } else {
        echo 'Sorry, there was an error sending your message. Please try again or contact us directly.';
        http_response_code(500);
    }
} else {
    echo 'Invalid request method.';
    http_response_code(405);
}
