import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { CodePipeline, CodePipelineSource, ShellStep } from "aws-cdk-lib/pipelines";

export class CicdPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // The code that defines your stack goes here
    // AWS CI-CD Pipeline

    const cicdPipeline = new CodePipeline(this, "cdk-tutorial-cicd-pipeline", {
      synth: new ShellStep("Synth", {
        // Use a connection created using the AWS console to authenticate to GitHub
        // Other sources are available.
        input: CodePipelineSource.gitHub("MakeItBack/cicd-pipeline", "main"),
        commands: ["npm ci", "npm run build", "npx cdk synth"],
      }),
    });
  }
}
