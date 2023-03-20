import { useEffect, useState } from "react";
import { google } from "googleapis";

const SPREADSHEET_ID = "your_spreadsheet_id";
const SHEET_NAME = "Sheet1";
const SERVICE_ACCOUNT_EMAIL = "your_service_account_email";
const PRIVATE_KEY = "your_service_account_private_key";

function test() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: SERVICE_ACCOUNT_EMAIL,
          private_key: PRIVATE_KEY.replace(/\\n/g, "\n"),
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
      });

      // Fetch the data from the Name column of the Google Sheets file
      const sheets = google.sheets({ version: "v4", auth });
      const result = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!A:A`,
      });
      const values = result.data.values || [];

      setData(values);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from the Name column:</h1>
      <ul>
        {data.map((row, index) => (
          <li key={index}>{row[0]}</li>
        ))}
      </ul>
    </div>
  );
}

export default test;
