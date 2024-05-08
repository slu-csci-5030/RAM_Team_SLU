# RAM_Team_SLU AWS Deployment

## URLs

### Frontend

- **URL**: [http://18.118.99.147/](http://18.118.99.147/)

### Backend

- **URL**: [http://18.118.99.147:85](http://18.118.99.147:85)

## Docker Setup

### Frontend

To deploy the Frontend:

1. Open your terminal and navigate to the Frontend directory.
2. Execute the following commands to build the Docker image and run the container:
   ```bash
   docker build -t ram:1.0 .
   docker run -p 80:80 <image_id>
