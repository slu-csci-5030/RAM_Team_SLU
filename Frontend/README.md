# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# **1. Finalized Login Page UI:**
   Our login page now boasts a visually appealing design, featuring a combination of ***blue (#003da5)*** and ***white (#fff)*** colors to create a professional and inviting atmosphere. Positioned at the center of the page is a floating login box, offering users a seamless experience. Within this box, users can securely log in using their email and password to access the main page. Additionally, the login box includes convenient links for *"forgot password,"* *"request access,"* and an *"IT support"* quick link for user assistance. The chosen font family for the page is ***"brandon-grotesque, sans-serif."***

# **2. Header:**
   At the top of the page, the header prominently displays the project name *"RESEARCH ASSET MANAGEMENT"* on the left side, emphasizing the primary focus of the platform. On the right side, users can find their *profile details*, ensuring easy access to personal account information. 

# **3. Worked on Theme Setting:**
   To maintain consistency, we've applied the same ***blue (#003da5)*** and ***white (#fff)*** color scheme throughout the login webpage.

# **4. Request Access Pop-up + Styling:**
   This feature streamlines the process for users requesting admin access to the asset management page. Upon selecting the *"request access"* option, a pop-up prompts users to enter their email address and provide a brief description justifying their need for admin access. Once completed, users can submit their request with a  click on the submit button.

# **5. Forgot Password Pop-up + Styling:**
   Should users forget their password, they can easily initiate the password reset process by selecting the *"forgot password"* option. A pop-up will appear, prompting users to enter their email address for password recovery.

# **6. Footer + Styling:**
   The footer serves as a valuable resource for users, offering essential information and navigation options. Styled with a background color of ***#575756***, at the bottom of the page. Divided into three sections, the footer includes *details about the webpage*, *contact information*, and *useful links redirecting users to the main site page of the university*. This comprehensive footer ensures users have access to important resources and can navigate the platform with ease.
   
# March 08 2024

This time, our focus is on designing the home page with various functionalities such as asset management, universal search, and setting up the login route.

**Home Page Design:**

1. **Search Bar:** Positioned centrally on the homepage, the search bar allows users to search for assets easily.

2. **Add Asset Button:** Located on the right side of the page in a ***green color***, the "Add Asset" button triggers a pop-up window when clicked. This pop-up window allows users to input asset details such as asset name, location, and asset number. It also includes a submit button at the center bottom and a close button at the upper right corner.

3. **Asset List/Table:** Displayed on the main home screen, this list/table showcases asset details including *serial number*, *asset name*, *quantity*, and *location*. Additionally, it provides options for editing ***(green - 4CAF50)*** and deleting ***(red - #f44336)*** assets.

**Functionality:**

1. **Asset Management:** Users can manage assets by adding new assets through the pop-up window triggered by the *"Add Asset"* button. They can also view and edit existing assets directly from the asset list/table.

2. **Universal Search:** The search bar facilitates easy searching for assets by allowing users to input keywords or asset details.

3. **Login Route Setup:** The home page serves as the landing page after successful login, providing access to the asset management functionalities.
