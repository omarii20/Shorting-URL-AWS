# Shorting-URL-AWS
System for shortening URL, built in AWS cloud use Serverless Framework.<br>
Each URL redirection is stored as an S3 object with the Website-Redirect-Location metadata key set to the forwarding web address.<br>
AWS Lambda is used to create an API to save these objects. The website is served from the same S3 bucket.<br>

# Components #
•	Setup S3 bucket<br>
•	Create Lambda function to create the shortened key and save an object to S3<br>
• CloudFront is a user interface front<br>
•	Create API Gateway to lambda function<br>
• Create POST/GET gateway API from the front to return a result from lambda function<br>
•	Create basic IAM role for our Lambda to get a bcuket file where saved json files<br>
•	Returend the respone to UI<br>

# architecture #
![shorting-url-AWSproject (1)](https://github.com/omarii20/Shorting-URL-AWS/assets/24661638/061bb7a7-c82f-4d9c-bd23-fac6172a5766)
