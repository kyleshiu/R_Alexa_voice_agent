cd lambda
del index.zip
7z a -r index.zip *
aws lambda update-function-code --function-name TriviaGame --zip-file fileb://index.zip