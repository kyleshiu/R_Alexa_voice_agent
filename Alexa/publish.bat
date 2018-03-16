cd lambda
del index.zip
7z a -r index.zip *
aws lambda update-function-code --function-name GF_bot --zip-file fileb://index.zip