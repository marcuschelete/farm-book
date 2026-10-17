# Farm Book

A simple app for keeping farm records on your phone: animal numbers, vaccination and dip schedules, feed purchases and spending. It works offline once opened and can be installed on a phone's home screen.

## Use it

Open the app link in Chrome on your phone, tap the menu, then **Add to Home screen**.

Your records are saved on your own phone only. Use **Backup > Share backup** now and then and send the file to yourself on WhatsApp or email.

## Features

- Animal registry: single animals with their own tag and recorded mother and father, or groups counted together
- Bought, born, already-on-the-farm, sold, eaten and died events
- Vaccine, dewormer and dip schedules with due dates and a withdrawal-period warning
- Feed purchases with an early/late rhythm check
- Spending by category, sales and net per month, with repeating costs (wages, feed) added automatically
- Calendar showing money in and out for each day, with due treatments marked
- Every income and cost can be tagged to an animal type, and to the specific tagged animals (a sold animal, or the cows a batch of milk came from)
- Pie charts of spending by category and income by animal type; tap a slice for a breakdown
- Profit per animal type, and a line chart of animal numbers over time
- On a laptop or tablet the app shows a fuller dashboard automatically; the phone layout stays simple
- Edit or remove any entry
- Cloud backup with Firebase: sign in with Google or email, automatic backup after changes, restore on any phone (rules in firestore.rules)
- Export everything to Excel (.xlsx), and make a printable PDF report for any period
- Import animals or money from Excel, CSV or pasted rows, with column matching, a preview and an undo
- Share a backup to WhatsApp, email or Drive, weekly calendar reminder, and restore on any phone

## Feedback

Please open an issue on this repository, or message the maintainer, and say what was confusing or missing.

## Files

`index.html` is the whole app. `manifest.json`, `sw.js` and the two icons make it installable and available offline.
