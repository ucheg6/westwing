# Westwing
Westwing Technical QA test

# How To Run
1. Clone this repo: 

``` 
   git clone git@github.com:ucheg6/westwing.git
   cd westwing

```

2. Install dependencies
```
   npm install
```
3. Run test script
```
   npx wdio run ./wdio.conf.js
```

# To run with Docker

1. Install [Docker](https://www.docker.com/) on your local machine

2. Build the Docker container  
```
docker build -t mytest -f Dockerfile .
```
3. Run the tests on docker

```
docker run -it mytest
```

*Make sure that the Chrome version installed on your image matches the Chromedriver version you have defined in your package.json.*