We have deployed our Research Asset Management application on a AWS EC2 Ubuntu instance.

Frontend:
URL: http://18.118.99.147/

Backend:

URL: http://18.118.99.147:85

For Frontend:

1.Connect to AWS EC2 using Putty.
2.Update and install Node.js and Nginx.
3.Create and configure a new Nginx config file 
4.Test and restart Nginx to apply changes.
5.Start your React-Vite app.

For Backend:

1.Repeat steps 1-2 of Frontend for Node.js installation.
2.Transfer your Node.js code to the EC2 instance using SCP.
3.Install Node.js dependencies.
4.Start your Node.js application.
5.Configure the port for your Node.js app on the EC2 instance.
6.Access your backend application using the specified port.

**Docker Setup**

Frontend

1. Navigate to the Frontend directory and execute the following commands:
   ```bash
   docker build -t ram:1.0 .
   docker run -p 80:80 image_id
   ```

Backend

1. Navigate to the Backend directory and execute the following commands:
   ```bash
   docker build -t ram:1.0 .
   docker run -p 85:85 image_id

