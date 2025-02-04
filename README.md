# workout-tracker
Features
1.User search by username
2. Add, edit, and delete workout entries
3. Local storage for data persistence
4. Pagination for workout records
5. Hosted on GitHub Pages

Installation
1.Clone the Repository
git clone https://github.com/ckavyasree12/workout-tracker.git
cd workout-tracker
2.Install Dependencies
npm install
3.Run the Application Locally
ng serve

**App will be available at http://localhost:4200/
**

Project Structure

src/
├── app/
│   ├── components/
│   │   ├── workout-form/       # Form component for adding workouts
│   │   ├── workout-list/       # Table component displaying workouts
│   ├── services/
│   │   ├── workout.service.ts  # Service handling data storage & retrieval
│   ├── app.module.ts
│   ├── app.component.ts
├── assets/
├── styles.scss                 # Global styles (Tailwind CSS)
├── index.html
