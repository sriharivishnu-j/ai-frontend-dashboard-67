#!/bin/bash

# Run the development server
yarn install
npx prisma generate
yarn dev