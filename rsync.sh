
# please add public key to target host first

rsync -rav -e ssh dist/app root@106.14.217.43:/root/work/
rsync -rav -e ssh dist root@106.14.217.43:/root/work/
rsync -rav -e ssh node_modules root@106.14.217.43:/root/work/


