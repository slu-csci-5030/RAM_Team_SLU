# AWS Deployment

## URLs

### Frontend

- **URL**: [http://18.118.99.147/](http://18.118.99.147/)

### Backend

- **URL**: [http://18.118.99.147:85](http://18.118.99.147:85)

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
