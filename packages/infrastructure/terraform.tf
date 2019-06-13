variable "AWS_ACCESS_KEY_ID" {}
variable "AWS_SECRET_ACCESS_KEY" {}

variable "region" {
  default = "us-east-2"
}

variable "project_name" {
  default = "tofino"
}


provider "aws" {
  version    = "~> 2.6"
  access_key = "${var.AWS_ACCESS_KEY_ID}"
  secret_key = "${var.AWS_SECRET_ACCESS_KEY}"
  region     = "${var.region}"
}

# Configured in ../.tf-backend
terraform {
  backend "s3" {
    encrypt        = true
    region         = "us-east-2"
    bucket         = "tofino-tfstate"
    key            = "tfstate/"
    dynamodb_table = "tofino-terraform-state-lock"
  }
}
