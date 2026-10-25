# CHELETE Farm Book

A simple app for keeping farm records on your phone or laptop: animal numbers, vaccination and dip schedules, feed and spending, breeding records and profit per animal type. It works offline once opened and can be installed on a phone's home screen.

## Use it

Open the app link in Chrome on your phone, tap the menu, then **Add to Home screen**.

Your records are saved on your own device. Sign in under **Backup** to keep a cloud copy, or use **Copy backup** now and then.

## Features

- Animals: cattle, goats, sheep, pigs, horses, donkeys, chickens, ducks, turkeys, rabbits and other. Record one by one with a tag, or as a group.
- Chickens can be marked as layers, broilers or English chickens (the plain white ones), with a count for each kind.
- Dam (mother) and sire (father) for animals born on the farm.
- Best breeders: top 5, top 10 or all dams and sires per species, ranked by young born. Tap one to see a line chart of its young over time, how many lived or died, and a year-by-year table.
- Pula (P) is the main currency. When you log a purchase, sale, expense or treatment you can choose South African rand (R) and enter the rate. The app saves the value in pula so every total stays in one currency, and remembers the last rate you used.
- Vaccine, dewormer and dip schedules with due dates and withdrawal-period warnings
- Repeating costs, calendar with profit and loss per day, profit per animal type, charts
- Excel and CSV import of animals, money, treatments, schedules and movements (or a whole workbook in one go), Excel and PDF export, receipt scanning, cloud backup

## Notes

- Receipt scanning still reads amounts as pula. Spreadsheet import reads rand rows when the sheet has Currency and Rate columns.
- Breeding records only count young that were added one by one with a tag and linked to their dam or sire.

## Files

`index.html` is the whole app. `manifest.json`, `sw.js` and the two icons make it installable and available offline.

## Work tab (tasks, breeding, production)

- **Tasks**: things to do, with a due date, who does it and repeat (daily, weekly, monthly). Ticking a repeating task sets up the next one.
- **Breeding**: record a mating and the app works out the expected birth date from the species. "Record the young" turns a breeding into a birth event with dam and sire filled in.
- **Production**: eggs, milk, wool, honey and weights, with a 14-day chart and top producers.
- **Reminders**: due vaccines, expected births and tasks show in Needs attention on Home, and can be downloaded as a calendar file (.ics) for the phone calendar.
- Animals now have optional name, breed and camp (paddock), species icons, a search box and a camps summary. Excel import and export include Name, Breed and Camp. Breeding, production and tasks are not imported from Excel; they travel in the app backup.

## Owners and weights import

- Animals have an optional **Owner**, for farms where several people keep animals together. A filter row on the Animals tab shows one owner's animals at a time. A newborn gets its mother's owner unless you type another.
- Excel import and export have an Owner column, and import has a new **Weights** page (date, animal tag, what, amount, unit).

## Treating chosen animals

In Health, + Log, set Given to "Choose animals...". Filter by type, search, and tick any animals from any type. Each ticked animal gets its own treatment record with the same product, dose, withdrawal and notes, so each animal's history is complete. A cost is counted once. "Give again in (days)" adds a task.

## Look and feel

Phone-first redesign: deep forest green with brass hairlines, serif headings and numerals (Fraunces), Manrope for text, soft cards, and a floating bottom bar. The centre button fans out a circular quick-add menu (Animal, Breeding, Treatment, Task, Produce, Money, Receipt). Work and Backup are the two icons at the top right on phones. The laptop layout keeps the sidebar and gets the same menu at bottom right; it will get its own pass later.
