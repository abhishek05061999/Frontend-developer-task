


The task is to create a three-page application using React and Material-UI (MUI). Below is a detailed breakdown of each page's requirements and the functionality expected.

Page 1: Projects Table Table Columns: Name Role Creation Date Status (active/inactive) Page 2: Project Details Table Redirection: Clicking on a project from Page 1 redirects to Page 2. Table Columns: Name Status Priority Page 3: Editor UI Features: Upload images or videos. Frame-by-frame segmentation for videos. Selection tool for object selection (similar to Photoshop). Bounding box creation for highlighting objects. Play and pause functionality for videos. Common Features Navbar: Navigation between the pages. User account icon displaying logged-in user details.

Project Structure - src/ ├── components/ │ ├── Navbar.js │ ├── ProjectsTable.js │ ├── ProjectDetailsTable.js │ └── Editor.js ├── pages/ │ ├── Page1.js │ ├── Page2.js │ └── Page3.js ├── App.js ├── index.js └── styles.css
