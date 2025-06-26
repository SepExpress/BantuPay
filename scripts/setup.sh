#!/bin/sh
# Basic setup script for new developers

if [ ! -f package.json ]; then
  echo "Error: package.json not found. Run this script from the repository root." >&2
  exit 1
fi

if [ -d node_modules ]; then
  echo "Dependencies already installed. Skipping npm install."
else
  echo "Installing npm dependencies..."
  npm install
fi

echo "Setup complete."
