cd lambda
del index.zip
7z a -r index.zip *
aws lambda update-function-code --function-name HowTo --zip-file fileb://index.zip