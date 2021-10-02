data "aws_caller_identity" "current" {}

data "aws_iam_policy_document" "policy" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      type        = "AWS"
      identifiers = [data.aws_caller_identity.current.account_id]
    }
  }
}

resource "aws_iam_role" "tofino_user" {
  name = "tofino-admin"
  path = "/tofino/"

  assume_role_policy = data.aws_iam_policy_document.policy.json
}
