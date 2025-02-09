FROM public.ecr.aws/lambda/nodejs:22 as builder

WORKDIR ${LAMBDA_TASK_ROOT}

COPY src/package.json ./

RUN npm install