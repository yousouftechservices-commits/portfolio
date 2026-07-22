import json
import boto3
from botocore.exceptions import ClientError

class InventoryManager:
    def __init__(self, bucket_name: str):
        self.bucket_name = bucket_name
        # Boto3 automatically finds the credentials file you created
        self.s3_client = boto3.client('s3')

    def save_catalog(self, catalog_data: dict, filename: str = "data/catalog.json"):
        """Converts dict data to JSON and uploads it directly to your S3 bucket."""
        try:
            # Convert python dictionary to a clean JSON format string
            json_string = json.dumps(catalog_data, indent=4)
            
            print(f"Uploading updated catalog data to S3 root...")
            self.s3_client.put_object(
                Bucket=self.bucket_name,
                Key=filename,
                Body=json_string,
                ContentType='application/json'
            )
            print(f"🎉 Successfully uploaded! File path: {filename}")
            
        except ClientError as e:
            print(f"❌ AWS Connection Error: {e}")
        except Exception as e:
            print(f"❌ Unexpected Error: {e}")

if __name__ == "__main__":
    # Your live bucket name
    MY_BUCKET = "yousouf-tech-services-2026"
    
    # Sample store data structure (Shoes & Gallery catalog)
    sample_inventory = {
        "store_name": "Yousouf Shoes and Gallery",
        "last_updated": "2026-07-08",
        "products": [
            {"id": 1, "name": "Classic Leather Shoes", "price": 25000, "stock": 12},
            {"id": 2, "name": "Designer Luxury Bag", "price": 45000, "stock": 8},
            {"id": 3, "name": "Aviation Eyewear", "price": 15000, "stock": 15}
        ]
    }
    
    # Run the manager
    manager = InventoryManager(MY_BUCKET)
    manager.save_catalog(sample_inventory)