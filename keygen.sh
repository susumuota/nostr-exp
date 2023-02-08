#!/bin/sh

if [ $# -ne 2 ]; then
  echo "Usage: sh keygen.sh PREFIX NUMBER"
  exit 1
fi

for i in `seq $2`
do
  deno task keygen $1 &
done
