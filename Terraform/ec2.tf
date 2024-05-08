provider "aws" {
  # Configuration options
  region = "us-east-2"
  access_key= "i_removed"
  secret_key = "i_removed_because_it_violates"
}

resource "aws_instance" "ram-server"{
    ami = "ami-09040d770ffe2224f"
    key_name = "terraKey"
    instance_type = "t2.micro"
}