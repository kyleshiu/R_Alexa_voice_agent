cd QnA
del index.zip
7z a -r index.zip *
aws lambda update-function-code --function-name QnA --zip-file fileb://index.zip