#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { CicdPipelineStack } from "../lib/cicd-pipeline-stack";

const app = new cdk.App();
new CicdPipelineStack(app, "CicdPipelineStack", {
  env: { account: "133562719411", region: "ap-southeast-2" },
});
