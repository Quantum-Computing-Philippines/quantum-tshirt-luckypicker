from django.http import JsonResponse
from google.oauth2 import service_account
from googleapiclient.discovery import build
import json

def get_sizes(request):
    # Replace with your Google Sheets file ID and sheet name
    SPREADSHEET_ID = '1QdksCQqZDNn_KTOf5tFTDcqUttF3eCcj12E-6kAZ0mA'
    SHEET_NAME = 'Dev1'

    # Replace with the path to your service account key file
    SERVICE_ACCOUNT_FILE = './google-service-account-json/tshirtrandompicker-1d10f942a8d4.json'

    # Authenticate and build the Google Sheets API client
    credentials = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE,
        scopes=['https://www.googleapis.com/auth/spreadsheets.readonly'])
    service = build('sheets', 'v4', credentials=credentials)

    # Fetch the data from the A:B range | Name and Size column
    result = service.spreadsheets().values().get(
        spreadsheetId=SPREADSHEET_ID,
        range=f'{SHEET_NAME}!B:C').execute()
    values = result.get('values', [])

    # Create a dictionary with size as keys and a list of names and numbers as values
    size_dict = {}
    if values:
        for row in values[1:]:
            if row[1] in size_dict:
                size_dict[row[1]]['names'].append(row[0])
            else:
                size_dict[row[1]] = {'names': [row[0]], 'num': 0}

    # Create a dictionary with all sizes
    all_sizes_dict = {}
    for size, data in size_dict.items():
        num = data['num']
        names_dict = {i+num: name for i, name in enumerate(data['names'])}
        size_dict[size]['num'] += len(data['names'])
        all_sizes_dict[size] = names_dict

    # Return the dictionary as JSON response
    return JsonResponse(all_sizes_dict)
