# Load Balancing

[What is Load Balancing](https://www.youtube.com/watch?v=K0Ta65OqQkY)

Sharing load across multiple servers.

Load Balancing is a key concept to system design. One simple way would be hashing all requests and then sending them to the assigned server.

## Features
1. Distribute incoming traffic to the network by efficiently distributing across multiple servers
2. Reliability & high availability is maintained by redirectly requests only to the servers which are available.
3. Ease of use in adding and removing servers in the network as per demand.


## Load Balancing Algos
1. Round Robin
  - sequential request distribution
2. Least Connections
  - Request sent to the least used server in the network
3. IP Hash
  - Request sent to the server based on Client IP


### Consistent Hashing

1. Request ID is sent to server
2. Hash the request ID => h(r1) -> m1
3. m1 can be mapped to a server => m1 % n (n = number of servers)


# Failover

The goal of failover is the ability to continue the work of a particular network component or the whole server by another, should the first one fail. Failover allows you to perform maintenance of individual servers or nodes, without interruption of your services.