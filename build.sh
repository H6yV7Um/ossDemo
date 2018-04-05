#!/usr/bin/env bash

if [ -d "output" ]
then
    rm -rf output
fi

if [ -d "dist" ]
then
    rm -rf dist
fi

# install dependencies for building
npm install --registry=http://cp01-fis-build-02.epc.baidu.com:8995/

npm run build
npm run babel

