import json
import string
from datetime import datetime
from random import choices
import uuid
import boto3

s3_bucket_name = "records-url"

def lambda_handler(event, context):
    s3 = boto3.resource("s3")
    
    if event['type'] == 'POST':
        data = event
        url_long = data["url_long"]
        url_short = generate_short_id(url_long)
        item = {
            "url_short": url_short,
            "url_long": url_long,
            "created_date": datetime.now().strftime("%m/%d/%Y, %H:%M:%S"),
            "id": str(uuid.uuid4())
        }
        
        # Save item as JSON file in S3 bucket
        s3_object_key = f"{url_short}.json"
        s3.Object(s3_bucket_name, s3_object_key).put(Body=json.dumps(item))
        
        return item
    
    elif event['type'] == 'GET':
        url_short = event["url_short"]
        s3_object_key = f"{url_short}.json"
        s3_object = s3.Object(s3_bucket_name, s3_object_key)
        response = s3_object.get()
        item = json.loads(response["Body"].read())
        return item


def generate_short_id(url):
    base_url = "g5.shenkar.demo-cloud.com/"
    url_short = "".join(choices(string.ascii_letters + string.digits, k=6))
    return base_url + url_short
