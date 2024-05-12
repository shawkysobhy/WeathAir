**Frontend Task**
![screen shot](/public/Screenshot.png)

- [x] implement **Auth** with google login /logout
- [x] with iqair api get weather information and population of specific city
- [x] get weather info by using **geolocation** because not all cities supported

- [x] Only **authenticated** users can save and manage their favourite cities delete /add
- [x] handle case when user to try to add same city twice to favourite list to prevent duplicate
- [x] Provide a simple visualization and text describe **Air Quality** Status
- [x] use callback to handle fetch custom hook
- [x] use **redux** toolkit for manage all these data (user ,current city ,favourite list )
- [x] make weather app support multi language **English & French** using i18n
- [x] application is responsive to different screen sizes

---

- [ ] previous version **Air Quality** api provide historical data and forecast of weather and population with get city end point i see it in docs but in current version in supabebase provide only **current values** only with paid version i think

- [ ] Unfortunately, the map of weather i suffers, and after searching, I found a map that exactly what I required from task from openWeather Map, but I faced problems in using it and also for delivery on the agreed upon time
- [ ] app crashed cause of limitation of free api so take this in consideration

---

### note

- app not great as ux and ui but i make it simple and functional to finish task in deadline

- you can download repo and install and run with npm i ,npm run dev
  i aware of set .env public and .env must be ignored but i make it public to enable reviewer to run project easily without add manually
