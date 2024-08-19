#!/bin/bash

# Creates a react app with the name of $1
npm create vite@latest $1

# Opens a VSCode workspace
code $1

# Installs json-server as a development dependency
# Check package.json for the script to run your development server
npm i -D json-server

# Installs react-icons
npm i react-icons

# Installs react-router-dom
npm i react-router-dom

# Installs react-spinners library
# https://github.com/davidhu2000/react-spinners
npm i react-spinners

# Installs react-toastify for toast messages after an action
npm i react-toastify