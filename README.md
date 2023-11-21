# announcement-system
## Build Setup
``` bash
# BACK END Typecrips
cd announcement-system-back
npm instll
npm start
เทส api โดย import Annoucement_API.postman_collection.json ลงใน postman
สามารถเข้า db ใน .env ได้เลยครับ
```
``` bash
# FRONT END Angular 16
cd announcement-system-front
npm install -g @angular/cli
npm instll
ng serve
```
``` bash
# AUTOMATE TEST (USE E2E Testing) playwright
cd automate-test
npm instll
npx playwright test annoucement
npx playwright show-report
```
