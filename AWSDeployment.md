# AWS Deployment
We have deployed our Research Asset Management application on a AWS EC2 Ubuntu instance. Here, both frontend(react-vite) and backend(node) are run on the same ec2 instance.

## URLs

### Frontend

- **URL**: http://18.220.54.65/loggedIn

### Backend

- **URL**: http://18.220.54.65:85/

Here are the steps followed for deployment:
For Frontend:
1. Using PuttY to connect to AWS EC2 instance
2. Executing the following commands on AWS Console:
    sudo apt-get update - For updating package index on EC2 instance
    sudo apt-get install -y nodejs nginx  - For installing Node.js and Nginx
3. Then, we removed the default Nginx configuration file and created a new config file using the commands:
cd /etc/nginx/sites-available/ 
sudo rm default
sudo nano react-app.conf
4. Then, we have wriien this code in the new config file:
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    root /var/www/react-app;
    index index.html;
    server_name 18.118.99.147;
    location / {
        try_files $uri $uri/ /index.html;
    }
}
5. Then a symbolic link has been created from sites-available directory to sites-enabled directory:
    sudo ln -s /etc/nginx/sites-available/react-app.conf /etc/nginx/sites-enabled/
6. Then, we tested Nginx configuration for any syntax errors:
    sudo nginx -t
7. Finally after confirming no errors, we restarted Nginx service by executing this command:
    sudo systemctl restart nginx
8. Then we started the react-vite app using:
    sudo npm run dev
9. vite app was successfully running and was accessible at http://18.118.99.147/

For Backend:
1. Steps 1-2 same as for frontend
2. Then we put our node.js code into EC2 ubuntu instance using SCP
3. Then nodejs dependencies were installed On the instance with command:
    npm install
4. then node.js application was started using:
    node server.js
5. Then port 85 has been configured on the ec2 instance
6. Node.js application was successfully running and was accessible at http://18.118.99.147:85



## Docker Setup

### Frontend

1. Navigate to the Frontend directory and execute the following commands:
   ```bash
   docker build -t ram:1.0 .
   docker run -p 80:80 image_id
   ```

### Backend

1. Navigate to the Backend directory and execute the following commands:
   ```bash
   docker build -t ram:1.0 .
   docker run -p 85:85 image_id
   ```

Replace `image_id` with the actual Docker image ID obtained after building the images.
