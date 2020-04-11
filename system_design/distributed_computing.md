# Distributed Computing

Distributed computing is a model in which components of a software program are shared among multiple computers to improve efficiency and performance.

### The CAP principle
CAP stands for consistency, availability, and partition resistance. The CAP Principle states that it is not possible to build a distributed system that guarantees consistency, availability, and resistance to partitioning. Anyone or two can be achieved but not all three simultaneously.
Consistency means that all nodes see the same data at the same time.
Availability is a guarantee that every request receives a response about whether it was successful or failed.
Partition tolerance means the system continues to operate despite arbitrary message loss or failure of part of the system.