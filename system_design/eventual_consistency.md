# Eventual Consistency

Eventual consistency is a consistency model used in distributed computing to achieve high availability that informally guarantees that, if no new updates are made to a given data item, eventually all accesses to that item will return the last update value.

Enables scalability

## Example:

In a strongly coupled system, a user saving data triggers a PUT request and data is saved to the DB. This is strict consistency. Faster flow of data. Transactional.

In a loosely coupled system, when a user saves data, it goes into a queue and will eventually save to a database. Slower flow of data.

## CAP Principle
It is not possible to build a distributed system that guarantees Consistency, Availability, and resistance to Partitioning.

Eventual consistency is able to achieve Availability and Partition tolerance (AKA failing dependencies) at the expense of Consistency.