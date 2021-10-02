terraform {
  required_version = "~> 1.0.0"
  required_providers {
    aws = {
      version = "~> 3.61.0"
    }
  }
  backend "s3" {
    region         = "us-east-2"
    bucket         = "email.pck.terraform-state"
    key            = "tofino/terraform.tfstate"
    dynamodb_table = "email.pck.terraform-lock"
  }
}

locals {
  project_name = "tofino"
}

provider "aws" {
  region = "us-east-2"
}

