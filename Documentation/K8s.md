# K8s manifest explanation
## Prerequisites 
- The Minikube cluster has to be configured before implementing the following steps.
- The docker is needed In order for the Minikube to function which is also a dependency for the minikube
## Files
- Deployment.yaml
- services.yaml
### Deployment
- The deployment has replicasets, ports exposed, pod configuration and others like the image details which is created within a pod
- It is like the advanced version of the replicates with some more features included.
- The service is used to access the application by allowing the network access
### Services
- The IP of the pod isn't static so the service is used to access the application 
- The service type that I had used Is the **nodeport**
- The applcation could be accessed via the following URL
```url
http://<public_ip(EC2_instance_here)>:<node_port>
```
This info could be gathered using the help of the following command
```bash
$ kubectl get svc
```