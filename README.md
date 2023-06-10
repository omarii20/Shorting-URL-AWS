# Shorting-URL-AWS
System for shortening URL, built in AWS cloud use Serverless Framework.<br>
Each URL redirection is stored as an S3 object with the Website-Redirect-Location metadata key set to the forwarding web address.<br>
AWS Lambda is used to create an API to save these objects. The website is served from the same S3 bucket.<br>
