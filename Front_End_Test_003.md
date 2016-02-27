# Frontend Test 003

Create a currency exchange calculator that can convert currency bi-directionally (i.e. $ to € and € to $ will net the same results on either side):

1. The list of currencies that this calculator should support is as follows:

   - USD: $
   - EUR: €
   - GBP: £
   - Bitcoin: ฿

Feel free to use any modern day framework to build out the frontend and backend API endpoints for this project.

Please find and use a public API for these conversions, use AJAX to populate the results on the frontend.

Keep in mind that Exchange Rates are determined by commercial banks & financial institutions on a daily basis, there are some fluctuations in the various markets throughout the day but don't worry yourself with these too much. Familiarize yourself with this: https://en.wikipedia.org/wiki/Exchange_rate
Your job is to fetch the rates from a public API once per day and store them in a local cache, all subsequent requests against the calculator should be served from cache until that cache expires the next day at the same time as it was last fetched.
