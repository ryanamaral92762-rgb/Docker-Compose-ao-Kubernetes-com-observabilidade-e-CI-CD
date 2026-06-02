provider "aws" {
  region = "us-east-1"
}

resource "aws_eks_cluster" "cluster" {
  name = "loja-veloz"
}