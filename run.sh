#!/bin/bash
# Run this on at least 4gb 2cvpu VM
# Killing while running might halt processes resulting in empty references (e.g. SHORT_URL_LINK )

sh kill.sh




## 0 Form for Dev
echo "0"
# Read the values from the .env file
SPREADSHEET_ID=$(grep -oP '^SPREADSHEET_ID=\K.*' .env)
SHEET_NAME=$(grep -oP '^SHEET_NAME=\K.*' .env)
NEW_SHORT_URL_LINK=$(grep -oP '^SHORT_URL_LINK0=\K.*' .env)
BACKEND_GSHEETS_URL_PORT=$(grep -oP '^BACKEND_GSHEETS_URL_PORT=\K.*' .env)


# Replace the content of FrontPage.tsx with the new value
sed -i "s|RANDOM_SHORT_LINK|$NEW_SHORT_URL_LINK|g" frontend/src/components/Pages/FrontPage.tsx
sed -i "s|https://example.com|https://$NEW_SHORT_URL_LINK|g" frontend/src/components/Pages/FrontPage.tsx
sed -i "s/http:\/\/URL:PORT/http:\/\/$BACKEND_GSHEETS_URL_PORT/g" frontend/src/helpers/Table.tsx
sed -i "s/http:\/\/URL:PORT/http:\/\/$BACKEND_GSHEETS_URL_PORT/g" frontend/src/pages/winner.tsx
frontend/src/pages/winner.tsx


# Replace the values in the views.py file
sed -i "s/SPREADSHEET_ID = .*/SPREADSHEET_ID = '${SPREADSHEET_ID}'/" backend/py-result-getter-gsheets/myapp/views.py
sed -i "s/SHEET_NAME = .*/SHEET_NAME = '${SHEET_NAME}'/" backend/py-result-getter-gsheets/myapp/views.py

# Rebuild the Docker images
docker build -t py-hadamard-lucky-picker backend/py-hadamard-lucky-picker/
docker build -t py-result-getter-gsheets backend/py-result-getter-gsheets/
docker build -t frontend-tshirt-raffle frontend/
# Run the Docker images
# Only run one instance of the backend
docker run -d -p 8000:8000 py-hadamard-lucky-picker
docker run -d -p 9000:9000 py-result-getter-gsheets
docker run -d -p 3000:3000 frontend-tshirt-raffle

# Revert the changes back to RANDOM_SHORT_LINK
sed -i "s|$NEW_SHORT_URL_LINK|RANDOM_SHORT_LINK|g" frontend/src/components/Pages/FrontPage.tsx
sed -i "s|https://$NEW_SHORT_URL_LINK|https://example.com|g" frontend/src/components/Pages/FrontPage.tsx
sed -i "s/http:\/\/$BACKEND_GSHEETS_URL_PORT/http:\/\/URL:PORT/g" frontend/src/helpers/Table.tsx
sed -i "s/http:\/\/$BACKEND_GSHEETS_URL_PORT/http:\/\/URL:PORT/g" frontend/src/pages/winner.tsx








## 1
echo "1"
# Read the values from the .env file
SPREADSHEET_ID=$(grep -oP '^SPREADSHEET_ID1=\K.*' .env)
SHEET_NAME=$(grep -oP '^SHEET_NAME1=\K.*' .env)
NEW_SHORT_URL_LINK=$(grep -oP '^SHORT_URL_LINK1=\K.*' .env)
BACKEND_GSHEETS_URL_PORT=$(grep -oP '^BACKEND_GSHEETS_URL_PORT1=\K.*' .env)


# Replace the content of FrontPage.tsx with the new value
sed -i "s|RANDOM_SHORT_LINK|$NEW_SHORT_URL_LINK|g" frontend/src/components/Pages/FrontPage.tsx
sed -i "s|https://example.com|https://$NEW_SHORT_URL_LINK|g" frontend/src/components/Pages/FrontPage.tsx
sed -i "s/http:\/\/URL:PORT/http:\/\/$BACKEND_GSHEETS_URL_PORT/g" frontend/src/helpers/Table.tsx
sed -i "s/http:\/\/URL:PORT/http:\/\/$BACKEND_GSHEETS_URL_PORT/g" frontend/src/pages/winner.tsx


# Replace the values in the views.py file
sed -i "s/SPREADSHEET_ID = .*/SPREADSHEET_ID = '${SPREADSHEET_ID}'/" backend/py-result-getter-gsheets/myapp/views.py
sed -i "s/SHEET_NAME = .*/SHEET_NAME = '${SHEET_NAME}'/" backend/py-result-getter-gsheets/myapp/views.py

# Rebuild the Docker images
docker build -t py-hadamard-lucky-picker1 backend/py-hadamard-lucky-picker/
docker build -t py-result-getter-gsheets1 backend/py-result-getter-gsheets/
docker build -t frontend-tshirt-raffle1 frontend/

# Run the Docker images
# docker run -d -p 8001:8000 py-hadamard-lucky-picker1
docker run -d -p 9001:9000 py-result-getter-gsheets1
docker run -d -p 3001:3000 frontend-tshirt-raffle1

# Revert the changes back to RANDOM_SHORT_LINK
sed -i "s|$NEW_SHORT_URL_LINK|RANDOM_SHORT_LINK|g" frontend/src/components/Pages/FrontPage.tsx
sed -i "s|https://$NEW_SHORT_URL_LINK|https://example.com|g" frontend/src/components/Pages/FrontPage.tsx
sed -i "s/http:\/\/$BACKEND_GSHEETS_URL_PORT/http:\/\/URL:PORT/g" frontend/src/helpers/Table.tsx
sed -i "s/http:\/\/$BACKEND_GSHEETS_URL_PORT/http:\/\/URL:PORT/g" frontend/src/pages/winner.tsx














## 2
echo "2"
# Read the values from the .env file
SPREADSHEET_ID=$(grep -oP '^SPREADSHEET_ID2=\K.*' .env)
SHEET_NAME=$(grep -oP '^SHEET_NAME2=\K.*' .env)
NEW_SHORT_URL_LINK=$(grep -oP '^SHORT_URL_LINK2=\K.*' .env)
BACKEND_GSHEETS_URL_PORT=$(grep -oP '^BACKEND_GSHEETS_URL_PORT2=\K.*' .env)

# Replace the content of FrontPage.tsx with the new value
sed -i "s|RANDOM_SHORT_LINK|$NEW_SHORT_URL_LINK|g" frontend/src/components/Pages/FrontPage.tsx
sed -i "s|https://example.com|https://$NEW_SHORT_URL_LINK|g" frontend/src/components/Pages/FrontPage.tsx
sed -i "s/http:\/\/URL:PORT/http:\/\/$BACKEND_GSHEETS_URL_PORT/g" frontend/src/helpers/Table.tsx
sed -i "s/http:\/\/URL:PORT/http:\/\/$BACKEND_GSHEETS_URL_PORT/g" frontend/src/pages/winner.tsx


# Replace the values in the views.py file
sed -i "s/SPREADSHEET_ID = .*/SPREADSHEET_ID = '${SPREADSHEET_ID}'/" backend/py-result-getter-gsheets/myapp/views.py
sed -i "s/SHEET_NAME = .*/SHEET_NAME = '${SHEET_NAME}'/" backend/py-result-getter-gsheets/myapp/views.py

# Rebuild the Docker images
docker build -t py-hadamard-lucky-picker2 backend/py-hadamard-lucky-picker/
docker build -t py-result-getter-gsheets2 backend/py-result-getter-gsheets/
docker build -t frontend-tshirt-raffle2 frontend/


# Run the Docker images
# docker run -d -p 8002:8000 py-hadamard-lucky-picker2
docker run -d -p 9002:9000 py-result-getter-gsheets2
docker run -d -p 3002:3000 frontend-tshirt-raffle2

# Revert the changes back to RANDOM_SHORT_LINK
sed -i "s|$NEW_SHORT_URL_LINK|RANDOM_SHORT_LINK|g" frontend/src/components/Pages/FrontPage.tsx
sed -i "s|https://$NEW_SHORT_URL_LINK|https://example.com|g" frontend/src/components/Pages/FrontPage.tsx
sed -i "s/http:\/\/$BACKEND_GSHEETS_URL_PORT/http:\/\/URL:PORT/g" frontend/src/helpers/Table.tsx
sed -i "s/http:\/\/$BACKEND_GSHEETS_URL_PORT/http:\/\/URL:PORT/g" frontend/src/pages/winner.tsx








## 3
echo "3"
# Read the values from the .env file
SPREADSHEET_ID=$(grep -oP '^SPREADSHEET_ID3=\K.*' .env)
SHEET_NAME=$(grep -oP '^SHEET_NAME3=\K.*' .env)
NEW_SHORT_URL_LINK=$(grep -oP '^SHORT_URL_LINK3=\K.*' .env)
BACKEND_GSHEETS_URL_PORT=$(grep -oP '^BACKEND_GSHEETS_URL_PORT3=\K.*' .env)


# Replace the values in the views.py file
sed -i "s/SPREADSHEET_ID = .*/SPREADSHEET_ID = '${SPREADSHEET_ID}'/" backend/py-result-getter-gsheets/myapp/views.py
sed -i "s/SHEET_NAME = .*/SHEET_NAME = '${SHEET_NAME}'/" backend/py-result-getter-gsheets/myapp/views.py


# Replace the content of FrontPage.tsx with the new value
sed -i "s|RANDOM_SHORT_LINK|$NEW_SHORT_URL_LINK|g" frontend/src/components/Pages/FrontPage.tsx
sed -i "s|https://example.com|https://$NEW_SHORT_URL_LINK|g" frontend/src/components/Pages/FrontPage.tsx
sed -i "s/http:\/\/URL:PORT/http:\/\/$BACKEND_GSHEETS_URL_PORT/g" frontend/src/helpers/Table.tsx
sed -i "s/http:\/\/URL:PORT/http:\/\/$BACKEND_GSHEETS_URL_PORT/g" frontend/src/pages/winner.tsx

# Rebuild the Docker images
docker build -t py-hadamard-lucky-picker3 backend/py-hadamard-lucky-picker/
docker build -t py-result-getter-gsheets3 backend/py-result-getter-gsheets/
docker build -t frontend-tshirt-raffle3 frontend/

# Run the Docker images
# docker run -d -p 8003:8000 py-hadamard-lucky-picker3
docker run -d -p 9003:9000 py-result-getter-gsheets3
docker run -d -p 3003:3000 frontend-tshirt-raffle3


# Revert the changes back to RANDOM_SHORT_LINK
sed -i "s|$NEW_SHORT_URL_LINK|RANDOM_SHORT_LINK|g" frontend/src/components/Pages/FrontPage.tsx
sed -i "s|https://$NEW_SHORT_URL_LINK|https://example.com|g" frontend/src/components/Pages/FrontPage.tsx
sed -i "s/http:\/\/$BACKEND_GSHEETS_URL_PORT/http:\/\/URL:PORT/g" frontend/src/helpers/Table.tsx
sed -i "s/http:\/\/$BACKEND_GSHEETS_URL_PORT/http:\/\/URL:PORT/g" frontend/src/pages/winner.tsx
