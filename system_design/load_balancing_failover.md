# Load Balancing

Sharing load across multiple servers.

Load Balancing is a key concept to system design. One simple way would be hashing all requests and then sending them to the assigned server.

[What is Load Balancing](https://www.youtube.com/watch?v=K0Ta65OqQkY)

- consistent hashing

1. Request ID is sent to server
2. Hash the request ID => h(r1) -> m1
3. m1 can be mapped to a server => m1 % n (n = number of servers)

