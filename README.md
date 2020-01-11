## E.Cofresi - Blue Button Sample Client Applications

### Rails Version

### In /client folder - React Version consuming Rails API

The application redirects to the authorization page.
The patient is asked to enter his/her credentials.
The applcation then receives the corresponding code.
The application uses the code to get the access token and the patient id.

Sample logins:
BBUser00000
PW00000!

https://sandbox.bluebutton.cms.gov/v1/o/authorize/?client_id=h4oyJLFbQufTePfrDeWMmD8V1LAoszQdUBVvYwq3&redirect_uri=http://localhost:3000/bluebutton/callback&response_type=token&state=b7f29326bcc6e69548d126b71e41d5a7

http://localhost:3000/bluebutton/main#access_token=jtcLmYL2wxmVhFgri50zJmfEZ7Nn1k&expires_in=36000&token_type=Bearer&scope=profile+patient%2FCoverage.read+patient%2FPatient.read+patient%2FExplanationOfBenefit.read&state=b7f29326bcc6e69548d126b71e41d5a7